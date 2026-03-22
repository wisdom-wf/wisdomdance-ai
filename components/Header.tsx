'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: '我的故事', href: '#story' },
  { label: '服务能力', href: '#services' },
  { label: 'AI团队', href: '#ai-team' },
  { label: '安全防护', href: '#security' },
  { label: '项目案例', href: '#projects' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
        style={{
          borderBottom: isScrolled ? '1px solid rgba(59,130,246,0.2)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - 悬浮大Logo带立体效果 */}
            <div className="flex items-center" style={{ marginTop: '150px', marginLeft: '50px' }}>
              <a href="#" className="relative">
                {/* 圆形容器 */}
                <div 
                  className="relative w-32 h-32 rounded-full overflow-visible"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)',
                    boxShadow: '0 0 0 3px rgba(59,130,246,0.3), 0 0 30px rgba(59,130,246,0.2), 0 10px 40px rgba(0,0,0,0.8), inset 0 2px 20px rgba(255,255,255,0.05)',
                    transform: 'translateY(-60px)',
                    zIndex: 100
                  }}
                >
                  {/* 内层装饰环 */}
                  <div 
                    className="absolute inset-2 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                      border: '1px solid rgba(59,130,246,0.2)'
                    }}
                  />
                  
                  {/* Logo图片 */}
                  <motion.img 
                    src="/logo-transparent.png"
                    alt="RED MUD Logo"
                    className="absolute inset-0 w-full h-full p-3"
                    style={{
                      filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.6)) drop-shadow(0 0 15px rgba(59,130,246,0.2))',
                    }}
                    whileHover={{
                      scale: 1.05,
                      filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.8)) drop-shadow(0 0 25px rgba(59,130,246,0.4))'
                    }}
                  />
                  
                  {/* 高光效果 */}
                  <div 
                    className="absolute pointer-events-none"
                    style={{
                      top: '15%',
                      left: '25%',
                      width: '25%',
                      height: '15%',
                      background: 'radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, transparent 70%)',
                      borderRadius: '50%'
                    }}
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative px-4 py-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <span className="relative z-10 text-sm font-medium">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="navHover"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-1/2 transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%)',
                  backgroundSize: '200% 100%',
                  boxShadow: '0 4px 20px rgba(79,70,229,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <span className="relative z-10">预约咨询</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            </div>
            </div>
          </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-center"
                >
                  预约咨询
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  )
}
