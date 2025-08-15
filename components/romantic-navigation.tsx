"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Home, Eye, Wind, SmileIcon as Kiss, Sun, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/eyes", label: "Eyes", icon: Eye },
  { href: "/hair", label: "Hair", icon: Wind },
  { href: "/lips", label: "Lips", icon: Kiss },
  { href: "/smile", label: "Smile", icon: Sun },
]

export function RomanticNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const currentIndex = navigationItems.findIndex((item) => item.href === pathname)
  const previousItem = currentIndex > 0 ? navigationItems[currentIndex - 1] : null
  const nextItem = currentIndex < navigationItems.length - 1 ? navigationItems[currentIndex + 1] : null

  return (
    <>
      {/* Floating Navigation Menu */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="icon"
          className="bg-primary/90 text-primary-foreground backdrop-blur-sm border-primary/40 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none w-12 h-12"
          title={isOpen ? "Close menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {!isOpen && pathname === "/" && (
          <div className="absolute top-14 left-0 bg-primary/90 text-primary-foreground px-3 py-1 rounded-md text-xs whitespace-nowrap animate-bounce">
            Click to explore! ✨
          </div>
        )}

        {/* Navigation Menu */}
        {isOpen && (
          <Card className="absolute top-14 left-0 p-4 bg-background/95 backdrop-blur-sm border-primary/20 min-w-48 animate-in slide-in-from-top shadow-xl">
            <div className="space-y-2">
              <h3 className="font-sans text-sm font-semibold text-primary mb-3 flex items-center">
                <Heart size={16} className="mr-2 animate-pulse" />
                Beauty Journey
              </h3>
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start text-left transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground glow-effect"
                          : "hover:bg-primary/10 hover:scale-105"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={16} className="mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </Card>
        )}
      </div>

      {/* Previous/Next Navigation */}
      {pathname !== "/" && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <Card className="flex items-center gap-4 p-4 bg-background/90 backdrop-blur-sm border-primary/20 shadow-lg">
            {previousItem && (
              <Link href={previousItem.href}>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-primary/20 hover:border-primary/40 glow-effect bg-transparent hover:bg-primary/10 transition-all duration-200"
                >
                  <ChevronLeft size={16} />
                  <previousItem.icon size={16} />
                  {previousItem.label}
                </Button>
              </Link>
            )}

            <div className="flex items-center gap-2">
              {navigationItems.slice(1).map((item, index) => (
                <div
                  key={item.href}
                  className={`w-2 h-2 rounded-full transition-all ${
                    pathname === item.href ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            {nextItem && (
              <Link href={nextItem.href}>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-primary/20 hover:border-primary/40 glow-effect bg-transparent hover:bg-primary/10 transition-all duration-200"
                >
                  {nextItem.label}
                  <nextItem.icon size={16} />
                  <ChevronRight size={16} />
                </Button>
              </Link>
            )}
          </Card>
        </div>
      )}
    </>
  )
}
