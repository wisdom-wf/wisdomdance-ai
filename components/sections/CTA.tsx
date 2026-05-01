'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Logo from '@/components/Logo'

export default function CTA() {
  return (
    <>
{/* CTA区域 */}
<section id="contact" className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)' }}>
  <div className="max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        准备好开始合作了吗？
      </h2>
      <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
        无论是数据资产入表、AI+政务数字化，还是技术咨询，
        我的AI团队都随时准备为您服务
      </p>
      
      {/* 二维码区域 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        {/* 左侧：动态Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <Logo size="xl" showText={true} className="bg-transparent" />
          <p className="text-slate-500 text-sm">红泥数智科技</p>
        </motion.div>
        
        {/* 中间：连接线（桌面端显示） */}
        <div className="hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-blue-400"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        </div>
        
        {/* 右侧：二维码 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white rounded-2xl p-4 shadow-2xl shadow-blue-500/10">
            <img
              src="/images/二维码.jpg"
              alt="微信二维码"
              className="w-40 h-40 rounded-xl"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-white font-semibold mb-2">扫码添加微信</p>
            <p className="text-slate-400 text-sm">或直接联系：</p>
            <p className="text-indigo-400 font-medium">wfanang@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:wfanang@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all overflow-hidden relative group"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
            boxShadow: '0 4px 20px rgba(220,38,38,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          <Mail className="w-5 h-5 relative z-10" />
          <span className="relative z-10">发送邮件</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <span className="text-slate-500 text-sm flex items-center justify-center">
          wfanang@gmail.com
        </span>
      </div>
    </motion.div>
  </div>
</section>

    </>
  )
}
