"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  BookOpen,
  HandIcon as PrayingHands,
  ShoppingBag,
  Bookmark,
  Users,
  Calendar,
  Bell,
  Menu,
  LogOut,
  Sun,
  Moon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import { useTheme } from "@/contexts/theme-context"

const navItems = [
  { name: "nav.home", href: "/", icon: Home },
  { name: "nav.library", href: "/library", icon: BookOpen },
  { name: "nav.puja_guide", href: "/puja-guide", icon: PrayingHands },
  { name: "nav.bazaar", href: "/bazaar", icon: ShoppingBag },
  { name: "nav.my_space", href: "/my-space", icon: Bookmark },
  { name: "nav.community", href: "/community", icon: Users },
  { name: "nav.calendar", href: "/calendar", icon: Calendar },
]

const languages = [
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "ગુજરાતી", code: "gu" },
  { name: "தமிழ்", code: "ta" },
]

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { isAuthenticated, user, login, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Update current language when language context changes
    const lang = languages.find((l) => l.code === language) || languages[0]
    setCurrentLanguage(lang)
  }, [language])

  const handleLogin = () => {
    login()
    router.push("/profile")
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as "en" | "hi" | "gu" | "ta")
  }

  return (
    <>
      {/* Desktop Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-900 dark:border-gray-800">
        <div className="container flex h-16 items-center">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] dark:bg-gray-900">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-lg rounded-md hover:bg-accent",
                      pathname === item.href ? "bg-accent font-medium" : "",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {t(item.name)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2 mr-6">
            <PrayingHands className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-xl hidden sm:inline-block">Hindu Community</span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-md hover:bg-accent transition-colors",
                  pathname === item.href ? "bg-accent font-medium" : "",
                )}
              >
                <item.icon className="h-4 w-4" />
                {t(item.name)}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden sm:flex">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  {currentLanguage.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarImage src={user?.avatar || "/images/avatar1.jpg"} alt={user?.name || "User"} />
                      <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">{t("nav.profile")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-space">{t("nav.my_space")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    {t("nav.logout")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                asChild
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                <Link href="/login" onClick={handleLogin}>
                  {t("nav.login")}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t py-2 md:hidden dark:bg-gray-900 dark:border-gray-800">
          <div className="container flex justify-between items-center">
            {navItems.slice(0, isAuthenticated ? 4 : 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 p-1",
                  pathname === item.href ? "text-orange-500" : "text-muted-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{t(item.name)}</span>
              </Link>
            ))}
            {isAuthenticated && (
              <Link
                href="/profile"
                className={cn(
                  "flex flex-col items-center gap-1 p-1",
                  pathname === "/profile" ? "text-orange-500" : "text-muted-foreground",
                )}
              >
                <Avatar className="h-5 w-5">
                  <AvatarImage src={user?.avatar || "/images/avatar1.jpg"} alt={user?.name || "User"} />
                  <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
                <span className="text-xs">{t("nav.profile")}</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  )
}
