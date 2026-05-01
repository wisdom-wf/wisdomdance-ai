'use client'

import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import StoryTimeline from '@/components/sections/StoryTimeline'
import Services from '@/components/sections/Services'
import Methodology from '@/components/sections/Methodology'
import Projects from '@/components/sections/Projects'
import DataAuthorization from '@/components/sections/DataAuthorization'
import AI超级团队 from '@/components/sections/AI超级团队'
import AISecurityZone from '@/components/sections/AISecurityZone'
import Tools from '@/components/sections/Tools'
import Articles from '@/components/sections/Articles'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Header />
      <Hero />
      <StoryTimeline />
      <Services />
      <Methodology />
      <Projects />
      <DataAuthorization />
      <AI超级团队 />
      <AISecurityZone />
      <Tools />
      <Articles />
      <CTA />
      <Footer />
    </main>
  )
}
