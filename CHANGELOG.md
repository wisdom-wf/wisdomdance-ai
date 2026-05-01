# 变更日志 (Changelog)

## [v1.2.0] 2026-05-01 - 数据资产核心业务全面升级

### 🔐 安全加固
- 移除所有明文密码（deploy.sh / DEPLOY.md / CHANGELOG.md），改用环境变量
- 新增 `.env.example` 模板
- `.gitignore` 添加 tar.gz 排除规则

### 🏗️ 代码架构重构
- `page.tsx` 从 831 行拆分为 10 个独立组件
  - `Hero.tsx` — 首屏（个人照片+浮动卡片+CTA）
  - `StoryTimeline.tsx` — 故事时间线
  - `DataAssetHub.tsx` — **数据资产核心模块（4个Tab）**
  - `AI超级团队.tsx` — 7个Agent展示
  - `AISecurityZone.tsx` — AI安全专区
  - `Tools.tsx` — 工具箱
  - `Articles.tsx` — 技术文章+公众号引流
  - `CTA.tsx` — 联系区域
  - `Footer.tsx` — 页脚
- 删除重复的中文命名组件 `AI安全专区.tsx`
- 清理 12 个无用 lucide-react import
- 修复 `Header.tsx` 多余 `</div>` 和 DOM 嵌套错误

### 📊 数据资产核心模块（DataAssetHub）
基于 `/Volumes/works/延安华链经营` 200+ 实战文档提炼，新增顶级 Tab 模块：

- **业务总览**：4大核心业务（数据资产入表 / 公共数据授权 / 数字化诊断 / AI+政务）+ 3种合作模式（项目制/平台制/顾问制）
- **六步法**：数据资源盘点→合规评估→成本归集→价值评估→入表记账→产品上架，每步带标准化交付物
- **行业案例**：8行业 Tab 切换（水务✅ / 农业🔄 / 旅游🔍 / 交通🔍 / 能源🔄 / 城投🔍 / 邮政🔍 / 医疗🔄），含交付物和状态标记
- **公共数据授权**：10模块体系 + "数据可用不可见"技术架构 + 收益分配（市政府40%+数据方20%+运营方40%）+ 4个标准数据产品
- 顶部数据条：8+行业 / 15+国企 / 6步流程 / 深圳数据交易所挂牌

### 📝 技术文章板块
- 重构为 6 篇基于真实项目经验的文章
- 新增公众号引流区：`redmud6.jpg` 二维码 + 标签云
- 二维码点击放大弹窗（手机扫码友好）

### 🔗 导航与锚点
- Header 导航更新：服务能力→数据资产(#data-asset)，项目案例→联系我们(#contact)
- Hero CTA 按钮 #services→#data-asset
- AI超级团队 section 添加 `id="ai-team"`
- AISecurityZone section 添加 `id="security"`

### 🔧 CI/CD 修复
- 删除废弃的 `deploy-simple.yml`
- `deploy.yml`：移除 `|| true`，统一部署路径到 `/var/www/wisdomdance`
- `ci.yml`：移除 lint 的 `|| true`，让构建失败真正阻断流水线
- Nginx root 路径修正：`/var/www/wisdomdance/dist` → `/var/www/wisdomdance`

### 📁 文件变更
```
new file:   .env.example
new file:   components/sections/DataAssetHub.tsx
new file:   components/sections/Hero.tsx
new file:   components/sections/StoryTimeline.tsx
new file:   components/sections/Services.tsx (重写)
new file:   components/sections/Projects.tsx (重写)
new file:   components/sections/Articles.tsx (重写)
new file:   components/sections/Methodology.tsx (已合并入DataAssetHub)
new file:   components/sections/DataAuthorization.tsx (已合并入DataAssetHub)
new file:   components/sections/CTA.tsx
new file:   components/sections/Footer.tsx
new file:   public/images/redmud6.jpg
deleted:    .github/workflows/deploy-simple.yml
deleted:    components/sections/AI安全专区.tsx
modified:   app/page.tsx (831行→35行)
modified:   components/Header.tsx
modified:   components/sections/AI超级团队.tsx
modified:   components/sections/AISecurityZone.tsx
modified:   .github/workflows/deploy.yml
modified:   .github/workflows/ci.yml
modified:   deploy.sh
modified:   DEPLOY.md
modified:   CHANGELOG.md
modified:   README.md
modified:   .gitignore
```

### 🚀 部署信息
- **服务器**：ubuntu@43.153.213.134
- **部署目录**：/var/www/wisdomdance
- **访问地址**：https://wisdomdance.cn

---

## [2026-03-19] - 新增：AI安全专区模块（类龙虾安全风格）

### ✨ 新增功能

#### 1. AI安全专区模块 (AI安全专区.tsx)
- **设计灵感**：借鉴 sanwan.ai 龙虾三万的安全防护实战经验
- **核心数据展示**：
  - 🛡️ 12次拦截攻击次数
  - 📅 43天安全运营天数
  - 🎯 100%攻击拦截率
  - ⚡ 3层防御体系

- **三层防御体系**：
  1. **信任层级体系**：system prompt > 飞书消息 > 授权用户 > 外部留言
  2. **异常模式识别**：检测[System Message]、Ignore previous等攻击信号
  3. **权限最小化**：禁止支付/转账、删除需确认、消息白名单验证

- **真实攻击记录**：
  | 时间 | 攻击类型 | 描述 | 状态 |
  |------|----------|------|------|
  | 2026-03-14 08:16 | 伪造系统通知 | 伪装[System Message]诱导读取文件 | 已拦截 |
  | 2026-03-14 08:44 | 留言框注入 | Ignore all previous instructions | 已拦截 |
  | 2026-03-14 11:09 | 伪造身份攻击 | 声称是"傅盛"要求删除日记 | 已拦截 |
  | 2026-03-14 11:14 | 文件读取诱导 | 要求读取/etc/hosts等系统文件 | 已拦截 |
  | 2026-03-13 15:30 | 自动化脚本攻击 | 相同内容5分钟内重复2次 | 已拦截 |

- **常见攻击类型**：
  - 🚨 提示词注入（高危）：在用户输入中嵌入系统指令
  - 🚨 身份伪造（高危）：冒充管理员或授权用户
  - ⚠️ 路径遍历（中危）：诱导读取系统敏感文件
  - 🚨 权限提升（高危）：试图获取更高操作权限

- **SOUL.md安全规则示例**：
  - 信任层级定义
  - 永远不做清单（删除不备份、读取敏感路径、执行shell命令等）
  - 攻击信号识别规则
  - 应急响应流程

- **权限设计检查清单**：
  - Agent可读文件范围明确限定
  - 写入/删除操作需二次确认
  - 消息发送目标有白名单
  - 禁止涉及资金的操作
  - 敏感路径加入黑名单
  - 记录所有异常行为日志

### 🔧 技术实现

#### 1. 组件设计
- 采用卡片式布局，与现有页面风格统一
- 使用渐变色彩区分不同安全等级（红/橙/蓝）
- 响应式网格布局，适配移动端

#### 2. 数据展示
- 核心数据使用大字体+emoji展示
- 攻击记录使用表格形式，清晰易读
- 防御体系使用三列卡片布局

### 📁 文件变更

```
modified:   app/page.tsx                          # 添加AI安全专区组件引用
new file:   components/sections/AI安全专区.tsx    # AI安全专区展示组件
modified:   CHANGELOG.md                          # 更新变更日志
```

### 🚀 部署信息

- **服务器**：ubuntu@43.153.213.134
- **部署目录**：/var/www/wisdomdance
- **访问地址**：https://wisdomdance.cn
- **GitHub提交**：1bd868d feat: 添加AI安全专区模块（类龙虾安全风格）

---

## [2026-03-18] - 重大更新：AI超级团队模块与Hero区域重构

### ✨ 新增功能

#### 1. AI超级团队展示模块 (AI超级团队.tsx)
- **三视图模式**：
  - 团队概览：7个Agent卡片展示，每个角色有独特的渐变色彩和图标
  - 角色详情：深度信息展示，包含职责、技能、上下游协作关系
  - 协作模式：可视化协作关系图，展示四种协作流水线

- **7个专业Agent完整信息**：
  | Agent | 角色 | 英文名 | 核心职责 |
  |-------|------|--------|----------|
  | 🎯 总指挥·大总管 | 战略官 | Orchestrator | 统筹协调、任务分发、质量把关 |
  | ✍️ 笔杆子 | 内容官 | Creator | 公众号文章、技术方案、文档生成 |
  | 🧠 参谋 | 智囊 | Researcher | 市场研究、竞品分析、政策追踪 |
  | 📊 运营官 | 增长官 | Operator | 日常运营、数据监控、流程优化 |
  | 🧬 进化官 | 学习官 | Developer | 代码开发、自动化脚本、工具链 |
  | 💹 交易官 | 财经官 | Analyst | 市场监控、投资分析、风险预警 |
  | 🌐 社区官 | 连接官 | Connector | IP运营、社群管理、内容分发 |

- **四种协作模式**：
  1. 内容生产流水线：参谋研究 → 笔杆子创作 → 总指挥审核 → 社区官发布
  2. 技术实现闭环：参谋调研 → 进化官开发 → 运营官监控 → 总指挥评估
  3. 数据驱动决策：运营官采集 → 参谋分析 → 总指挥决策
  4. 市场情报响应：交易官监控 → 参谋分析 → 总指挥决策 → 笔杆子简报

#### 2. Hero区域重新设计
- **左右分栏布局**：
  - 左侧：文字内容（标题、副标题、数据、CTA按钮）
  - 右侧：个人照片 + 浮动信息卡片

- **个人照片展示**：
  - 大尺寸展示 (w-96 h-[500px])
  - 圆角矩形设计 (rounded-3xl)
  - 渐变遮罩效果
  - "可预约咨询" 在线状态标识

- **浮动信息卡片**：
  - 🏆 16年政企项目经验（左上）
  - 🤖 7×24小时AI超级团队（右中）
  - 💎 1.67亿+项目交付金额（左下）
  - 带入场动画效果

- **响应式设计**：
  - 移动端：上下布局，图片在下方
  - 桌面端：左右布局，图片在右侧
  - 最大宽度 max-w-7xl，与正文协调

#### 3. 个人品牌元素
- **个人照片**：添加到Hero区域顶部
- **微信二维码**：添加到CTA联系区域
- **在线状态标识**：绿色"可预约咨询"标签

### 🔧 技术改进

#### 1. 布局优化
- 修复头部窄、正文宽的不协调问题
- 采用左右分栏布局，视觉更平衡
- 统一使用 max-w-7xl 容器宽度

#### 2. 样式修复
- 修复body背景色为 bg-slate-950
- 确保深色主题一致应用
- 修复文字颜色为白色

#### 3. 性能优化
- 使用Next.js静态导出
- 图片预加载优化
- CSS样式内联

### 🐛 问题修复

1. **总指挥名称修正**：从"三万"改为"大总管"
2. **个人照片显示**：修复照片和二维码丢失问题
3. **背景色问题**：修复白色背景显示问题，统一深色主题
4. **部署路径**：修复Nginx根目录配置问题

### 📁 文件变更

```
modified:   app/layout.tsx          # 添加深色背景样式
modified:   app/page.tsx            # Hero区域重构，左右布局
new file:   components/sections/AI超级团队.tsx  # AI团队展示组件
new file:   public/images/王凡个人照片.jpg
new file:   public/images/二维码.jpg
```

### 🚀 部署信息

- **服务器**：ubuntu@43.153.213.134
- **部署目录**：/var/www/wisdomdance
- **Nginx配置**：/etc/nginx/sites-enabled/wisdomdance-ai
- **访问地址**：https://wisdomdance.cn

### 🔐 服务器信息

- **部署用户**：ubuntu
- **部署方式**：tar.gz 压缩包 + SSH解压（密码从环境变量读取，不在此记录）

---

## 历史版本

### [2026-03-17] - 初始版本
- 网站基础框架搭建
- Hero区域基础设计
- 服务能力展示
- 项目案例展示
- 联系方式模块
