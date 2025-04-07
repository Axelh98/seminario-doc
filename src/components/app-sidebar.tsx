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
    title: "Seminario",
    href: "/getting-started",
    children: [

      // LINKEAR CAP 15.1.1 DEL MANUAL GENERA
      { title: "Objetivo de Seminario", href: "/getting-started/installation" },
      { title: "¿Que es Seminario?", href: "/getting-started/installation" },
    ],
  },

  {
    title: "Maestros",
    href: "/getting-started",
    children: [

      { title: "Rol del Maestro de Seminario", href: "/getting-started/installation" },
      { title: "¿Que es ser un Maestro de Seminario?", href: "/getting-started/installation" },
    ],
  },
  {
    title: "Supervisoras",
    href: "/Supervisoras",
    children: [
      { title: "¿Que es una Supervisora de Seminario?", href: "/api-reference/authentication" },

    ],
  },

  {
    title: "Capacitación Sobre los Cursos",
    href: "/capaciacion-cursos",
    children: [
      { title: "Guia de Consulta Rapida", href: "/capaciacion-cursos/guia-rapida" },
      { title: "Antes de Empezar a Enseñar", href: "/capaciacion-cursos/empezar-enseñar" },
      { title: "Reseña del Manual del Maestro", href: "/capaciacion-cursos/reseña" },
      { title: "Agenda Basica", href: "/capaciacion-cursos/Agenda Basica" },
    ],
  },


  {
    title: "Certificaciones y Graduaciones",
    href: "/certificaciones-graduaciones",
    children: [
      { title: "Requisitos", href: "/certificaciones-graduaciones" },
      { title: "Recuperaciones", href: "/certificaciones-graduaciones" },
    ],
  },


  {
    title: "WISE",
    href: "/wise",
    children: [
      { title: "Introducción", href: "/wise/introduccion" },
      { title: "Iniciar Sesión", href: "/wise/inicio-sesion" },
      { title: "Configurar mi ubicación", href: "/wise/configurar" },
      { title: "Buscar mi clase", href: "/wise/buscar-clase" },
      { title: "Navegar por la clase", href: "/wise/navegar-clase" },
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
                  "w-full justify-start text-left font-medium hover:bg-blue-200 focus:bg-blue-300 active:bg-blue-300",
                  pathname === item.href && "bg-accent text-accent-foreground",
                )}
                onClick={() => toggleExpand(item.title)}
              >
                {item.title}
                <span className="ml-auto">{expanded[item.title] ? "−" : "+"}</span>
              </Button>
              {item.children && expanded[item.title] && (
                <div className="ml-4 mt-1 space-y-1 ">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "block py-2 px-3 text-sm rounded-md hover:bg-blue-200 focus:bg-blue-300 active:bg-blue-300",
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

