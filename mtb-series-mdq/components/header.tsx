"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Noticias", href: "#noticias" },
    { name: "Inscripción", href: "#inscripcion" },
    { name: "Galería", href: "#galeria" },
    { name: "Comentarios", href: "#comentarios" },
    { name: "Publicidades", href: "#publicidades" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeUljHpFtXhOn9qNUQLLfNL0-iHz25WhumdyniEzBXekR8hK0j1OPSFUwOcGMpF-F9Sc&usqp=CAU"
              alt="MTB SERIES MDQ Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="font-geist font-bold text-xl text-primary">MTB SERIES</h1>
              <p className="font-manrope text-sm text-muted-foreground">MDQ</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-manrope text-foreground hover:text-primary transition-colors duration-200 hover:scale-105 transform"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-manrope font-medium">
              Inscribirse Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-manrope text-foreground hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-manrope font-medium mt-4">
                Inscribirse Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
