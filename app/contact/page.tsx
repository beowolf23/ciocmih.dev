'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
} from 'lucide-react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    console.log(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataBody = new FormData()
      formDataBody.append('name', formData.name)
      formDataBody.append('email', formData.email)
      formDataBody.append('message', formData.message)

      console.log(formDataBody)

      await fetch('/api/send', {
        method: 'POST',
        body: formDataBody,
      })
      setFormData({ name: '', email: '', message: '' })

      toast('Message sent!', {
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
    } catch (error) {
      toast('Something went wrong!', {
        description: "Your message couldn't be sent. Please try again.",
      })
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Contact Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <Card className="bg-zinc-900/30 border-zinc-800 h-full">
                <CardHeader className="pb-3 md:pb-4">
                  <CardTitle className="text-xl md:text-2xl text-white">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs md:text-sm font-medium text-zinc-300"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Your name"
                        className="bg-zinc-800/50 border-zinc-700 focus:border-zinc-600 text-white text-sm md:text-base"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs md:text-sm font-medium text-zinc-300"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Your email"
                        className="bg-zinc-800/50 border-zinc-700 focus:border-zinc-600 text-white text-sm md:text-base"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-xs md:text-sm font-medium text-zinc-300"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        value={formData.message}
                        name="message"
                        rows={5}
                        className="bg-zinc-800/50 border-zinc-700 focus:border-zinc-600 text-white text-sm md:text-base"
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm md:text-base h-10 md:h-11"
                    >
                      {!isSubmitting ? (
                        <>
                          Send Message <Send className="h-4 w-4" />
                        </>
                      ) : (
                        'Sending your message...'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-zinc-900/30 border-zinc-800 h-full">
                <CardHeader className="pb-3 md:pb-4">
                  <CardTitle className="text-xl md:text-2xl text-white">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-zinc-800 p-2 rounded-full flex-shrink-0">
                        <Mail className="h-4 w-4 md:h-5 md:w-5 text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="text-zinc-300 font-medium text-sm md:text-base">
                          Email
                        </h3>
                        <a
                          href="mailto:mihaiciocan44@gmail.com"
                          className="text-zinc-400 hover:text-white transition-colors text-sm md:text-base break-all"
                        >
                          mihaiciocan44@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-zinc-800 p-2 rounded-full flex-shrink-0">
                        <Phone className="h-4 w-4 md:h-5 md:w-5 text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="text-zinc-300 font-medium text-sm md:text-base">
                          Phone
                        </h3>
                        <a
                          href="tel:+40737605900"
                          className="text-zinc-400 hover:text-white transition-colors text-sm md:text-base"
                        >
                          +40 737 605 900
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-zinc-800 p-2 rounded-full flex-shrink-0">
                        <MapPin className="h-4 w-4 md:h-5 md:w-5 text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="text-zinc-300 font-medium text-sm md:text-base">
                          Location
                        </h3>
                        <p className="text-zinc-400 text-sm md:text-base">
                          Bucharest, Romania
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800">
                      <h3 className="text-zinc-300 font-medium mb-3 text-sm md:text-base">
                        Connect with me
                      </h3>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700 h-9 w-9 md:h-10 md:w-10"
                          asChild
                        >
                          <Link
                            href="https://github.com/beowolf23"
                            target="_blank"
                          >
                            <Github className="h-4 w-4 text-white" />
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
                            <Linkedin className="h-4 w-4 text-white" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
