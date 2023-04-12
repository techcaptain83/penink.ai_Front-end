import React from 'react'

interface IProps {
    children: React.ReactNode,
    title: string;
}

const FormLayout = ({ children, title }: IProps) => {
    return (
        <div className='rounded-md relative shadow-lg pb-4 bg-white xl:w-[30vw] lg:w-[35vw] md:w-[50vw] sm:w-[70vw] w-[90vw]'
        >
            <div className='bg-primary w-full rounded-t-md py-3 flex items-center  pl-4'>
                <p className='uppercase text-xl font-medium text-white'>{title}</p>
            </div>
            <div className='px-4 flex flex-col space-y-6 py-4'>
                {children}
            </div>
        </div>
    )
}

export default FormLayout