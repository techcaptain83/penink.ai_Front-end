import React from 'react'
import Banner from '../components/home/banner'
import Features from '../components/home/features'
import HowItWorks from '../components/home/howItWorks'
import Pricing from '../components/home/pricing'
import Reviews from '../components/home/reviews'
import FAQs from '../components/home/faqs'
import MarketerSection from '../components/home/marketerSection'

const Home = () => {
  return (
    <div className='w-full'>
        <Banner/>
        <Features/>
        <HowItWorks/>
        <Pricing/>
        <MarketerSection />
        <FAQs/>
        <Reviews />
    </div>
  )
}

export default Home