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

      <div className="relative container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Personal Projects</h1>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-semibold text-white">
                      {project.title}
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700"
                      asChild
                    >
                      <Link
                        href={`https://github.com/beowolf23/${project.repo}`}
                        target="_blank"
                      >
                        <Github className="h-4 w-4 text-white" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <Github className="h-3 w-3" />
                    <span>{project.repo}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      {project.description.map((paragraph, i) => (
                        <p key={i} className="text-zinc-300 mb-2">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-zinc-400 text-sm mb-2">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-transparent border-zinc-800 text-zinc-400"
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
                    className="gap-2 border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 text-white"
                    asChild
                  >
                    <Link
                      href={`https://github.com/beowolf23/${project.repo}`}
                      target="_blank"
                    >
                      View Project{' '}
                      <ExternalLink className="h-3 w-3 text-white" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="gap-2 border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700"
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
