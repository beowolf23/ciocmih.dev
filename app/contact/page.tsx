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
  Globe,
} from 'lucide-react'

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

      const res = await fetch('/api/send', {
        method: 'POST',
        body: formDataBody,
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="bg-zinc-900/30 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-zinc-300"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-zinc-800/50 border-zinc-700 focus:border-zinc-600 text-white"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-zinc-300"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-zinc-800/50 border-zinc-700 focus:border-zinc-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-zinc-300"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        className="bg-zinc-800/50 border-zinc-700 focus:border-zinc-600 text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gap-2 bg-zinc-800 hover:bg-zinc-700 text-white"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-zinc-900/30 border-zinc-800 h-full">
                <CardHeader>
                  <CardTitle className="text-white">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-zinc-800 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="text-zinc-300 font-medium">Email</h3>
                        <a
                          href="mailto:mihaiciocan44@gmail.com"
                          className="text-zinc-400 hover:text-white transition-colors"
                        >
                          mihaiciocan44@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-zinc-800 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="text-zinc-300 font-medium">Phone</h3>
                        <a
                          href="tel:+40737605900"
                          className="text-zinc-400 hover:text-white transition-colors"
                        >
                          +40 737 605 900
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-zinc-800 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="text-zinc-300 font-medium">Location</h3>
                        <p className="text-zinc-400">Bucharest, Romania</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800">
                      <h3 className="text-zinc-300 font-medium mb-3">
                        Connect with me
                      </h3>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700"
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
                          className="rounded-full border-zinc-800 bg-transparent hover:bg-zinc-900 hover:border-zinc-700"
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
        </div>
      </div>
    </div>
  )
}
