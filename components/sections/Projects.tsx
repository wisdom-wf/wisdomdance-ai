'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, CheckCircle, Clock, Search } from 'lucide-react'

const industries = [
  { id: 'water', label: '水务', emoji: '💧' },
  { id: 'agri', label: '农业', emoji: '🌾' },
  { id: 'tour', label: '旅游', emoji: '🏔️' },
  { id: 'trans', label: '交通', emoji: '🚌' },
  { id: 'energy', label: '能源', emoji: '⚡' },
  { id: 'invest', label: '城投', emoji: '🏗️' },
  { id: 'post', label: '邮政', emoji: '📮' },
  { id: 'medical', label: '医疗', emoji: '🏥' },
]

const projects: Record<string, {
  client: string
  title: string
  amount: string
  period: string
  desc: string
  result: string
  status: 'completed' | 'ongoing' | 'research'
  deliverables: string[]
  tags: string[]
}[]> = {
  water: [{
    client: '延安水务环保集团',
    title: '数据资产入表项目',
    amount: '45万',
    period: '13周',
    desc: '完成6家单位数据资产确权挂牌，数据产品包括居民用水行为分析、企业用水行为分析、水务仪表数据预测监控助手',
    result: '在深圳数据交易所完成数据产品确权和上市，获得《数据商品上市证书》',
    status: 'completed',
    deliverables: ['数据资源盘点报告', '合规评估法律意见书', '评估报告', '成本归集表', '上市证书'],
    tags: ['数据资产', '确权', '挂牌', '深圳数据交易所'],
  }],
  agri: [{
    client: '延安农投集团',
    title: '农业数据资产入表',
    amount: '60万',
    period: '15周',
    desc: '以"延安苹果"全链条数据资产包为核心，覆盖种植、仓储、物流、销售5家子公司数据',
    result: '打造农业数据资产标杆案例，形成苹果产业全链运营方案',
    status: 'ongoing',
    deliverables: ['调研报告', '数据资产入表3个半月实施计划', '苹果产业全链运营方案'],
    tags: ['农业数据', '数据资产包', '苹果产业'],
  }],
  tour: [{
    client: '延安旅游集团',
    title: '文旅数据资产入表',
    amount: '调研中',
    period: '—',
    desc: '调研延安旅游资源数据现状，设计文旅数据整合方案，对标全国文旅数据资产入表案例',
    result: '完成调研报告和数据整合设计方案',
    status: 'research',
    deliverables: ['调研报告', '数据资产整合设计方案', '全国文旅案例集'],
    tags: ['文旅数据', '数据整合'],
  }],
  trans: [{
    client: '延安交通投资集团',
    title: '交通数据资产产品设计',
    amount: '调研中',
    period: '—',
    desc: '分析交投集团数据资源，设计数据资产产品方案，对标全国交通投资集团入表案例',
    result: '输出数据资产产品设计建议',
    status: 'research',
    deliverables: ['产品设计建议', '全国交投案例集'],
    tags: ['交通数据', '产品设计'],
  }],
  energy: [{
    client: '延能化集团',
    title: '数据资产价值化项目',
    amount: '方案中',
    period: '—',
    desc: '测绘数据产品包装、数据资产价值化场景设计、无形资产入表金额预估',
    result: '形成数据产品方案和价值化场景建议书',
    status: 'ongoing',
    deliverables: ['数据产品方案', '价值化场景建议书', '测绘数据产品包装方案'],
    tags: ['能源数据', '测绘数据', '价值化'],
  }],
  invest: [{
    client: '延安城投集团',
    title: '数据资产入表调研',
    amount: '调研中',
    period: '—',
    desc: '线上调研城投集团数据资源现状，分析入表可行性',
    result: '完成线上调研文档',
    status: 'research',
    deliverables: ['线上调研文档', '全国城投案例集'],
    tags: ['城投数据', '可行性分析'],
  }],
  post: [{
    client: '延安邮政',
    title: '数据资产入表工作计划',
    amount: '计划中',
    period: '—',
    desc: '制定邮政数据资产入表工作计划，梳理邮政业务数据资源',
    result: '输出工作计划',
    status: 'research',
    deliverables: ['工作计划'],
    tags: ['邮政数据', '工作计划'],
  }],
  medical: [{
    client: '延安市卫健委',
    title: '医疗健康公共数据授权经营',
    amount: '框架建设中',
    period: '—',
    desc: '构建10模块公共数据授权运营体系，含数据可用不可见技术方案、伦理审查制度、收益分配规则',
    result: '完成30+标准化文档的工具包体系',
    status: 'ongoing',
    deliverables: ['授权运营工具包(10模块)', '数据脱敏规则', '伦理审查制度', '收益分配规则'],
    tags: ['公共数据', '授权经营', '医疗数据', '可信空间'],
  }],
}

const statusConfig = {
  completed: { label: '已完成', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10' },
  ongoing: { label: '进行中', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  research: { label: '调研中', icon: Search, color: 'text-blue-400', bg: 'bg-blue-500/10' },
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('water')

  return (
    <>
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
              数据资产 <span className="text-blue-400">行业覆盖</span>
            </h2>
            <p className="text-slate-400">
              水务 · 农业 · 旅游 · 交通 · 能源 · 城投 · 邮政 · 医疗 — 8大行业实战经验
            </p>
          </motion.div>

          {/* 行业Tab */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === ind.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                <span>{ind.emoji}</span>
                <span>{ind.label}</span>
              </button>
            ))}
          </div>

          {/* 项目卡片 */}
          <div className="space-y-6">
            {(projects[activeTab] || []).map((project, index) => {
              const st = statusConfig[project.status]
              return (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{industries.find(i => i.id === activeTab)?.emoji}</span>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{project.client}</h3>
                        <p className="text-slate-400 text-sm">{project.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">{project.amount}</span>
                      <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${st.bg} ${st.color}`}>
                        <st.icon className="w-3 h-3" />
                        {st.label}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{project.desc}</p>

                  <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                    <p className="text-amber-400 text-sm">
                      <span className="font-semibold">成果：</span>{project.result}
                    </p>
                  </div>

                  {/* 交付物 */}
                  <div className="mb-4">
                    <span className="text-slate-500 text-xs block mb-2">关键交付物</span>
                    <div className="flex flex-wrap gap-2">
                      {project.deliverables.map((d, i) => (
                        <span key={i} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs border border-emerald-500/20">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                        {tag}
                      </span>
                    ))}
                    {project.period !== '—' && (
                      <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                        周期：{project.period}
                      </span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
