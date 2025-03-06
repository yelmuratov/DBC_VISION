import { MarketingLayout } from '#components/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DBCVision - Top AI Vision Analytics 2025 | Tashkent',
  description:
    'Boost your business with DBCVision’s AI-powered vision analytics for retail, logistics & manufacturing. Real-time insights, Tashkent-based solutions.',
  keywords:
    'AI vision analytics, vision analytics Tashkent, AI retail analytics, logistics AI solutions, manufacturing vision tech, 2025 AI trends',
  openGraph: {
    title: 'DBCVision - Leading AI Vision Analytics in 2025',
    description:
      'Transform your operations with DBCVision’s cutting-edge AI vision analytics. Serving Tashkent and beyond with real-time insights.',
    url: 'https://dbcvision.com', // Replace with your actual domain
    siteName: 'DBCVision',
    images: [
      {
        url: 'https://dbcvision.com/og-image.jpg', // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: 'DBCVision AI Analytics Platform',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DBCVision - AI Vision Analytics Leader',
    description:
      'Elevate your business with DBCVision’s AI vision analytics. Real-time solutions for retail, logistics, and manufacturing in 2025.',
    images: ['https://dbcvision.com/og-image.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'application-name': 'DBCVision',
    'apple-mobile-web-app-title': 'DBCVision',
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}