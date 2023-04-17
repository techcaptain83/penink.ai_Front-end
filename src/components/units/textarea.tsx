import React from 'react'

interface IProps {
    rows: number;
    title: string;
    name: string;
    note?: string;
    min?: number
}

const Textarea = ({ rows, title, name, note, min }: IProps) => {
    return (
        <div className=''>
            <label htmlFor={name} className="block font-medium leading-6 text-gray-900">
                {title}
            </label>
            <div className="mt-2">
                <textarea
                    rows={rows}
                    name={name}
                    minLength={min}
                    id={name}
                    className="block w-full text-sm rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-1  focus:ring-blue-400  sm:leading-6 p-2"
                />
                <p className='underline text-gray-400 text-sm pt-2'>{note}</p>
            </div>
        </div>
    )
}

export default Textarea