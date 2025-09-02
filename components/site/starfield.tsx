"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const container = containerRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    let raf = 0
    let rafParallax = 0
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const DPR = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = width * DPR
    canvas.height = height * DPR
    ctx.setTransform(1, 0, 0, 1, 0, 0) // reset before scaling
    ctx.scale(DPR, DPR)

    const STAR_COUNT = Math.floor((width * height) / 13000)
    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random(),
      s: Math.random() * 0.015 + 0.005, // twinkle speed
    }))

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height)

      // faint diagonal gradient for depth
      const g = ctx.createLinearGradient(0, 0, width, height)
      g.addColorStop(0, "rgba(14,23,40,0.6)")
      g.addColorStop(1, "rgba(7,11,20,0.4)")
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)

      // stars
      for (const star of stars) {
        if (!reduceMotion) star.a += star.s
        const alpha = 0.35 + Math.abs(Math.sin(star.a)) * 0.65
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()
      }

      if (!reduceMotion) raf = requestAnimationFrame(drawFrame)
    }

    // initial paint
    drawFrame()

    const onResize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      const DPR2 = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = width * DPR2
      canvas.height = height * DPR2
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR2, DPR2)
      // repaint once on resize
      drawFrame()
    }
    window.addEventListener("resize", onResize)

    let targetX = 0
    let targetY = 0
    let currX = 0
    let currY = 0
    const onMouseMove = (e: MouseEvent) => {
      if (reduceMotion || !container) return
      const { innerWidth, innerHeight } = window
      const nx = e.clientX / innerWidth - 0.5
      const ny = e.clientY / innerHeight - 0.5
      targetX = nx * 10 // translate up to ~10px horizontally
      targetY = ny * 6 // translate up to ~6px vertically
      if (!rafParallax) rafParallax = requestAnimationFrame(stepParallax)
    }
    const stepParallax = () => {
      if (!container) return
      currX += (targetX - currX) * 0.08
      currY += (targetY - currY) * 0.08
      container.style.transform = `translate3d(${currX}px, ${currY}px, 0)`
      if (Math.abs(targetX - currX) > 0.1 || Math.abs(targetY - currY) > 0.1) {
        rafParallax = requestAnimationFrame(stepParallax)
      } else {
        rafParallax = 0
      }
    }
    if (!reduceMotion) {
      window.addEventListener("mousemove", onMouseMove)
    }

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(rafParallax)
      window.removeEventListener("resize", onResize)
      if (!reduceMotion) window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 will-change-transform">
      <canvas ref={ref} className="h-full w-full" aria-hidden />
      {/* extra lens vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage: "radial-gradient(60% 40% at 50% 45%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 55%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(60% 40% at 50% 45%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 55%, transparent 90%)",
        }}
      />
    </div>
  )
}
