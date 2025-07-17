import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Max delivered our MVP ahead of schedule and exceeded all expectations. His technical expertise and attention to detail are outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Working with Max was a game-changer for our startup. He understood our vision and built exactly what we needed to launch successfully.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, GrowthLab",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Max's full-stack expertise helped us build a scalable platform that handles thousands of users. Highly recommend his services!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-base/6 lg:text-base/6 xl:text-base/6 ">
              Don&apos;t just take my word for it — here&apos;s what some people I&apos;ve worked with have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-sm mb-4">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
