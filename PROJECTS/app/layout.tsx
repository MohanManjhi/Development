import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation/navigation"
import { ThemeProvider as NextThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { AuthProvider } from "@/contexts/auth-context"
import { ThemeProvider } from "@/contexts/theme-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hindu Community Platform",
  description: "A platform for the Hindu community to connect, learn, and grow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <AuthProvider>
              <ThemeProvider>
                <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
                  <Navigation />
                  <main className="flex-1">{children}</main>
                </div>
              </ThemeProvider>
            </AuthProvider>
          </LanguageProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
