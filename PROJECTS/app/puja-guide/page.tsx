"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronDown, Play, Bookmark, BookmarkCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const pujaGuides = [
  {
    id: 1,
    title: "Ganesh Chaturthi Puja",
    description: "Complete guide for Ganesh Chaturthi celebration",
    steps: 7,
    duration: "2 hours",
    festival: "Ganesh Chaturthi",
    difficulty: "Medium",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Navratri Puja",
    description: "Nine nights of worship to Goddess Durga",
    steps: 9,
    duration: "1 hour daily",
    festival: "Navratri",
    difficulty: "Advanced",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Diwali Lakshmi Puja",
    description: "Ritual to invite Goddess Lakshmi on Diwali",
    steps: 5,
    duration: "45 minutes",
    festival: "Diwali",
    difficulty: "Beginner",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Satyanarayan Puja",
    description: "Worship of Lord Vishnu for prosperity",
    steps: 16,
    duration: "3 hours",
    festival: "Any auspicious day",
    difficulty: "Advanced",
    image: "/placeholder.svg?height=300&width=500",
  },
]

const videoGuides = [
  {
    id: 1,
    title: "How to Perform Aarti",
    description: "Step-by-step guide to performing aarti",
    duration: "10:25",
    views: "45K",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 2,
    title: "Proper Mantra Pronunciation",
    description: "Learn the correct pronunciation of common mantras",
    duration: "15:30",
    views: "32K",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 3,
    title: "Setting Up a Home Temple",
    description: "Guide to creating a sacred space at home",
    duration: "20:15",
    views: "28K",
    image: "/placeholder.svg?height=200&width=350",
  },
]

export default function PujaGuidePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFestival, setSelectedFestival] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [savedGuides, setSavedGuides] = useState<number[]>([])

  const toggleSaveGuide = (id: number) => {
    if (savedGuides.includes(id)) {
      setSavedGuides(savedGuides.filter((guideId) => guideId !== id))
    } else {
      setSavedGuides([...savedGuides, id])
    }
  }

  const filteredPujaGuides = pujaGuides.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFestival = selectedFestival === "all" || guide.festival === selectedFestival
    const matchesDifficulty = selectedDifficulty === "all" || guide.difficulty === selectedDifficulty

    return matchesSearch && matchesFestival && matchesDifficulty
  })

  const filteredVideoGuides = videoGuides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">🛕</span> Puja Guides
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search puja guides..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Select value={selectedFestival} onValueChange={setSelectedFestival}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Festival" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Festivals</SelectItem>
              <SelectItem value="Ganesh Chaturthi">Ganesh Chaturthi</SelectItem>
              <SelectItem value="Navratri">Navratri</SelectItem>
              <SelectItem value="Diwali">Diwali</SelectItem>
              <SelectItem value="Any auspicious day">Any Auspicious Day</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="guides">Step-by-Step Guides</TabsTrigger>
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPujaGuides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Badge className="bg-orange-500">{guide.festival}</Badge>
                    <Badge variant="outline" className="bg-background">
                      {guide.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{guide.description}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>{guide.steps} steps</span>
                    <span>{guide.duration}</span>
                  </div>

                  <Collapsible className="mt-4 border rounded-md">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
                      <span className="font-medium">Preview Steps</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 pt-0 border-t">
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Preparation of puja materials</li>
                        <li>Setting up the altar</li>
                        <li>Invocation mantras</li>
                        <li>... and more steps</li>
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild>
                    <Link href={`/puja-guide/${guide.id}`}>View Full Guide</Link>
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => toggleSaveGuide(guide.id)}>
                    {savedGuides.includes(guide.id) ? (
                      <BookmarkCheck className="h-4 w-4 text-orange-500" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredVideoGuides.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="aspect-video relative group">
                  <img
                    src={video.image || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="default" size="icon" className="rounded-full bg-orange-500 hover:bg-orange-600">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="outline" className="bg-black/70 text-white border-none">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                  <p className="text-xs mt-2">{video.views} views</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/puja-guide/videos/${video.id}`}>Watch Now</Link>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => toggleSaveGuide(video.id)}>
                    <Bookmark className="h-4 w-4" />
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
