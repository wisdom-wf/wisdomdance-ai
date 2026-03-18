"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Brain, Users, Workflow, Zap, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface Agent {
  id: string;
  emoji: string;
  name: string;
  englishName: string;
  role: string;
  roleEn: string;
  shortDesc: string;
  fullDesc: string;
  responsibilities: string[];
  skills: string[];
  upstream: string[];
  downstream: string[];
  workStyle: string;
  outputFormat: string;
  color: string;
  gradient: string;
}

const agents: Agent[] = [
  {
    id: "commander",
    emoji: "🎯",
    name: "总指挥 · 大总管",
    englishName: "Orchestrator",
    role: "战略官",
    roleEn: "Strategist",
    shortDesc: "统筹全局、制定策略",
    fullDesc: "AI团队的中央处理器，负责统筹协调、任务分发、质量把关。作为核心节点，接收所有Agent的汇报，确保团队高效协作。",
    responsibilities: [
      "接收用户需求，理解意图",
      "分析任务复杂度，选择最适合的Agent执行",
      "协调多Agent协作完成复杂任务",
      "审核输出质量，确保符合标准",
      "汇总各Agent成果，形成完整交付"
    ],
    skills: ["决策判断", "任务分解", "质量审核", "跨Agent协调", "进度监控"],
    upstream: ["用户", "业务方"],
    downstream: ["笔杆子", "参谋", "进化官", "运营官", "交易官", "社区官"],
    workStyle: "全局视野，善于统筹，注重结果",
    outputFormat: "任务分配指令、质量审核报告、最终交付物",
    color: "red",
    gradient: "from-red-500 to-pink-600"
  },
  {
    id: "writer",
    emoji: "✍️",
    name: "笔杆子",
    englishName: "Creator",
    role: "内容官",
    roleEn: "Content Officer",
    shortDesc: "文案创作、公众号运营",
    fullDesc: "专业的内容创作者，负责各类文案、方案、报告的撰写。从公众号文章到技术方案，从项目报告到营销文案，笔杆子都能高质量完成。",
    responsibilities: [
      "公众号文章撰写与排版",
      "技术方案与PRD文档编写",
      "项目报告与总结文档",
      "营销文案与宣传材料",
      "邮件、通知等商务文书"
    ],
    skills: ["文案写作", "技术文档", "PRD编写", "内容策划", "排版设计"],
    upstream: ["总指挥", "参谋"],
    downstream: ["社区官"],
    workStyle: "用户导向，注重表达，追求质量",
    outputFormat: "Markdown文档、HTML页面、Word文档",
    color: "amber",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "advisor",
    emoji: "🧠",
    name: "参谋",
    englishName: "Researcher",
    role: "智囊",
    roleEn: "Advisor",
    shortDesc: "分析建议、决策支持",
    fullDesc: "深度研究专家，负责市场调研、竞品分析、政策追踪。为团队提供数据驱动的洞察和建议，支撑战略决策。",
    responsibilities: [
      "行业趋势与市场研究",
      "竞品分析与对标",
      "政策解读与影响分析",
      "用户需求调研",
      "数据洞察与建议"
    ],
    skills: ["深度研究", "竞品分析", "政策追踪", "数据分析", "趋势预判"],
    upstream: ["总指挥", "业务方"],
    downstream: ["笔杆子", "进化官"],
    workStyle: "数据驱动，深度思考，客观中立",
    outputFormat: "研究报告、分析表格、洞察摘要",
    color: "purple",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: "operator",
    emoji: "📊",
    name: "运营官",
    englishName: "Operator",
    role: "增长官",
    roleEn: "Growth Officer",
    shortDesc: "数据分析、用户增长",
    fullDesc: "日常运营专家，负责流程管理、数据监控、效率优化。确保团队运营顺畅，数据驱动持续改进。",
    responsibilities: [
      "日常运营流程管理",
      "数据监控与报表",
      "自动化任务配置",
      "流程优化与标准化",
      "资源协调与分配"
    ],
    skills: ["流程管理", "数据分析", "自动化", "报表制作", "资源协调"],
    upstream: ["总指挥", "进化官"],
    downstream: ["总指挥"],
    workStyle: "细致严谨，数据导向，追求效率",
    outputFormat: "运营报表、流程文档、监控面板",
    color: "blue",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: "evolver",
    emoji: "🧬",
    name: "进化官",
    englishName: "Developer",
    role: "学习官",
    roleEn: "Learner",
    shortDesc: "技能学习、知识更新",
    fullDesc: "技术开发专家，负责代码实现、工具开发、自动化脚本。持续学习新技术，为团队提供技术支撑。",
    responsibilities: [
      "代码开发与实现",
      "自动化脚本编写",
      "工具链搭建与维护",
      "技术方案设计",
      "DevOps流程配置"
    ],
    skills: ["代码开发", "脚本编写", "自动化", "DevOps", "工具开发"],
    upstream: ["总指挥", "参谋"],
    downstream: ["运营官"],
    workStyle: "技术导向，追求效率，持续学习",
    outputFormat: "源代码、脚本文件、技术文档",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "trader",
    emoji: "💹",
    name: "交易官",
    englishName: "Analyst",
    role: "财经官",
    roleEn: "Finance Officer",
    shortDesc: "市场分析、投资决策",
    fullDesc: "金融分析专家，负责市场行情监控、投资分析、风险预警。为团队提供专业的财经洞察。",
    responsibilities: [
      "市场行情实时监控",
      "投资组合分析",
      "风险预警与提醒",
      "财报解读与分析",
      "投资策略建议"
    ],
    skills: ["金融分析", "市场监控", "风险评估", "数据可视化", "投资研究"],
    upstream: ["总指挥"],
    downstream: ["总指挥", "社区官"],
    workStyle: "理性客观，数据驱动，风险敏感",
    outputFormat: "市场简报、分析报告、预警通知",
    color: "green",
    gradient: "from-green-500 to-lime-600"
  },
  {
    id: "community",
    emoji: "🌐",
    name: "社区官",
    englishName: "Connector",
    role: "连接官",
    roleEn: "Community Officer",
    shortDesc: "社群运营、对外合作",
    fullDesc: "IP运营专家，负责社群管理、内容分发、品牌建设。连接用户与团队，维护良好的社区生态。",
    responsibilities: [
      "个人IP运营与维护",
      "社群互动与管理",
      "内容分发与传播",
      "用户反馈收集",
      "品牌形象建设"
    ],
    skills: ["社群运营", "内容分发", "IP打造", "用户互动", "品牌传播"],
    upstream: ["总指挥", "笔杆子"],
    downstream: ["用户", "社群"],
    workStyle: "用户导向，善于沟通，注重体验",
    outputFormat: "发布内容、互动记录、反馈汇总",
    color: "sky",
    gradient: "from-sky-500 to-blue-600"
  }
];

const workflows = [
  {
    title: "内容生产流水线",
    icon: "✍️",
    color: "amber",
    desc: "从研究到创作到发布的完整内容生产流程",
    steps: [
      { agent: "参谋", action: "热点研究", color: "purple" },
      { agent: "笔杆子", action: "内容创作", color: "amber" },
      { agent: "总指挥", action: "质量审核", color: "red" },
      { agent: "社区官", action: "分发发布", color: "sky" }
    ]
  },
  {
    title: "技术实现闭环",
    icon: "🧬",
    color: "emerald",
    desc: "从需求分析到开发实现到运营监控的技术交付闭环",
    steps: [
      { agent: "参谋", action: "需求调研", color: "purple" },
      { agent: "进化官", action: "开发实现", color: "emerald" },
      { agent: "运营官", action: "运营监控", color: "blue" },
      { agent: "总指挥", action: "效果评估", color: "red" }
    ]
  },
  {
    title: "数据驱动决策",
    icon: "📊",
    color: "blue",
    desc: "运营官收集数据，参谋分析洞察，总指挥决策优化",
    steps: [
      { agent: "运营官", action: "数据采集", color: "blue" },
      { agent: "参谋", action: "分析洞察", color: "purple" },
      { agent: "总指挥", action: "策略决策", color: "red" }
    ]
  },
  {
    title: "市场情报响应",
    icon: "💹",
    color: "green",
    desc: "实时监控市场动态，快速响应并提供决策支持",
    steps: [
      { agent: "交易官", action: "市场监控", color: "green" },
      { agent: "参谋", action: "深度分析", color: "purple" },
      { agent: "总指挥", action: "决策建议", color: "red" },
      { agent: "笔杆子", action: "简报输出", color: "amber" }
    ]
  }
];

function AgentCard({ agent, onClick }: { agent: Agent; onClick: () => void }) {
  const colorClasses: Record<string, { border: string; bg: string; text: string; glow: string }> = {
    red: { border: "border-red-500/30", bg: "bg-red-500/10", text: "text-red-400", glow: "group-hover:shadow-red-500/20" },
    amber: { border: "border-amber-500/30", bg: "bg-amber-500/10", text: "text-amber-400", glow: "group-hover:shadow-amber-500/20" },
    purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400", glow: "group-hover:shadow-purple-500/20" },
    blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", glow: "group-hover:shadow-blue-500/20" },
    emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", glow: "group-hover:shadow-emerald-500/20" },
    green: { border: "border-green-500/30", bg: "bg-green-500/10", text: "text-green-400", glow: "group-hover:shadow-green-500/20" },
    sky: { border: "border-sky-500/30", bg: "bg-sky-500/10", text: "text-sky-400", glow: "group-hover:shadow-sky-500/20" }
  };

  const colors = colorClasses[agent.color];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`bg-slate-800/50 border ${colors.border} rounded-xl p-5 cursor-pointer 
        transition-all duration-300 group hover:bg-slate-800/80 hover:shadow-lg ${colors.glow}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {agent.emoji}
        </div>
        <div className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs rounded-full`}>
          {agent.role}
        </div>
      </div>
      
      <h3 className="text-white font-bold text-lg mb-1">{agent.name}</h3>
      <p className="text-slate-400 text-xs mb-3">{agent.englishName} · {agent.roleEn}</p>
      <p className="text-slate-500 text-sm">{agent.shortDesc}</p>
      
      <div className="mt-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-green-400 text-xs">在线</span>
        <ChevronRight className="w-4 h-4 text-slate-600 ml-auto group-hover:text-slate-400 transition-colors" />
      </div>
    </motion.div>
  );
}

function AgentDetailModal({ agent, onClose }: { agent: Agent; onClose: () => void }) {
  if (!agent) return null;

  const colorClasses: Record<string, { border: string; bg: string; text: string; gradient: string }> = {
    red: { border: "border-red-500/30", bg: "bg-red-500/10", text: "text-red-400", gradient: "from-red-500 to-pink-600" },
    amber: { border: "border-amber-500/30", bg: "bg-amber-500/10", text: "text-amber-400", gradient: "from-amber-500 to-orange-600" },
    purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400", gradient: "from-purple-500 to-indigo-600" },
    blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", gradient: "from-blue-500 to-cyan-600" },
    emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", gradient: "from-emerald-500 to-teal-600" },
    green: { border: "border-green-500/30", bg: "bg-green-500/10", text: "text-green-400", gradient: "from-green-500 to-lime-600" },
    sky: { border: "border-sky-500/30", bg: "bg-sky-500/10", text: "text-sky-400", gradient: "from-sky-500 to-blue-600" }
  };

  const colors = colorClasses[agent.color];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${colors.gradient} p-6 relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="flex items-center gap-4">
              <div className="text-6xl">{agent.emoji}</div>
              <div>
                <h2 className="text-2xl font-bold text-white">{agent.name}</h2>
                <p className="text-white/80">{agent.englishName} · {agent.role} · {agent.roleEn}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                角色定位
              </h3>
              <p className="text-slate-400">{agent.fullDesc}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-400" />
                核心职责
              </h3>
              <ul className="space-y-2">
                {agent.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-400">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 ${colors.bg.replace('/10', '')}`} />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-white font-semibold mb-3">专业技能</h3>
              <div className="flex flex-wrap gap-2">
                {agent.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm border ${colors.border}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Collaboration */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border}`}>
                <h4 className={`text-sm font-medium ${colors.text} mb-2`}>上游输入</h4>
                <div className="flex flex-wrap gap-1">
                  {agent.upstream.map((u, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-xs">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border}`}>
                <h4 className={`text-sm font-medium ${colors.text} mb-2`}>下游输出</h4>
                <div className="flex flex-wrap gap-1">
                  {agent.downstream.map((d, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-xs">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Work Style & Output */}
            <div className="bg-slate-800/50 rounded-xl p-4 space-y-3">
              <div>
                <span className="text-slate-500 text-sm">工作风格</span>
                <p className="text-white font-medium">{agent.workStyle}</p>
              </div>
              <div>
                <span className="text-slate-500 text-sm">输出格式</span>
                <p className="text-white font-medium">{agent.outputFormat}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function AI超级团队() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "workflows">("overview");

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm mb-4">
            <Brain className="w-4 h-4" />
            <span>AI 团队</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            7×24小时 AI 超级团队
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            这不是一个普通的团队，这是一个由 AI 驱动的超级团队。
            7个专业 Agent，不间断工作，持续学习进化。
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="bg-slate-800/50 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              团队概览
            </button>
            <button
              onClick={() => setActiveTab("workflows")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "workflows"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              协作模式
            </button>
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Agent Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AgentCard agent={agent} onClick={() => setSelectedAgent(agent)} />
                </motion.div>
              ))}
            </div>

            {/* Team Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">7</div>
                  <div className="text-slate-500 text-sm">专业 Agent</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-slate-500 text-sm">不间断工作</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">∞</div>
                  <div className="text-slate-500 text-sm">持续学习进化</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-slate-500 text-sm">任务可追溯</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Workflows Tab */}
        {activeTab === "workflows" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{workflow.icon}</span>
                    <div>
                      <h3 className="text-white font-bold">{workflow.title}</h3>
                      <p className="text-slate-500 text-sm">{workflow.desc}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    {workflow.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`px-3 py-1.5 rounded-lg bg-${step.color}-500/10 border border-${step.color}-500/30`}>
                          <span className={`text-${step.color}-400 text-sm font-medium`}>{step.agent}</span>
                          <span className="text-slate-500 text-xs ml-1">{step.action}</span>
                        </div>
                        {idx < workflow.steps.length - 1 && (
                          <ChevronRight className="w-4 h-4 text-slate-600 mx-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Collaboration Network */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <Workflow className="w-5 h-5 text-indigo-400" />
                团队协作网络
              </h3>
              <div className="relative h-80 flex items-center justify-center">
                <svg viewBox="0 0 600 300" className="w-full h-full">
                  {/* Center - Commander */}
                  <circle cx="300" cy="150" r="40" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
                  <text x="300" y="145" textAnchor="middle" fontSize="20">🎯</text>
                  <text x="300" y="165" textAnchor="middle" fontSize="10" fill="#374151">总指挥</text>
                  
                  {/* Surrounding Agents */}
                  <circle cx="180" cy="70" r="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
                  <text x="180" y="68" textAnchor="middle" fontSize="16">✍️</text>
                  <text x="180" y="82" textAnchor="middle" fontSize="9" fill="#374151">笔杆子</text>
                  <line x1="270" y1="125" x2="205" y2="95" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,4"/>
                  
                  <circle cx="420" cy="70" r="30" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"/>
                  <text x="420" y="68" textAnchor="middle" fontSize="16">🧠</text>
                  <text x="420" y="82" textAnchor="middle" fontSize="9" fill="#374151">参谋</text>
                  <line x1="330" y1="125" x2="395" y2="95" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,4"/>
                  
                  <circle cx="500" cy="150" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
                  <text x="500" y="148" textAnchor="middle" fontSize="16">📊</text>
                  <text x="500" y="162" textAnchor="middle" fontSize="9" fill="#374151">运营官</text>
                  <line x1="340" y1="150" x2="470" y2="150" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,4"/>
                  
                  <circle cx="420" cy="230" r="30" fill="#d1fae5" stroke="#10b981" strokeWidth="2"/>
                  <text x="420" y="228" textAnchor="middle" fontSize="16">🧬</text>
                  <text x="420" y="242" textAnchor="middle" fontSize="9" fill="#374151">进化官</text>
                  <line x1="330" y1="175" x2="395" y2="205" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,4"/>
                  
                  <circle cx="180" cy="230" r="30" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
                  <text x="180" y="228" textAnchor="middle" fontSize="16">💹</text>
                  <text x="180" y="242" textAnchor="middle" fontSize="9" fill="#374151">交易官</text>
                  <line x1="270" y1="175" x2="205" y2="205" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,4"/>
                  
                  <circle cx="100" cy="150" r="30" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2"/>
                  <text x="100" y="148" textAnchor="middle" fontSize="16">🌐</text>
                  <text x="100" y="162" textAnchor="middle" fontSize="9" fill="#374151">社区官</text>
                  <line x1="130" y1="150" x2="260" y2="150" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,4"/>
                </svg>
              </div>
              <p className="text-center text-sm text-slate-500 mt-4">虚线表示协作关系 · 总指挥处于核心协调位置</p>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <AgentDetailModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
      )}
    </section>
  );
}
