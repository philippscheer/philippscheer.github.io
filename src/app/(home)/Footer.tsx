import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Philipp Scheer</h3>
            <p className="text-sm text-muted-foreground">
              I plan, build and scale startup-style MVPs.
            </p>
            <div className="flex space-x-2">
              <Button variant="secondary" size="icon" asChild>
                <Link href="https://github.com/philippscheer" target="_blank">
                  <GithubIcon />
                </Link>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <Link href="#">
                  <LinkedinIcon />
                </Link>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <Link href="#">
                  <TwitterIcon />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mvp-development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  MVP Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>philipp@philippscheer.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <Button className="w-full">Get In Touch</Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Philipp Scheer. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
