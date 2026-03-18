#!/bin/bash
# 服务器配置脚本

# 添加公钥到authorized_keys
mkdir -p ~/.ssh
chmod 700 ~/.ssh

cat >> ~/.ssh/authorized_keys << 'PUBKEY'
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDMp02p4nuo9lzpLSIH6+Yw4RBfMPB87mSVObRfUOuDYqDpwqiVMwb/IQhbvWlh7IIVU4w16QGO2cWz0dTKLZX2lQi2NdOAUup5KhT66CU46FL/bU3IopLMNYjOfq2fuoVXVv5vEYLc3+XYrKOlR/S8lbMxvHYHoCOrMAUmJN/AJ553vZ91X53+RpuYivaPtLVvJ6IXN7PVoe9uXranmatIgkl2huPoV8n8+8hgCL+kiaIISSVGAUOjZqI7S113APTLRYbBkgFQ6imTkLkWAOLy6Vy3TE3XC/gGQ7z+EkO6pzsWqDWgJMvCQlCDlMhHfJvzq1WdBf1Z817Kquv61Mx4w+ktw+A4K1v5f/BBI7u8wsVZV3TP0qvT0nX/mOnH2BPMgPS8st3m//b2esLcv0TZ08XkpRy60e7E+gVCQcMXmX3PCSkSfJB3VDPNZKIpKARt4+KTd7vI2lP2bEuxv0HVs5uhkPKSHqS5ITgSNHbwnyMCm4E0llbDV7VNIvoiU3dq3hKhCoLeW+Ho8MeQsOv5aqap6qBvvsOOAAD8sr1Z45uoNwXjhixFbcnK1XzHp0ZH1rQKn2pNt9gxkndIHg6Px+6AG1RM9vqB0qCygYNm/l9zL6qi2zHqNxuWIXodgIgH6sLqdIVMhM97wt2vg0PwOdChWu85aZX8ltwdYfdk2Q== github-actions
PUBKEY

chmod 600 ~/.ssh/authorized_keys

echo "=== SSH配置完成 ==="
echo "公钥已添加到authorized_keys"

# 测试配置
echo "=== 测试SSH配置 ==="
grep "github-actions" ~/.ssh/authorized_keys | head -1
