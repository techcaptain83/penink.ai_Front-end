import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { categories, templates } from '../../store/templates';

const TemplatesPage = () => {
    const { t } = useTranslation();

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

    // const placeholder = ;


    return (
        <div className='min-h-[90vh] px-8 md:px-4 lg:px-0 py-12 w-full flex flex-col items-center space-y-6'>
            <div className='rounded-lg shadow-md py-4 flex flex-col items-center space-y-3 xl:w-3/4 md:w-4/5  w-full '>
                <p className='font-medium text-2xl'>{t('what_template_search')}
                </p>
                <input
                    type='text'
                    className='outline-none border rounded-md p-2 xl:w-2/4 md:w-4/5 w-4/5 placeholder:text-sm focus:ring-2 bg-gray-100'
                    placeholder={`${t('search_template')}`}
                />
                <div className='xl:w-2/4 md:w-4/5  w-full px-8 md:px-4 lg:px-0 pt-3 sm:flex items-center justify-between grid grid-cols-3 gap-2'>
                    {
                        categories.map((category) => (
                            <div
                                onClick={() => setActiveCategory(category)}
                                key={category.id} className='flex flex-col  items-center space-y-1 cursor-pointer'>
                                <div className={`p-2 rounded-full transition-all duration-200 ${activeCategory === category && "bg-gray-300 text-white"}`}>
                                    <img src={`/icons/templates/${category.icon}`} alt={category.name} className='w-6 h-6 object-contain' />
                                </div>
                                <p className='text-sm'>{t(`${category.name}`)}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='xl:w-3/4 md:w-4/5  w-full  flex flex-col space-y-4'>
                <div className='flex space-x-2'>
                    <span>{t('templates')}</span>
                    <span>-</span>
                    <span className='font-semibold'>{t(`${activeCategory.name}`)}</span>
                </div>
                <div className='w-full grid lg:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1'>
                    {
                        filteredTemplates.map((template) => (
                            <Link key={template.title} to={`/templates/${template.href}`}>
                                <div className='shadow-md hover:ring-1 transition-all duration-200 rounded-lg p-3 space-y-2 xl:min-h-48 lg:min-h-52 h-48'>
                                    <img src={`/icons/templates/${categories[template.category - 1].icon}`} alt={`${t(template.title)}`} className='w-10 h-10 object-contain' />
                                    <h2 className='font-semibold'>{t(template.title)}</h2>
                                    <p className='text-sm text-grey'>{t(template.description)}</p>
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