import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import TemplateSection from './templateSidebarSection'

export interface ITemplateSection {
    title: string,
    items: { label: string; href: string }[]
}

const sections: ITemplateSection[] = [
    {
        title: "YouTube",
        items: [
            {
                label: "Video Description - YouTube",
                href: "youtube-description"
            },
            {
                label: "Video Script Hook and Introduction",
                href: "youtube-introduction"
            },
            {
                label: "Video Titles",
                href: "youtube-title"
            }
        ]
    },
    {
        title: "Blog",
        items: [
            {
                label: "Long Article",
                href: "long-article"
            },
            {
                label: "Content Improver",
                href: "content-improver"
            },
            {

                label: "Blog Idea & Outline",
                href: "blog-idea-outline"
            },
            {
                label: "Blog Post Intro Paragraph",
                href: "blog-intro-paragraph"
            },
            {
                label: "SEO - Blog Posts - Title and Meta Descriptions",
                href: "blog-seo"
            },
            {
                label: "Paraphrasing / Rewriting (Quillbot)",
                href: "paraphrasing"
            },
            {
                label: "Interview Questions",
                href: "interview-questions"
            }
        ]
    },
    {
        title: "Amazon",
        items: [
            {
                label: "Amazon Product Features (bullets)",
                href: "amazon-product-features"
            },
            {

                label: "Amazon Product Title",
                href: "amazon-product-title"
            },
            {
                label: "Amazon Product Description (paragraph)",
                href: "amazon-product-description"
            }
        ]
    },
    {
        title: "Ads",
        items: [
            {
                label: "Facebook Ads",
                href: "facebook-ads"
            },
            {
                label: "Google Ads",
                href: "google-ads"

            }
        ],
    },
    {
        title: "Social Media",
        items: [
            {

                label: "Pinterest Title & Description",
                href: "pinterest-title-description"
            },
            {
                label: "Photo Post Captions",
                href: "photo-post-captions"
            },
            {
                label: "Opinion piece / Column",
                href: "opinion-piece-column"
            },
            {

                label: "Google my Business Posts",
                href: "google-business-post"
            }
        ]
    }
]

const TemplatesSidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);

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
                    <p className='w-full text-white  text-2xl font-semibold'>Try Watson pro</p>
                </div>
                <div className='text-black font-semibold w-full py-3 pl-3  bg-white rounded-lg'>
                    Templates
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