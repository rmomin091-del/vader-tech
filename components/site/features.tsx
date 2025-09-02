"use client"

import { motion } from "framer-motion"
import { Zap, Layers, ShieldCheck, Wrench, Activity, BadgeCheck } from "lucide-react" // icons for feature highlights

const features = [
  {
    title: "Performance at the Edge",
    desc: "Edge-first rendering, tuned caching, and smart data-fetching keep apps ultra fast.",
  },
  { title: "Built to Scale", desc: "Battle-tested patterns that scale from MVP to millions of requests per day." },
  { title: "Security by Default", desc: "Security-first: auth, RLS, and least-privilege architecture by default." },
  { title: "Developer Experience", desc: "Clear docs, automation, and tooling that help teams ship confidently." },
  { title: "Reliability & Observability", desc: "Guardrails and telemetry that catch issues before users do." },
  { title: "Transparent Delivery", desc: "Iterate in the open with demos, roadmaps, and measurable outcomes." },
]

const icons = [Zap, Layers, ShieldCheck, Wrench, Activity, BadgeCheck] // icon palette

export function Features() {
  return (
    <section id="why" className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-semibold tracking-tight md:text-5xl"
      >
        Why Choose <span className="text-brand">VaderTech</span>
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

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = icons[i % icons.length] // pick icon per card
          return (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f1a2b] ring-1 ring-white/10">
                  <Icon className="h-4.5 w-4.5 text-[#06b6d4]" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-white md:text-xl">{f.title}</h3>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">{f.desc}</p>

              <div
                aria-hidden
                className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <div className="mt-4 text-sm text-[#06b6d4] transition-colors group-hover:text-[#3b82f6]">
                Learn more →
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
