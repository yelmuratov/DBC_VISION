import * as React from 'react'

const faq = {
  title: 'Frequently Asked Questions',
  // description: '', // Removed description since it wasn't provided
  items: [
    {
      q: 'How does DBCVision recognize customers?',
      a: (
        <>
          DBCVision uses AI-powered vision analytics to differentiate between employees and real customers, track new visitors, and identify returning clients for deeper insights.
        </>
      ),
    },
    {
      q: 'Can DBCVision work for multiple locations?',
      a: (
        <>
          Yes! Our system scales effortlessly, allowing you to track customer behavior across multiple stores, clinics, or coffee shops with unified analytics.
        </>
      ),
    },
    {
      q: 'Does DBCVision require special hardware?',
      a: (
        <>
          DBCVision works with standard security cameras. No need for expensive upgrades—our AI processes existing visual data to generate insights.
        </>
      ),
    },
    {
      q: 'How does the system handle returning customers?',
      a: (
        <>
          Unlike competitors, DBCVision accurately recognizes returning visitors—helping coffee shops track loyal customers and retailers optimize customer retention.
        </>
      ),
    },
    {
      q: 'Can I integrate DBCVision with my existing POS or CRM?',
      a: (
        <>
          Absolutely! We provide robust APIs that seamlessly integrate with your POS, CRM, or other business tools, ensuring smooth data synchronization.
        </>
      ),
    },
    {
      q: 'Where is my data stored?',
      a: (
        <>
          You can choose cloud-based or on-premise deployment, giving you full control over your data security and privacy.
        </>
      ),
    },
    {
      q: 'Does DBCVision require a monthly subscription?',
      a: (
        <>
          We offer flexible pricing plans, including subscription-based models and one-time licensing for businesses of all sizes.
        </>
      ),
    },
  ],
}

export default faq