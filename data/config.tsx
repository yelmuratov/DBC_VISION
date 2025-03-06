import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'DBCVision - Intelligent Vision Analytics',
  } as NextSeoProps,
  termsUrl: '/terms',
  privacyUrl: '/privacy',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'solutions',
        label: 'Solutions',
      },
      {
        id: 'how-it-works',
        label: 'How It Works',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Contact',
        href: '#contact',
      },
      {
        label: 'Request Demo',
        href: '#contact',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © 2025 DBCVision. All rights reserved.{' '} <br />
        <Link href="mailto:sales@dbcvision.com">sales@dbcvision.com</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:support@dbcvision.com',
        label: 'Support',
      },
      {
        href: 'https://www.linkedin.com/company/dbcvision',
        label: <FaLinkedin size="30" />, // Increased size to 20
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        href: 'https://github.com/Aral-Tech',
        label: <FaGithub size="30" />, // Increased size to 20
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
  signup: {
    title: 'Experience the Future with DBCVision',
    features: [
      {
        icon: FiCheck,
        title: 'Real-Time Analytics',
        description: 'Instantly process visual data for smarter decision-making.',
      },
      {
        icon: FiCheck,
        title: 'Scalable Solutions',
        description: 'Grow effortlessly with tools that adapt to your needs.',
      },
      {
        icon: FiCheck,
        title: 'AI-Driven Insights',
        description: 'Leverage advanced AI to uncover actionable patterns.',
      },
      {
        icon: FiCheck,
        title: 'Seamless Integration',
        description: 'Connect easily with your existing systems or our cloud.',
      },
    ],
  },
}

export default siteConfig