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
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-80"></div>

      <div className="relative flex items-center justify-center min-h-screen py-10 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center gap-6">
              <Avatar className="!w-50 !h-50 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 md:mb-6 ring-2 ring-zinc-800">
                <AvatarImage src="/myself.jpeg" alt="Profile" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 text-center">
                  Mihai Ciocan
                </h1>
                <h2 className="text-lg md:text-xl text-zinc-400 mb-3 text-center">
                  Full-Stack Developer
                </h2>

                {/* Social Links */}
                <div className="flex space-x-3 mb-6">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 h-9 w-9 md:h-10 md:w-10"
                    asChild
                  >
                    <Link href="https://github.com/beowolf23" target="_blank">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 h-9 w-9 md:h-10 md:w-10"
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
                    className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 h-9 w-9 md:h-10 md:w-10"
                    asChild
                  >
                    <Link href="mailto:mihaiciocan44@gmail.com">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="w-full text-center">
              <p className="text-white mb-4 text-sm md:text-base max-w-2xl mx-auto">
                I build exceptional and accessible digital experiences for the
                web. Specializing in modern JavaScript frameworks, seamless
                backend integrations and user-centered design.
              </p>

              {/* Skills/Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-8 md:mb-10">
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-white hover:bg-zinc-900 text-xs md:text-sm"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-white hover:bg-zinc-900 text-xs md:text-sm"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-white hover:bg-zinc-900 text-xs md:text-sm"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-white hover:bg-zinc-900 text-xs md:text-sm"
                >
                  Tailwind CSS
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-white hover:bg-zinc-900 text-xs md:text-sm"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-white hover:bg-zinc-900 text-xs md:text-sm"
                >
                  Java
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent border-zinc-800 text-white hover:bg-zinc-900 text-xs md:text-sm"
                >
                  Go
                </Badge>
              </div>
            </div>

            {/* Resume Button - Positioned in the middle */}
            <div className="flex justify-center mb-8 md:mb-10">
              <Button
                variant="outline"
                className="gap-2 border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 text-sm md:text-base"
                asChild
              >
                <Link href="/resume.pdf">
                  View Resume <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {pages.map((page) => (
              <li key={page.name}>
                <Link href={page.href} className="block h-full">
                  <Card className="h-full bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors flex justify-between">
                    <CardHeader className="mt-2 pb-2 flex flex-row items-center justify-between">
                      <CardTitle className="text-lg md:text-xl font-semibold text-white">
                        {page.name}
                      </CardTitle>
                      <div className="mt-1 text-zinc-500">{page.icon}</div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <p className="text-zinc-400 text-sm md:text-base">
                        {page.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-2 flex justify-between items-center">
                      <span className="text-xs md:text-sm font-medium text-zinc-400 flex items-center gap-1 group">
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
