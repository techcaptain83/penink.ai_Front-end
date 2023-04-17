import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import TemplateSection from './templateSidebarSection'
import { useTranslation } from 'react-i18next';

export interface ITemplateSection {
    title: string,
    items: { label: string; href: string }[]
}

const sections: ITemplateSection[] = [
    {
        title: "group_youtube",
        items: [
            {
                label: "youtube_description",
                href: "youtube-description"
            },
            {
                label: "youtube_introduction",
                href: "youtube-introduction"
            },
            {
                label: "youtube_title",
                href: "youtube-title"
            }
        ]
    },
    {
        title: "group_blog",
        items: [
            {
                label: "long_article",
                href: "long-article"
            },
            {
                label: "content_improver",
                href: "content-improver"
            },
            {

                label: "blog_idea_outline",
                href: "blog-idea-outline"
            },
            {
                label: "blog_intro_paragraph",
                href: "blog-intro-paragraph"
            },
            {
                label: "blog_seo_title_meta_description",
                href: "blog-seo"
            },
            {
                label: "paraphrasing_rewrite_quillbot",
                href: "paraphrasing"
            },
            {
                label: "interview_question",
                href: "interview-questions"
            }
        ]
    },
    {
        title: "group_amazon",
        items: [
            {
                label: "amazon_product_feature",
                href: "amazon-product-features"
            },
            {

                label: "amazon_product_title",
                href: "amazon-product-title"
            },
            {
                label: "amazon_product_description",
                href: "amazon-product-description"
            }
        ]
    },
    {
        title: "group_ads",
        items: [
            {
                label: "facebook_ads",
                href: "facebook-ads"
            },
            {
                label: "google_ads",
                href: "google-ads"

            }
        ],
    },
    {
        title: "group_social_media",
        items: [
            {

                label: "pinterest_title_description",
                href: "pinterest-title-description"
            },
            {
                label: "photo_post_caption",
                href: "photo-post-captions"
            },
            {
                label: "Opinion piece / Column",
                href: "opinion-piece-column"
            },
            {

                label: "google_business_post",
                href: "google-business-post"
            }
        ]
    }
]

const TemplatesSidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const { t } = useTranslation();

    return (
        <>
            <button className="w-fit h-fit msm:absolute overflow mt-4   bg-blackish p-2  md:hidden" onClick={() => setShowMenu(true)}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white" />
                </svg>
            </button>
            <div className='h-screen  px-4  bg-blackish z-20 py-4 text-white space-y-3 xl:w-[22vw]  md:block msm:hidden'>
                <div className="flex items-center ">
                    <button className="p-6  text-sm flex  md:hidden msm:block " onClick={() => setShowMenu(false)}>&lt;Back</button>
                    <p className='w-full text-white  text-2xl font-semibold'>{t("try")} Panink.ai {t("pro")}</p>
                </div>
                <div className='text-black font-semibold w-full py-3 pl-3  bg-white rounded-lg'>
                    {t("templates")}
                </div>
                <div className=' w-full  pl-3  bg-white rounded-lg space-x-2 flex items-center'>
                    <AiOutlineSearch size={20} className="text-gray-400" />
                    <input placeholder="Search"
                        type="text"
                        className="outline-none text-black rounded  px-2 py-3 placeholder:text-sm w-full"
                    />
                </div>
                <div className="space-y-2 pt-4">
                    {
                        sections.map((section, i) => (
                            <TemplateSection
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                key={`sec-${i}`}  {...section} />
                        ))
                    }
                </div>
            </div>
            {showMenu && (
                <div className='h-full px-4 bg-blackish z-20 py-4 text-white space-y-3 xl:w-[22vw] msm:fixed msm:right-0 msm:top-0 msm:w-full  '>
                    <div className="flex items-center ">
                        <button className="p-6  text-sm flex md:hidden msm:block" onClick={() => setShowMenu(false)}>&lt;Back</button>
                        <p className='w-full text-white  text-2xl font-semibold'>Try Watson pro</p>
                    </div>
                    <div className='text-black font-semibold w-full py-3 pl-3  bg-white rounded-lg'>
                        Templates
                    </div>
                    <div className=' w-full py-3 pl-3  bg-white rounded-lg space-x-2 flex items-center'>
                        <AiOutlineSearch size={20} className="text-gray-400" />
                        <span className='text-gray-400'>Search</span>
                    </div>
                    <div className="space-y-2 pt-4">
                        {
                            sections.map((section, i) => (
                                <TemplateSection
                                    activeItem={activeItem}
                                    setActiveItem={setActiveItem}
                                    key={`sec-${i}`}  {...section} />
                            ))
                        }
                    </div>
                </div>
            )}
        </>

    )
}

export default TemplatesSidebar