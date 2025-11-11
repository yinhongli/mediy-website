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

