'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { BookOpen, X } from 'lucide-react'

const articles = [
  {
    title: '国企数据资产入表：从延安水务到深圳交易所挂牌的全流程复盘',
    desc: '详解6家单位数据资产确权挂牌的13周实战经验，含成本归集、评估报告、合规法律意见书等关键交付物',
    tag: '数据资产',
    date: '2026-04',
  },
  {
    title: '公共数据授权经营10模块体系：如何为地方政府搭建数据要素市场',
    desc: '基于"数据二十条"和国家数据局政策，从组织架构到收益分配的完整闭环设计',
    tag: '公共数据',
    date: '2026-04',
  },
  {
    title: '"数据可用不可见"：医疗数据可信空间的技术架构与安全设计',
    desc: '数据不动算法动——从L1/L2/L3敏感分级到出域审核，构建多层次数据安全保障体系',
    tag: '数据安全',
    date: '2026-03',
  },
  {
    title: '从华为到创业：一个40岁技术人的AI转型之路',
    desc: '华为9年→海平方→宏崎达副总→一人公司，16年政企项目经验的复盘与思考',
    tag: '职业成长',
    date: '2026-03',
  },
  {
    title: '县域智慧城市建设：1.8亿项目背后的技术选型与团队管理',
    desc: '吴起/志丹/宜川三县智慧城市项目实战，从数据中台到政务系统的全链路建设经验',
    tag: '智慧城市',
    date: '2026-02',
  },
  {
    title: 'AI时代的一人公司：7个AI Agent如何服务国企客户',
    desc: '组建AI超级团队的实战经验——总指挥、笔杆子、参谋、运营官、进化官、交易官、社区官',
    tag: 'AI实践',
    date: '2026-02',
  },
]

export default function Articles() {
  const [showQR, setShowQR] = useState(false)
  return (
    <>
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
              持续输出，分享数据资产与AI领域的实战经验
            </p>
          </motion.div>

          {/* 文章列表 */}
          <div className="space-y-4 mb-12">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-5 hover:border-green-500/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs">
                        {article.tag}
                      </span>
                      <span className="text-slate-500 text-xs">{article.date}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{article.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 公众号引流 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-2xl p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* 二维码 - 点击放大 */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => setShowQR(true)}
                  className="bg-white rounded-2xl p-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
                >
                  <img
                    src="/images/redmud6.jpg"
                    alt="红泥数智公众号"
                    className="w-36 h-36 rounded-xl"
                  />
                  <p className="text-slate-500 text-xs mt-2 group-hover:text-green-600 transition-colors">点击放大 · 扫码关注</p>
                </button>
              </div>

              {/* 文字 */}
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📱</span>
                  <h3 className="text-xl font-bold text-white">关注「红泥数智」公众号</h3>
                </div>
                <p className="text-slate-400 mb-4 max-w-md">
                  更多数据资产入表实战经验、AI+政务案例、行业深度分析，扫码关注获取完整文章。
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {['数据资产入表', '公共数据授权', 'AI政务', '智慧城市', '一人公司'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs border border-green-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 二维码放大弹窗 */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800">📱 扫码关注「红泥数智」</h3>
                <button onClick={() => setShowQR(false)} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
                  <X className="w-4 h-4 text-slate-600" />
                </button>
              </div>
              <img
                src="/images/redmud6.jpg"
                alt="红泥数智公众号"
                className="w-full rounded-2xl"
              />
              <p className="text-center text-slate-500 text-sm mt-4">微信扫一扫 · 获取更多数据资产实战干货</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
