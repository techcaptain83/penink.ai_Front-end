import React from 'react'

export interface IPricingOption {
    price: number;
    name: string;
    description: string;
    features: string[];
    image: string;
}

const PricingOption = ({ price, name, description, features, image }: IPricingOption) => {
    return (
        <div className="border-2 mt-4  border-gray-200 rounded-tl-[100px]  rounded-br-[100px] py-14 px-8 relative bg-[#F8F8FA]">
            <div className='space-y-2'>
                <div className='p-2 rounded-full border-[#26C499] border w-fit'>
                    <img src={image} alt="" className='h-10 w-10 object-contain'/>
                </div>
                <div className='text-2xl font-semibold'>
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
            </div>
            <div className='space-y-3'>
                <p className='mt-5 font-medium'>{description}</p>
                <ul className="list-disc text-blackish list-inside list-dotted">
                    {
                        features.map((ft, i) => (
                            <li key={`feature-${i}`}>{ft}</li>
                        ))
                    }
                </ul>
            </div>
            <img src="/icons/review.svg" alt="" className='absolute -right-[26px] msm:hidden sm:block top-6' />
        </div>
    )
}

export default PricingOption