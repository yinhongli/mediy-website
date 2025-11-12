# MEDIY 医疗科技官网

MEDIY 医疗科技官网项目，基于 React + Vite + Express 构建。

## 环境要求

### Node.js 版本

**必须使用 Node.js 16.20.1**

项目已完全配置兼容 Node.js 16.20.1，不支持其他版本。

#### 使用 nvm 管理 Node.js 版本

如果使用 nvm（Node Version Manager），项目根目录已包含 `.nvmrc` 文件：

```bash
# 自动切换到项目要求的 Node.js 版本
nvm use

# 如果未安装 16.20.1，先安装
nvm install 16.20.1
nvm use 16.20.1
```

#### 验证 Node.js 版本

```bash
# 方法1：直接查看
node --version
# 应该显示: v16.20.1

# 方法2：使用项目提供的检查脚本
npm run check:node
```

### npm 版本

要求 npm >= 8.0.0

```bash
npm --version
```

## 安装依赖

```bash
npm install --legacy-peer-deps
```

**注意**：必须使用 `--legacy-peer-deps` 参数，因为项目使用了 `overrides` 来解决依赖兼容性问题。

## 开发

```bash
# 启动开发服务器（前端 + 后端）
npm run dev
```

- 前端开发服务器：http://localhost:3000
- 后端 API 服务器：http://localhost:3002

## 构建

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

## 生产环境部署

### 方式一：使用 PM2

详见 [PM2使用说明.md](./PM2使用说明.md)

```bash
# 构建并启动
npm run pm2:prod
```

### 方式二：使用 Docker

详见 [Docker部署说明.md](./Docker部署说明.md)

```bash
# 使用 Docker Compose
docker-compose up -d

# 或使用 npm 脚本
npm run docker:up
```

## 邮件配置

当用户提交预约演示申请时，系统会自动发送邮件通知。

### 推荐方式：使用 .env 文件配置（最简单）

1. **复制示例文件**：
   ```bash
   cp .env.example .env
   ```

2. **编辑 `.env` 文件**，填写你的邮箱配置：
   ```bash
   # 收件人邮箱（必填）
   RECIPIENT_EMAIL=admin@mediy.com
   
   # SMTP 配置（必填）
   SMTP_HOST=smtp.qq.com
   SMTP_PORT=587
   SMTP_USER=your-email@qq.com
   SMTP_PASS=your-authorization-code
   ```

3. **完成！** 重启服务器即可生效。

### 配置项说明

#### 必需配置

- **`RECIPIENT_EMAIL`**：收件人邮箱地址
  - 支持多个邮箱，用逗号分隔：`email1@example.com,email2@example.com`
  
- **`SMTP_USER`**：SMTP 用户名（通常是你的邮箱地址）
  
- **`SMTP_PASS`**：SMTP 密码或授权码
  - ⚠️ **重要**：QQ/163 邮箱需要使用授权码，不是登录密码

#### 可选配置

- **`SMTP_HOST`**：SMTP 服务器地址（默认：`smtp.qq.com`）
- **`SMTP_PORT`**：SMTP 端口（默认：`587`）
- **`SMTP_SECURE`**：是否使用 SSL/TLS（`true`/`false`，默认：`false`）
- **`FROM_EMAIL`**：发件人邮箱（默认：使用 `SMTP_USER`）

### 常见邮箱配置示例

#### QQ 邮箱
```bash
RECIPIENT_EMAIL=admin@mediy.com
SMTP_HOST=smtp.qq.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-qq@qq.com
SMTP_PASS=abcdefghijklmnop  # QQ 邮箱授权码
```

#### 163 邮箱
```bash
RECIPIENT_EMAIL=admin@mediy.com
SMTP_HOST=smtp.163.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-163@163.com
SMTP_PASS=your-163-authorization-code
```

#### Gmail
```bash
RECIPIENT_EMAIL=admin@mediy.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password  # Gmail 应用专用密码
```

### 其他配置方式

#### 方式二：环境变量（适合 Docker/PM2）

**Docker Compose** (`docker-compose.yml`)：
```yaml
environment:
  - RECIPIENT_EMAIL=admin@mediy.com
  - SMTP_USER=your-email@qq.com
  - SMTP_PASS=your-authorization-code
```

**PM2** (`ecosystem.config.js`)：
```javascript
env: {
  RECIPIENT_EMAIL: 'admin@mediy.com',
  SMTP_USER: 'your-email@qq.com',
  SMTP_PASS: 'your-authorization-code'
}
```

**命令行**：
```bash
export RECIPIENT_EMAIL="admin@mediy.com"
export SMTP_USER="your-email@qq.com"
export SMTP_PASS="your-authorization-code"
```

### 如何获取授权码？

1. **QQ 邮箱**：
   - 登录 QQ 邮箱 → 设置 → 账户
   - 找到 "POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务"
   - 开启服务 → 生成授权码

2. **163 邮箱**：
   - 登录 163 邮箱 → 设置 → POP3/SMTP/IMAP
   - 开启服务 → 生成授权码

3. **Gmail**：
   - 需要开启两步验证
   - 生成应用专用密码

### 注意事项

- ✅ `.env` 文件已加入 `.gitignore`，不会被提交到代码库
- ✅ 支持多个收件人：`RECIPIENT_EMAIL="email1@example.com,email2@example.com"`
- ✅ 邮件发送失败不影响表单提交，数据仍会保存到数据库
- ✅ 环境变量优先级高于 `.env` 文件（便于 Docker/PM2 覆盖配置）

## 项目结构

```
mediy-website/
├── src/              # React 前端源码
├── server/           # Express 后端服务器
├── dist/             # 构建输出（生产环境）
├── data/             # 数据目录（SQLite 数据库）
├── logs/             # 日志目录
├── Dockerfile        # Docker 镜像配置
├── docker-compose.yml # Docker Compose 配置
└── ecosystem.config.js # PM2 配置
```

## 技术栈

- **前端**：React 18 + Vite 4 + Tailwind CSS
- **后端**：Express 4 + SQLite3
- **进程管理**：PM2
- **容器化**：Docker + Docker Compose

## 依赖兼容性说明

项目使用 `overrides` 配置确保所有依赖兼容 Node.js 16.20.1：

- `postcss-load-config@5.0.3` - 兼容 Node.js 16

## 常见问题

### 1. 安装依赖时出现引擎警告

如果看到 `postcss-load-config` 的引擎警告，这是正常的。项目已通过 `overrides` 配置自动处理，可以安全忽略。

### 2. npm install 失败

确保使用 `--legacy-peer-deps` 参数：

```bash
npm install --legacy-peer-deps
```

### 3. Docker 构建失败

确保：
1. 已更新 `package-lock.json`（运行 `npm install --legacy-peer-deps`）
2. 使用正确的 Node.js 版本（16.20.1）

## 许可证

MIT

