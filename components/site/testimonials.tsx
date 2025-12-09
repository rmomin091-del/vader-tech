// components/site/testimonials.tsx

import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils" // Assuming you have a utility for class merging (e.g., clsx/tailwind-merge)

const testimonialsData = [
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

// Single Testimonial Card Component
const TestimonialCard = ({ name, title, quote, rating }: typeof testimonialsData[0]) => (
  <div className="relative p-6 md:p-8 border border-blue-800/50 rounded-xl bg-[#111827]/60 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-blue-700 hover:shadow-blue-500/30">
    
    {/* Quote Icon */}
    <Quote className="w-8 h-8 text-blue-400 opacity-20 absolute top-4 right-4" />

    {/* Quote Text */}
    <p className="text-lg italic text-gray-200 mb-6 relative z-10">
      {quote}
    </p>

    {/* Rating Stars */}
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

    {/* Client Info */}
    <div className="pt-4 border-t border-blue-800/30">
      <p className="font-semibold text-white">{name}</p>
      <p className="text-sm text-blue-300/80">{title}</p>
    </div>
  </div>
)

// Main Testimonial Section Component
export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            The Tech Side
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Trusted Across the Galaxy
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}