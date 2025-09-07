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
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(DPR, DPR)

    // More stars for a dense starfield
    const STAR_COUNT = Math.floor((width * height) / 6000)
    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5, // slightly bigger stars
      a: Math.random(),
      s: Math.random() * 0.02 + 0.005, // slightly faster twinkle
    }))

    const drawFrame = () => {
      // pure black background
      ctx.fillStyle = "#000"
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

    drawFrame()

    const onResize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      const DPR2 = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = width * DPR2
      canvas.height = height * DPR2
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR2, DPR2)
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
      targetX = nx * 10
      targetY = ny * 6
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
    </div>
  )
}
