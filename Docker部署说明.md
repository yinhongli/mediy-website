# Docker 部署说明

本项目已配置 Docker 支持，可以使用 Docker 或 Docker Compose 进行部署。

## 前置要求

1. **安装 Docker**：
   - Docker 版本 >= 20.10
   - Docker Compose 版本 >= 2.0（如果使用 docker-compose）

2. **验证安装**：
   ```bash
   docker --version
   docker-compose --version
   ```

3. **Node.js 版本兼容性**：
   - 项目已配置支持 Node.js 16.20.1
   - Docker 镜像使用 Node.js 16.20.1 Alpine
   - 已通过 `overrides` 配置解决依赖兼容性问题

## 方式一：使用 Docker Compose（推荐）

### 快速启动

```bash
# 构建并启动容器
docker-compose up -d

# 查看日志
docker-compose logs -f

# 查看状态
docker-compose ps
```

### 常用命令

```bash
# 停止服务
docker-compose stop

# 启动服务
docker-compose start

# 重启服务
docker-compose restart

# 停止并删除容器
docker-compose down

# 停止并删除容器、镜像、数据卷
docker-compose down -v

# 重新构建镜像
docker-compose build

# 重新构建并启动
docker-compose up -d --build

# 查看日志
docker-compose logs -f mediy-website

# 进入容器
docker-compose exec mediy-website sh
```

## 方式二：使用 Docker 命令

### 构建镜像

```bash
# 构建镜像
docker build -t mediy-website:latest .

# 查看镜像
docker images | grep mediy-website
```

### 运行容器

```bash
# 创建数据目录（用于持久化数据库）
mkdir -p ./data

# 运行容器
docker run -d \
  --name mediy-website \
  --restart unless-stopped \
  -p 3002:3002 \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/logs:/app/logs \
  -e NODE_ENV=production \
  mediy-website:latest
```

### 常用命令

```bash
# 查看运行中的容器
docker ps

# 查看所有容器（包括已停止的）
docker ps -a

# 查看日志
docker logs -f mediy-website

# 停止容器
docker stop mediy-website

# 启动容器
docker start mediy-website

# 重启容器
docker restart mediy-website

# 删除容器
docker rm mediy-website

# 删除镜像
docker rmi mediy-website:latest

# 进入容器
docker exec -it mediy-website sh
```

## 数据持久化

### 数据库文件

数据库文件会保存在 `./data/database.sqlite`，通过 Docker volume 持久化：

```bash
# 查看数据目录
ls -la ./data/

# 备份数据库
cp ./data/database.sqlite ./data/database.sqlite.backup
```

### 日志文件

日志文件保存在 `./logs/` 目录（如果挂载了日志卷）。

## 环境变量

可以通过环境变量配置应用：

```bash
# 在 docker-compose.yml 中修改
environment:
  - NODE_ENV=production
  - PORT=3002
  - DB_PATH=/app/data/database.sqlite
```

或在运行 Docker 命令时传递：

```bash
docker run -d \
  -e NODE_ENV=production \
  -e PORT=3002 \
  -e DB_PATH=/app/data/database.sqlite \
  mediy-website:latest
```

## 访问应用

部署成功后，访问：
- **应用地址**：`http://localhost:3002`
- **健康检查**：`http://localhost:3002/api/health`

## 健康检查

容器配置了健康检查，可以通过以下命令查看：

```bash
# Docker Compose
docker-compose ps

# Docker 命令
docker inspect mediy-website | grep -A 10 Health
```

## 生产环境部署建议

### 1. 使用反向代理（Nginx）

在 Docker Compose 中添加 Nginx 服务：

```yaml
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - mediy-website
```

### 2. 使用环境变量文件

创建 `.env` 文件：

```env
NODE_ENV=production
PORT=3002
DB_PATH=/app/data/database.sqlite
```

在 `docker-compose.yml` 中使用：

```yaml
env_file:
  - .env
```

### 3. 资源限制

在 `docker-compose.yml` 中添加资源限制：

```yaml
deploy:
  resources:
    limits:
      cpus: '1'
      memory: 512M
    reservations:
      cpus: '0.5'
      memory: 256M
```

### 4. 日志管理

配置日志轮转：

```yaml
logging:
  driver: "json-file"
  options:
    max-size: "10m"
    max-file: "3"
```

## 故障排查

### 查看容器日志

```bash
# Docker Compose
docker-compose logs -f mediy-website

# Docker
docker logs -f mediy-website
```

### 进入容器调试

```bash
# Docker Compose
docker-compose exec mediy-website sh

# Docker
docker exec -it mediy-website sh
```

### 检查端口占用

```bash
# 检查端口是否被占用
netstat -tuln | grep 3002
# 或
lsof -i :3002
```

### 重新构建镜像

如果代码更新，需要重新构建：

```bash
# Docker Compose
docker-compose up -d --build

# Docker
docker build -t mediy-website:latest .
docker stop mediy-website
docker rm mediy-website
docker run -d --name mediy-website -p 3002:3002 -v $(pwd)/data:/app/data mediy-website:latest
```

## 镜像优化

当前 Dockerfile 使用多阶段构建，已优化镜像大小。如需进一步优化：

1. 使用 `.dockerignore` 排除不必要的文件
2. 使用 Alpine Linux 基础镜像（已使用）
3. 清理 npm 缓存（已包含）

## 安全建议

1. **不要在生产环境暴露数据库端口**
2. **使用 HTTPS**（通过 Nginx 反向代理）
3. **定期备份数据库文件**
4. **限制容器资源使用**
5. **使用非 root 用户运行**（可选，需要修改 Dockerfile）

## 更新应用

```bash
# 1. 拉取最新代码
git pull

# 2. 重新构建镜像
docker-compose build

# 3. 重启服务
docker-compose up -d

# 或使用一键命令
docker-compose up -d --build
```

## 备份和恢复

### 备份数据库

```bash
# 备份
docker cp mediy-website:/app/data/database.sqlite ./backup/database-$(date +%Y%m%d).sqlite

# 或直接复制挂载的卷
cp ./data/database.sqlite ./backup/database-$(date +%Y%m%d).sqlite
```

### 恢复数据库

```bash
# 停止容器
docker-compose stop

# 恢复数据库
cp ./backup/database-20240101.sqlite ./data/database.sqlite

# 启动容器
docker-compose start
```

