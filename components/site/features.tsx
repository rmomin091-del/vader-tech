"use client"

import { motion } from "framer-motion"
import { Zap, Layers, ShieldCheck, Wrench, Activity, BadgeCheck } from "lucide-react"

const features = [
  { title: "Performance at the Edge", desc: "Edge-first rendering, tuned caching, and smart data-fetching keep apps ultra fast." },
  { title: "Built to Scale", desc: "Battle-tested patterns that scale from MVP to millions of requests per day." },
  { title: "Security by Default", desc: "Security-first: auth, RLS, and least-privilege architecture by default." },
  { title: "Developer Experience", desc: "Clear docs, automation, and tooling that help teams ship confidently." },
  { title: "Reliability & Observability", desc: "Guardrails and telemetry that catch issues before users do." },
  { title: "Transparent Delivery", desc: "Iterate in the open with demos, roadmaps, and measurable outcomes." },
]

const icons = [Zap, Layers, ShieldCheck, Wrench, Activity, BadgeCheck]

export function Features() {
  return (
    <section id="why" className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl"
      >
        Why Choose <span className="text-gradient bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">VaderTech</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70 md:mt-4 md:text-base"
      >
        Outcome-focused partnerships, proven technical patterns, and a delivery process you can trust.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.1, y: -10, boxShadow: "0 35px 60px rgba(0,0,0,0.5)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 150, damping: 15, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-tr from-[#0c1224]/70 via-[#0b1220]/40 to-[#0c1224]/70 p-6 shadow-lg shadow-black/20 backdrop-blur-lg"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg">
                  <Icon className="h-6 w-6 text-white" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-white md:text-xl">{f.title}</h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">{f.desc}</p>

              <div
                aria-hidden
                className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
