import React from 'react'

const featuresData = [
  {
    image: 'writers.svg',
    title: `Penink.ai for 
     Writers`,
    content: `articles; the Sonic Editor (an enhanced version of Google Docs) to write sales emails,
            essays, reports, and even ebooks. Moreover, you can polish your content to perfection using
            our AI-driven editing tools: Paraphraser, Expander, and Shortener.`
  },
  {
    image: 'stores.svg',
    title: `Penink.ai for Ecommerce stores`,
    content: `articles; the Sonic Editor (an enhanced version of Google Docs) to write sales emails,
            essays, reports, and even ebooks. Moreover, you can polish your content to perfection using
            our AI-driven editing tools: Paraphraser, Expander, and Shortener.`
  },
  {
    image: 'teams.svg',
    title: `Penink.ai for Marketing teams`,
    content: `articles; the Sonic Editor (an enhanced version of Google Docs) to write sales emails,
            essays, reports, and even ebooks. Moreover, you can polish your content to perfection using
            our AI-driven editing tools: Paraphraser, Expander, and Shortener.`
  },
]
const Features = () => {
  return (
    <div className='md:px-14 msm:px-4 mt-10'>
      {
        featuresData.map((datum,index) => (
          <div className={`flex ${ index % 2 != 0 && "flex-row-reverse"} gap-10 flex-wrap my-20 items-center  justify-around md:px-[8vw] msm:px-[1vw]`}>
            <img src={'/features/' + datum.image} alt=""  />
            <div className="md:max-w-md msm:text-center md:text-left msm:max-w-full msm:mx-auto">
              <h1 className='text-2xl  text-primary font-bold md:max-w-[60%] msm:max-w-full'>{datum.title}</h1>
              <p className='mt-5 text-grey text-sm'>{datum.content}</p>
            </div>
            </div>
        ))

      }
    </div>
  )
}

export default Features