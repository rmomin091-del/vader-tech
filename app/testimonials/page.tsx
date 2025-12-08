// app/testimonials/page.tsx

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Star, Quote } from "lucide-react"
// Ensure you have this utility or adjust the import path
import { cn } from "@/lib/utils" 

const testimonialsData = [
  // ... Your existing testimonialsData array goes here ...
  {
    name: "Jedi Master Kenobi",
    title: "Chief Strategy Officer, Coruscant Corp",
    quote: "VaderTech's solutions brought balance to our system architecture. Their deployment was smooth, fast, and remarkably stable.",
    rating: 5,
  },
  {
    name: "Senator Amidala",
    title: "Head of Digital Transformation, Naboo",
    quote: "The team's insight into modern infrastructure is unmatched. They engineered our ideas to perfection, just as advertised.",
    rating: 5,
  },
  {
    name: "Captain Solo",
    title: "Logistics Director, Millennium Freight",
    quote: "No hyperdrive required! Their code is fast, reliable, and runs smoothly even on older hardware. A top-tier technical team.",
    rating: 4,
  },
]

// Single Testimonial Card Component (keep this helper component)
const TestimonialCard = ({ name, title, quote, rating }: typeof testimonialsData[0]) => (
  <div className="relative p-6 md:p-8 border border-blue-800/50 rounded-xl bg-[#111827]/60 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-blue-700 hover:shadow-blue-500/30">
    {/* ... Testimonial Card content (Quote, Stars, Client Info) ... */}
    <Quote className="w-8 h-8 text-blue-400 opacity-20 absolute top-4 right-4" />
    <p className="text-lg italic text-gray-200 mb-6 relative z-10">
      {quote}
    </p>
    <div className="flex items-center space-x-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4 transition-colors",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
          )}
        />
      ))}
    </div>
    <div className="pt-4 border-t border-blue-800/30">
      <p className="font-semibold text-white">{name}</p>
      <p className="text-sm text-blue-300/80">{title}</p>
    </div>
  </div>
)

// The main page component
export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
      {/* Radial gradient vignette (Keep the theme styling) */}
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

      <section className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              The Tech Side
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Trusted Across the Galaxy
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}