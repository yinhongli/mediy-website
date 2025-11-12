// 加载环境变量（支持 .env 文件）
require('dotenv').config();

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3002;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 初始化SQLite数据库
// 在 Docker 环境中使用 /app/data，否则使用当前目录
const dbPath = process.env.DB_PATH || path.join(__dirname, '../data/database.sqlite');
// 确保数据目录存在
const dbDir = path.dirname(dbPath);
const fs = require('fs');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');

    // 创建表单提交表
    db.run(`CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company_name TEXT NOT NULL,
      contact_name TEXT NOT NULL,
      contact_info TEXT NOT NULL,
      position TEXT,
      requirements TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Contact submissions table ready.');
      }
    });
  }
});

// 邮件配置（支持环境变量动态配置）
const emailConfig = {
  // 收件人邮箱（必填，支持多个邮箱，用逗号分隔）
  recipient: process.env.RECIPIENT_EMAIL || process.env.TO_EMAIL || '',
  // 发件人邮箱
  from: process.env.FROM_EMAIL || process.env.SMTP_USER || 'noreply@mediy.com',
  // SMTP 服务器配置
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.qq.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD || ''
    }
  }
};

// 创建邮件传输器
let transporter = null;
if (emailConfig.smtp.auth.user && emailConfig.smtp.auth.pass) {
  transporter = nodemailer.createTransport({
    host: emailConfig.smtp.host,
    port: emailConfig.smtp.port,
    secure: emailConfig.smtp.secure,
    auth: emailConfig.smtp.auth,
    // 添加连接选项，提高稳定性
    connectionTimeout: 10000, // 10秒连接超时
    greetingTimeout: 10000,   // 10秒问候超时
    socketTimeout: 10000,    // 10秒socket超时
    tls: {
      rejectUnauthorized: false
    }
  });

  // 验证邮件配置
  transporter.verify(function (error, success) {
    if (error) {
      console.log('邮件服务器配置验证失败:', error);
      console.log('提示：请检查环境变量 SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS 是否正确配置');
    } else {
      console.log('邮件服务器配置验证成功，已准备好发送邮件');
    }
  });
} else {
  console.log('警告：未配置邮件服务器，邮件功能将不可用');
  console.log('提示：请设置环境变量 SMTP_USER 和 SMTP_PASS 来启用邮件功能');
}

// 发送邮件函数
async function sendEmail(subject, htmlContent, textContent) {
  if (!transporter) {
    // 邮件服务器未配置是正常的，使用警告而不是错误
    return { success: false, error: '邮件服务器未配置', skip: true };
  }

  if (!emailConfig.recipient) {
    // 收件人未配置也是正常的，使用警告而不是错误
    return { success: false, error: '收件人邮箱未配置', skip: true };
  }

  try {
    console.log('开始发送邮件...');
    console.log('发件人:', emailConfig.from);
    console.log('收件人:', emailConfig.recipient);
    console.log('主题:', subject);

    // 优先使用纯文本，如果环境变量 EMAIL_USE_HTML=true 才使用HTML
    const useHtml = process.env.EMAIL_USE_HTML === 'true';

    const mailOptions = {
      from: emailConfig.from, // 直接使用邮箱地址，不使用显示名称
      to: emailConfig.recipient,
      subject: subject,
      text: textContent,
      // 根据配置决定是否发送HTML
      ...(useHtml ? { html: htmlContent } : {}),
      // 添加邮件头信息，提高通过率
      headers: {
        'X-Priority': '3', // 普通优先级
        'X-MSMail-Priority': 'Normal',
        'Importance': 'normal',
        'X-Mailer': 'MEDIY Website' // 标识邮件来源
      },
      // 设置编码
      encoding: 'UTF-8'
    };

    console.log('邮件格式:', useHtml ? 'HTML' : '纯文本');

    console.log('邮件配置:', JSON.stringify({
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    }, null, 2));

    const info = await transporter.sendMail(mailOptions);

    console.log('✅ 邮件发送成功');
    console.log('MessageId:', info.messageId);
    console.log('响应:', info.response);
    return { success: true, messageId: info.messageId, response: info.response };
  } catch (error) {
    console.error('❌ 邮件发送失败');
    console.error('错误类型:', error.code || error.name);
    console.error('错误消息:', error.message);
    if (error.response) {
      console.error('SMTP 响应:', error.response);
    }
    if (error.responseCode) {
      console.error('响应代码:', error.responseCode);
    }
    if (error.command) {
      console.error('失败的命令:', error.command);
    }
    return {
      success: false,
      error: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode
    };
  }
}

// API路由
app.post('/api/contact', async (req, res) => {
  const { companyName, contactName, contactInfo, position, requirements } = req.body;

  // 验证必填字段
  if (!companyName || !contactName || !contactInfo) {
    return res.status(400).json({
      success: false,
      message: '请填写必填字段：单位名称、联系人、联系方式'
    });
  }

  const sql = `INSERT INTO contact_submissions 
    (company_name, contact_name, contact_info, position, requirements) 
    VALUES (?, ?, ?, ?, ?)`;

  db.run(sql, [companyName, contactName, contactInfo, position, requirements], async function (err) {
    if (err) {
      console.error('Error inserting data:', err.message);
      return res.status(500).json({
        success: false,
        message: '提交失败，请稍后重试'
      });
    }

    const submissionId = this.lastID;
    console.log(`New contact submission added with ID: ${submissionId}`);

    // 发送邮件通知
    const emailSubject = `客户咨询 - ${companyName}`;
    const emailText = `客户咨询信息

时间：${new Date().toLocaleString('zh-CN')}
编号：${submissionId}

单位：${companyName}
联系人：${contactName}
电话：${contactInfo}
${position ? `职位：${position}\n` : ''}${requirements ? `需求：${requirements}` : ''}
    `.trim();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.8; color: #333; padding: 20px;">
<h3 style="color: #333; margin-top: 0;">客户咨询信息</h3>
<p><strong>时间：</strong>${new Date().toLocaleString('zh-CN')}</p>
<p><strong>编号：</strong>${submissionId}</p>
<p><strong>单位：</strong>${companyName}</p>
<p><strong>联系人：</strong>${contactName}</p>
<p><strong>电话：</strong>${contactInfo}</p>
${position ? `<p><strong>职位：</strong>${position}</p>` : ''}
${requirements ? `<p><strong>需求：</strong><br>${requirements.replace(/\n/g, '<br>')}</p>` : ''}
</body>
</html>
    `.trim();

    // 异步发送邮件，不阻塞响应
    sendEmail(emailSubject, emailHtml, emailText)
      .then(result => {
        if (result.success) {
          console.log('✅ 邮件通知发送成功');
          console.log('   MessageId:', result.messageId);
          console.log('   响应:', result.response);
        } else if (result.skip) {
          // 邮件未配置是正常的，不输出错误日志
          // 数据已保存到数据库，功能正常
        } else {
          // 只有真正发送失败时才输出错误
          console.error('❌ 邮件通知发送失败');
          console.error('   错误:', result.error);
          if (result.code) {
            console.error('   错误代码:', result.code);
          }
          if (result.response) {
            console.error('   SMTP 响应:', result.response);
          }
          if (result.responseCode) {
            console.error('   响应代码:', result.responseCode);
          }
        }
      })
      .catch(error => {
        console.error('❌ 邮件发送异常:', error);
      });

    res.json({
      success: true,
      message: '提交成功！我们将在1个工作日内与您联系。',
      id: submissionId
    });
  });
});

// 获取所有提交记录（管理用）
app.get('/api/contact/submissions', (req, res) => {
  const sql = `SELECT * FROM contact_submissions ORDER BY created_at DESC`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).json({
        success: false,
        message: '获取数据失败'
      });
    }

    res.json({
      success: true,
      data: rows
    });
  });
});

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// 生产环境：提供静态文件服务
if (process.env.NODE_ENV === 'production') {
  // 提供构建后的静态文件
  app.use(express.static(path.join(__dirname, '../dist')));

  // SPA 路由：所有非 API 请求都返回 index.html
  app.get('*', (req, res) => {
    // 排除 API 路由
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    }
  });
}

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  if (process.env.NODE_ENV === 'production') {
    console.log('Serving static files from dist directory');
  }
});

// 优雅关闭
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});
