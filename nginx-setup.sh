#!/bin/bash
# Nginx配置脚本

sudo tee /etc/nginx/sites-available/wisdomdance-ai > /dev/null << 'EOF'
server {
    listen 80;
    server_name _;
    
    root /var/www/wisdomdance-ai;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/wisdomdance-ai /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default 2>/dev/null
sudo nginx -t && sudo systemctl reload nginx

echo "Nginx配置完成"
sudo systemctl status nginx --no-pager | head -5
