# 部署指南 (Deployment Guide)

## 🚀 快速部署

### 方式1：自动部署（推荐）

```bash
# 设置环境变量（不要在脚本中硬编码密码）
export SERVER_IP="your-server-ip"
export SERVER_USER="ubuntu"
export SERVER_PASS="your-password"

# 在项目根目录执行
./deploy.sh
```

### 方式2：手动部署

```bash
# 1. 构建
npm run build

# 2. 打包
tar -czf deploy.tar.gz -C dist .

# 3. 上传（使用SSH Key推荐，或sshpass）
scp deploy.tar.gz ubuntu@your-server:/tmp/

# 4. 解压部署
ssh ubuntu@your-server "sudo rm -rf /var/www/wisdomdance/* && sudo tar -xzf /tmp/deploy.tar.gz -C /var/www/wisdomdance/ && sudo chown -R www-data:www-data /var/www/wisdomdance/"
```

## 📋 服务器配置

| 项目 | 说明 |
|------|------|
| 部署目录 | `/var/www/wisdomdance` |
| Nginx配置 | `/etc/nginx/sites-enabled/wisdomdance-ai` |
| 网站地址 | https://wisdomdance.cn |

> ⚠️ 服务器IP、用户名、密码请从环境变量或密码管理器获取，**不要硬编码在文档中**。

## 🔧 GitHub Actions CI/CD

项目已配置GitHub Actions自动部署，push到main分支会自动触发。

需要在GitHub仓库Settings → Secrets中配置：
- `TENCENT_HOST`: 服务器IP
- `TENCENT_USER`: SSH用户名
- `TENCENT_SSH_KEY`: SSH私钥

## 🔄 回滚操作

```bash
# 服务器上备份当前版本
ssh ubuntu@your-server "sudo cp -r /var/www/wisdomdance /var/www/wisdomdance-backup-$(date +%Y%m%d)"
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
