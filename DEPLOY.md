# 部署指南 (Deployment Guide)

## 🚀 快速部署

### 方式1：自动部署（推荐）

```bash
# 在项目根目录执行
npm run build
tar -czf deploy.tar.gz -C dist .

# 上传并部署
sshpass -p "w00135950F" scp -o StrictHostKeyChecking=no deploy.tar.gz ubuntu@43.153.213.134:/tmp/
sshpass -p "w00135950F" ssh -o StrictHostKeyChecking=no ubuntu@43.153.213.134 "sudo rm -rf /var/www/wisdomdance/* && sudo tar -xzf /tmp/deploy.tar.gz -C /var/www/wisdomdance/ && sudo chown -R www-data:www-data /var/www/wisdomdance/"
```

### 方式2：使用部署脚本

```bash
# 执行自动部署脚本
./deploy.sh
```

## 📋 服务器信息

| 项目 | 值 |
|------|-----|
| 服务器IP | 43.153.213.134 |
| 用户名 | ubuntu |
| 密码 | w00135950F |
| 部署目录 | /var/www/wisdomdance |
| Nginx配置 | /etc/nginx/sites-enabled/wisdomdance-ai |
| 网站地址 | https://wisdomdance.cn |

## 🔧 手动部署步骤

### 1. 构建项目
```bash
cd /Users/wisdom/WorkBuddy/Claw/wisdomdance-ai
npm run build
```

### 2. 打包
```bash
tar -czf deploy.tar.gz -C dist .
```

### 3. 上传到服务器
```bash
sshpass -p "w00135950F" scp -o StrictHostKeyChecking=no deploy.tar.gz ubuntu@43.153.213.134:/tmp/
```

### 4. 解压部署
```bash
sshpass -p "w00135950F" ssh -o StrictHostKeyChecking=no ubuntu@43.153.213.134 "sudo rm -rf /var/www/wisdomdance/* && sudo tar -xzf /tmp/deploy.tar.gz -C /var/www/wisdomdance/ && sudo chown -R www-data:www-data /var/www/wisdomdance/"
```

### 5. 重启Nginx（如需要）
```bash
sshpass -p "w00135950F" ssh -o StrictHostKeyChecking=no ubuntu@43.153.213.134 "sudo nginx -t && sudo systemctl reload nginx"
```

## 🔄 回滚操作

如果需要回滚到上一个版本：

```bash
# 从Git历史恢复
sshpass -p "w00135950F" ssh -o StrictHostKeyChecking=no ubuntu@43.153.213.134 "sudo cp -r /var/www/wisdomdance /var/www/wisdomdance-backup-$(date +%Y%m%d)"
```

## 🐛 常见问题

### 1. 页面显示白色背景
**原因**：浏览器缓存或CSS未正确加载
**解决**：强制刷新 (Ctrl+F5) 或清除浏览器缓存

### 2. 图片不显示
**原因**：图片未正确复制到dist目录
**解决**：确保 `public/images/` 中的图片在构建后存在于 `dist/images/`

### 3. 部署后无变化
**原因**：Nginx根目录配置错误
**解决**：检查Nginx配置中的 `root` 路径是否为 `/var/www/wisdomdance`

## 📞 联系方式

如有部署问题，请联系：
- 邮箱：wfanang@gmail.com
