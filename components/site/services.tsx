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

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon

          // Motion values for 3D tilt
          const x = useMotionValue(0)
          const y = useMotionValue(0)
          const rotateX = useTransform(y, [-50, 50], [15, -15])
          const rotateY = useTransform(x, [-50, 50], [-15, 15])

          return (
            <motion.article
              key={service.title}
              style={{ rotateX, rotateY, x, y, perspective: 1000 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const px = e.clientX - rect.left - rect.width / 2
                const py = e.clientY - rect.top - rect.height / 2
                x.set(px / 10)
                y.set(py / 10)
              }}
              onMouseLeave={() => {
                x.set(0)
                y.set(0)
              }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 160, damping: 15, delay: i * 0.07 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-tr from-[#0c1224]/70 via-[#0b1220]/40 to-[#0c1224]/70 p-6 shadow-lg shadow-black/20 backdrop-blur-lg transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="flex items-start gap-4"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg">
                  <Icon className="h-7 w-7 text-white" />
                </span>
                <h3 className="text-lg font-bold text-white md:text-xl">{service.title}</h3>
              </motion.div>

              <p className="mt-3 text-sm text-white/80 md:text-base">{service.desc}</p>

              <motion.div
                aria-hidden
                className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
