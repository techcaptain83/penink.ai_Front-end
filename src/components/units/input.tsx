import React from 'react'

import { HTMLAttributes } from 'react';

interface IProps {
    label: string;
    placeholder: string;
    type: string;
    name: string;
}
const Input = ({ label, placeholder, type, name }: IProps) => {
    return (
        <div className='w-full'>
            <label htmlFor={name} className="block font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary  sm:leading-6 pl-4"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Input