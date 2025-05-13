import Link from "next/link"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslatedText } from "@/components/translated-text"

export function FestivalReminder() {
  const upcomingFestivals = [
    {
      name: "Navratri",
      date: "October 3-12, 2024",
      description: "Nine nights dedicated to Goddess Durga",
      daysLeft: 14,
    },
    {
      name: "Diwali",
      date: "October 31, 2024",
      description: "Festival of Lights",
      daysLeft: 42,
    },
  ]

  return (
    <Card className="w-full dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-orange-500" />
          <TranslatedText id="home.upcoming_festivals" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingFestivals.map((festival) => (
            <div key={festival.name} className="flex items-center justify-between border-b pb-3 dark:border-gray-700">
              <div>
                <h3 className="font-medium">{festival.name}</h3>
                <p className="text-sm text-muted-foreground">{festival.date}</p>
                <p className="text-sm">{festival.description}</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium dark:bg-orange-900 dark:text-orange-100">
                  {festival.daysLeft} <TranslatedText id="common.days_left" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/calendar">
            <TranslatedText id="home.view_all_festivals" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
