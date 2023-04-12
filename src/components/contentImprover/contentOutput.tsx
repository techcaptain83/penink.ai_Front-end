import React from 'react'
import { AiOutlineAudio } from 'react-icons/ai'
import { BsSend } from 'react-icons/bs'
import { CiImageOn } from 'react-icons/ci'
import { FaRegSmileBeam } from 'react-icons/fa'

const ContentOutput = () => {
    return (
        <div className='rounded-md  h-[90vh] mt-4 shadow-lg   space-y-3 flex flex-col justify-between sm:w-1/2 w-[95%]'
        >
            <div className='bg-primary text-white w-full rounded-t-md py-3 flex items-center justify-between px-3'>
                <h2 >Untitled Document</h2>
                <p>
                    <span>0 words</span>
                    <span>.</span>
                    <span>0 characters</span>
                </p>
            </div>
            <div className="w-full  border-t px-4 py-3 border-black/20 border-b rounded-b-md flex items-center justify-between space-x-2 text-black/50">
                <AiOutlineAudio size={20} className="cursor-pointer hover:text-gray-900" />
                <input
                    type="text"
                    className="outline-none bg-slate-50 rounded focus:bg-slate-100  px-2 py-1 placeholder:text-sm min-h-xl w-full"
                    placeholder="Type here"
                />
                <CiImageOn size={24} className="cursor-pointer hover:text-gray-900" />
                <FaRegSmileBeam size={20} className="cursor-pointer hover:text-gray-900" />
                <BsSend size={20} className="cursor-pointer hover:text-gray-900" />
            </div>

        </div>
    )
}

export default ContentOutput