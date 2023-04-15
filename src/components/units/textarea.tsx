import React from 'react'

interface IProps{
    
}
const Textarea = ({ }: IProps) => {
    return (
        <div className=''>
            <label htmlFor="contentToImprove" className="block font-medium leading-6 text-gray-900">
                Content to improve
            </label>
            <div className="mt-2">
                <textarea
                    rows={3}
                    name="conntentToImprove"
                    className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary  sm:leading-6 p-2"
                />
            </div>
        </div>
    )
}

export default Textarea