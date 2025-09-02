import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Features } from "@/components/site/features"
import { Services } from "@/components/site/services"
import { AboutSection } from "@/components/site/about"
import { ContactSection } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
      {/* Subtle radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(1200px 800px at 50% 30%, rgba(43,63,99,0.35), transparent 60%)",
        }}
      />
      {/* Starfield background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0b1220]/30" />
      </div>
      <Navbar />
      <Hero />
      {/* Services */}
      <Services />
      {/* Why Teams Choose VaderTech */}
      <Features />
      {/* About */}
      <AboutSection />
      {/* Contact */}
      <ContactSection />
      <Footer />
    </main>
  )
}
