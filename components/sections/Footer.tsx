import { Mail, Github } from 'lucide-react'

export default function Footer() {
  return (
    <>
{/* Footer */}
<footer className="py-12 px-4 border-t border-blue-500/20" style={{ background: '#020617' }}>
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">
          RED MUD
        </span>
        <span className="text-slate-500 text-sm">|</span>
        <span className="text-slate-400 text-sm">红泥数智科技</span>
      </div>
      <p className="text-slate-500 text-sm">
        © 2026 王凡. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="mailto:wfanang@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://github.com/wisdom-wf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}