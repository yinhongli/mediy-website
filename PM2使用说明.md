# PM2 使用说明

本项目已配置 PM2 进程管理器，支持开发和生产两种运行模式。

## 前置要求

1. 安装 PM2（如果尚未安装）：
```bash
npm install -g pm2
```

2. 安装项目依赖：
```bash
npm install
```

## 使用方式

### 方式一：生产环境（推荐）

生产环境会先构建前端，然后运行服务器提供静态文件和 API 服务。

1. **构建并启动（一键操作）**：
```bash
npm run pm2:prod
```

2. **或者分步操作**：
```bash
# 1. 构建前端
npm run build

# 2. 启动 PM2
npm run pm2:start
```

访问地址：`http://localhost:3002`

### 方式二：开发环境

开发环境会同时运行前端开发服务器（Vite）和后端服务器。

```bash
npm run pm2:start:dev
```

- 前端地址：`http://localhost:3000`
- 后端 API：`http://localhost:3002`

## 常用 PM2 命令

### 查看状态
```bash
npm run pm2:status
# 或
pm2 status
```

### 查看日志
```bash
npm run pm2:logs
# 或
pm2 logs mediy-website
```

### 重启应用
```bash
npm run pm2:restart
# 或
pm2 restart mediy-website
```

### 停止应用
```bash
npm run pm2:stop
# 或
pm2 stop mediy-website
```

### 删除应用（从 PM2 列表中移除）
```bash
npm run pm2:delete
# 或
pm2 delete mediy-website
```

### 查看详细信息
```bash
pm2 show mediy-website
```

### 监控面板
```bash
pm2 monit
```

## 其他有用的 PM2 命令

### 保存当前进程列表（开机自启）
```bash
pm2 save
pm2 startup
```

### 清除所有日志
```bash
pm2 flush
```

### 重新加载应用（零停机时间）
```bash
pm2 reload mediy-website
```

## 日志文件位置

日志文件保存在 `./logs/` 目录：
- `pm2-error.log` - 错误日志（生产环境）
- `pm2-out.log` - 输出日志（生产环境）
- `pm2-dev-error.log` - 错误日志（开发环境）
- `pm2-dev-out.log` - 输出日志（开发环境）

## 注意事项

1. **生产环境**：确保在运行前已执行 `npm run build` 构建前端代码
2. **数据库**：SQLite 数据库文件 `database.sqlite` 会在首次运行时自动创建
3. **端口**：确保 3002 端口（生产环境）或 3000/3002 端口（开发环境）未被占用
4. **环境变量**：可以通过修改 `ecosystem.config.js` 来调整环境变量

## 配置文件

PM2 配置文件：`ecosystem.config.js`

可以在此文件中修改：
- 应用名称
- 实例数量
- 环境变量
- 日志路径
- 内存限制等

