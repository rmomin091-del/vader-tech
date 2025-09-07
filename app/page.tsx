"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Features } from "@/components/site/features"
import { Services } from "@/components/site/services"
import { AboutSection } from "@/components/site/about"
import { ContactSection } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

export default function HomePage() {
  useEffect(() => {
    // Scroll to top on load to ensure Home is shown first
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
      {/* Radial gradient vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(1200px 800px at 50% 30%, rgba(43,63,99,0.35), transparent 60%)",
        }}
      />
      {/* Starfield overlay */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0b1220]/30" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Features />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
