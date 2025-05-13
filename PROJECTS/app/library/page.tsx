"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, BookOpen, FileText, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const sacredTexts = [
  {
    id: 1,
    title: "Bhagavad Gita",
    description: "The Song of God",
    chapters: 18,
    type: "scripture",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 2,
    title: "Ramayana",
    description: "The Journey of Rama",
    chapters: 7,
    type: "epic",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 3,
    title: "Mahabharata",
    description: "The Great Tale of the Bharata Dynasty",
    chapters: 18,
    type: "epic",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 4,
    title: "Vedas",
    description: "Ancient Sacred Texts",
    chapters: 4,
    type: "scripture",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 5,
    title: "Upanishads",
    description: "Philosophical Texts",
    chapters: 108,
    type: "philosophy",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 6,
    title: "Puranas",
    description: "Ancient Narratives",
    chapters: 18,
    type: "narrative",
    image: "/placeholder.svg?height=300&width=200",
  },
]

const articles = [
  {
    id: 1,
    title: "Understanding Karma",
    description: "The law of cause and effect",
    readTime: "5 min read",
    type: "philosophy",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "The Significance of Diwali",
    description: "Festival of lights",
    readTime: "7 min read",
    type: "festival",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Meditation Techniques",
    description: "Ancient practices for modern life",
    readTime: "10 min read",
    type: "practice",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const mantras = [
  {
    id: 1,
    title: "Gayatri Mantra",
    description: "Sacred verse from the Rigveda",
    duration: "2:30",
    type: "vedic",
  },
  {
    id: 2,
    title: "Om Namah Shivaya",
    description: "Devotion to Lord Shiva",
    duration: "3:15",
    type: "devotional",
  },
  {
    id: 3,
    title: "Mahamrityunjaya Mantra",
    description: "For healing and longevity",
    duration: "4:05",
    type: "healing",
  },
]

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTexts = sacredTexts.filter(
    (text) =>
      text.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      text.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredMantras = mantras.filter(
    (mantra) =>
      mantra.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mantra.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">📚</span> Sacred Library
      </h1>

      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search scriptures, articles, mantras..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="texts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="texts">
            <BookOpen className="h-4 w-4 mr-2" />
            Sacred Texts
          </TabsTrigger>
          <TabsTrigger value="articles">
            <FileText className="h-4 w-4 mr-2" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="mantras">
            <Music className="h-4 w-4 mr-2" />
            Mantras
          </TabsTrigger>
        </TabsList>

        <TabsContent value="texts" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTexts.map((text) => (
              <Card key={text.id} className="overflow-hidden">
                <div className="aspect-[2/3] relative">
                  <img src={text.image || "/placeholder.svg"} alt={text.title} className="w-full h-full object-cover" />
                  <Badge className="absolute top-2 right-2 bg-orange-500">{text.type}</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{text.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{text.description}</p>
                  <p className="text-sm mt-2">{text.chapters} chapters</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/library/texts/${text.id}`}>Read</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-orange-500">{article.type}</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                  <p className="text-xs mt-2">{article.readTime}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/library/articles/${article.id}`}>Read Article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mantras" className="mt-6">
          <div className="space-y-4">
            {filteredMantras.map((mantra) => (
              <Card key={mantra.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{mantra.title}</span>
                    <Badge variant="outline">{mantra.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{mantra.description}</p>
                  <p className="text-xs mt-2">Duration: {mantra.duration}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <Music className="h-4 w-4 mr-2" />
                    Listen
                  </Button>
                  <Button variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Learn
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
