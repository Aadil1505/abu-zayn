"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <span className="text-xl font-medium text-foreground tracking-tight transition-opacity group-hover:opacity-70">
                ABU ZAYN
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <Link
                href="#menu"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                Menu
              </Link>
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                Contact
              </Link>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs uppercase tracking-widest px-6 h-10 transition-all"
              >
                Order
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground transition-opacity hover:opacity-70"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              Menu
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              Contact
            </Link>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm uppercase tracking-widest px-10 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
