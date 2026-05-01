'use client'

import { motion } from 'framer-motion'
import { Database, Building2, Users, Zap, Target } from 'lucide-react'

export default function Services() {
  return (
    <>
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
          story: '吴起/志丹/宜川智慧城市项目，总金额1.8亿，县域数字化标杆',
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

    </>
  )
}
