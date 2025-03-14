import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Java Multi-Pool Manager',
    repo: 'pool-manager',
    description: [
      'Developed a generic connection pooling framework with extensible support for multiple protocols (e.g., SSH, SMB) to centralize resource management for command execution, file uploads, and downloads.',
      'Enhanced flexibility with reusable components and pluggable handlers for new connection types.',
      'Integrated monitoring mechanisms to track connection health, utilization, and performance, ensuring scalability and operational reliability.',
    ],
    technologies: [
      'Java 17',
      'Java Generics',
      'Apache Common Pools',
      'SSHJ',
      'SMBJ',
      'JUnit 5',
      'Mockito',
      'Test Containers',
    ],
  },
  {
    title: 'GoRSA',
    repo: 'gorsa',
    description: [
      'Created a Go project implementing a full RSA cryptography system. The code generates secure keys, encrypts and decrypts messages, and supports digital signatures using advanced cryptographic techniques.',
      "Built with Go's crypto libraries, the project demonstrates practical encryption methods through secure prime number generation, message hashing, and mathematical operations on large integers.",
    ],
    technologies: [
      'Go',
      'Cryptography',
      'RSA Algorithm',
      'SHA-256',
      'Big Integer Manipulation',
    ],
  },
  {
    title: 'Google Form Filler',
    repo: 'google-form-filler',
    description: [
      'Developed a tool to automate the submission of Google Forms. Utilized Burp Suite to capture and analyze network traffic, gaining insights into how Google transmits form data to servers.',
      'This project helped me understand how powerful Burp Suite can be and it made me understand topics like Forwarding Proxies as well as the Repeater feature of Burp.',
    ],
    technologies: ['Python 3', 'Burp Suite'],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-80"></div>

      <div className="relative container mx-auto px-4 py-8 md:py-12">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-6 md:mb-8 transition-colors text-sm md:text-base"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Personal Projects
          </h1>

          <div className="space-y-6 md:space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors text-white"
              >
                <CardHeader className="md:flex-row md:items-start md:justify-between">
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-semibold">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-zinc-400 text-xs md:text-sm mt-1">
                      <Github className="h-3 w-3" />
                      <span>{project.repo}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 mt-2 md:mt-0"
                    asChild
                  >
                    <Link
                      href={`https://github.com/beowolf23/${project.repo}`}
                      target="_blank"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      {project.description.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-zinc-300 mb-2 text-sm md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-zinc-400 text-xs md:text-sm mb-2">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 text-xs md:text-sm"
                    asChild
                  >
                    <Link
                      href={`https://github.com/beowolf23/${project.repo}`}
                      target="_blank"
                    >
                      View Project <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:mt-12">
            <Button
              variant="outline"
              className="gap-2 border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 text-sm md:text-base"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
