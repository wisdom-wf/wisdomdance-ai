'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, FileCheck, BarChart3, Brain } from 'lucide-react'

const modules = [
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

const products = [
  {
    emoji: '🛡️',
    name: '公共卫生风险预警模型',
    tech: '时空图神经网络 (STGNN)',
    desc: '融合医院、药店、社区多源数据，提前1周预警传染病和慢病急性发作风险',
    color: 'from-red-500 to-orange-500',
  },
  {
    emoji: '📊',
    name: '医疗资源配置指数',
    tech: '综合评价模型',
    desc: '量化评估延安各区县医疗资源均衡度，支撑政府精准投入决策',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    emoji: '📋',
    name: '医疗监管指标库',
    tech: '标准化指标体系',
    desc: '覆盖全科室的标准化监管指标，为卫健部门提供统一考核基准',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    emoji: '🤖',
    name: '医学大模型训练安全流程',
    tech: '数据可用不可见',
    desc: '县域级首个医学AI安全规范，确保大模型训练全程合规可控',
    color: 'from-emerald-500 to-teal-500',
  },
]

export default function DataAuthorization() {
  return (
    <>
      <section className="py-20 px-4" style={{ background: '#020617' }}>
        <div className="max-w-6xl mx-auto">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm mb-4 border border-purple-500/20">
              <Shield className="w-4 h-4" />
              <span>公共数据授权</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              公共数据授权经营 <span className="text-purple-400">完整方案</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              基于"数据二十条"和国家数据局政策，为地方政府提供公共数据授权运营全流程服务
            </p>
          </motion.div>

          {/* 核心理念 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 mb-12 text-center"
          >
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold text-white mb-2">"数据可用不可见"</h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-6">
              原始数据不出域，数据不动算法动。通过可信空间实现数据所有权与使用权分离，在安全可控前提下释放数据价值。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <Database className="w-5 h-5" />, title: '数据入域', desc: '加密传输 + 前置脱敏 + 安全存储' },
                { icon: <Eye className="w-5 h-5" />, title: '安全计算', desc: '堡垒机 + 录屏审计 + 隔离环境' },
                { icon: <FileCheck className="w-5 h-5" />, title: '结果出域', desc: 'K-匿名 + 敏感度检查 + 人工审核' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-purple-400 mb-2 flex justify-center">{item.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-slate-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 10模块体系 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-xl font-bold text-white text-center mb-8">10大模块体系</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {modules.map((mod, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{mod.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{mod.title}</div>
                  <div className="text-slate-500 text-xs">{mod.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 收益分配 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 mb-16"
          >
            <h3 className="text-lg font-bold text-white text-center mb-6">收益分配机制</h3>
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
          </motion.div>

          {/* 标准化数据产品 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white text-center mb-8">标准化数据产品</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((prod, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${prod.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {prod.emoji}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{prod.name}</h4>
                      <span className="text-purple-400 text-xs font-mono">{prod.tech}</span>
                      <p className="text-slate-400 text-sm mt-2">{prod.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
