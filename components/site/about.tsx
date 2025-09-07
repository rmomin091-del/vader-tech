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

      <div className="mt-10 grid items-start gap-6 md:mt-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur"
        >
          <p className="text-pretty text-white/80 md:text-lg">
            We are a <span className="font-bold text-white">product-focused team</span> that helps ambitious companies{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-semibold">
              ship fast, scale reliably, and stay secure
            </span>{" "}
            without compromising developer experience or user delight.
          </p>
          <p className="mt-4 text-white/70">
            Our process blends <span className="font-bold">discovery</span>, <span className="font-bold">iterative delivery</span>, and{" "}
            <span className="font-bold">observability</span> so you see progress early and often. We{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-semibold">
              own outcomes, not just tickets
            </span>.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-3"
        >
          {[
            "Outcome-first delivery with weekly demos",
            "Security and performance as non-negotiables",
            "Clear communication and transparent roadmaps",
            "Maintainable code, strong documentation, and handoff",
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 md:text-base"
            >
              <span className="font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                {item.split(" ")[0]}
              </span>{" "}
              {item.split(" ").slice(1).join(" ")}
            </li>
          ))}
        </motion.ul>
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
