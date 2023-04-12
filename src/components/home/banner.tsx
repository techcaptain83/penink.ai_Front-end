import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='min-h-[90vh] h-full msm:pt-14 md:py-6 msm:text-center sm:text-left w-full bg-black/70 bg-cover bg-no-repeat  grid md:grid-cols-2 gap-4 items-center '
            style={{
                backgroundImage: "url(/hero-bg.png)"
            }}
        >
            <div className='px-12 flex flex-col gap-10 '>
                <h1 className="font-black msm:text-4xl md:text-6xl text-white">Write content with 10x Faster with Penink.ai</h1>
                <p className="text-white">Penink.ai is your #1 AI-powered content writing assistant to write high-quality content in a few clicks.</p>
                <div className='w-fit h-fit msm:mx-auto md:ml-0 '>
                    <Link to={'/signup'}>
                        <button className=" w-fit  rounded-md text-white py-4 px-10 bg-gradient-to-br bg-primary to-[#26C499]">Start for free &nbsp;&nbsp;→</button>
                    </Link>
                </div>
            </div>

            <img src="/hero-banner.svg" alt="" className=' h-full msm:w-full' style={{ backgroundImage: 'url(/hero-bg-right.svg)' }} />
        </div>
    )
}

export default Banner