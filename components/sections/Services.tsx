'use client'

import { motion } from 'framer-motion'
import { Database, Building2, Users, Zap, Target, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Database,
    emoji: '📊',
    title: '数据资产入表',
    desc: '国企数据资产确权、评估、入表、挂牌全流程服务',
    story: '延安水务环保集团6家单位确权挂牌，在深圳数据交易所完成数据产品上市',
    highlights: ['8大行业覆盖', '15+国企客户', '6步标准化流程'],
    tags: ['确权', '评估', '入表', '挂牌', '深圳数据交易所'],
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Building2,
    emoji: '🏛️',
    title: '公共数据授权经营',
    desc: '为地方政府构建公共数据授权运营体系，含10模块全流程方案',
    story: '延安市医疗健康公共数据授权经营工具包，30+标准化文档，覆盖组织架构到收益分配',
    highlights: ['数据可用不可见', 'L1/L2/L3敏感分级', '伦理审查制度'],
    tags: ['授权运营', '可信空间', '医疗数据', '收益分配'],
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Users,
    emoji: '🔍',
    title: '数字化转型诊断',
    desc: '政府购买服务，为中小企业提供数字化转型诊断与建设方案',
    story: '子长市全域数字化诊断，含农机智租平台；宜川县监测体系整合；丁峰家政/德丰农业等企业级诊断',
    highlights: ['区县级全覆盖', '诊断+方案一体', '大赛参赛经验'],
    tags: ['数字化诊断', '转型方案', '子长市', '宜川县'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    emoji: '💡',
    title: 'AI+政务数字化',
    desc: '智慧城市、数字政府、数据中台建设，AI赋能政务场景',
    story: '吴起/志丹/宜川智慧城市项目，总金额1.8亿，县域数字化标杆',
    highlights: ['1.8亿交付经验', '县域标杆', 'AI+政务'],
    tags: ['智慧城市', '数字政府', '数据中台', 'AI政务'],
    color: 'from-emerald-500 to-teal-500',
  },
]

export default function Services() {
  return (
    <>
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
              四大 <span className="text-blue-400">核心业务</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              16年政企项目经验 + AI 7×24小时团队，为国企和政府提供数据资产全生命周期服务
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
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

                {/* 亮点 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.highlights.map((h, i) => (
                    <span key={i} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs border border-emerald-500/20">
                      ✓ {h}
                    </span>
                  ))}
                </div>

                {/* 案例 */}
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
