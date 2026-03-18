import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WisdomDance.ai - 王凡 | AI+政务数字化专家',
  description: '16年技术沉淀，专注AI+政务数字化、数据资产入表服务。让AI像心跳一样自然融入工作与生活。',
  keywords: ['AI', '政务数字化', '数据资产入表', '智慧城市', '王凡', 'WisdomDance'],
  authors: [{ name: '王凡', email: 'wfanang@gmail.com' }],
  openGraph: {
    title: 'WisdomDance.ai - 王凡 | AI+政务数字化专家',
    description: '16年技术沉淀，专注AI+政务数字化、数据资产入表服务',
    type: 'website',
    url: 'https://wisdomdance.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
