"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  avatar: string
  followers: number
  following: number
  bio: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Dummy user data
const dummyUser: User = {
  id: "1",
  name: "Arjun Sharma",
  email: "arjun.sharma@example.com",
  avatar: "/images/avatar1.jpg",
  followers: 245,
  following: 178,
  bio: "Spiritual seeker | Yoga enthusiast | Vedic philosophy student | Based in Mumbai",
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is already logged in from localStorage
  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated")
    if (savedAuth === "true") {
      setUser(dummyUser)
      setIsAuthenticated(true)
    }
  }, [])

  const login = () => {
    setUser(dummyUser)
    setIsAuthenticated(true)
    localStorage.setItem("isAuthenticated", "true")
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("isAuthenticated")
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
