"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
        scrolled ? "bg-[#0b1220]/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="group inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#0f1a2b] ring-1 ring-white/10">
            <img
              src="/starLogo.png"
              alt="VaderTech star logo"
              className=" object-contain rounded-lg transition-transform group-hover:-translate-y-0.5"
            />
            <span className="sr-only">VaderTech</span>
          </span>
          <span className="cking-wide text-brand  font-bold md:text-lg">VaderTech</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="h-7 px-3 text-[11px] font-medium text-white"
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",
            }}
          >
            <Link href="/#contact">Get started</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-base font-semibold text-white/85 transition-colors hover:text-white md:text-lg md:font-bold"
    >
      {children}
    </Link>
  )
}
