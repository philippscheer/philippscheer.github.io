import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GithubIcon } from "lucide-react"


export default function Projects() {
  const projects = [
    {
      title: "Inkbeam - E-Mail sending SaaS",
      description:
        "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, product management, and real-time inventory tracking.",
      image: null,
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: null, //"https://inkbeam.com",
    },
    // {
    //   title: "Task Management SaaS",
    //   description:
    //     "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
    //   image: null,
    //   technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ]

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-base/6 lg:text-base/6 xl:text-base/6">
              Here are a few things I&apos;ve built lately — each one started with a real problem and ended with a working solution.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/images/workinprogress.svg"}
                  width={500}
                  height={300}
                  alt={project.title}
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-2" asChild={!!project.liveUrl}>
                    {project.liveUrl ? 
                      <Link href={project.liveUrl} target="_blank">
                        Live Project
                      </Link>
                      :
                      "Soon live"
                    }
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <GithubIcon />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
