import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TawktoScript from '@/components/TawktoScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RED MUD - 红泥数智科技 | AI+政务数字化专家',
  description: '16年技术沉淀，专注AI+政务数字化、数据资产入表服务。陕西红泥数智科技有限公司官方网站。',
  keywords: ['AI', '政务数字化', '数据资产入表', '智慧城市', '王凡', '红泥数智', 'RED MUD'],
  authors: [{ name: '王凡', url: 'https://wisdomdance.cn' }],
  openGraph: {
    title: 'RED MUD - 红泥数智科技 | AI+政务数字化专家',
    description: '16年技术沉淀，专注AI+政务数字化、数据资产入表服务',
    type: 'website',
    url: 'https://wisdomdance.cn',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-[#020617] text-white`}>
      {children}
      <TawktoScript />
    </body>
    </html>
  )
}
