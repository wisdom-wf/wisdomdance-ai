#!/bin/bash
# 自动部署脚本

set -e

echo "🚀 开始部署 WisdomDance.ai..."

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 服务器配置
SERVER_IP="43.153.213.134"
SERVER_USER="ubuntu"
SERVER_PASS="w00135950F"
DEPLOY_DIR="/var/www/wisdomdance"

# 1. 构建项目
echo -e "${BLUE}📦 步骤1: 构建项目...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 构建失败${NC}"
    exit 1
fi
echo -e "${GREEN}✅ 构建成功${NC}"

# 2. 打包
echo -e "${BLUE}📦 步骤2: 打包文件...${NC}"
tar -czf deploy.tar.gz -C dist .
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 打包失败${NC}"
    exit 1
fi
echo -e "${GREEN}✅ 打包成功${NC}"

# 3. 上传到服务器
echo -e "${BLUE}📤 步骤3: 上传到服务器...${NC}"
export SSHPASS="$SERVER_PASS"
sshpass -e scp -o StrictHostKeyChecking=no deploy.tar.gz $SERVER_USER@$SERVER_IP:/tmp/
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 上传失败${NC}"
    exit 1
fi
echo -e "${GREEN}✅ 上传成功${NC}"

# 4. 解压部署
echo -e "${BLUE}📂 步骤4: 解压部署...${NC}"
sshpass -e ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "sudo rm -rf $DEPLOY_DIR/* && sudo tar -xzf /tmp/deploy.tar.gz -C $DEPLOY_DIR/ && sudo chown -R www-data:www-data $DEPLOY_DIR/"
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 部署失败${NC}"
    exit 1
fi
echo -e "${GREEN}✅ 部署成功${NC}"

# 5. 清理本地文件
rm -f deploy.tar.gz

echo -e "${GREEN}🎉 部署完成！${NC}"
echo -e "${BLUE}🌐 访问地址: https://wisdomdance.cn${NC}"
