import React from 'react'
import Plan from '../plan/plan'


const samplefeatures = [
    ' Generate 100,000 words in month' ,
    'Access 10+ tones',
    'Access to all writing tools',
    'Long-Form editor and keywords assistant',
    'Write an 3 Languages',
    '24/7 priority support',
    'Lock in low price forever',
    'Cancel any time'
]
const Reviews = () => {
    return (
        <div className='msm:bg-slate-100  xl:bg-white md:mb-10  py-10 '>
            <h1 className=' text-2xl text-center  font-bold mb-40 '>Plans and Pricing</h1>
            <div className="flex flex-wrap justify-center  gap-14 md:px-24 msm:px-4 msm:flex xl:grid xl:grid-cols-3  ">
                <Plan color='#407BFF' name='essential' price={9} description='Harness the full power of AI writing with the ability to create full length content with full control & flexibility.' key={1} features={samplefeatures} />
                <Plan color='#407BFF' name='pro-monthly' price={49} description='Harness the full power of AI writing with the ability to create full length content with full control & flexibility.' key={1} features={samplefeatures} />
                <Plan color='#407BFF' name='pro-yearly' price={348} description='Harness the full power of AI writing with the ability to create full length content with full control & flexibility.' key={1} features={samplefeatures} />
            </div>
            <img src="/pricing/bg2.svg" alt=""  className=' -mt-[600px] w-full msm:hidden xl:block ' width="1440" height="669"/>

        </div>
    )
}

export default Reviews