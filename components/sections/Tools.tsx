'use client'

import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export default function Tools() {
  return (
    <>
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

    </>
  )
}
