"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-semibold tracking-tight md:text-5xl"
      >
        About{" "}
        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-bold">
          VaderTech
        </span>
      </motion.h2>

      <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center rounded-3xl border border-white/5 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10"
        >
          <p className="text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            We are a <span className="font-bold text-white">product-focused team</span> that helps ambitious companies{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
              ship fast, scale reliably, and stay secure
            </span>{" "}
            without compromising performance or user delight.
          </p>
          <p className="mt-6 text-white/60 leading-relaxed md:text-lg">
            Our process blends discovery, iterative delivery, and observability so you see progress early and often. We{" "}
            <span className="text-white font-semibold">own outcomes, not just tickets</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4"
        >
          {[
            { title: "Weekly Demos", desc: "Outcome-first delivery with regular syncs" },
            { title: "Non-Negotiables", desc: "Security and performance built-in by default" },
            { title: "Transparency", desc: "Clear communication and live roadmaps" },
            { title: "Total Ownership", desc: "Maintainable code and thorough handoff" },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:bg-white/10"
            >
              <h4 className="font-bold text-blue-400 transition-colors group-hover:text-blue-300">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-white/60 leading-snug">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-4">
        {[
          { k: "Projects", v: "50+" },
          { k: "Uptime", v: "99.9%" },
          { k: "Avg. TTM", v: "4-8 weeks" },
          { k: "NPS", v: "70+" },
        ].map((stat) => (
          <div
            key={stat.k}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                {stat.v}
              </span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{stat.k}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
