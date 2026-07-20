#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/opt/mediy-website"
cd "$APP_DIR"

mkdir -p data logs

if [[ ! -f .env ]]; then
  cp .env.example .env
  echo "请编辑 ${APP_DIR}/.env 配置邮件参数"
fi

export NODE_ENV=production
export PORT=3012

# 停止旧进程
pkill -f "node server/index.js" 2>/dev/null || true
sleep 1

# 启动服务
nohup node server/index.js >> logs/app.log 2>&1 &
echo $! > logs/app.pid
echo "MEDIY 官网已启动，PID=$(cat logs/app.pid)，端口 ${PORT}"
