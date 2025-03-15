"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp, User } from "lucide-react"

interface Post {
  id: number
  title: string
  content: string
  author: string
  date: string
  likes: number
  replies: number
}

const samplePosts: Post[] = [
  {
    id: 1,
    title: "How to prepare for your first mediation session?",
    content:
      "I have my first mediation session next week. What should I expect and how should I prepare?",
    author: "John Doe",
    date: "2 hours ago",
    likes: 12,
    replies: 5,
  },
  {
    id: 2,
    title: "Success story: Resolved workplace conflict through mediation",
    content:
      "I wanted to share my positive experience with workplace mediation and how it helped resolve a long-standing issue...",
    author: "Jane Smith",
    date: "1 day ago",
    likes: 24,
    replies: 8,
  },
]

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(samplePosts)
  const [newPost, setNewPost] = useState({ title: "", content: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.title.trim() || !newPost.content.trim()) return

    const post: Post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: "Current User", // TODO: Replace with actual user
      date: "Just now",
      likes: 0,
      replies: 0,
    }

    setPosts([post, ...posts])
    setNewPost({ title: "", content: "" })
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Create new post */}
      <div className="mb-8 rounded-lg border bg-background p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Post title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Write your post..."
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
              rows={4}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <Button type="submit">Create Post</Button>
        </form>
      </div>

      {/* Posts list */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border bg-background p-6 shadow-sm"
          >
            <h3 className="mb-2 text-lg font-semibold">{post.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{post.content}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {post.author}
                </div>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center hover:text-primary">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  {post.likes}
                </button>
                <button className="flex items-center hover:text-primary">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  {post.replies}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 