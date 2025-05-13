"use client"

import { useState } from "react"
import { Play, Pause, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TranslatedText } from "@/components/translated-text"

export function DailyMantraCard() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleSave = () => {
    setIsSaved(!isSaved)
  }

  return (
    <Card className="w-full bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Daily Mantra</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSave}
            className={cn(isSaved ? "text-orange-500" : "text-muted-foreground")}
          >
            <Bookmark className="h-5 w-5" />
            <span className="sr-only">Save Mantra</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-lg font-medium text-center">ॐ सर्वे भवन्तु सुखिनः</p>
          <p className="text-center text-muted-foreground">Om Sarve Bhavantu Sukhinah</p>
          <p className="text-sm text-center">May all beings everywhere be happy and free</p>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="outline" size="sm" className="rounded-full" onClick={togglePlay}>
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Pause Audio
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              <TranslatedText id="common.play_audio" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
