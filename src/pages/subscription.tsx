import React from 'react'
import PricingOption, { IPricingOption } from '../components/subscription/pricingOption'

const pricingOptions: IPricingOption[] = [
  {
    price: 9,
    name: "Essential",
    description: "Harness the full power of AI writing with the ability to create full length content with full control & flexibility.",
    image: "/icons/plans/1.png",
    features: [
      "Generate 100,000 words in month",
      "Access 10+ tones",
      "Access to all writing tools",
      "Long-Form editor and keywords assistant",
      "Write an 3 Languages",
      "24/7 priority support",
      "Lock in low price forever",
      "Cancel any time"
    ]
  },
  {
    price: 29,
    name: "Pro - Monthly",
    description: "Get custom words/user packages and billing options, and the onboarding and support you need to scale with Penink.ai.",
    image: "/icons/plans/2.png",
    features: [
      "Generate 100,000 words in month",
      "Access 10+ tones",
      "Access to all writing tools",
      "Long-Form editor and keywords assistant",
      "Write an 3 Languages",
      "24/7 priority support",
      "Lock in low price forever",
      "Cancel any time"
    ]
  },
  {
    price: 348,
    name: "Pro - Yearly",
    description: "Get custom words/user packages and billing options, and the onboarding and support you need to scale with Penink.ai.",
    image: "/icons/plans/3.png",
    features: [
      "Generate 100,000 words in month",
      "Access 10+ tones",
      "Access to all writing tools",
      "Long-Form editor and keywords assistant",
      "Write an 3 Languages",
      "24/7 priority support",
      "Lock in low price forever",
      "Cancel any time"
    ]
  }
]

const Subscription = () => {
  return (
    <div className='md:px-14 msm:px-4 pt-10 pb-7 w-full space-y-8'>
      <div className='bg-primary rounded text-white text-center py-3 text-2xl font-medium'>
        Your Subscription
      </div>
      <div className="sm:flex sm:flex-wrap md:grid md:grid-cols-3 gap-14 ">
        {
          pricingOptions.map((option, i) => (
            <PricingOption key={`option-${i}`} {...option} />
          ))
        }
      </div>
    </div>
  )
}

export default Subscription