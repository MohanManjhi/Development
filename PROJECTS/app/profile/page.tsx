"use client"

import { useState } from "react"
import Image from "next/image"
import { User, Mail, Phone, MapPin, Bookmark, Edit, Grid, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"

// Dummy post data
const userPosts = [
  {
    id: 1,
    type: "photo",
    image: "/images/temple1.jpg",
    caption: "Visited the beautiful Akshardham Temple today. The architecture is breathtaking!",
    likes: 45,
    comments: 8,
    date: "2 days ago",
  },
  {
    id: 2,
    type: "photo",
    image: "/images/diwali1.jpg",
    caption: "Diwali celebrations at home. May the light of diyas bring joy and prosperity to all.",
    likes: 72,
    comments: 12,
    date: "1 week ago",
  },
  {
    id: 3,
    type: "photo",
    image: "/images/ganesh1.jpg",
    caption: "Ganesh Chaturthi celebrations. Ganpati Bappa Morya!",
    likes: 63,
    comments: 9,
    date: "2 weeks ago",
  },
  {
    id: 4,
    type: "video",
    image: "/images/video1.jpg",
    caption: "Sharing my morning aarti routine. Peace and blessings to all.",
    likes: 38,
    comments: 5,
    date: "3 weeks ago",
  },
  {
    id: 5,
    type: "photo",
    image: "/images/puja1.jpg",
    caption: "Morning puja ritual. Starting the day with divine blessings.",
    likes: 51,
    comments: 7,
    date: "1 month ago",
  },
  {
    id: 6,
    type: "quote",
    content: '"The greatest mantra is your own breath. The greatest temple is your own body."',
    likes: 84,
    comments: 15,
    date: "1 month ago",
  },
]

const savedItems = [
  { id: 1, type: "Mantra", title: "Gayatri Mantra", description: "Sacred verse from the Rigveda", date: "2 days ago" },
  {
    id: 2,
    type: "Article",
    title: "The Significance of Diwali",
    description: "Festival of lights and its spiritual meaning",
    date: "1 week ago",
  },
  {
    id: 3,
    type: "Puja Guide",
    title: "Ganesh Chaturthi Puja",
    description: "Complete guide for Ganesh Chaturthi celebration",
    date: "2 weeks ago",
  },
  {
    id: 4,
    type: "Video",
    title: "How to Perform Aarti",
    description: "Step-by-step guide to performing aarti",
    date: "3 weeks ago",
  },
  {
    id: 5,
    type: "PDF",
    title: "Bhagavad Gita Chapter 2",
    description: "With Sanskrit text and English translation",
    date: "1 month ago",
  },
  {
    id: 6,
    type: "Audio",
    title: "Om Namah Shivaya Chant",
    description: "10-minute meditation chant",
    date: "1 month ago",
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts")
  const { user, isAuthenticated, logout } = useAuth()
  const { t } = useLanguage()
  const router = useRouter()

  // Redirect if not authenticated
  if (!isAuthenticated) {
    router.push("/login")
    return null
  }

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      {/* Profile Header */}
      <Card className="border-none shadow-none bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarImage src={user?.avatar || "/images/avatar1.jpg"} alt={user?.name || "User"} />
                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold">{user?.name}</h1>
              <p className="text-muted-foreground">{user?.bio}</p>

              <div className="flex justify-center md:justify-start gap-6 mt-4">
                <div className="text-center">
                  <p className="font-bold">{userPosts.length}</p>
                  <p className="text-sm text-muted-foreground">{t("profile.posts")}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{user?.followers}</p>
                  <p className="text-sm text-muted-foreground">{t("profile.followers")}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">{user?.following}</p>
                  <p className="text-sm text-muted-foreground">{t("profile.following")}</p>
                </div>
              </div>

              <div className="mt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                  {t("profile.edit_profile")}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="posts" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts">
            <Grid className="h-4 w-4 mr-2" />
            {t("profile.posts")}
          </TabsTrigger>
          <TabsTrigger value="saved">
            <Bookmark className="h-4 w-4 mr-2" />
            {t("profile.saved")}
          </TabsTrigger>
          <TabsTrigger value="about">
            <User className="h-4 w-4 mr-2" />
            {t("profile.about")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                {post.type === "quote" ? (
                  <CardContent className="p-6 h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-800 dark:to-gray-700">
                    <div className="text-center">
                      <p className="text-lg font-medium italic">{post.content}</p>
                      <div className="mt-4 flex items-center justify-center gap-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" /> {post.likes}
                        </Button>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  </CardContent>
                ) : (
                  <>
                    <div className="aspect-square relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.caption || "Post"}
                        fill
                        className="object-cover"
                      />
                      {post.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="bg-white rounded-full p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6 text-orange-500"
                            >
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-3">
                      <p className="text-sm line-clamp-2">{post.caption}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" /> {post.likes}
                        </Button>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedItems.map((item) => (
              <Card key={item.id}>
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">{item.title}</CardTitle>
                  <Badge variant="outline">{item.type}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <p className="text-xs text-muted-foreground">Saved {item.date}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="default" size="sm">
                    Open
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="about" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("profile.about")}</CardTitle>
              <CardDescription>Personal information and contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Name:</span>
                  <span>{user?.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Email:</span>
                  <span>{user?.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Phone:</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Location:</span>
                  <span>Mumbai, India</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Bio</h3>
                <p className="text-sm">{user?.bio}</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Yoga</Badge>
                  <Badge variant="secondary">Meditation</Badge>
                  <Badge variant="secondary">Vedic Philosophy</Badge>
                  <Badge variant="secondary">Sanskrit</Badge>
                  <Badge variant="secondary">Temple Architecture</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                Edit Information
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
