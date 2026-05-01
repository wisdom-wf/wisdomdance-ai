'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export default function Articles() {
  return (
    <>
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
                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded text-xs">即将发布</span>
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
  </div>
</section>

    </>
  )
}
