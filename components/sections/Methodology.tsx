'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    emoji: '📋',
    title: '数据资源盘点',
    desc: '梳理企业全部数据资源，形成标准化资产目录',
    deliverable: '《企业数据资源盘点报告》',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    num: '02',
    emoji: '⚖️',
    title: '合规评估',
    desc: '第三方律所出具数据产品合规法律意见',
    deliverable: '《数据产品合规评估法律意见书》',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    num: '03',
    emoji: '💰',
    title: '成本归集',
    desc: '按财政部准则归集数据相关成本，留存佐证材料',
    deliverable: '《成本归集表》+ 佐证材料清单',
    color: 'from-amber-500 to-orange-500',
  },
  {
    num: '04',
    emoji: '📊',
    title: '价值评估',
    desc: '第三方评估机构完成数据资产价值评估',
    deliverable: '《数据资产评估报告》',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    num: '05',
    emoji: '📝',
    title: '入表记账',
    desc: '按企业会计准则完成无形资产/存货入表',
    deliverable: '入表账务处理 + 定期报告',
    color: 'from-red-500 to-pink-500',
  },
  {
    num: '06',
    emoji: '🏪',
    title: '产品上架',
    desc: '在深圳数据交易所等平台完成确权挂牌上市',
    deliverable: '《数据商品上市证书》',
    color: 'from-sky-500 to-blue-500',
  },
]

export default function Methodology() {
  return (
    <>
      <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm mb-4 border border-emerald-500/20">
              <span>🔬</span>
              <span>方法论</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              数据资产入表 <span className="text-emerald-400">六步法</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              从数据资源盘点到交易所挂牌，标准化流程覆盖全生命周期。已在延安水务、农投等多家国企验证。
            </p>
          </motion.div>

          {/* 流程步骤 */}
          <div className="relative">
            {/* 连接线 - 桌面端 */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-emerald-500/50 to-sky-500/50" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group"
                >
                  {/* 步骤编号 */}
                  <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold`}>
                    STEP {step.num}
                  </div>

                  <div className="mt-2">
                    <div className="text-4xl mb-3">{step.emoji}</div>
                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{step.desc}</p>

                    {/* 交付物 */}
                    <div className="bg-slate-900/50 rounded-lg px-3 py-2 border border-slate-700/50">
                      <span className="text-slate-500 text-xs">交付物</span>
                      <p className="text-emerald-400 text-sm font-medium">{step.deliverable}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 底部数据 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { number: '8+', label: '覆盖行业' },
              { number: '15+', label: '服务国企' },
              { number: '6', label: '标准化步骤' },
              { number: '100%', label: '合规交付率' },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
