import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import TemplateSection from './templateSidebarSection'

export interface ITemplateSection {
    title: string,
    items: string[]
}

const sections: ITemplateSection[] = [
    {
        title: "YouTube",
        items: [
            "Video Description - YouTube",
            "Video Script Hook and Introduction",
            "Video Titles"
        ]
    },
    {
        title: "Blog",
        items: [
            "Long Article",
            "Content Improver",
            "Blog Idea & Outline",
            "Blgo Post Intro Paragraph",
            "SEO - Blog Posts - Title and Meta Descriptions",
            "Paraphrasing / Rewriting (Quillbot)",
            "Interview Questions"
        ]
    },
    {
        title: "Amazon",
        items: [
            "Amazon Product Features (bullets)",
            "Amazon Product Title",
            "Amazon Product Description (paragraph)"
        ]
    },
    {
        title: "Ads",
        items: [
            "Facebook Ads",
            "Google Ads"
        ],
    },
    {
        title: "Social Media",
        items: [
            "Pinterest Title & Description",
            "Photo Post Captions",
            "Opinion piece / Column",
            "Google my Business Posts"
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