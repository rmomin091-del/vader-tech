// app/testimonials/page.tsx

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Star, Quote } from "lucide-react"
// ExternalLink is no longer needed but kept the import for completeness
import { ExternalLink } from "lucide-react" 
// Ensure you have this utility or adjust the import path
import { cn } from "@/lib/utils" 

// Define the type without the website field
type Testimonial = {
  name: string;
  title: string;
  quote: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "byElevenstoic",
    title: "Creator of Elevenstoic",
    quote: "The system design from VaderTech was robust, elegant, and performed exactly as promised. It scaled effortlessly under pressure a true masterpiece of engineering.",
    rating: 5,
  },
  {
    name: "opusreality",
    title: "Founder of OpusReality.",
    quote: "Working with this team was a game-changer. Their technical depth and ability to simplify complex deployments saved us months of development time. Highly recommended for any serious infrastructure project.",
    rating: 5,
  },
]

const TestimonialCard = ({ name, title, quote, rating }: Testimonial) => (
  <div className="relative p-6 md:p-8 border border-blue-800/50 rounded-xl bg-[#111827]/60 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-blue-700 hover:shadow-blue-500/30">
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

          {/* Testimonials Grid (Kept the lg:grid-cols-2 for better presentation of two items) */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
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