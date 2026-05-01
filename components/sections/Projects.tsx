'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Projects() {
  return (
    <>
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
          amount: '1.8亿',
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

    </>
  )
}
