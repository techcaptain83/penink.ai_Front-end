import React, { useState, useEffect } from 'react'
import { templates, categories } from '../../store/templates'
import { Link } from 'react-router-dom';

const TemplatesPage = () => {

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [filteredTemplates, setFilteredTemplates] = useState(templates);

    useEffect(() => {
        if (activeCategory.id === 1) {
            setFilteredTemplates(templates);
            return;
        }
        const filtered = templates.filter((template) => template.category === activeCategory.id);
        setFilteredTemplates(filtered);
    }, [activeCategory]);


    return (
        <div className='min-h-[90vh] px-8 md:px-4 lg:px-0 py-12 w-full flex flex-col items-center space-y-6'>
            <div className='rounded-lg shadow-md py-4 flex flex-col items-center space-y-3 xl:w-3/4 md:w-4/5  w-full '>
                <p className='font-medium text-2xl'>What template are you looking for?
                </p>
                <input
                    type='text'
                    className='outline-none border rounded-md p-2 xl:w-2/4 md:w-4/5 w-4/5 placeholder:text-sm focus:ring-2 bg-gray-100'
                    placeholder='search the template you are looking for'
                />
                <div className='xl:w-2/4 md:w-4/5  w-full px-8 md:px-4 lg:px-0 pt-3 sm:flex items-center justify-between grid grid-cols-3 gap-2'>
                    {
                        categories.map((category) => (
                            <div
                                onClick={() => setActiveCategory(category)}
                                key={category.id} className='flex flex-col  items-center space-y-1 cursor-pointer'>
                                <div className={`p-2 rounded-full transition-all duration-200 ${activeCategory === category && "bg-primary text-white"}`}>
                                    <img src={`/icons/templates/${category.icon}`} alt={category.name} className='w-6 h-6 object-contain' />
                                </div>
                                <p className='text-sm'>{category.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='xl:w-3/4 md:w-4/5  w-full  flex flex-col space-y-4'>
                <div className='flex space-x-2'>
                    <span>Templates</span>
                    <span>-</span>
                    <span className='font-semibold'>{activeCategory.name}</span>
                </div>
                <div className='w-full grid lg:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1'>
                    {
                        filteredTemplates.map((template) => (
                            <Link key={template.title} to={`/templates/${template.href}`}>
                                <div className='shadow-md hover:ring-1 transition-all duration-200 rounded-lg p-3 space-y-2 xl:h-48 lg:h-52 h-48'>
                                    <img src={`/icons/templates/${categories[template.category - 1].icon}`} alt={template.title} className='w-10 h-10 object-contain' />
                                    <h2 className='font-semibold'>{template.title}</h2>
                                    <p className='text-sm text-grey'>{template.description}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TemplatesPage