"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-lg supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative flex items-center gap-3 transition-all duration-200 hover:scale-105"
          >
            <div className="rounded-full bg-white p-1 shadow-sm ring-2 ring-border/20 transition-all duration-200 group-hover:ring-primary/30 group-hover:shadow-md">
              <img 
                src="/z-logo.png" 
                alt="Logo" 
                className="size-10 transition-transform duration-200 group-hover:rotate-12" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-3/4 group-hover:-translate-x-1/2" />
              </Link>
            ))}
            <Button
              size="sm"
              className="ml-4 h-9 px-6 text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200"
              asChild
            >
              <Link href={"https://www.toasttab.com/local/order/yoyo-chicken-merrick-rd-rockville-280-merrick-rd"}>
                Order Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-accent/50"
                aria-label="Toggle menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[320px] sm:w-[360px] border-l border-border/40 bg-background/98 backdrop-blur-xl p-0 flex flex-col"
            >
              {/* <VisuallyHidden> */}
                <SheetTitle hidden>Navigation Menu</SheetTitle>
              {/* </VisuallyHidden> */}

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/40">
                <div className="rounded-full bg-white p-1.5 shadow-md ring-1 ring-border/30">
                  <img src="/z-logo.png" alt="Logo" className="size-9" />
                </div>
                {/* <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-accent rounded-full transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </Button> */}
              </div>

              {/* Content Container - Centered */}
              <div className="flex-1 flex flex-col justify-center px-8 py-8">
                {/* Navigation Links - Centered */}
                <nav className="flex flex-col items-center gap-1 mb-12">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative w-full text-center px-6 py-4 text-lg font-medium text-foreground/70 transition-all duration-200 hover:text-foreground rounded-xl hover:bg-accent/50"
                      style={{ 
                        animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-12" />
                    </Link>
                  ))}
                </nav>

                {/* CTA Button - Centered */}
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full h-12 font-medium text-base rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                    asChild
                  >
                    <Link href={"https://www.toasttab.com/local/order/yoyo-chicken-merrick-rd-rockville-280-merrick-rd"}>
                      Order Now
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Open Daily • 11AM - 10PM
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}