"use client"

import { useState } from "react"
import { CalendarIcon, Bell, BellOff, ChevronLeft, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample festival data
const festivals = [
  {
    id: 1,
    name: "Ganesh Chaturthi",
    date: new Date(2024, 8, 7), // September 7, 2024
    description: "Celebration of the birth of Lord Ganesha",
    rituals: ["Idol installation", "Puja", "Visarjan"],
    remindMe: false,
  },
  {
    id: 2,
    name: "Navratri",
    date: new Date(2024, 9, 3), // October 3, 2024
    description: "Nine nights dedicated to Goddess Durga",
    rituals: ["Garba", "Durga Puja", "Fasting"],
    remindMe: false,
  },
  {
    id: 3,
    name: "Diwali",
    date: new Date(2024, 9, 31), // October 31, 2024
    description: "Festival of Lights",
    rituals: ["Lakshmi Puja", "Lighting diyas", "Rangoli"],
    remindMe: true,
  },
  {
    id: 4,
    name: "Makar Sankranti",
    date: new Date(2025, 0, 14), // January 14, 2025
    description: "Harvest festival",
    rituals: ["Flying kites", "Til-gul exchange", "Charity"],
    remindMe: false,
  },
  {
    id: 5,
    name: "Maha Shivratri",
    date: new Date(2025, 1, 26), // February 26, 2025
    description: "Night of Lord Shiva",
    rituals: ["Fasting", "Night vigil", "Abhishekam"],
    remindMe: false,
  },
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedFestival, setSelectedFestival] = useState<any>(null)
  const [reminders, setReminders] = useState<number[]>(festivals.filter((f) => f.remindMe).map((f) => f.id))

  const [month, setMonth] = useState(new Date())

  const toggleReminder = (festivalId: number) => {
    if (reminders.includes(festivalId)) {
      setReminders(reminders.filter((id) => id !== festivalId))
    } else {
      setReminders([...reminders, festivalId])
    }
  }

  // Get festivals for the selected date
  const getFestivalsForDate = (date: Date | undefined) => {
    if (!date) return []

    return festivals.filter(
      (festival) =>
        festival.date.getDate() === date.getDate() &&
        festival.date.getMonth() === date.getMonth() &&
        festival.date.getFullYear() === date.getFullYear(),
    )
  }

  const selectedDateFestivals = getFestivalsForDate(date)

  // Get all dates with festivals for the calendar
  const festivalDates = festivals.map((festival) => festival.date)

  const previousMonth = () => {
    setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
  }

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">🗓️</span> Festival Calendar
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Hindu Festivals {month.getFullYear()}</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardDescription>View upcoming festivals and set reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              month={month}
              onMonthChange={setMonth}
              className="rounded-md border"
              modifiers={{
                festival: festivalDates,
              }}
              modifiersStyles={{
                festival: {
                  fontWeight: "bold",
                  backgroundColor: "rgba(249, 115, 22, 0.1)",
                  color: "rgb(249, 115, 22)",
                  borderRadius: "0.25rem",
                },
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {date
                ? date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
                : "Select a date"}
            </CardTitle>
            <CardDescription>
              {selectedDateFestivals.length > 0
                ? `${selectedDateFestivals.length} festival(s) on this date`
                : "No festivals on this date"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDateFestivals.length > 0 ? (
              <div className="space-y-4">
                {selectedDateFestivals.map((festival) => (
                  <div key={festival.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{festival.name}</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setSelectedFestival(festival)}>
                              <Info className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>View festival details</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{festival.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id={`reminder-${festival.id}`}
                          checked={reminders.includes(festival.id)}
                          onCheckedChange={() => toggleReminder(festival.id)}
                        />
                        <Label htmlFor={`reminder-${festival.id}`}>Remind me</Label>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            View Rituals
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{festival.name} Rituals</DialogTitle>
                            <DialogDescription>Traditional rituals and practices for {festival.name}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <ul className="list-disc pl-5 space-y-2">
                              {festival.rituals.map((ritual, index) => (
                                <li key={index} className="text-sm">
                                  {ritual}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <DialogFooter>
                            <Button asChild>
                              <a href={`/puja-guide?festival=${festival.name}`}>View Complete Puja Guide</a>
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Select a date with a festival to see details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Festivals</CardTitle>
          <CardDescription>Mark your calendar for these important dates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {festivals
              .filter((festival) => festival.date >= new Date())
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .slice(0, 5)
              .map((festival) => (
                <div key={festival.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="font-medium">{festival.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {festival.date.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={reminders.includes(festival.id) ? "default" : "outline"}
                      className={reminders.includes(festival.id) ? "bg-orange-500" : ""}
                    >
                      {reminders.includes(festival.id) ? (
                        <Bell className="h-3 w-3 mr-1" />
                      ) : (
                        <BellOff className="h-3 w-3 mr-1" />
                      )}
                      {reminders.includes(festival.id) ? "Reminder On" : "Set Reminder"}
                    </Badge>
                    <Button variant="ghost" size="sm" onClick={() => toggleReminder(festival.id)}>
                      {reminders.includes(festival.id) ? <BellOff className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Festivals
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
