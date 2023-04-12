import React from 'react'
const reviews = [
    {
        image: 'img001.svg',
        name: "doug kyle",
        review: "I found his team excellent in web application development. They have developed for me, my business website, some marketing tool, crowdfunding web application. I am still taking long term services from his dedicated team."
    },
    {
        image: 'img002.svg',
        name: "hans huo",
        review: "Outstanding service, Abbas has been very attentive, assertive, and able to grasp a concept and bring it to life. With Abbas’s keen and able to do approach Abbas will bring Vizz Web Solutions into new territory."
    },
    {
        image: 'img003.svg',
        name: "geoffrey allen",
        review: "These guys are the best. I tried several others here on various platforms before finding them, and since then I haven’t used anyone else because they are very good with working on and resolving ALL my issues! Highly recommended team"
    },
]

const Reviews = () => {
    return (
        <div className='md:px-14 msm:px-4  bg-white py-10 '>
            <h1 className='md:text-6xl text-center  font-bold mb-10 msm:text-4xl'>Reviews</h1>
            <div className="sm:flex flex-wrap md:grid md:grid-cols-2 justify-center xl:grid-cols-3 gap-14 ">
                {
                    reviews.map((review, i) => (

                        <div key={`review-${i}`} className="border-2 border-gray-200 rounded-tl-[100px]  rounded-br-[100px] py-14 mt-4 px-8 relative">
                            <div className='flex items-center gap-4'>
                                <img src={"/" + review.image} alt="" />
                                <span className='text-xl font-bold uppercase'>{review.name}</span>

                            </div>
                            <p className='mt-5 text-blackish'>{review.review}</p>
                            <img src="/icons/review.svg" alt="" className='absolute msm:hidden sm:block -right-[26px] top-6 fill-[#000]' />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Reviews