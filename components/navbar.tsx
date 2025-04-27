"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Book, Calendar, Home, Info, Menu, Moon, Phone, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { name: t("nav.home"), path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: t("nav.courses"), path: "/courses", icon: <Book className="h-4 w-4 mr-2" /> },
    { name: t("nav.donate"), path: "/donate", icon: <Book className="h-4 w-4 mr-2" /> },
    { name: t("nav.activities"), path: "/activities", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { name: t("nav.prayerTimes"), path: "/prayer-times", icon: <Calendar className="h-4 w-4 mr-2" /> },
    { name: t("nav.about"), path: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
    { name: t("nav.contact"), path: "/contact", icon: <Phone className="h-4 w-4 mr-2" /> },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-4 py-4">
                <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center">
                    <Image src="/images/logo.png" alt="Fayzul Ulum Madrasa Logo" width={40} height={40} />
                    <span className="ml-2 text-xl font-bold text-green-600">{t("site.name")}</span>
                  </div>
                </Link>
                <nav className="flex flex-col gap-2">
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                        pathname === route.path
                          ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                          : "hover:bg-muted"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.icon}
                      {route.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Fayzul Ulum Madrasa Logo" width={40} height={40} />
            <div>
              <span className="text-xl font-bold text-green-600 hidden md:inline-block">{t("site.name")}</span>
            </div>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm font-medium transition-colors ${
                pathname === route.path
                  ? "text-green-700 dark:text-green-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild className="hidden md:flex" variant="default">
            <Link href="/donate">{t("nav.donateNow")}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
