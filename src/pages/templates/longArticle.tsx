import React from 'react'
import Textarea from '../../components/units/textarea'

const LongArticle = () => {
    return (
        <div className='space-y-3 pt-3'>
            <div className='flex flex-col items-center space-y-1'>
                <h1 className='text-lg font-medium'>Step1: Tell us what you want to create</h1>
                <p className='italic text-sm text-center'>The more details you input, the better your generated content will be.
                </p>
            </div>
            <div className='space-y-2'>
                <Textarea
                    name="titleOrTopic"
                    title='Blog Title / Topic'
                    rows={1}
                    note='Minimum of 10 characters'
                    min={10}
                />
                <Textarea
                    rows={1}
                    note='Separate keywords with ","'
                    name='keywords'
                    title='keywords'
                />
                {/* <div className='w-full flex items-center justify-center'>
                    <button className='text-white py-2 px-4 bg-primary rounded-md'>
                        Next: Outline
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default LongArticle