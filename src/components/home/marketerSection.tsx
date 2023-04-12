import React from 'react'

const MarketerSection = () => {
  return (
    <div className='md:px-14 msm:px-4  flex items-center  flex-wrap justify-evenly gap-14 py-10  msm:mt-0 md:mt-[10vw] xl:mt-0'>
      <div className='max-w-md  msm:mx-auto msm:text-center md:text-left'>
        <h1 className='text-4xl  text-primary font-extrabold '>Penink.ai for <br /> Marketing teams </h1>
        <p className='my-5 text-grey text-sm'>Use the AI Writer to create long-form blogs and articles; the Sonic Editor (an enhanced version of Google Docs) to write sales emails, essays, reports, and even ebooks. Moreover, you can polish your content to perfection using our AI-driven editing tools: Paraphraser, Expander, and Shortener.</p>
        <button className='bg-black text-white py-4 px-10 rounded-full mt-4 capitalize'>Learn more</button>
      </div>
      <img src="/marketer.svg" alt="" className='' />

    </div>
  )
}

export default MarketerSection
