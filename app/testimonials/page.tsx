"use client";

import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Star, Quote, Users } from "lucide-react" // Added Users icon for flair
import { cn } from "@/lib/utils" 

type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  title?: string;
  handle?: string;
  image?: string;
  followers?: string; // This will now be rendered
}

const testimonialsData: Testimonial[] = [
  {
    name: "byElevenstoic",
    title: "Founder of Elevenstoic.",
    handle: "elevenstoic",
    image: "/byElevenstoic.avif", 
    followers: "490K+ followers",
    quote: "The system design from VaderTech was robust, elegant, and performed exactly as promised. It scaled effortlessly under pressure a true masterpiece of engineering.",
    rating: 5,
  },
  {
    name: "opusreality",
    title: "Founder of OpusReality.",
    followers: "966K+ followers",
    image: "/opusreality copy.jpg",
    quote: "Working with this team was a game-changer. Their technical depth and ability to simplify complex deployments saved us months of development time. Highly recommended for any serious infrastructure project.",
    rating: 5,
  },
]

// Added 'followers' to the destructured props
const TestimonialCard = ({ name, title, quote, rating = 5, image, followers }: Testimonial) => (
  <div className="relative p-6 md:p-8 border border-blue-800/50 rounded-xl bg-[#111827]/60 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-blue-700 hover:shadow-blue-500/30">
    <Quote className="w-8 h-8 text-blue-400 opacity-20 absolute top-4 right-4" />
    
    <p className="text-lg italic text-gray-200 mb-8 relative z-10 leading-relaxed">
      "{quote}"
    </p>

    <div className="flex items-center space-x-4">
      {image && (
        <div className="relative flex-shrink-0 w-12 h-12 rounded-full border-2 border-blue-500/30 overflow-hidden bg-blue-900/20">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')} 
          />
        </div>
      )}
      
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 mb-1">
          <div className="flex items-center space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                )}
              />
            ))}
          </div>
          {/* --- FOLLOWER COUNT ADDED HERE --- */}
          {followers && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              {followers}
            </span>
          )}
        </div>
        
        <p className="font-semibold text-white leading-tight">{name}</p>
        {title && <p className="text-xs text-blue-300/70 mt-0.5">{title}</p>}
      </div>
    </div>
  </div>
)

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(1200px 800px at 50% 30%, rgba(43,63,99,0.35), transparent 60%)",
        }}
      />

      <Navbar />

      <section className="py-20 md:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-4">
              The Tech Side
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400">
              Trusted Across the Galaxy
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
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