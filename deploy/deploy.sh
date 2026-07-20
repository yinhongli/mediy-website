#!/usr/bin/env bash
set -euo pipefail

# 用法:
#   DEPLOY_HOST=root@your-server-ip ./deploy/deploy.sh
#
# 服务器需已安装 Docker / Docker Compose，且域名已解析到该服务器 IP。

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEPLOY_HOST="${DEPLOY_HOST:-}"
REMOTE_DIR="${REMOTE_DIR:-/opt/mediy-website}"

if [[ -z "$DEPLOY_HOST" ]]; then
  echo "请设置服务器地址，例如:"
  echo "  DEPLOY_HOST=root@123.45.67.89 ./deploy/deploy.sh"
  exit 1
fi

echo "==> 同步代码到 ${DEPLOY_HOST}:${REMOTE_DIR}"
ssh "$DEPLOY_HOST" "mkdir -p ${REMOTE_DIR}"
rsync -az --delete \
  --exclude node_modules \
  --exclude dist \
  --exclude .git \
  --exclude data \
  --exclude logs \
  --exclude certbot \
  --exclude .env \
  "$ROOT_DIR/" "${DEPLOY_HOST}:${REMOTE_DIR}/"

echo "==> 构建并启动 Docker 服务"
ssh "$DEPLOY_HOST" "cd ${REMOTE_DIR} && docker compose -f docker-compose.prod.yml up -d --build"

echo "==> 部署完成"
echo "若尚未配置 HTTPS，请先在服务器执行证书申请脚本:"
echo "  ssh ${DEPLOY_HOST} 'cd ${REMOTE_DIR} && ./deploy/init-ssl.sh'"
