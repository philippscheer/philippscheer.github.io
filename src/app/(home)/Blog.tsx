import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      title: "Building a Scalable E-Commerce Platform",
      description:
        "A deep dive into the architecture decisions and challenges faced while building a modern e-commerce solution.",
      date: "2024-01-15",
      readTime: "8 min read",
      excerpt:
        "Learn how I architected a scalable e-commerce platform using Next.js, implemented secure payment processing with Stripe, and optimized for performance...",
    },
    {
      title: "Real-time Features in Modern Web Apps",
      description:
        "Exploring WebSockets, Server-Sent Events, and other technologies for building real-time collaborative applications.",
      date: "2024-01-08",
      readTime: "6 min read",
      excerpt:
        "Discover the techniques and technologies I used to implement real-time collaboration features in the task management SaaS, including Socket.io integration...",
    },
    {
      title: "From Idea to MVP: A Startup Journey",
      description:
        "My process for taking startup ideas from concept to a working MVP, including technology choices and development strategies.",
      date: "2024-01-01",
      readTime: "10 min read",
      excerpt:
        "A comprehensive guide on how I approach building MVPs for startups, covering everything from initial planning to deployment and user feedback...",
    },
  ]

  return (
    <section id="blog" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-base/6 lg:text-base/6 xl:text-base/6">
              I write about how I research, build, and improve projects — the methods I use, the ideas I test, and why I do things the way I do.
              Real, hands-on stuff from a builder&apos;s perspective.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                  <Clock className="h-4 w-4 ml-2" />
                  {post.readTime}
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Button variant="ghost" className="gap-2 self-start p-0">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
