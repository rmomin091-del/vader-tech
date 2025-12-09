// components/site/navbar.tsx (FINAL UPDATED FILE)

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // 🛠️ UPDATED NAV LINKS ARRAY: Testimonials now links to the dedicated page
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Testimonials", href: "/testimonials" }, // <-- LINK TO DEDICATED PAGE
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled ? "bg-[#0b1220]/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="group inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#0f1a2b] ring-1 ring-white/10">
            <img
              src="/starLogo.png"
              alt="VaderTech star logo"
              className="object-contain rounded-lg transition-transform group-hover:-translate-y-0.5"
            />
            <span className="sr-only">VaderTech</span>
          </span>
          <span className="tracking-wide font-extrabold text-white md:text-lg">
            VaderTech
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <Link href="/#contact">
          <Button
            size="sm"
            className="hidden md:inline-flex h-7 px-3 text-[11px] font-medium text-white"
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",
            }}
          >
            Get started
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0b1220]/95 backdrop-blur"
            role="menu"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                  {link.name}
                </NavLink>
              ))}

              <Link href="/#contact">
                <Button
                  size="sm"
                  className="h-10 text-white"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",
                  }}
                >
                  Get started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={`text-base font-semibold transition-colors md:text-lg md:font-bold ${
        active ? "text-white" : "text-white/85 hover:text-white"
      }`}
    >
      {children}
    </Link>
  )
}