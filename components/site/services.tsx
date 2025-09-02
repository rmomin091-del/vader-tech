"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Monitor, Smartphone, RefreshCw, CloudCog, Palette } from "lucide-react"

const services = [
  {
    title: "Web Applications",
    desc: "High-performance apps with Next.js, App Router, and modern data strategies.",
    meta: "Next.js · Tailwind · shadcn/ui",
  },
  {
    title: "AI & Automation",
    desc: "Integrate LLMs and automation into workflows with the Vercel AI SDK.",
    meta: "AI SDK · Groq · xAI",
  },
  {
    title: "Cloud & DevOps",
    desc: "Observability, CI/CD, preview environments, and infra as code.",
    meta: "Vercel · Edge · Server Actions",
  },
  {
    title: "Mobile Experiences",
    desc: "Fast mobile-first UI and PWAs with offline support.",
    meta: "Responsive · PWA · Performance",
  },
  {
    title: "UI/UX Design",
    desc: "Accessible, conversion-driven interfaces with a clean design system.",
    meta: "Design System · Accessibility",
  },
]

export function Services() {
  const overview = [
    { id: "web-dev", label: "Web Development" },
    { id: "mobile-apps", label: "Mobile Apps" },
    { id: "system-migration", label: "System Migration" },
    { id: "devops-cloud", label: "DevOps & Cloud" },
    { id: "design", label: "Design" },
  ]

  const sections = [
    {
      id: "web-dev",
      title: "Web Development",
      desc: "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
      bullets: [
        "Custom responsive design optimized for all devices",
        "SEO-ready architecture for maximum visibility",
        "Lightning-fast performance with modern frameworks",
        "Complete deployment and maintenance support",
      ],
    },
    {
      id: "mobile-apps",
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile applications that engage users and scale with your business growth.",
      bullets: [
        "Native iOS and Android development",
        "Cross-platform solutions with React Native",
        "App Store optimization and deployment",
        "Real-time features and offline functionality",
      ],
    },
    {
      id: "system-migration",
      title: "System Migration",
      desc: "Seamless migration of legacy systems to modern platforms with zero downtime and complete data integrity.",
      bullets: [
        "Legacy system modernization strategies",
        "Cloud migration to AWS, Azure, and GCP",
        "Database optimization and migration",
        "Zero-downtime deployment processes",
      ],
    },
    {
      id: "devops-cloud",
      title: "DevOps & Cloud",
      desc: "Automated CI/CD pipelines and scalable cloud infrastructure that grows with your business needs.",
      bullets: [
        "Automated CI/CD pipeline implementation",
        "Docker containerization and Kubernetes",
        "Infrastructure as Code with Terraform",
        "24/7 monitoring and alerting systems",
      ],
    },
    {
      id: "design",
      title: "Design",
      desc: "User-centered design systems and brand‑aligned interfaces that convert and delight.",
      bullets: [
        "UX research and wireframing",
        "High-fidelity UI and interactive prototyping",
        "Design systems and component libraries",
        "Accessibility-first, WCAG-compliant visuals",
      ],
    },
  ]

  const iconMap: Record<string, React.ElementType> = {
    "web-dev": Monitor,
    "mobile-apps": Smartphone,
    "system-migration": RefreshCw,
    "devops-cloud": CloudCog,
    design: Palette,
  }

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-semibold tracking-tight md:text-5xl"
      >
        Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70 md:mt-4 md:text-base"
      >
        End-to-end product delivery, from discovery and design to launch and ongoing iteration.
      </motion.p>

      {/* Overview chips */}
      <div className="mx-auto mt-8 max-w-3xl md:mt-10">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {overview.map((o, i) => (
            <motion.a
              key={o.id}
              href={`/#${o.id}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white/85 backdrop-blur transition hover:-translate-y-0.5"
            >
              {o.label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Detailed sections */}
      <div className="mt-12 space-y-10 md:space-y-12">
        {sections.map((s, i) => {
          const Icon = iconMap[s.id]
          return (
            <motion.article
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 14, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur md:p-8"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f1a2b] ring-1 ring-white/10">
                  {Icon ? <Icon className="h-4.5 w-4.5 text-[#06b6d4]" aria-hidden /> : null}
                </span>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">{s.title}</h3>
              </div>

              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">{s.desc}</p>

              <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-white/85 marker:text-white/40 md:mt-6 md:grid-cols-2 md:text-base">
                {s.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    <span className="font-medium text-white">{b.split(" ")[0]}</span> {b.split(" ").slice(1).join(" ")}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  asChild
                  size="sm"
                  className="h-8 px-3 text-[12px] font-medium text-white"
                  style={{ background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)" }}
                >
                  <Link href="/#contact">Get Started</Link>
                </Button>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
