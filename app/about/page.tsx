import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowLeft,
  Building,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Globe,
} from 'lucide-react'

export default function AboutPage() {
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
            About Me
          </h1>

          {/* Contact Information */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-6 text-zinc-400 text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 md:h-4 md:w-4" /> Bucharest
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3 md:h-4 md:w-4" /> mihaiciocan44@gmail.com
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3 md:h-4 md:w-4" /> +40 737 605 900
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3 md:h-4 md:w-4" /> beowolf23.io
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-3 w-3 md:h-4 md:w-4" />{' '}
              linkedin.com/in/mihai-ciocan
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-3 w-3 md:h-4 md:w-4" /> github.com/beowolf23
            </div>
          </div>

          {/* Bio */}
          <Card className="bg-zinc-900/30 border-zinc-800 mb-6 md:mb-8">
            <CardContent className="pt-4 md:pt-6 text-sm md:text-base">
              <p className="text-zinc-300 leading-relaxed">
                Cybersecurity Master's student with a passion for software
                engineering and application security. Experienced in developing
                innovative solutions using{' '}
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                  Go
                </Badge>
                ,{' '}
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                  Java
                </Badge>
                , and{' '}
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                  Python
                </Badge>
                , with a strong focus on{' '}
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                  cloud technologies
                </Badge>{' '}
                (Google Cloud Platform) and{' '}
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                  secure software development
                </Badge>
                . Proven track record of technical excellence through
                professional work and impactful personal projects, including{' '}
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                  REST API development
                </Badge>
                ,{' '}
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                  CI/CD pipelines
                </Badge>
                , and container orchestration with{' '}
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                  Kubernetes
                </Badge>
                .
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            Education
          </h2>
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            <div className="border-l-2 border-zinc-800 pl-3 md:pl-4">
              <div className="flex items-start gap-2">
                <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    University Politehnica of Bucharest
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    MS in Cybersecurity
                  </p>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    Oct 2024 - July 2026
                  </p>
                  <ul className="list-disc list-inside text-zinc-400 text-sm md:text-base mt-2">
                    <li>
                      Coursework: Threat Intelligence, Network Security, Secure
                      Software Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-zinc-800 pl-3 md:pl-4">
              <div className="flex items-start gap-2">
                <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    University Politehnica of Bucharest
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    BS in Computer Science
                  </p>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    Oct 2020 - July 2024
                  </p>
                  <ul className="list-disc list-inside text-zinc-400 text-sm md:text-base mt-2">
                    <li>GPA: 9/10</li>
                    <li>
                      Coursework: Parallel Computing, Object-Oriented
                      Programming, Operating Systems, Introduction to
                      Cybersecurity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            Experience
          </h2>
          <div className="space-y-6 md:space-y-8 mb-8 md:mb-10">
            <div className="border-l-2 border-zinc-800 pl-3 md:pl-4">
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 md:h-5 md:w-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    Lab Assistant
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    Polytechnics University of Bucharest
                  </p>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    October 2024 – Present
                  </p>
                  <ul className="list-disc list-inside text-zinc-400 text-sm md:text-base mt-2">
                    <li>
                      Instructor for Introduction to Cybersecurity course labs,
                      focusing on practical Web Security Penetration Testing
                      concepts.
                    </li>
                    <li>
                      Guided students through hands-on cybersecurity techniques,
                      bridging theoretical knowledge with practical application.
                    </li>
                    <li>
                      Developed and conducted interactive lab sessions
                      demonstrating web application security vulnerabilities and
                      mitigation strategies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-zinc-800 pl-3 md:pl-4">
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 md:h-5 md:w-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    Software Engineer
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    Deutsche Bank
                  </p>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    September 2024 – Present
                  </p>
                  <ul className="list-disc list-inside text-zinc-400 text-sm md:text-base mt-2">
                    <li>
                      Responsible for rearchitecting a legacy application
                      deployed on-prem to a newer tech stack involving{' '}
                      <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                        Spring Boot
                      </Badge>{' '}
                      for the backend,{' '}
                      <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                        React
                      </Badge>{' '}
                      for the frontend, and{' '}
                      <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                        Google Cloud Platform
                      </Badge>{' '}
                      for the infrastructure.
                    </li>
                    <li>
                      Implemented{' '}
                      <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                        CI/CD pipelines
                      </Badge>{' '}
                      to automate deployment processes, improving deployment
                      efficiency by 30%.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to design and
                      implement scalable, secure{' '}
                      <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                        REST APIs
                      </Badge>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-zinc-800 pl-3 md:pl-4">
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 md:h-5 md:w-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    Software Engineer
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    Deutsche Bank
                  </p>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    August 2022 – Present
                  </p>
                  <ul className="list-disc list-inside text-zinc-400 text-sm md:text-base mt-2">
                    <li>
                      Developed the automation process of mobile application
                      code signing and deployment until production, being the
                      entry point of the bank to Google Play Store and Apple
                      Store.
                    </li>
                    <li>
                      Responsible for the code signing architecture from Cary
                      USA to Bucharest.
                    </li>
                    <li>
                      Migrated the MobileIron solution for corporate mobile
                      applications to{' '}
                      <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                        Microsoft Intune
                      </Badge>{' '}
                      as part of the cost-cutting strategy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-zinc-800 pl-3 md:pl-4">
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 md:h-5 md:w-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    Software Engineer Intern
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    Deutsche Bank
                  </p>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    March 2022 – July 2022
                  </p>
                  <ul className="list-disc list-inside text-zinc-400 text-sm md:text-base mt-2">
                    <li>
                      Designed and implemented a full-stack e-learning web
                      application using{' '}
                      <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                        React
                      </Badge>{' '}
                      and{' '}
                      <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs">
                        Spring Boot
                      </Badge>
                      .
                    </li>
                    <li>
                      Created a robust, interactive platform enabling course
                      enrollment and management for students and teachers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            Certifications
          </h2>
          <div className="mb-8 md:mb-10">
            <ul className="list-disc list-inside text-zinc-400 text-sm md:text-base">
              <li>Associate Cloud Engineer - Google Cloud Platform</li>
              <li>HackTheBox Bug Bounty Hunter - Web Security</li>
            </ul>
          </div>

          {/* Technologies */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            Technologies
          </h2>
          <div className="mb-8 md:mb-10">
            <div className="mb-3">
              <h3 className="text-zinc-300 font-medium mb-2 text-sm md:text-base">
                Languages
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Java
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Python
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Go
                </Badge>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-zinc-300 font-medium mb-2 text-sm md:text-base">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Spring Boot
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Spring Security
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Spring Data JPA
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  FastAPI
                </Badge>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-zinc-300 font-medium mb-2 text-sm md:text-base">
                Databases
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Microsoft SQL Server
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  PostgreSQL
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Oracle
                </Badge>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-zinc-300 font-medium mb-2 text-sm md:text-base">
                Cloud Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Google Cloud Platform
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-zinc-300 font-medium mb-2 text-sm md:text-base">
                Penetration Testing Tools
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Burp Suite
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  ffuf
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Nuclei
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  SQLMap
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  rustscan
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  PayloadsAllTheThings
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  SecLists
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Impacket
                </Badge>
                <Badge className="bg-transparent border-zinc-800 text-zinc-400 text-xs md:text-sm">
                  Nikto
                </Badge>
              </div>
            </div>
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
