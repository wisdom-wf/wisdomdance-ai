'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { container: 48, fontSize: 'text-lg', subFontSize: 'text-[8px]' },
    md: { container: 64, fontSize: 'text-xl', subFontSize: 'text-[10px]' },
    lg: { container: 96, fontSize: 'text-2xl', subFontSize: 'text-xs' },
    xl: { container: 140, fontSize: 'text-3xl', subFontSize: 'text-sm' }
  }

  const s = sizes[size]

  const isTransparent = className.includes('bg-transparent')

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo图形 - 使用用户提供的logo.png */}
      <motion.div
        className="relative"
        style={{ width: s.container, height: s.container }}
        whileHover={{ scale: isTransparent ? 1 : 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* 外圈发光效果 - 仅在非透明背景时显示 */}
        {!isTransparent && (
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
              filter: 'blur(10px)'
            }}
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        )}
        
        {/* Logo图片 */}
        <img 
          src={isTransparent ? "/logo-transparent.png" : "/logo.png"}
          alt="RED MUD Logo"
          className="w-full h-full object-contain relative z-10"
          style={{
            filter: isTransparent ? 'drop-shadow(0 2px 10px rgba(0,0,0,0.3))' : 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))'
          }}
        />
      </motion.div>

      {/* 文字部分 */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`font-bold tracking-wider ${s.fontSize}`}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            RED MUD
          </span>
          <span 
            className={`tracking-widest ${s.subFontSize}`}
            style={{
              color: '#3b82f6',
              fontWeight: 500,
              letterSpacing: '0.15em'
            }}
          >
            DIGITAL INTELLIGENCE
          </span>
        </div>
      )}
    </div>
  )
}
