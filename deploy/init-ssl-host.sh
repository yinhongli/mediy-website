#!/usr/bin/env bash
set -euo pipefail

DOMAIN="jinruiyilian.com"
EMAIL="${SSL_EMAIL:-admin@jinruiyilian.com}"
APP_DIR="${APP_DIR:-/opt/mediy-website}"

cd "$APP_DIR"
mkdir -p /var/www/certbot

echo "==> 启用 HTTP 配置（用于证书验证）"
cp deploy/nginx.jinruiyilian.bootstrap.conf /etc/nginx/conf.d/jinruiyilian.conf
nginx -t
nginx -s reload

echo "==> 申请 Let's Encrypt 证书"
docker run --rm \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/www/certbot:/var/www/certbot \
  certbot/certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  -d "$DOMAIN" \
  -d "www.$DOMAIN"

echo "==> 启用 HTTPS 配置"
cp deploy/nginx.jinruiyilian.host.conf /etc/nginx/conf.d/jinruiyilian.conf
nginx -t
nginx -s reload

echo "HTTPS 证书申请完成，请访问: https://www.jinruiyilian.com"
