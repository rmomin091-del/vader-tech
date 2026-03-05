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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2" : "py-5"
        }`}
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between px-6 py-2.5 transition-all duration-500 rounded-full border ${scrolled
            ? "bg-[#0b1220]/60 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mx-4 md:mx-auto"
            : "bg-transparent border-transparent"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg ring-1 ring-white/20 transition-transform group-hover:scale-110">
            <img
              src="/starLogo.png"
              alt="VaderTech"
              className="h-6 w-6 object-contain brightness-110 transition-transform group-hover:rotate-12"
            />
          </div>
          <span className="text-lg font-black tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">
            Vader<span className="text-blue-500">Tech</span>
          </span>
        </Link>

        {/* Desktop Links - Agency Style */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button - Premium Agency Style */}
        <div className="hidden md:block">
          <Link href="/#contact">
            <Button
              className="relative overflow-hidden group bg-white hover:bg-white text-black font-bold h-10 px-6 rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
              <span className="relative z-10 font-bold">Let's talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu - Agency Style Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-50 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b1220]/95 p-8 shadow-2xl backdrop-blur-2xl md:hidden"
            role="menu"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    href={link.href}
                    active={pathname === link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full text-center"
              >
                <Link href="/#contact" onClick={() => setMenuOpen(false)}>
                  <Button
                    size="lg"
                    className="w-full rounded-2xl bg-white font-black text-black hover:bg-blue-50"
                  >
                    Get started
                  </Button>
                </Link>
              </motion.div>
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
  onClick,
}: {
  href: string
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-bold tracking-tight transition-all uppercase ${active ? "text-white" : "text-white/50 hover:text-white"
        }`}
    >
      <span className="relative z-10">{children}</span>
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 rounded-full bg-white/5 ring-1 ring-white/10 md:block hidden"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        />
      )}
      {active && (
        <motion.div
          className="absolute -bottom-1 left-4 right-4 h-0.5 rounded-full bg-blue-500 md:hidden"
          layoutId="activeNavMobile"
        />
      )}
    </Link>
  )
}