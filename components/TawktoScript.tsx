'use client'

import { useEffect } from 'react'

export default function TawktoScript() {
  useEffect(() => {
    const s1 = document.createElement('script')
    s1.async = true
    s1.src = 'https://embed.tawk.to/6a0438a00379c21c34d88b80/1jog7qcps'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    const s0 = document.getElementsByTagName('script')[0]
    s0.parentNode?.insertBefore(s1, s0)
  }, [])

  return null
}
