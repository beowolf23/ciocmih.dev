import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  User,
  Phone,
  FolderKanban,
  ArrowRight,
} from 'lucide-react'

const pages = [
  {
    href: '/about',
    name: 'About me',
    icon: <User className="h-7 w-7" />,
    description: 'Learn about my background, skills, and professional journey.',
    action: 'Read my story',
  },
  {
    href: '/contact',
    name: 'Contact Me',
    icon: <Phone className="h-7 w-7" />,
    description:
      'Get in touch for collaborations, opportunities, or just to say hello.',
    action: 'Reach out',
  },
  {
    href: '/projects',
    name: 'Personal Projects',
    icon: <FolderKanban className="h-7 w-7" />,
    description: 'Explore my portfolio of projects and case studies.',
    action: 'View projects',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-80"></div>

      {/* Main content */}
      <div className="relative flex items-center justify-center min-h-screen pt-0">
        <div className="container px-4 -mt-20">
          <div className="flex items-center justify-center mb-4">
            <Avatar className="w-50 h-50 mr-6 ring-2 ring-zinc-800">
              <AvatarImage src="/myself.jpeg" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Mihai Ciocan
              </h1>
              <h2 className="text-xl text-zinc-400 mb-3">
                Full-Stack Developer
              </h2>

              <div className="flex space-x-3 mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700"
                  asChild
                >
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700"
                  asChild
                >
                  <Link
                    href="https://linkedin.com/in/mihai-ciocan"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700"
                  asChild
                >
                  <Link href="mailto:mihaiciocan44@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Social Links */}

            {/* Description */}
            <div className="max-w-2xl text-center">
              <p className="text-zinc-400 mb-4">
                I build exceptional and accessible digital experiences for the
                web. Specializing in modern JavaScript frameworks and seamless
                backend flows.
              </p>

              {/* Skills/Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                >
                  Tailwind CSS
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                >
                  Java
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900"
                >
                  Go
                </Badge>
              </div>
            </div>

            {/* Resume Button - Positioned in the middle */}
            <div className="flex justify-center mb-10">
              <Button
                variant="outline"
                className="gap-2 border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700"
                asChild
              >
                <Link href="/resume.pdf" target="_blank">
                  View Resume <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pages.map((page) => (
              <li key={page.name}>
                <Link href={page.href} className="block h-full">
                  <Card className="h-full bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors flex-col justify-between">
                    <CardHeader className="mt-2 pb-2 flex flex-row items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-white">
                        {page.name}
                      </CardTitle>
                      <div className="mt-1 text-zinc-500">{page.icon}</div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <p className="text-zinc-400">{page.description}</p>
                    </CardContent>
                    <CardFooter className="pt-2 flex justify-between items-center">
                      <span className="text-sm font-medium text-zinc-400 flex items-center gap-1 group">
                        {page.action}{' '}
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
