"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Code, Monitor, Cpu, Smartphone, Database, Cloud } from "lucide-react"

const services = [
  { title: "Web Development", desc: "Modern, responsive websites built with React, Next.js, and scalable architectures.", icon: Code },
  { title: "UI/UX Design", desc: "Intuitive interfaces and delightful experiences designed for your users.", icon: Monitor },
  { title: "AI & ML Solutions", desc: "Integrate intelligent features using AI, NLP, and ML pipelines.", icon: Cpu },
  { title: "Mobile Apps", desc: "High-performance Android and iOS apps using cross-platform frameworks.", icon: Smartphone },
  { title: "Database Management", desc: "Optimized and secure data storage solutions for modern applications.", icon: Database },
  { title: "Cloud & DevOps", desc: "Deploy, scale, and monitor apps seamlessly with cloud platforms.", icon: Cloud },
]

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-extrabold text-white md:text-5xl"
      >
        Our <span className="text-gradient bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mx-auto mt-3 max-w-2xl text-center text-white/70 md:text-base"
      >
        We provide a range of services to help your business grow with technology, design, and innovation.
      </motion.p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-full rounded-2xl border border-white/5 bg-[#0f172a]/30 p-8 shadow-2xl backdrop-blur-xl transition-all hover:bg-[#0f172a]/50 hover:shadow-blue-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 text-blue-400 ring-1 ring-white/10 group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white transition-all duration-300">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white group-hover:text-blue-300 transition-colors uppercase tracking-tight">{service.title}</h3>
              <p className="mt-3 text-base text-white/50 leading-relaxed transition-colors group-hover:text-white/70">{service.desc}</p>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="h-2 w-2 rounded-full bg-blue-500/50" />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
