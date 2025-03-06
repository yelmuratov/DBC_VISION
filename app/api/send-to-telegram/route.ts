import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, companyName, telephoneNumber, message } = await req.json()

    const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json({ message: 'Telegram configuration missing' }, { status: 500 })
    }

    const telegramMessage = `
      New message from DBCVision Contact Form:
      Name: ${name}
      Company Name: ${companyName}
      Telephone Number: ${telephoneNumber}
      Message: ${message}
    `

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }),
      }
    )

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram')
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 })
  }
}