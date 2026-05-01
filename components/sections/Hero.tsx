'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
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
    <>
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

    </>
  )
}
