import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PlayCircle } from "lucide-react"
import Image from "next/image"

const mediationVideos = [
  {
    id: 1,
    title: "Understanding Mediation Process",
    description: "A comprehensive guide to how mediation works and its benefits",
    thumbnail: "/images/video-thumb-1.jpg",
    duration: "10:25",
    url: "https://youtube.com/watch?v=example1",
  },
  {
    id: 2,
    title: "Success Stories in Mediation",
    description: "Real cases where mediation helped resolve complex disputes",
    thumbnail: "/images/video-thumb-2.jpg",
    duration: "8:15",
    url: "https://youtube.com/watch?v=example2",
  },
  {
    id: 3,
    title: "Benefits of Choosing Mediation",
    description: "Why mediation is often better than going to court",
    thumbnail: "/images/video-thumb-3.jpg",
    duration: "12:30",
    url: "https://youtube.com/watch?v=example3",
  },
  {
    id: 4,
    title: "Mediation Skills and Techniques",
    description: "Essential skills used in successful mediation sessions",
    thumbnail: "/images/video-thumb-4.jpg",
    duration: "15:45",
    url: "https://youtube.com/watch?v=example4",
  },
  {
    id: 5,
    title: "Role of a Mediator",
    description: "Understanding what mediators do and how they help",
    thumbnail: "/images/video-thumb-5.jpg",
    duration: "9:20",
    url: "https://youtube.com/watch?v=example5",
  },
  {
    id: 6,
    title: "Preparing for Mediation",
    description: "Steps to take before entering a mediation session",
    thumbnail: "/images/video-thumb-6.jpg",
    duration: "11:15",
    url: "https://youtube.com/watch?v=example6",
  },
]

const articles = [
  {
    id: 1,
    title: "Why Mediation is the Future of Dispute Resolution",
    description: "Explore how mediation is transforming conflict resolution in the modern world",
    readTime: "5 min read",
    category: "Trends",
  },
  {
    id: 2,
    title: "5 Amazing Mediation Success Stories",
    description: "Real-world examples of how mediation saved time, money, and relationships",
    readTime: "8 min read",
    category: "Case Studies",
  },
  {
    id: 3,
    title: "The Psychology Behind Successful Mediation",
    description: "Understanding the psychological principles that make mediation effective",
    readTime: "6 min read",
    category: "Research",
  },
  {
    id: 4,
    title: "Mediation vs. Litigation: A Cost Comparison",
    description: "Analysis of the financial benefits of choosing mediation over court battles",
    readTime: "7 min read",
    category: "Analysis",
  },
]

export default function InspirationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
          Get Inspired by Mediation Success
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how mediation has helped countless people resolve conflicts and maintain relationships through our curated videos and articles.
        </p>
      </div>

      {/* Video Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Educational Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediationVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{video.title}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{video.duration}</span>
                  <Button variant="ghost" size="sm">
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card key={article.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded-full">
                    {article.category}
                  </span>
                </div>
                <CardDescription className="mt-2">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  <Button variant="ghost" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
} 