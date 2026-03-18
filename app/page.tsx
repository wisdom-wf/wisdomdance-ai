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
  Zap
} from 'lucide-react'
import Link from 'next/link'

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-accent/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="relative z-10 container-custom section">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-slate-300">AI 驱动的个人数字中枢</span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">WisdomDance</span>
              <span className="text-white">.ai</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-400 mb-4"
            >
              让 AI 像心跳一样自然融入工作与生活
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
            >
              16年技术沉淀 × AI 赋能 = 无限可能
              <br />
              专注 AI+政务数字化 | 数据资产入表顾问
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all glow-hover"
              >
                了解服务
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-slate-700 text-white rounded-xl font-semibold transition-all"
              >
                关于我
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { number: '16+', label: '年工作经验', icon: TrendingUp },
                { number: '1.67亿', label: '项目交付金额', icon: Database },
                { number: '35+', label: '团队管理经验', icon: Users },
                { number: '7', label: 'AI Agent 团队', icon: Brain },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 text-center glow-hover transition-all"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              核心服务能力
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              结合16年政企项目经验与AI技术，为企业提供全方位的数字化转型服务
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: '数据资产入表',
                desc: '国企数据资产确权、评估、挂牌全流程服务',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Building2,
                title: 'AI+政务数字化',
                desc: '智慧城市、数字政府、数据中台建设',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                title: 'AI 咨询与培训',
                desc: '企业AI转型咨询、团队AI技能培训',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Zap,
                title: '产品技术顾问',
                desc: '技术架构设计、产品规划、团队搭建',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 glow-hover transition-all group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Team Preview */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4">
                  <Brain className="w-4 h-4" />
                  <span>AI 驱动</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  7×24小时 AI 团队
                </h2>
                <p className="text-slate-400 mb-6">
                  这不是一个普通的团队，这是一个由 AI 驱动的超级团队。
                  7个专业 Agent，不间断工作，持续学习进化。
                </p>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                >
                  认识 AI 团队
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="flex -space-x-4">
                {['🎯', '✍️', '🧠', '📈', '🔄', '💹', '🌐'].map((emoji, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 rounded-full glass flex items-center justify-center text-2xl border-2 border-slate-800"
                    style={{ zIndex: 7 - index }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section border-t border-slate-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">WisdomDance.ai</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 王凡. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:wfanang@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                联系
              </a>
              <a href="https://github.com/wisdomdance" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
