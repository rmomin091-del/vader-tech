"use client"

import { Button } from "@/components/ui/button"
import { Starfield } from "./starfield"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative isolate mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col items-center justify-center px-4 text-center">
      {/* Star background */}
      <Starfield />
      {/* Motion container with staggered children */}
      <motion.div
        className="relative z-10 mx-auto max-w-2xl"
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
        <motion.div
          variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
          className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden />
          <span className="text-[11px] font-medium text-white/70">Exploring the Future</span>
        </motion.div>

        <motion.h1
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          className="text-pretty text-6xl font-semibold leading-tight tracking-tight text-white/95 md:text-7xl"
        >
          <span className="text-brand">VaderTech</span>
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          className="mt-5 text-balance text-base text-white/80 md:mt-6 md:text-lg"
        >
          Your Ideas, Engineered to Perfection — Join the Tech Side
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          className="mt-3 text-pretty text-sm leading-relaxed text-white/60 md:text-base"
        >
          We build intelligent, powerful, and scalable digital solutions for startups, SMEs, and visionary companies.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          className="mt-8 flex items-center justify-center"
        >
          <Button
            className="group h-11 rounded-full px-6 text-sm font-medium text-white shadow-[0_0_0_0_rgba(59,130,246,0.4)] transition-all hover:shadow-[0_0_40px_6px_rgba(59,130,246,0.15)]"
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 50%, #06b6d4 100%)",
            }}
          >
            Start Your Project
            <ChevronRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
