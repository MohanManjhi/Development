import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QuoteOfTheDay() {
  return (
    <Card className="w-full dark:bg-gray-800">
      <CardHeader>
        <CardTitle>Quote of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <blockquote className="border-l-4 border-orange-500 pl-4 italic">
          <p className="text-lg">
            "You have the right to work, but never to the fruit of work. You should never engage in action for the sake
            of reward, nor should you long for inaction."
          </p>
          <footer className="mt-2 text-sm text-muted-foreground">— Bhagavad Gita, Chapter 2, Verse 47</footer>
        </blockquote>
      </CardContent>
    </Card>
  )
}
