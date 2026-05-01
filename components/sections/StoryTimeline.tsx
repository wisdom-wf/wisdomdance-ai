'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export default function StoryTimeline() {
  return (
    <>
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
          desc: '华为10年历练，技术沉淀深厚，为后续经历打下坚实基础',
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
          desc: '接手并壮大研发队伍50多人，手搓数据中台为智慧城市构筑核心组件',
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

    </>
  )
}
