"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Como iniciar como Maestro de Seminario",
    href: "/getting-started",
    children: [
      { title: "¿Que es ser un Maestro de Seminario?", href: "/getting-started/installation" },
      { title: "Configuration", href: "/getting-started/configuration" },
    ],
  },
  {
    title: "WISE",
    href: "/",
    children: [
      { title: "Button", href: "/wise" },
      { title: "Card", href: "/components/card" },
      { title: "Input", href: "/components/input" },
    ],
  },
  {
    title: "API Reference",
    href: "/api-reference",
    children: [
      { title: "Authentication", href: "/api-reference/authentication" },
      { title: "Endpoints", href: "/api-reference/endpoints" },
    ],
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    "Getting Started": true,
  })

  const toggleExpand = (title: string) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="py-5 px-2">
      <div className="px-3 mb-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Seminario Documentación</span>
        </Link>
      </div>

      <div className="relative px-3 mb-6">
        <Search className="absolute left-6 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search documentation..." className="pl-9" />
      </div>

      <nav className="space-y-1 px-3">
        {navItems.map((item) => (
          <div key={item.title} className="mb-4">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-left font-medium",
                pathname === item.href && "bg-accent text-accent-foreground",
              )}
              onClick={() => toggleExpand(item.title)}
            >
              {item.title}
              <span className="ml-auto">{expanded[item.title] ? "−" : "+"}</span>
            </Button>
            {item.children && expanded[item.title] && (
              <div className="ml-4 mt-1 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "block py-2 px-3 text-lg rounded-md hover:bg-accent",
                      pathname === child.href && "bg-accent text-accent-foreground font-medium",
                    )}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

