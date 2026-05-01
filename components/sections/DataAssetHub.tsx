'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Database, CheckCircle, Clock, Search, Shield, ArrowRight,
} from 'lucide-react'

// ─── Tab定义 ───
const tabs = [
  { id: 'overview', label: '业务总览', emoji: '📊' },
  { id: 'method', label: '六步法', emoji: '🔬' },
  { id: 'cases', label: '行业案例', emoji: '🏢' },
  { id: 'auth', label: '公共数据授权', emoji: '🔐' },
]

// ─── 六步法数据 ───
const steps = [
  { num: '01', emoji: '📋', title: '数据资源盘点', desc: '梳理企业全部数据资源，形成标准化资产目录', deliverable: '《企业数据资源盘点报告》', color: 'from-blue-500 to-cyan-500' },
  { num: '02', emoji: '⚖️', title: '合规评估', desc: '第三方律所出具数据产品合规法律意见', deliverable: '《数据产品合规评估法律意见书》', color: 'from-purple-500 to-indigo-500' },
  { num: '03', emoji: '💰', title: '成本归集', desc: '按财政部准则归集数据相关成本，留存佐证材料', deliverable: '《成本归集表》+ 佐证材料清单', color: 'from-amber-500 to-orange-500' },
  { num: '04', emoji: '📊', title: '价值评估', desc: '第三方评估机构完成数据资产价值评估', deliverable: '《数据资产评估报告》', color: 'from-emerald-500 to-teal-500' },
  { num: '05', emoji: '📝', title: '入表记账', desc: '按企业会计准则完成无形资产/存货入表', deliverable: '入表账务处理 + 定期报告', color: 'from-red-500 to-pink-500' },
  { num: '06', emoji: '🏪', title: '产品上架', desc: '在深圳数据交易所等平台完成确权挂牌上市', deliverable: '《数据商品上市证书》', color: 'from-sky-500 to-blue-500' },
]

// ─── 行业案例数据 ───
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
  client: string; title: string; amount: string; period: string
  desc: string; result: string; status: 'completed' | 'ongoing' | 'research'
  deliverables: string[]; tags: string[]
}[]> = {
  water: [{ client: '延安水务环保集团', title: '数据资产入表项目', amount: '45万', period: '13周', desc: '完成6家单位数据资产确权挂牌，数据产品包括居民用水行为分析、企业用水行为分析、水务仪表数据预测监控助手', result: '在深圳数据交易所完成数据产品确权和上市，获得《数据商品上市证书》', status: 'completed', deliverables: ['数据资源盘点报告', '合规评估法律意见书', '评估报告', '成本归集表', '上市证书'], tags: ['数据资产', '确权', '挂牌', '深圳数据交易所'] }],
  agri: [{ client: '延安农投集团', title: '农业数据资产入表', amount: '60万', period: '15周', desc: '以"延安苹果"全链条数据资产包为核心，覆盖种植、仓储、物流、销售5家子公司数据', result: '打造农业数据资产标杆案例，形成苹果产业全链运营方案', status: 'ongoing', deliverables: ['调研报告', '数据资产入表实施计划', '苹果产业全链运营方案'], tags: ['农业数据', '数据资产包', '苹果产业'] }],
  tour: [{ client: '延安旅游集团', title: '文旅数据资产入表', amount: '调研中', period: '—', desc: '调研延安旅游资源数据现状，设计文旅数据整合方案，对标全国文旅数据资产入表案例', result: '完成调研报告和数据整合设计方案', status: 'research', deliverables: ['调研报告', '数据整合设计方案', '全国文旅案例集'], tags: ['文旅数据', '数据整合'] }],
  trans: [{ client: '延安交通投资集团', title: '交通数据资产产品设计', amount: '调研中', period: '—', desc: '分析交投集团数据资源，设计数据资产产品方案，对标全国交通投资集团入表案例', result: '输出数据资产产品设计建议', status: 'research', deliverables: ['产品设计建议', '全国交投案例集'], tags: ['交通数据', '产品设计'] }],
  energy: [{ client: '延能化集团', title: '数据资产价值化项目', amount: '方案中', period: '—', desc: '测绘数据产品包装、数据资产价值化场景设计、无形资产入表金额预估', result: '形成数据产品方案和价值化场景建议书', status: 'ongoing', deliverables: ['数据产品方案', '价值化场景建议书', '测绘产品包装方案'], tags: ['能源数据', '测绘数据', '价值化'] }],
  invest: [{ client: '延安城投集团', title: '数据资产入表调研', amount: '调研中', period: '—', desc: '线上调研城投集团数据资源现状，分析入表可行性', result: '完成线上调研文档', status: 'research', deliverables: ['线上调研文档', '全国城投案例集'], tags: ['城投数据', '可行性分析'] }],
  post: [{ client: '延安邮政', title: '数据资产入表工作计划', amount: '计划中', period: '—', desc: '制定邮政数据资产入表工作计划，梳理邮政业务数据资源', result: '输出工作计划', status: 'research', deliverables: ['工作计划'], tags: ['邮政数据'] }],
  medical: [{ client: '延安市卫健委', title: '医疗健康公共数据授权经营', amount: '框架建设中', period: '—', desc: '构建10模块公共数据授权运营体系，含数据可用不可见技术方案、伦理审查制度、收益分配规则', result: '完成30+标准化文档的工具包体系', status: 'ongoing', deliverables: ['授权运营工具包(10模块)', '数据脱敏规则', '伦理审查制度', '收益分配规则'], tags: ['公共数据', '授权经营', '医疗数据', '可信空间'] }],
}

const statusConfig = {
  completed: { label: '已完成', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10' },
  ongoing: { label: '进行中', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  research: { label: '调研中', icon: Search, color: 'text-blue-400', bg: 'bg-blue-500/10' },
}

// ─── 公共数据授权 10模块 ───
const authModules = [
  { icon: '🏛️', title: '组织架构', desc: '数据管理部门→卫健委→专家委员会→运营机构' },
  { icon: '📋', title: '数据资源梳理', desc: 'L1/L2/L3敏感分级，高敏感数据判定指南' },
  { icon: '⚖️', title: '授权论证', desc: '必要性论证+风险评估+合法性清单' },
  { icon: '🔄', title: '授权流程', desc: '申请→审批→出域审核，全链路标准化' },
  { icon: '🔐', title: '数据治理', desc: '脱敏规则、匿名化规范、可信空间' },
  { icon: '🖥️', title: '平台方案', desc: '数据专区技术架构、可信空间配置' },
  { icon: '📦', title: '标准产品', desc: '预警模型、资源配置指数、监管指标库' },
  { icon: '📄', title: '协议制度', desc: '授权协议、安全责任书、伦理审批' },
  { icon: '📊', title: '评估体系', desc: '100分制4级评定，年度/期满评估' },
  { icon: '💰', title: '收益分配', desc: '市政府40%+数据方20%+运营方40%' },
]

const authProducts = [
  { emoji: '🛡️', name: '公共卫生风险预警模型', tech: '时空图神经网络 (STGNN)', desc: '融合医院、药店、社区多源数据，提前1周预警传染病和慢病急性发作风险', color: 'from-red-500 to-orange-500' },
  { emoji: '📊', name: '医疗资源配置指数', tech: '综合评价模型', desc: '量化评估延安各区县医疗资源均衡度，支撑政府精准投入决策', color: 'from-blue-500 to-cyan-500' },
  { emoji: '📋', name: '医疗监管指标库', tech: '标准化指标体系', desc: '覆盖全科室的标准化监管指标，为卫健部门提供统一考核基准', color: 'from-purple-500 to-indigo-500' },
  { emoji: '🤖', name: '医学大模型训练安全流程', tech: '数据可用不可见', desc: '县域级首个医学AI安全规范，确保大模型训练全程合规可控', color: 'from-emerald-500 to-teal-500' },
]

// ═══════════════════════════════════════
// 主组件
// ═══════════════════════════════════════
export default function DataAssetHub() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeIndustry, setActiveIndustry] = useState('water')

  return (
    <section id="data-asset" className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #020617 0%, #0a0f1e 50%, #020617 100%)' }}>
      <div className="max-w-6xl mx-auto">

        {/* ═══ 顶部标题 ═══ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
            <Database className="w-4 h-4" />
            <span>核心业务 · 数据资产</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            数据资产 <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">全生命周期服务</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            从数据资源盘点到深圳数据交易所挂牌上市，覆盖8大行业15+国企客户。
            <br />
            提供数据资产入表、公共数据授权经营、数字化转型诊断一站式服务。
          </p>
        </motion.div>

        {/* ═══ 关键数据条 ═══ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { emoji: '🏭', number: '8+', label: '覆盖行业', sub: '水务·农业·旅游·交通·能源·城投·邮政·医疗' },
            { emoji: '🏢', number: '15+', label: '服务国企', sub: '延安水务·农投·旅游·交投·延能化·城投·邮政' },
            { emoji: '📋', number: '6步', label: '标准化流程', sub: '盘点→合规→成本→评估→入表→上架' },
            { emoji: '🏦', number: '深圳', label: '交易所挂牌', sub: '延安水务数据产品已确权上市' },
          ].map((s, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 text-center hover:border-amber-500/30 transition-colors">
              <div className="text-2xl mb-2">{s.emoji}</div>
              <div className="text-2xl font-bold text-white mb-1">{s.number}</div>
              <div className="text-sm text-amber-400 font-medium mb-1">{s.label}</div>
              <div className="text-xs text-slate-500">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* ═══ Tab 导航 ═══ */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ═══ Tab 内容 ═══ */}
        <div className="min-h-[400px]">

          {/* ─── 业务总览 ─── */}
          {activeTab === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* 四大业务 */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { emoji: '📊', title: '数据资产入表', desc: '国企数据资产确权、评估、入表、挂牌全流程服务', highlights: ['8大行业覆盖', '15+国企客户', '深圳交易所挂牌'], color: 'from-amber-500 to-orange-500' },
                  { emoji: '🔐', title: '公共数据授权经营', desc: '为地方政府构建公共数据授权运营体系，含10模块全流程方案', highlights: ['数据可用不可见', '30+标准化文档', '伦理审查制度'], color: 'from-purple-500 to-indigo-500' },
                  { emoji: '🔍', title: '数字化转型诊断', desc: '政府购买服务，为中小企业提供数字化转型诊断与建设方案', highlights: ['子长市全域诊断', '宜川县监测整合', '企业级诊断报告'], color: 'from-blue-500 to-cyan-500' },
                  { emoji: '💡', title: 'AI+政务数字化', desc: '智慧城市、数字政府、数据中台建设，AI赋能政务场景', highlights: ['1.8亿交付经验', '县域标杆项目', 'AI+政务融合'], color: 'from-emerald-500 to-teal-500' },
                ].map((svc, i) => (
                  <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${svc.color} flex items-center justify-center mb-4`}>
                      <span className="text-2xl">{svc.emoji}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{svc.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.highlights.map((h, j) => (
                        <span key={j} className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded text-xs border border-amber-500/20">✓ {h}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 合作模式 */}
              <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">合作模式</h3>
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {[
                    { label: '项目制', desc: '单个集团数据资产入表，45-60万/项目，13-15周交付', emoji: '📦' },
                    { label: '平台制', desc: '全域数据资产运营监管平台建设，长期运营合作', emoji: '🏗️' },
                    { label: '顾问制', desc: '技术顾问+培训，帮助企业建立自有数据资产能力', emoji: '🎓' },
                  ].map((m, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <div className="text-3xl mb-2">{m.emoji}</div>
                      <div className="text-white font-semibold mb-1">{m.label}</div>
                      <div className="text-slate-400 text-xs">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── 六步法 ─── */}
          {activeTab === 'method' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">数据资产入表 <span className="text-amber-400">标准化六步法</span></h3>
                <p className="text-slate-400">已在延安水务、农投等多家国企验证，从盘点到挂牌全流程标准化交付</p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-emerald-500/50 to-sky-500/50" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {steps.map((step, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                      <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold`}>STEP {step.num}</div>
                      <div className="mt-2">
                        <div className="text-4xl mb-3">{step.emoji}</div>
                        <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-slate-400 text-sm mb-4">{step.desc}</p>
                        <div className="bg-slate-900/50 rounded-lg px-3 py-2 border border-slate-700/50">
                          <span className="text-slate-500 text-xs">交付物</span>
                          <p className="text-amber-400 text-sm font-medium">{step.deliverable}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── 行业案例 ─── */}
          {activeTab === 'cases' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">数据资产 <span className="text-amber-400">行业覆盖</span></h3>
                <p className="text-slate-400">水务 · 农业 · 旅游 · 交通 · 能源 · 城投 · 邮政 · 医疗 — 8大行业实战经验</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {industries.map((ind) => (
                  <button key={ind.id} onClick={() => setActiveIndustry(ind.id)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${activeIndustry === ind.id ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/20' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700'}`}>
                    <span>{ind.emoji}</span><span>{ind.label}</span>
                  </button>
                ))}
              </div>
              <div className="space-y-6">
                {(projects[activeIndustry] || []).map((project, index) => {
                  const st = statusConfig[project.status]
                  return (
                    <motion.div key={`${activeIndustry}-${index}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{industries.find(i => i.id === activeIndustry)?.emoji}</span>
                          <div>
                            <h3 className="text-white font-semibold text-lg">{project.client}</h3>
                            <p className="text-slate-400 text-sm">{project.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">{project.amount}</span>
                          <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${st.bg} ${st.color}`}>
                            <st.icon className="w-3 h-3" />{st.label}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-4">{project.desc}</p>
                      <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                        <p className="text-amber-400 text-sm"><span className="font-semibold">成果：</span>{project.result}</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-slate-500 text-xs block mb-2">关键交付物</span>
                        <div className="flex flex-wrap gap-2">
                          {project.deliverables.map((d, i) => (
                            <span key={i} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs border border-emerald-500/20">{d}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (<span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">{tag}</span>))}
                        {project.period !== '—' && <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">周期：{project.period}</span>}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* ─── 公共数据授权 ─── */}
          {activeTab === 'auth' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">公共数据授权经营 <span className="text-purple-400">完整方案</span></h3>
                <p className="text-slate-400">基于"数据二十条"和国家数据局政策，为地方政府提供公共数据授权运营全流程服务</p>
              </div>

              {/* 核心理念 */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold text-white mb-2">"数据可用不可见"</h3>
                <p className="text-slate-400 max-w-xl mx-auto mb-6">原始数据不出域，数据不动算法动。通过可信空间实现数据所有权与使用权分离。</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {[
                    { icon: '📥', title: '数据入域', desc: '加密传输 + 前置脱敏 + 安全存储' },
                    { icon: '👁️', title: '安全计算', desc: '堡垒机 + 录屏审计 + 隔离环境' },
                    { icon: '✅', title: '结果出域', desc: 'K-匿名 + 敏感度检查 + 人工审核' },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-slate-500 text-xs">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10模块 */}
              <div>
                <h4 className="text-lg font-bold text-white text-center mb-6">10大模块体系</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {authModules.map((mod, i) => (
                    <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors">
                      <div className="text-2xl mb-2">{mod.icon}</div>
                      <div className="text-white font-semibold text-sm mb-1">{mod.title}</div>
                      <div className="text-slate-500 text-xs">{mod.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 收益分配 */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white text-center mb-6">收益分配机制</h4>
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    { pct: '40%', label: '市政府', desc: '纳入财政，专项用于医疗和数据基建', color: 'text-blue-400' },
                    { pct: '20%', label: '数据提供方', desc: '激励医院等提高数据质量和共享意愿', color: 'text-emerald-400' },
                    { pct: '40%', label: '运营机构', desc: '对其技术投入和市场风险的合理回报', color: 'text-purple-400' },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-3xl font-bold ${item.color} mb-1`}>{item.pct}</div>
                      <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                      <div className="text-slate-500 text-xs">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 标准产品 */}
              <div>
                <h4 className="text-lg font-bold text-white text-center mb-6">标准化数据产品</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {authProducts.map((prod, i) => (
                    <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${prod.color} flex items-center justify-center text-2xl flex-shrink-0`}>{prod.emoji}</div>
                        <div>
                          <h4 className="text-white font-bold mb-1">{prod.name}</h4>
                          <span className="text-purple-400 text-xs font-mono">{prod.tech}</span>
                          <p className="text-slate-400 text-sm mt-2">{prod.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
