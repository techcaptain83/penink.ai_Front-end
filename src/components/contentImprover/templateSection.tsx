import React, { useEffect } from 'react'
import { ITemplateSection } from './templates'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'


interface IProps extends ITemplateSection {
    activeItem: string | null;
    setActiveItem: React.Dispatch<React.SetStateAction<string | null>>
}
const TemplateSection = ({ title, items, activeItem, setActiveItem }: IProps) => {

    const handleClick = () => {
        if (activeItem === title) {
            setActiveItem(null)
        } else {
            setActiveItem(title)
        }
    }
    return (
        <div className="flex  flex-col space-y-2 cursor-pointer">
            <div
                onClick={handleClick}
                className={`transition-all duration-300 flex items-center space-x-2 cursor-pointer ${activeItem === title && "bg-black/50 py-1 rounded"}`}>
                {activeItem === title ? <FiChevronDown size={20} /> : <FiChevronRight size={20} />}
                <p >{title}</p>
            </div>

            {activeItem === title &&
                <div className='pl-3 flex flex-col space-y-2 text-sm'>
                    {items.map((item, index) => (
                        <div key={index} className='flex items-center cursor-pointer hover:text-gray-300'>
                            {item}
                        </div>
                    ))}
                </div>
            }

        </div>
    )
}

export default TemplateSection