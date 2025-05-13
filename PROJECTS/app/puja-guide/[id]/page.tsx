"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Bookmark, BookmarkCheck, Play, Pause, Share2, Printer, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Detailed puja guide data
const pujaGuides = [
  {
    id: "1",
    title: "Ganesh Chaturthi Puja",
    description: "Complete guide for Ganesh Chaturthi celebration",
    steps: [
      {
        title: "Preparation",
        content:
          "Clean your worship area and gather these items: Ganesh idol or image, flowers, durva grass, modak or sweets, red cloth, incense sticks, oil lamp, bell, water, turmeric, kumkum, rice grains, and fruits.",
        image: "/placeholder.svg?height=300&width=500",
        duration: "20 minutes",
      },
      {
        title: "Idol Installation",
        content:
          "Place the Ganesh idol on a raised platform covered with a red cloth. Position it facing east or west. Perform 'Pran Pratishtha' by touching the idol and requesting Lord Ganesha to bless the idol with his presence.",
        image: "/placeholder.svg?height=300&width=500",
        duration: "15 minutes",
      },
      {
        title: "Sankalpa (Resolution)",
        content:
          "State your intention to perform the puja with devotion. Offer water with your right hand while reciting your sankalpa (intention) for the puja.",
        image: "/placeholder.svg?height=300&width=500",
        duration: "5 minutes",
      },
      {
        title: "Ganesh Dhyana",
        content:
          "Meditate on Lord Ganesha while reciting the Ganesh Dhyana mantra: 'Om Gajananam Bhoota Ganadhi Sevitam...'",
        image: "/placeholder.svg?height=300&width=500",
        duration: "10 minutes",
      },
      {
        title: "Shodashopachara Puja",
        content:
          "Perform the 16 steps of worship: Avahana (invocation), Asana (offering seat), Padya (washing feet), Arghya (offering water), Achamana (sipping water), Snana (bathing), Vastra (offering cloth), Yagnopavita (sacred thread), Gandha (sandal paste), Pushpa (flowers), Dhupa (incense), Deepa (lamp), Naivedya (food offering), Tambula (betel leaves), Dakshina (offering), and Aarti.",
        image: "/placeholder.svg?height=300&width=500",
        duration: "45 minutes",
      },
      {
        title: "Mantra Chanting",
        content:
          "Recite the following mantras 108 times: 'Om Gam Ganapataye Namaha' and 'Vakratunda Mahakaya Suryakoti Samaprabha Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada'",
        image: "/placeholder.svg?height=300&width=500",
        duration: "20 minutes",
      },
      {
        title: "Aarti & Conclusion",
        content:
          "Perform the aarti by lighting a lamp with camphor or ghee and circling it clockwise in front of the deity. Sing the Ganesh Aarti. Conclude with prayers requesting Lord Ganesha to remove obstacles from your life.",
        image: "/placeholder.svg?height=300&width=500",
        duration: "15 minutes",
      },
    ],
    materials: [
      "Ganesh idol or image",
      "Red cloth",
      "Flowers and durva grass",
      "Modak or sweets",
      "Incense sticks",
      "Oil lamp and camphor",
      "Bell",
      "Water in a small vessel",
      "Turmeric and kumkum",
      "Rice grains (akshata)",
      "Fruits and coconut",
    ],
    mantras: [
      {
        title: "Ganesh Gayatri Mantra",
        sanskrit: "ॐ एकदन्ताय विद्महे, वक्रतुण्डाय धीमहि, तन्नो दन्ति प्रचोदयात्॥",
        transliteration: "Om Ekadantaya Vidmahe, Vakratundaya Dhimahi, Tanno Danti Prachodayat",
        meaning:
          "We meditate on the single-tusked one, we contemplate the one with the curved trunk, may that tusk-bearer inspire us.",
        audio: "/placeholder.mp3",
      },
      {
        title: "Ganesh Mantra",
        sanskrit: "ॐ गं गणपतये नमः",
        transliteration: "Om Gam Ganapataye Namaha",
        meaning: "Salutations to Lord Ganesha, the remover of obstacles.",
        audio: "/placeholder.mp3",
      },
    ],
    festival: "Ganesh Chaturthi",
    difficulty: "Medium",
    image: "/placeholder.svg?height=600&width=800",
    duration: "2 hours",
    views: 12540,
  },
  {
    id: "2",
    title: "Navratri Puja",
    description: "Nine nights of worship to Goddess Durga",
    steps: [
      {
        title: "Preparation",
        content: "Clean the worship area and gather necessary items.",
        image: "/placeholder.svg?height=300&width=500",
        duration: "20 minutes",
      },
    ],
    materials: ["Durga idol or image", "Red cloth", "Flowers"],
    mantras: [
      {
        title: "Durga Mantra",
        sanskrit: "ॐ दुं दुर्गायै नमः",
        transliteration: "Om Dum Durgayei Namaha",
        meaning: "Salutations to Goddess Durga.",
        audio: "/placeholder.mp3",
      },
    ],
    festival: "Navratri",
    difficulty: "Advanced",
    image: "/placeholder.svg?height=300&width=500",
    duration: "1 hour daily",
    views: 9870,
  },
]

export default function PujaGuideDetailPage() {
  const params = useParams()
  const { id } = params

  const [isSaved, setIsSaved] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  // Find the puja guide by ID
  const pujaGuide = pujaGuides.find((guide) => guide.id === id)

  if (!pujaGuide) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Puja Guide Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the puja guide you're looking for.</p>
        <Button asChild>
          <Link href="/puja-guide">Back to Puja Guides</Link>
        </Button>
      </div>
    )
  }

  const toggleSave = () => {
    setIsSaved(!isSaved)
  }

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying)
  }

  const markStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex])
    } else {
      setCompletedSteps(completedSteps.filter((step) => step !== stepIndex))
    }
  }

  const progressPercentage = Math.round((completedSteps.length / pujaGuide.steps.length) * 100)

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/puja-guide">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">{pujaGuide.title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={toggleSave}>
            {isSaved ? <BookmarkCheck className="h-4 w-4 text-orange-500" /> : <Bookmark className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={pujaGuide.image || "/placeholder.svg"}
              alt={pujaGuide.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-orange-500">{pujaGuide.festival}</Badge>
            <Badge variant="outline">{pujaGuide.difficulty}</Badge>
            <Badge variant="outline">Duration: {pujaGuide.duration}</Badge>
            <Badge variant="outline">{pujaGuide.views.toLocaleString()} views</Badge>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Progress</span>
                <span className="text-sm font-normal">
                  {completedSteps.length} of {pujaGuide.steps.length} steps
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progressPercentage} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">{progressPercentage}% complete</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="steps" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="steps">Steps</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="mantras">Mantras</TabsTrigger>
            </TabsList>

            <TabsContent value="steps" className="space-y-6 mt-6">
              {pujaGuide.steps.map((step, index) => (
                <Card key={index} className={completedSteps.includes(index) ? "border-green-500 bg-green-50" : ""}>
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-500 text-sm">
                          {index + 1}
                        </span>
                        {step.title}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">Duration: {step.duration}</p>
                    </div>
                    <Button
                      variant={completedSteps.includes(index) ? "default" : "outline"}
                      size="sm"
                      className={completedSteps.includes(index) ? "bg-green-500 hover:bg-green-600" : ""}
                      onClick={() => markStepComplete(index)}
                    >
                      {completedSteps.includes(index) ? (
                        <>
                          <Check className="h-4 w-4 mr-1" /> Completed
                        </>
                      ) : (
                        "Mark as Complete"
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm">{step.content}</p>
                      </div>
                      <div className="aspect-video rounded-md overflow-hidden">
                        <img
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="materials" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Required Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {pujaGuide.materials.map((material, index) => (
                      <li key={index} className="text-sm">
                        {material}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mantras" className="space-y-6 mt-6">
              {pujaGuide.mantras.map((mantra, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{mantra.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-md">
                      <p className="text-lg text-center font-medium mb-2">{mantra.sanskrit}</p>
                      <p className="text-center text-sm">{mantra.transliteration}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium mb-1">Meaning:</p>
                      <p className="text-sm text-muted-foreground">{mantra.meaning}</p>
                    </div>
                    <Button className="w-full" onClick={toggleAudio}>
                      {isAudioPlaying ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" /> Pause Audio
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" /> Play Audio
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About This Puja</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{pujaGuide.description}</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Festival:</span>
                  <span className="text-sm font-medium">{pujaGuide.festival}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Difficulty:</span>
                  <span className="text-sm font-medium">{pujaGuide.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Duration:</span>
                  <span className="text-sm font-medium">{pujaGuide.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Steps:</span>
                  <span className="text-sm font-medium">{pujaGuide.steps.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Related Puja Guides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pujaGuides
                .filter((guide) => guide.id !== id)
                .slice(0, 3)
                .map((guide) => (
                  <Link href={`/puja-guide/${guide.id}`} key={guide.id} className="block">
                    <div className="flex gap-3 items-center hover:bg-accent rounded-md p-2 transition-colors">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img
                          src={guide.image || "/placeholder.svg"}
                          alt={guide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{guide.title}</h3>
                        <p className="text-xs text-muted-foreground">{guide.festival}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
