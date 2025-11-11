const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3002;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 初始化SQLite数据库
const db = new sqlite3.Database('./database.sqlite', (err) => {
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

// API路由
app.post('/api/contact', (req, res) => {
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
  
  db.run(sql, [companyName, contactName, contactInfo, position, requirements], function(err) {
    if (err) {
      console.error('Error inserting data:', err.message);
      return res.status(500).json({ 
        success: false, 
        message: '提交失败，请稍后重试' 
      });
    }
    
    console.log(`New contact submission added with ID: ${this.lastID}`);
    res.json({ 
      success: true, 
      message: '提交成功！我们将在1个工作日内与您联系。',
      id: this.lastID
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

// SMS短信发送API
app.post('/api/sms', (req, res) => {
  const { phone, message } = req.body;
  
  if (!phone || !message) {
    return res.status(400).json({ 
      success: false, 
      message: '手机号和短信内容不能为空' 
    });
  }
  
  // 这里可以集成真实的短信服务商API
  // 目前只是模拟发送，实际项目中需要集成如阿里云、腾讯云等短信服务
  console.log(`发送短信到 ${phone}:`);
  console.log(message);
  console.log('---短信发送完成---');
  
  // 模拟短信发送成功
  res.json({ 
    success: true, 
    message: '短信发送成功' 
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
