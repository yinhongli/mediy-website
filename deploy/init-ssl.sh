#!/usr/bin/env bash
set -euo pipefail

# 首次申请 Let's Encrypt 证书（需域名已解析到本机）
DOMAIN="jinruiyilian.com"
EMAIL="${SSL_EMAIL:-admin@jinruiyilian.com}"

mkdir -p certbot/conf certbot/www deploy/active
cp deploy/nginx.bootstrap.conf deploy/active/default.conf

docker compose -f docker-compose.prod.yml up -d --build

docker compose -f docker-compose.prod.yml run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  -d "$DOMAIN" \
  -d "www.$DOMAIN"

cp deploy/nginx.jinruiyilian.conf deploy/active/default.conf
docker compose -f docker-compose.prod.yml restart nginx

echo "HTTPS 证书申请完成，请访问: https://www.jinruiyilian.com"
