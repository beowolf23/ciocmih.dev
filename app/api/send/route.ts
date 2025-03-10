import { EmailTemplate } from '../../../components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const form = await request.formData()

  const name = form.get('name') as string
  const email = form.get('email') as string
  const message = form.get('message') as string

  console.log(name)

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['mihaiciocan44@gmail.com'],
      subject: 'Message from ' + name,
      react: EmailTemplate({ name: name, message: message }),
      replyTo: email,
    })

    if (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
