#!/bin/bash
# 自动部署脚本

# 清理旧文件
rm -rf /var/www/wisdomdance/*

# 解压新文件
tar -xzf /tmp/deploy.tar.gz -C /var/www/wisdomdance/

# 设置权限
chown -R www-data:www-data /var/www/wisdomdance/

echo "部署完成"
ls -la /var/www/wisdomdance/
