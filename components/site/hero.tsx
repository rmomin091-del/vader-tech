"use client"

import { Button } from "@/components/ui/button"
import { Starfield } from "./starfield"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative isolate w-full min-h-screen">
      {/* Full-screen star background */}
      <div className="absolute inset-0 -z-10">
        <Starfield />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-transparent to-black opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 md:pt-16"> 
      {/* Reduced padding for mobile: pt-8, sm:pt-12 */}
        <motion.div
          className="mx-auto max-w-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.08, duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden />
            <span className="text-[13px] font-extrabold text-white/70">Exploring the Future</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white"
          >
            Your <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">Ideas</span>, Engineered to <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">Perfection</span>
            <br />
            Join the <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">Tech Side</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="mt-4 text-sm sm:text-base md:text-lg font-medium text-white/80"
          >
            We build intelligent, powerful, and scalable digital solutions for startups, SMEs, and visionary companies.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 flex items-center justify-center"
          >
            <Button
              onClick={() => {
                const section = document.getElementById("contact")
                section?.scrollIntoView({ behavior: "smooth" })
              }}
              className="group h-10 sm:h-11 md:h-12 rounded-full px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg font-medium text-white shadow-[0_0_0_0_rgba(59,130,246,0.4)] transition-all hover:shadow-[0_0_40px_6px_rgba(59,130,246,0.15)]"
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 50%, #06b6d4 100%)",
              }}
            >
              Start Your Project
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
