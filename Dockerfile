# 多阶段构建 Dockerfile
# 阶段1: 构建阶段
FROM node:16.20.1-alpine AS builder

# 安装构建依赖（sqlite3 需要编译原生模块）
RUN apk add --no-cache python3 make g++

# 设置工作目录
WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 安装依赖（使用 npm install 以支持 overrides）
RUN npm install --legacy-peer-deps

# 复制源代码
COPY . .

# 构建前端
RUN npm run build

# 阶段2: 生产阶段
FROM node:16.20.1-alpine AS production

# 设置工作目录
WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 创建 node_modules 目录
RUN mkdir -p node_modules

# 从构建阶段复制已编译的 sqlite3 模块（避免重新编译）
COPY --from=builder /app/node_modules/sqlite3 ./node_modules/sqlite3

# 安装其他生产依赖（sqlite3 已存在，npm 会跳过）
RUN npm install --omit=dev --legacy-peer-deps && npm cache clean --force

# 从构建阶段复制构建产物和服务器代码
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server

# 创建数据目录（用于 SQLite 数据库）
RUN mkdir -p /app/data

# 暴露端口
EXPOSE 3002

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=3002

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3002/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)}).on('error', () => process.exit(1))"

# 启动应用
CMD ["node", "server/index.js"]

