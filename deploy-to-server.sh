#!/bin/bash
# 部署脚本 - 在服务器上执行

echo "=== 开始部署 ==="

# 清理旧文件
echo "清理旧文件..."
sudo rm -rf /var/www/wisdomdance/*

# 解压新文件
echo "解压新文件..."
sudo tar -xzf /tmp/deploy.tar.gz -C /var/www/wisdomdance/

# 设置权限
echo "设置权限..."
sudo chown -R www-data:www-data /var/www/wisdomdance/

# 检查部署结果
echo "=== 部署完成 ==="
ls -la /var/www/wisdomdance/

echo ""
echo "网站已更新: https://wisdomdance.cn"
