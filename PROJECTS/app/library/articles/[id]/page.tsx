"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Bookmark, BookmarkCheck, Share2, ThumbsUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

// Sample article data
const articles = [
  {
    id: "diwali",
    title: "The Significance of Diwali in Modern Times",
    description: "Festival of lights and its spiritual meaning",
    content: `
      <h2>The Festival of Lights</h2>
      <p>Diwali, or Deepavali, is one of the most significant festivals in Hinduism. Known as the "Festival of Lights," it symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. Traditionally celebrated over five days, Diwali marks Lord Rama's return to Ayodhya after defeating Ravana, as described in the epic Ramayana.</p>
      
      <p>In modern times, Diwali has evolved beyond its religious origins to become a cultural celebration embraced by people of various backgrounds. While the religious aspects remain central for many Hindu families, the festival now represents broader themes of renewal, prosperity, and community.</p>
      
      <h2>Modern Celebrations and Adaptations</h2>
      <p>Today's Diwali celebrations blend traditional practices with contemporary adaptations. Families continue to light diyas (oil lamps) to symbolize the triumph of light, but modern electric lights and LED decorations have become increasingly common, especially in urban areas.</p>
      
      <p>The exchange of gifts, once primarily sweets and dried fruits, now includes electronics, clothing, and other consumer goods. Many families maintain the tradition of Lakshmi Puja, seeking blessings for prosperity in the coming year, while also incorporating modern financial practices like making new investments or purchases during this auspicious time.</p>
      
      <h2>Environmental Considerations</h2>
      <p>One significant shift in modern Diwali celebrations involves growing environmental awareness. Traditional fireworks, once central to the festival, are now being reconsidered due to air pollution concerns. Many communities now promote "green Diwali" initiatives, encouraging eco-friendly celebrations with reduced noise and air pollution.</p>
      
      <h2>Global Reach</h2>
      <p>In our interconnected world, Diwali has transcended geographical boundaries. Hindu communities worldwide celebrate the festival, adapting traditions to local contexts while maintaining core spiritual elements. Many countries with significant Hindu populations, including the United States, United Kingdom, Canada, and Australia, now recognize Diwali with community events and official acknowledgments.</p>
      
      <p>Educational institutions, corporations, and governments increasingly acknowledge Diwali, fostering cultural understanding and inclusion. This global recognition helps preserve the festival's significance while allowing it to evolve in diverse cultural contexts.</p>
      
      <h2>Digital Diwali</h2>
      <p>Technology has transformed how families connect during Diwali. Video calls allow families separated by distance to share virtual celebrations. Social media platforms buzz with Diwali greetings, creating new forms of community connection. Digital gifts and e-cards have become popular alternatives to traditional exchanges.</p>
      
      <h2>Spiritual Essence in Modern Context</h2>
      <p>Despite these modern adaptations, the spiritual essence of Diwali remains relevant. In today's fast-paced, often stressful world, Diwali offers a meaningful opportunity to pause, reconnect with family and community, and reflect on inner light and personal growth.</p>
      
      <p>The festival reminds us to foster qualities like compassion, generosity, and wisdom—timeless values that transcend historical context. Whether celebrated with traditional rituals or modern adaptations, Diwali continues to inspire the pursuit of light in all its forms.</p>
      
      <h2>Conclusion</h2>
      <p>As we celebrate Diwali in the modern era, the festival demonstrates how ancient traditions can remain vibrant through thoughtful adaptation. By balancing preservation and innovation, Diwali continues to offer spiritual nourishment and cultural connection for millions worldwide.</p>
      
      <p>The essence of Diwali—celebrating light over darkness—remains as relevant today as it was thousands of years ago, perhaps even more so in our complex modern world. As we light our lamps, whether traditional diyas or modern alternatives, we participate in a timeless tradition that illuminates both our homes and our hearts.</p>
    `,
    author: {
      name: "Dr. Aruna Patel",
      role: "Religious Scholar",
      avatar: "/placeholder.svg",
    },
    readTime: "7 min read",
    publishDate: "October 15, 2024",
    type: "Festival",
    image: "/placeholder.svg?height=500&width=800",
    views: 12540,
    likes: 256,
    comments: [
      {
        id: 1,
        author: {
          name: "Rahul Singh",
          avatar: "/placeholder.svg",
        },
        content:
          "Beautifully written article. The balance between tradition and modernity is exactly what we need to keep our festivals relevant for future generations.",
        date: "3 days ago",
        likes: 12,
      },
      {
        id: 2,
        author: {
          name: "Meera Joshi",
          avatar: "/placeholder.svg",
        },
        content:
          "I appreciate the focus on eco-friendly celebrations. In our family, we've switched to clay diyas and reduced fireworks while maintaining the spiritual essence of the festival.",
        date: "2 days ago",
        likes: 8,
      },
    ],
    relatedArticles: ["karma", "meditation", "temples"],
  },
  {
    id: "karma",
    title: "Understanding Karma: The Law of Cause and Effect",
    description: "An exploration of karma in Hindu philosophy",
    content: "<p>Sample content about karma...</p>",
    author: {
      name: "Vikram Sharma",
      role: "Vedic Philosophy Teacher",
      avatar: "/placeholder.svg",
    },
    readTime: "5 min read",
    publishDate: "September 28, 2024",
    type: "Philosophy",
    image: "/placeholder.svg?height=500&width=800",
    views: 8750,
    likes: 189,
    comments: [],
    relatedArticles: ["diwali", "meditation", "temples"],
  },
  {
    id: "meditation",
    title: "Meditation Techniques: Ancient Practices for Modern Life",
    description: "Practical meditation techniques from Hindu traditions",
    content: "<p>Sample content about meditation...</p>",
    author: {
      name: "Priya Reddy",
      role: "Meditation Instructor",
      avatar: "/placeholder.svg",
    },
    readTime: "10 min read",
    publishDate: "October 5, 2024",
    type: "Practice",
    image: "/placeholder.svg?height=500&width=800",
    views: 10320,
    likes: 215,
    comments: [],
    relatedArticles: ["karma", "diwali", "temples"],
  },
]

export default function ArticleDetailPage() {
  const params = useParams()
  const { id } = params

  const [isSaved, setIsSaved] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [commentText, setCommentText] = useState("")

  // Find the article by ID
  const article = articles.find((article) => article.id === id)

  if (!article) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the article you're looking for.</p>
        <Button asChild>
          <Link href="/library">Back to Library</Link>
        </Button>
      </div>
    )
  }

  const toggleSave = () => {
    setIsSaved(!isSaved)
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const submitComment = () => {
    // In a real app, this would send the comment to a server
    setCommentText("")
  }

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/library">
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Badge className="bg-orange-500">{article.type}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={toggleSave}>
            {isSaved ? <BookmarkCheck className="h-4 w-4 text-orange-500" /> : <Bookmark className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">{article.title}</h1>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{article.author.name}</p>
              <p className="text-xs text-muted-foreground">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{article.publishDate}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.views.toLocaleString()} views</span>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden">
            <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div
            className="prose prose-sm md:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" className={isLiked ? "text-red-500" : ""} onClick={toggleLike}>
                <ThumbsUp className={`h-4 w-4 mr-2 ${isLiked ? "fill-red-500" : ""}`} />
                {article.likes + (isLiked ? 1 : 0)}
              </Button>
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                {article.comments.length}
              </Button>
            </div>
            <Button variant="outline" size="icon" onClick={toggleSave}>
              {isSaved ? <BookmarkCheck className="h-4 w-4 text-orange-500" /> : <Bookmark className="h-4 w-4" />}
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {article.comments.length > 0 ? (
                  article.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4 border-b pb-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{comment.author.name}</p>
                          <p className="text-xs text-muted-foreground">{comment.date}</p>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" /> {comment.likes}
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No comments yet. Be the first to comment!
                  </p>
                )}
              </div>

              <div className="pt-4">
                <Textarea
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="mb-2 resize-none"
                />
                <Button onClick={submitComment} className="w-full md:w-auto" disabled={!commentText.trim()}>
                  Post Comment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium">{article.author.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{article.author.role}</p>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Related Articles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {article.relatedArticles.map((relatedId) => {
                const relatedArticle = articles.find((a) => a.id === relatedId)
                if (!relatedArticle) return null

                return (
                  <Link href={`/library/articles/${relatedArticle.id}`} key={relatedArticle.id} className="block">
                    <div className="flex gap-3 items-center hover:bg-accent rounded-md p-2 transition-colors">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{relatedArticle.title}</h3>
                        <p className="text-xs text-muted-foreground">{relatedArticle.readTime}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
