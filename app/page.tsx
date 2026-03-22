'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Database, 
  Building2, 
  Users, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Rocket,
  Clock,
  GitBranch,
  MessageSquare,
  Calendar,
  Award,
  Briefcase,
  Code,
  BookOpen,
  Mail,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import AI超级团队 from '@/components/sections/AI超级团队'
import AISecurityZone from '@/components/sections/AISecurityZone'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen bg-[#020617]">
      <Header />
      {/* Hero Section - 左右布局 */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* 动态背景 - Red Mud风格深蓝背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b]" />
        <div className="absolute inset-0 overflow-hidden">
          {/* 蓝色光晕 */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          {/* 红色强调光晕 */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-red-600/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 左侧内容 */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center lg:text-left"
            >
              {/* 故事引入 */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6"
              >
                <span className="text-xl">💼</span>
                <span className="text-slate-300 text-sm">从华为到创业，16年技术沉淀的AI转型之路</span>
              </motion.div>

              {/* 主标题 */}
              <motion.h1
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
              >
                <span className="text-slate-200">红泥数智科技</span>
              </motion.h1>

              {/* 副标题 */}
              <motion.p
                variants={fadeInUp}
                className="text-xl sm:text-2xl text-slate-300 mb-6"
              >
                <span className="text-blue-400">AI+政务数字化专家</span> · <span className="text-cyan-400">数据资产入表顾问</span>
              </motion.p>

              {/* 核心声明 */}
              <motion.div
                variants={fadeInUp}
                className="bg-slate-800/30 border border-blue-500/30 rounded-2xl p-6 mb-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.5) 100%)',
                  boxShadow: '0 4px 30px rgba(59,130,246,0.1)'
                }}
              >
                <p className="text-slate-400 text-lg leading-relaxed">
                  <span className="text-white font-semibold">16年政企项目经验</span> × 
                  <span className="text-white font-semibold"> AI 7×24小时团队</span> = 
                  <span className="text-red-400 font-semibold"> 无限可能</span>
                </p>
                <p className="text-slate-500 mt-2 text-sm">
                  从华为工程师到创业公司副总，从传统IT到AI时代，我一直在探索技术与业务的融合
                </p>
              </motion.div>

              {/* 关键数据展示 */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
              >
                {[
                  { emoji: '⏱️', number: '16+', label: '年工作经验' },
                  { emoji: '💰', number: '1.8亿', label: '项目交付金额' },
                  { emoji: '👥', number: '35+', label: '团队管理规模' },
                  { emoji: '🤖', number: '7', label: 'AI Agent团队' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 hover:border-indigo-500/50 transition-colors text-center lg:text-left"
                  >
                    <div className="text-2xl mb-1">{stat.emoji}</div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA按钮 */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all overflow-hidden relative group"
                  style={{
                    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
                    boxShadow: '0 4px 20px rgba(220,38,38,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                >
                  <span className="relative z-10">了解我的故事</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all border border-blue-500/30"
                  style={{
                    boxShadow: '0 4px 20px rgba(59,130,246,0.1)'
                  }}
                >
                  查看服务能力
                </a>
              </motion.div>
            </motion.div>

            {/* 右侧图片 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* 背景装饰 */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform scale-110" />
                
                {/* 主图片容器 */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden border-4 border-slate-700/50 shadow-2xl">
                  <img
                    src="/images/王凡个人照片.jpg"
                    alt="王凡"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                {/* 在线状态标识 */}
                <div 
                  className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full flex items-center gap-2 border-4 border-[#020617] shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                    boxShadow: '0 4px 20px rgba(220,38,38,0.4)'
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-white text-sm font-medium">可预约咨询</span>
                </div>

                {/* 浮动卡片 - 经验 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-8 top-1/4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <div className="text-white font-bold text-sm">16年</div>
                      <div className="text-slate-400 text-xs">政企项目经验</div>
                    </div>
                  </div>
                </motion.div>

                {/* 浮动卡片 - AI团队 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 top-1/2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <div className="text-white font-bold text-sm">7×24小时</div>
                      <div className="text-slate-400 text-xs">AI超级团队</div>
                    </div>
                  </div>
                </motion.div>

                {/* 浮动卡片 - 项目金额 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute left-4 -bottom-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💎</span>
                    <div>
                      <div className="text-white font-bold text-sm">1.8亿+</div>
                      <div className="text-slate-400 text-xs">项目交付金额</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* 故事时间线 - Red Mud风格 */}
      <section id="story" className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
              <BookOpen className="w-4 h-4" />
              <span>我的故事</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              从华为到创业，<span className="text-red-400">16年</span>技术之路
            </h2>
            <p className="text-slate-400">
              每一个节点，都是一次成长与突破
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { 
                emoji: '🎓', 
                year: '2008', 
                title: '西北工业大学毕业', 
                desc: '软件工程专业，加入华为，开启技术生涯',
                highlight: '华为软件工程师'
              },
              { 
                emoji: '💼', 
                year: '2012', 
                title: '华为技术Leader', 
                desc: '带领12人团队，负责电信级平台开发',
                highlight: '团队技术Leader'
              },
              { 
                emoji: '🏗️', 
                year: '2017', 
                title: '海平方网络科技', 
                desc: '从0组建15人算法团队，提出"智能单元"概念',
                highlight: '算法团队负责人'
              },
              { 
                emoji: '🌆', 
                year: '2018', 
                title: '宏崎达技术', 
                desc: '负责吴起/志丹/宜川智慧城市项目，总金额1.17亿',
                highlight: '副总经理'
              },
              { 
                emoji: '🚀', 
                year: '2024', 
                title: '红泥数智科技', 
                desc: '创立一人公司，专注AI+政务数字化，组建7人AI团队',
                highlight: '创始人·AI专家'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/30 transition-colors"
              >
                <div className="text-3xl">{item.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-400 font-mono text-sm">{item.year}</span>
                    <span className="text-red-400 text-sm font-medium">{item.highlight}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心能力 - Red Mud风格 */}
      <section id="services" className="py-20 px-4" style={{ background: '#020617' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm mb-4 border border-red-500/20">
              <Zap className="w-4 h-4" />
              <span>服务能力</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              四项<span className="text-blue-400">核心能力</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              16年政企项目经验 + AI 7×24小时团队，为您提供全方位的数字化转型服务
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Database,
                emoji: '📊',
                title: '数据资产入表',
                desc: '国企数据资产确权、评估、挂牌全流程服务',
                story: '延安水务环保集团数据资产入表项目，6家单位确权挂牌，预算45万',
                color: 'from-red-500 to-red-600',
                tags: ['确权', '评估', '入表', '挂牌']
              },
              {
                icon: Building2,
                emoji: '🏛️',
                title: 'AI+政务数字化',
                desc: '智慧城市、数字政府、数据中台建设',
                story: '吴起/志丹/宜川智慧城市项目，总金额1.17亿，县域数字化标杆',
                color: 'from-blue-500 to-cyan-500',
                tags: ['智慧城市', '数字政府', '数据中台']
              },
              {
                icon: Users,
                emoji: '🎓',
                title: 'AI 咨询与培训',
                desc: '企业AI转型咨询、团队AI技能培训',
                story: '帮助10+企业完成AI转型，培训50+技术人员掌握AI工具',
                color: 'from-cyan-500 to-blue-500',
                tags: ['咨询', '培训', '转型']
              },
              {
                icon: Target,
                emoji: '💡',
                title: '产品技术顾问',
                desc: '技术架构设计、产品规划、团队搭建',
                story: '从0搭建15人算法团队，设计智能单元架构，支撑千万级项目',
                color: 'from-indigo-500 to-purple-500',
                tags: ['架构', '规划', '团队']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{service.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                  <p className="text-slate-300 text-sm italic">
                    "{service.story}"
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI团队展示 - 升级版 */}
      <AI超级团队 />

      {/* AI安全专区 - 类龙虾安全风格 */}
      <AISecurityZone />

      {/* 案例展示 - Red Mud风格 */}
      <section id="projects" className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #020617 0%, #0f172a 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
              <Briefcase className="w-4 h-4" />
              <span>项目案例</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              真实<span className="text-red-400">项目故事</span>
            </h2>
            <p className="text-slate-400">
              每一个项目，都是一次挑战与突破
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                client: '延安水务环保集团',
                emoji: '💧',
                title: '数据资产入表项目',
                amount: '45万',
                period: '13周',
                desc: '完成6家单位数据资产确权挂牌，数据产品包括居民用水行为分析、企业用水行为分析',
                result: '在深圳数据交易所完成数据产品确权和上市',
                status: '已完成',
                tags: ['数据资产', '确权', '挂牌']
              },
              {
                client: '延安农投集团',
                emoji: '🌾',
                title: '农业数据资产入表',
                amount: '60万',
                period: '15周',
                desc: '以"延安苹果"全链条数据资产包为核心，覆盖5家子公司',
                result: '打造农业数据资产标杆案例',
                status: '进行中',
                tags: ['农业数据', '数据资产包']
              },
              {
                client: '吴起/志丹/宜川',
                emoji: '🌆',
                title: '智慧城市项目',
                amount: '1.17亿',
                period: '3年',
                desc: '县域智慧城市整体建设，包括数据中台、政务系统、民生服务',
                result: '成为陕西省县域智慧城市标杆项目',
                status: '已完成',
                tags: ['智慧城市', '数据中台']
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.emoji}</span>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{project.client}</h3>
                      <p className="text-slate-400 text-sm">{project.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">
                      {project.amount}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.status === '已完成' 
                        ? 'bg-green-500/10 text-green-400' 
                        : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 mb-3">{project.desc}</p>
                <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                  <p className="text-amber-400 text-sm">
                    <span className="font-semibold">成果：</span>{project.result}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                    周期：{project.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 工具箱 - Red Mud风格 */}
      <section className="py-20 px-4" style={{ background: '#0f172a' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm mb-4 border border-cyan-500/20">
              <Code className="w-4 h-4" />
              <span>工具箱</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              自研工具 & <span className="text-cyan-400">推荐</span>
            </h2>
            <p className="text-slate-400">
              提升效率的利器，持续更新中
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: '📊',
                title: '简报汇总中心',
                desc: '定时任务可视化，自动汇总每日简报',
                type: '自研工具'
              },
              {
                emoji: '🤖',
                title: 'AI团队 Gateway',
                desc: '多Agent协作平台，7×24小时工作',
                type: '自研工具'
              },
              {
                emoji: '📈',
                title: '金融市场监控',
                desc: '实时行情简报，自动推送',
                type: '自研工具'
              },
              {
                emoji: '🔧',
                title: 'OpenClaw / WorkBuddy',
                desc: 'AI智能体开发平台',
                type: '推荐工具'
              },
              {
                emoji: '📦',
                title: 'SkillHub 技能商店',
                desc: '丰富的AI技能生态',
                type: '推荐工具'
              },
              {
                emoji: '🔍',
                title: 'Tavily AI 搜索',
                desc: 'AI优化的搜索引擎',
                type: '推荐工具'
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-5 hover:border-indigo-500/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{tool.emoji}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    tool.type === '自研工具' 
                      ? 'bg-indigo-500/10 text-indigo-400' 
                      : 'bg-slate-700/50 text-slate-400'
                  }`}>
                    {tool.type}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2">{tool.title}</h3>
                <p className="text-slate-400 text-sm">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术文章 - Red Mud风格 */}
      <section className="py-20 px-4" style={{ background: '#020617' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm mb-4 border border-green-500/20">
              <BookOpen className="w-4 h-4" />
              <span>洞察观点</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              技术文章 & <span className="text-green-400">思考</span>
            </h2>
            <p className="text-slate-400">
              持续输出，分享经验与见解
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                title: '国企数据资产入表全流程指南',
                desc: '从确权到挂牌，详解数据资产入表的每个环节，含延安水务案例',
                tag: '数据资产',
                date: '2026-03-15'
              },
              {
                title: 'AI时代，一人公司如何服务大客户',
                desc: '7人AI团队服务国企客户，效率提升10倍的实战经验',
                tag: 'AI实践',
                date: '2026-03-10'
              },
              {
                title: '从华为到创业：我的16年技术之路',
                desc: '从软件工程师到AI专家，技术人的成长与转型思考',
                tag: '职业成长',
                date: '2026-03-05'
              },
              {
                title: '县域智慧城市建设的经验与教训',
                desc: '1.8亿项目背后的技术选型、团队管理、客户沟通',
                tag: '智慧城市',
                date: '2026-02-28'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-5 hover:border-indigo-500/30 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs">
                        {article.tag}
                      </span>
                      <span className="text-slate-500 text-xs">{article.date}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{article.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section id="contact" className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              准备好开始合作了吗？
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              无论是数据资产入表、AI+政务数字化，还是技术咨询，
              我的AI团队都随时准备为您服务
            </p>
            
            {/* 二维码区域 */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              {/* 左侧：动态Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4"
              >
                <Logo size="xl" showText={true} className="bg-transparent" />
                <p className="text-slate-500 text-sm">红泥数智科技</p>
              </motion.div>
              
              {/* 中间：连接线（桌面端显示） */}
              <div className="hidden md:flex flex-col items-center gap-2">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-blue-400"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
              </div>
              
              {/* 右侧：二维码 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white rounded-2xl p-4 shadow-2xl shadow-blue-500/10">
                  <img
                    src="/images/二维码.jpg"
                    alt="微信二维码"
                    className="w-40 h-40 rounded-xl"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-white font-semibold mb-2">扫码添加微信</p>
                  <p className="text-slate-400 text-sm">或直接联系：</p>
                  <p className="text-indigo-400 font-medium">wfanang@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:wfanang@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all overflow-hidden relative group"
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
                  boxShadow: '0 4px 20px rgba(220,38,38,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">发送邮件</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-slate-500 text-sm flex items-center justify-center">
                wfanang@gmail.com
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-500/20" style={{ background: '#020617' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
                RED MUD
              </span>
              <span className="text-slate-500 text-sm">|</span>
              <span className="text-slate-400 text-sm">红泥数智科技</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 王凡. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:wfanang@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/wisdom-wf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
