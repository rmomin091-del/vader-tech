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

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {features.map((f, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-white/5 bg-[#0f172a]/40 p-8 shadow-2xl backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-[#0f172a]/60"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 text-blue-400 ring-1 ring-white/10 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{f.title}</h3>
              </div>

              <p className="mt-4 text-white/60 leading-relaxed transition-colors group-hover:text-white/80">{f.desc}</p>

              {/* Subtle accent line on hover */}
              <div className="mt-auto pt-6">
                <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
