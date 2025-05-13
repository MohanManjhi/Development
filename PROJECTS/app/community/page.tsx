"use client"

import { useState } from "react"
import { Heart, MessageSquare, Share2, MoreHorizontal, ImageIcon, Video, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const posts = [
  {
    id: 1,
    author: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg",
      handle: "priya_s",
    },
    content:
      "Just visited the Varanasi Ghats for the first time. The spiritual energy there is incredible! Has anyone else experienced the Ganga Aarti ceremony?",
    image: "/placeholder.svg?height=400&width=600",
    likes: 45,
    comments: 12,
    shares: 5,
    time: "2 hours ago",
  },
  {
    id: 2,
    author: {
      name: "Rahul Patel",
      avatar: "/placeholder.svg",
      handle: "rahul_p",
    },
    content:
      '"The greatest mantra is your own breath. The greatest temple is your own body." - Sharing this beautiful quote I came across in my readings today.',
    image: null,
    likes: 78,
    comments: 23,
    shares: 15,
    time: "5 hours ago",
  },
  {
    id: 3,
    author: {
      name: "Ananya Gupta",
      avatar: "/placeholder.svg",
      handle: "ananya_g",
    },
    content: "Made prasad for Janmashtami celebration tomorrow. Excited to celebrate with family and friends!",
    image: "/placeholder.svg?height=400&width=600",
    likes: 92,
    comments: 31,
    shares: 8,
    time: "Yesterday",
  },
  {
    id: 4,
    author: {
      name: "Vikram Singh",
      avatar: "/placeholder.svg",
      handle: "vikram_s",
    },
    content:
      "Question for the community: What's your favorite shloka from the Bhagavad Gita and why does it resonate with you?",
    image: null,
    likes: 56,
    comments: 42,
    shares: 3,
    time: "2 days ago",
  },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("trending")
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [newPostContent, setNewPostContent] = useState("")
  const [isCreatingPost, setIsCreatingPost] = useState(false)

  const toggleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  const handleCreatePost = () => {
    // In a real app, this would send the post to a server
    setNewPostContent("")
    setIsCreatingPost(false)
  }

  return (
    <div className="container py-8 space-y-6 mb-16 md:mb-0">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">💬</span> Community
      </h1>

      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <Dialog open={isCreatingPost} onOpenChange={setIsCreatingPost}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-muted-foreground">
                Share something with the community...
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create Post</DialogTitle>
                <DialogDescription>Share your thoughts, questions, or experiences with the community</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <Textarea
                  placeholder="What's on your mind?"
                  className="min-h-[120px]"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Add Image
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Video className="h-4 w-4 mr-2" />
                    Add Video
                  </Button>
                </div>
              </div>
              <DialogFooter>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={handleCreatePost}
                  disabled={!newPostContent.trim()}
                >
                  Post
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardFooter className="flex justify-between p-4 pt-0">
          <Button variant="ghost" className="flex-1">
            <ImageIcon className="h-4 w-4 mr-2" />
            Image
          </Button>
          <Button variant="ghost" className="flex-1">
            <Video className="h-4 w-4 mr-2" />
            Video
          </Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="trending" onClick={() => setActiveTab("trending")}>
            Trending
          </TabsTrigger>
          <TabsTrigger value="my-posts" onClick={() => setActiveTab("my-posts")}>
            My Posts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="mt-6 space-y-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="flex flex-row items-start gap-4 p-4">
                <Avatar>
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">
                        @{post.author.handle} • {post.time}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Save Post</DropdownMenuItem>
                        <DropdownMenuItem>Report</DropdownMenuItem>
                        <DropdownMenuItem>Not Interested</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="mt-2">{post.content}</p>
                </div>
              </CardHeader>
              {post.image && (
                <CardContent className="p-0">
                  <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full h-auto" />
                </CardContent>
              )}
              <CardFooter className="flex justify-between p-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={likedPosts.includes(post.id) ? "text-red-500" : ""}
                  onClick={() => toggleLike(post.id)}
                >
                  <Heart className={`h-4 w-4 mr-2 ${likedPosts.includes(post.id) ? "fill-red-500" : ""}`} />
                  {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  {post.shares}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="my-posts" className="mt-6">
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-medium mb-2">No posts yet</h2>
            <p className="text-muted-foreground mb-4">
              You haven't created any posts yet. Share your thoughts, questions, or experiences with the community.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => setIsCreatingPost(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Post
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
