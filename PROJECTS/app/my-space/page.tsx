"use client"

import { useState } from "react"
import { Search, Bookmark, FileText, Music, Video, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const savedItems = [
  {
    id: 1,
    title: "Gayatri Mantra",
    description: "Sacred verse from the Rigveda",
    type: "Mantra",
    date: "2 days ago",
    icon: Music,
  },
  {
    id: 2,
    title: "The Significance of Diwali",
    description: "Festival of lights and its spiritual meaning",
    type: "Article",
    date: "1 week ago",
    icon: FileText,
  },
  {
    id: 3,
    title: "Ganesh Chaturthi Puja",
    description: "Complete guide for Ganesh Chaturthi celebration",
    type: "Puja Guide",
    date: "2 weeks ago",
    icon: Bookmark,
  },
  {
    id: 4,
    title: "How to Perform Aarti",
    description: "Step-by-step guide to performing aarti",
    type: "Video",
    date: "3 weeks ago",
    icon: Video,
  },
  {
    id: 5,
    title: "Om Namah Shivaya",
    description: "Devotion to Lord Shiva",
    type: "Mantra",
    date: "1 month ago",
    icon: Music,
  },
  {
    id: 6,
    title: "Understanding Karma",
    description: "The law of cause and effect",
    type: "Article",
    date: "1 month ago",
    icon: FileText,
  },
]

const itemTypes = ["All Types", "Mantra", "Article", "Puja Guide", "Video"]

export default function MySpacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All Types")
  const [items, setItems] = useState(savedItems)

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = selectedType === "All Types" || item.type === selectedType

    return matchesSearch && matchesType
  })

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">🔖</span> My Space
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search saved items..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            {itemTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">{item.title}</CardTitle>
              <Badge variant="outline">{item.type}</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <item.icon className="h-5 w-5 text-orange-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="text-xs text-muted-foreground">Saved {item.date}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="default" size="sm">
                Open
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remove from saved items?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will remove "{item.title}" from your saved items. You can always save it again later.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeItem(item.id)} className="bg-red-500 hover:bg-red-600">
                      Remove
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-medium mb-2">No saved items found</h2>
          <p className="text-muted-foreground">
            {items.length === 0
              ? "You haven't saved any items yet. Browse the library, puja guides, or articles to save content for later."
              : "No items match your current filters. Try adjusting your search or filter criteria."}
          </p>
        </div>
      )}
    </div>
  )
}
