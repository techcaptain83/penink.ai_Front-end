import { useTranslation } from 'react-i18next';
import Textarea from '../../components/units/textarea';

const LongArticle = () => {

    const { t } = useTranslation();

    return (
        <div className='space-y-3 pt-3'>
            <div className='flex flex-col items-center space-y-1'>
                <h1 className='text-lg font-medium'>{t('long_blog_step1')}</h1>
                <p className='italic text-sm text-center'>{t('long_blog_step1_sub')}
                </p>
            </div>
            <div className='space-y-2'>
                <Textarea
                    name="titleOrTopic"
                    title='blog_title_topic'
                    rows={1}
                    note='minimum_10_character'
                    min={10}
                />
                <Textarea
                    rows={1}
                    note='separate_keywords_with'
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