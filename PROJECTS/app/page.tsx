import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Music, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DailyMantraCard } from "@/components/home/daily-mantra-card"
import { QuoteOfTheDay } from "@/components/home/quote-of-the-day"
import { FestivalReminder } from "@/components/home/festival-reminder"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TranslatedText } from "@/components/translated-text"

export default function HomePage() {
  return (
    <div className="container py-8 space-y-8 mb-16 md:mb-0">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">🪔</span> <TranslatedText id="home.daily_inspiration" />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DailyMantraCard />
        <QuoteOfTheDay />
      </div>

      {/* Photos Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            <TranslatedText id="home.photos" />
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/photos" className="flex items-center">
              <TranslatedText id="home.see_all" /> <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4 pb-4">
            <Link href="/photos/1" className="shrink-0 relative">
              <div className="overflow-hidden rounded-md w-[250px] h-[150px]">
                <Image
                  src="/images/temple1.jpg"
                  alt="Hindu Temple"
                  width={250}
                  height={150}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-sm font-medium">Golden Temple, Amritsar</p>
              </div>
            </Link>
            <Link href="/photos/2" className="shrink-0 relative">
              <div className="overflow-hidden rounded-md w-[250px] h-[150px]">
                <Image
                  src="/images/diwali1.jpg"
                  alt="Diwali Celebration"
                  width={250}
                  height={150}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-sm font-medium">Diwali Celebrations</p>
              </div>
            </Link>
            <Link href="/photos/3" className="shrink-0 relative">
              <div className="overflow-hidden rounded-md w-[250px] h-[150px]">
                <Image
                  src="/images/ganesh1.jpg"
                  alt="Ganesh Festival"
                  width={250}
                  height={150}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-sm font-medium">Ganesh Chaturthi</p>
              </div>
            </Link>
            <Link href="/photos/4" className="shrink-0 relative">
              <div className="overflow-hidden rounded-md w-[250px] h-[150px]">
                <Image
                  src="/images/holi1.jpg"
                  alt="Holi Festival"
                  width={250}
                  height={150}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-sm font-medium">Holi Festival</p>
              </div>
            </Link>
            <Link href="/photos/5" className="shrink-0 relative">
              <div className="overflow-hidden rounded-md w-[250px] h-[150px]">
                <Image
                  src="/images/puja1.jpg"
                  alt="Puja Ceremony"
                  width={250}
                  height={150}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-sm font-medium">Traditional Puja</p>
              </div>
            </Link>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Status Updates / Quotes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            <TranslatedText id="home.community_thoughts" />
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/community" className="flex items-center">
              <TranslatedText id="home.see_all" /> <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <Avatar>
                <AvatarImage src="/images/avatar1.jpg" alt="Priya Sharma" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Priya Sharma</p>
                <p className="text-xs text-muted-foreground">
                  2 <TranslatedText id="common.hours_ago" />
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                "The greatest mantra is your own breath. The greatest temple is your own body." - Sharing this beautiful
                quote I came across in my readings today.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-1" /> 78
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/community/post/1">
                  <TranslatedText id="common.view" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <Avatar>
                <AvatarImage src="/images/avatar2.png" alt="Rahul Patel" />
                <AvatarFallback>RP</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Rahul Patel</p>
                <p className="text-xs text-muted-foreground">
                  5 <TranslatedText id="common.hours_ago" />
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Question for the community: What's your favorite shloka from the Bhagavad Gita and why does it resonate
                with you?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-1" /> 56
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/community/post/2">
                  <TranslatedText id="common.view" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <Avatar>
                <AvatarImage src="/images/avatar3.jpg" alt="Ananya Gupta" />
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">Ananya Gupta</p>
                <p className="text-xs text-muted-foreground">
                  <TranslatedText id="common.yesterday" />
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Made prasad for Janmashtami celebration tomorrow. Excited to celebrate with family and friends!
              </p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-1" /> 92
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/community/post/3">
                  <TranslatedText id="common.view" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Videos Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            <TranslatedText id="home.videos" />
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/videos" className="flex items-center">
              <TranslatedText id="home.see_all" /> <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/videos/1" className="group">
            <div className="relative rounded-md overflow-hidden aspect-video">
              <Image
                src="/images/video1.jpg"
                alt="How to Perform Aarti"
                width={400}
                height={225}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-orange-500 rounded-full p-3">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">10:25</div>
            </div>
            <h3 className="mt-2 font-medium">How to Perform Aarti</h3>
            <p className="text-sm text-muted-foreground">Step-by-step guide to performing aarti</p>
          </Link>
          <Link href="/videos/2" className="group">
            <div className="relative rounded-md overflow-hidden aspect-video">
              <Image
                src="/images/video2.jpg"
                alt="Proper Mantra Pronunciation"
                width={400}
                height={225}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-orange-500 rounded-full p-3">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">15:30</div>
            </div>
            <h3 className="mt-2 font-medium">Proper Mantra Pronunciation</h3>
            <p className="text-sm text-muted-foreground">Learn the correct pronunciation of common mantras</p>
          </Link>
          <Link href="/videos/3" className="group">
            <div className="relative rounded-md overflow-hidden aspect-video">
              <Image
                src="/images/video3.jpg"
                alt="Setting Up a Home Temple"
                width={400}
                height={225}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-orange-500 rounded-full p-3">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">20:15</div>
            </div>
            <h3 className="mt-2 font-medium">Setting Up a Home Temple</h3>
            <p className="text-sm text-muted-foreground">Guide to creating a sacred space at home</p>
          </Link>
        </div>
      </div>

      {/* Books Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            <TranslatedText id="home.sacred_texts" />
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/library" className="flex items-center">
              <TranslatedText id="home.see_all" /> <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4 pb-4">
            <Link href="/library/texts/1" className="shrink-0">
              <div className="w-[150px] space-y-3">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/book1.jpg"
                    alt="Bhagavad Gita"
                    width={150}
                    height={225}
                    className="object-cover aspect-[2/3] transition-transform hover:scale-105"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium">Bhagavad Gita</h3>
                  <p className="text-xs text-muted-foreground">The Song of God</p>
                </div>
              </div>
            </Link>
            <Link href="/library/texts/2" className="shrink-0">
              <div className="w-[150px] space-y-3">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/book2.jpg"
                    alt="Ramayana"
                    width={150}
                    height={225}
                    className="object-cover aspect-[2/3] transition-transform hover:scale-105"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium">Ramayana</h3>
                  <p className="text-xs text-muted-foreground">The Journey of Rama</p>
                </div>
              </div>
            </Link>
            <Link href="/library/texts/3" className="shrink-0">
              <div className="w-[150px] space-y-3">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/book3.jpg"
                    alt="Mahabharata"
                    width={150}
                    height={225}
                    className="object-cover aspect-[2/3] transition-transform hover:scale-105"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium">Mahabharata</h3>
                  <p className="text-xs text-muted-foreground">The Great Tale</p>
                </div>
              </div>
            </Link>
            <Link href="/library/texts/4" className="shrink-0">
              <div className="w-[150px] space-y-3">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/book4.jpg"
                    alt="Vedas"
                    width={150}
                    height={225}
                    className="object-cover aspect-[2/3] transition-transform hover:scale-105"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium">Vedas</h3>
                  <p className="text-xs text-muted-foreground">Ancient Sacred Texts</p>
                </div>
              </div>
            </Link>
            <Link href="/library/texts/5" className="shrink-0">
              <div className="w-[150px] space-y-3">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src="/images/book5.jpg"
                    alt="Upanishads"
                    width={150}
                    height={225}
                    className="object-cover aspect-[2/3] transition-transform hover:scale-105"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium">Upanishads</h3>
                  <p className="text-xs text-muted-foreground">Philosophical Texts</p>
                </div>
              </div>
            </Link>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Articles Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            <TranslatedText id="home.featured_articles" />
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/library/articles" className="flex items-center">
              <TranslatedText id="home.see_all" /> <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="dark:bg-gray-800">
            <CardHeader className="pb-3">
              <div className="rounded-md overflow-hidden aspect-video mb-3">
                <Image
                  src="/images/article1.jpg"
                  alt="Understanding Karma"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-lg">Understanding Karma</CardTitle>
              <CardDescription>The law of cause and effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Karma, a fundamental concept in Hindu philosophy, refers to the spiritual principle of cause and effect
                where intent and actions of an individual influence their future. Good intent and good deeds contribute
                to good karma and happier rebirths, while bad intent and bad deeds contribute to bad karma and bad
                rebirths.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/library/articles/karma">
                  <TranslatedText id="home.read_more" /> <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="dark:bg-gray-800">
            <CardHeader className="pb-3">
              <div className="rounded-md overflow-hidden aspect-video mb-3">
                <Image
                  src="/images/article2.jpg"
                  alt="The Significance of Diwali"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-lg">The Significance of Diwali</CardTitle>
              <CardDescription>Festival of lights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Diwali, or Deepavali, is one of the most significant festivals in Hinduism. Known as the "Festival of
                Lights," it symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over
                ignorance. Traditionally celebrated over five days, Diwali marks Lord Rama's return to Ayodhya after
                defeating Ravana.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/library/articles/diwali">
                  <TranslatedText id="home.read_more" /> <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="dark:bg-gray-800">
            <CardHeader className="pb-3">
              <div className="rounded-md overflow-hidden aspect-video mb-3">
                <Image
                  src="/images/article3.jpg"
                  alt="Meditation Techniques"
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-lg">Meditation Techniques</CardTitle>
              <CardDescription>Ancient practices for modern life</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                Meditation has been a core practice in Hindu traditions for thousands of years. These ancient techniques
                offer profound benefits for modern practitioners, helping to reduce stress, increase focus, and foster
                spiritual growth. From mantra meditation to mindfulness practices, these techniques provide pathways to
                inner peace.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/library/articles/meditation">
                  <TranslatedText id="home.read_more" /> <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Mantras Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            <TranslatedText id="home.sacred_mantras" />
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/mantras" className="flex items-center">
              <TranslatedText id="home.see_all" /> <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Gayatri Mantra</span>
                <Button variant="ghost" size="icon">
                  <Music className="h-5 w-5" />
                </Button>
              </CardTitle>
              <CardDescription>Sacred verse from the Rigveda</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg font-medium text-center">
                  ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्
                </p>
                <p className="text-center text-muted-foreground">
                  Om Bhur Bhuva Swaha, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat
                </p>
                <p className="text-sm text-center">
                  We meditate on the glory of the Creator; who has created the Universe; who is worthy of worship; who
                  is the embodiment of Knowledge and Light; who is the remover of all sin and ignorance; may He
                  enlighten our intellect.
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" size="sm" className="rounded-full">
                <Play className="h-4 w-4 mr-2" />
                <TranslatedText id="common.play_audio" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Om Namah Shivaya</span>
                <Button variant="ghost" size="icon">
                  <Music className="h-5 w-5" />
                </Button>
              </CardTitle>
              <CardDescription>Devotion to Lord Shiva</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg font-medium text-center">ॐ नमः शिवाय</p>
                <p className="text-center text-muted-foreground">Om Namah Shivaya</p>
                <p className="text-sm text-center">
                  I bow to Shiva. Recognizing the divine light within myself and honoring that same light within all
                  beings.
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" size="sm" className="rounded-full">
                <Play className="h-4 w-4 mr-2" />
                <TranslatedText id="common.play_audio" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Aartis Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            <TranslatedText id="home.aartis" />
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/aartis" className="flex items-center">
              <TranslatedText id="home.see_all" /> <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Om Jai Jagdish Hare</span>
                <Button variant="ghost" size="icon">
                  <Music className="h-5 w-5" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm italic">
                  "Om Jai Jagdish Hare, Swami Jai Jagdish Hare
                  <br />
                  Bhakt Jano Ke Sankat, Daas Jano Ke Sankat, Kshan Men Door Kare"
                </p>
                <p className="text-xs text-muted-foreground">
                  Victory to Lord of the universe, Victory to Lord of the universe
                  <br />
                  The dangers of devotees, the dangers of servants, are removed in an instant
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" size="sm" className="rounded-full">
                <Play className="h-4 w-4 mr-2" />
                <TranslatedText id="common.play_audio" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Aarti Kunj Bihari Ki</span>
                <Button variant="ghost" size="icon">
                  <Music className="h-5 w-5" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm italic">
                  "Aarti Kunj Bihari Ki, Shri Giridhar Krishna Murari Ki
                  <br />
                  Gale Me Baijanti Mala, Bajave Murali Madhur Bala"
                </p>
                <p className="text-xs text-muted-foreground">
                  Worship of Lord Krishna, the lifter of Govardhan mountain
                  <br />
                  With a garland around his neck, he plays the sweet flute
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" size="sm" className="rounded-full">
                <Play className="h-4 w-4 mr-2" />
                <TranslatedText id="common.play_audio" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button asChild className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
            <Link href="/aartis">
              <TranslatedText id="home.see_more_aartis" />
            </Link>
          </Button>
        </div>
      </div>

      <Card className="w-full dark:bg-gray-800">
        <CardHeader>
          <CardTitle>
            <TranslatedText id="home.highlighted_article" />
          </CardTitle>
          <CardDescription>The significance of Diwali in modern times</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-md overflow-hidden mb-4">
            <Image
              src="/images/diwali-highlight.jpg"
              alt="Diwali celebration"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-muted-foreground">
            Diwali, the festival of lights, symbolizes the spiritual victory of light over darkness, good over evil, and
            knowledge over ignorance. In modern times, it has evolved to become a celebration that brings families
            together while honoring ancient traditions. The lighting of diyas represents the inner light that protects
            us from spiritual darkness.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/library/articles/diwali">
              <TranslatedText id="home.read_more" /> <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <FestivalReminder />
    </div>
  )
}
