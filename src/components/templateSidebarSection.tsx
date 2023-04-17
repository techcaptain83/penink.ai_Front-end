import React, { useEffect } from 'react'
import { ITemplateSection } from './templatesSidebar'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


interface IProps extends ITemplateSection {
    activeItem: string | null;
    setActiveItem: React.Dispatch<React.SetStateAction<string | null>>
}
const TemplateSection = ({ title, items, activeItem, setActiveItem }: IProps) => {

    const { t } = useTranslation();

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
                <p >{t(`${title}`)}</p>
            </div>

            {activeItem === title &&
                <div className='pl-3 flex flex-col space-y-2 text-sm'>
                    {items.map((item, index) => (
                        <Link key={index} to={`${'/templates/' + item.href}`}>
                            <div className='flex items-center cursor-pointer hover:text-gray-300'>
                                {t(`${item.label}`)}
                            </div>
                        </Link>
                    ))}
                </div>
            }

        </div>
    )
}

export default TemplateSection