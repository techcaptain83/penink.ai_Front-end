import React, { useEffect, useState } from 'react';
import ContentEditor from './contentEditor';
import TemplatesSidebar from './templatesSidebar';
import DropDown from './units/dropDown';
import Button from './units/button';
import { templates } from '../store/templates';
import { ITemplate } from '../@types';
import { useLocation } from 'react-router-dom';
interface Props {
    children: React.ReactNode
}
const TemplatesLayout = ({ children }: Props) => {
    const [currentTemplate, setCurrentTemplate] = useState<null | ITemplate>();
    const location = useLocation();


    useEffect(() => {
        const href = location.pathname.slice(11);
        const template = templates.find(template => template.href === href);
        setCurrentTemplate(template);
    }, [location.pathname]);

    return (
        <div className=' flex md:items-center justify-between md:h-screen    msm:px-4 md:px-0  pb-6 md:pb-0'>
            <TemplatesSidebar />
            <div className="flex sm:flex-row flex-col w-full md:w-[78vw] sm:space-x-4 lg:space-x-8 xl:space-x-10 md:px-4 lg:px-8 lg:pb-4">
                <div className='rounded-md h-[90vh]  shadow-lg mt-4  bg-white sm:w-1/2 w-[95%] flex flex-col'>
                    <div className='bg-primary w-full rounded-t-md py-3 flex items-center px-4 flex-col space-y-2'>
                        <h2 className="capitalize text-xl text-center font-medium  text-white">{currentTemplate?.title}</h2>
                        <p className='text-white text-center text-sm'>{currentTemplate?.description}</p>
                    </div>

                    <div className="py-3   px-3  h-full flex flex-col pb-8 justify-between ">
                        <div className='space-y-3'>

                            {/* <div className=''>
                                <label htmlFor="contentToImprove" className="block font-medium leading-6 text-gray-900">
                                    Content to improve
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        rows={3}
                                        name="conntentToImprove"
                                        className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary  sm:leading-6 p-2"
                                    />
                                </div>
                            </div> */}
                            {children}
                            <div className='w-full'>
                                <label htmlFor="contentToImprove" className="block font-medium leading-6 text-gray-900">
                                    Tone
                                </label>
                                <DropDown fullWidth options={[
                                    { label: "Convincing", value: "convincing" },
                                    { label: "Friendly", value: "friendly" },
                                    { label: "Bold", value: "bold" },
                                    { label: "Professional", value: "professional" },
                                    { label: "Casual", value: "casual" },
                                    { label: "Luxury", value: "luxury" },
                                    { label: "Witty", value: "witty" },
                                    { label: "Adventurous", value: "adventurous" },
                                    { label: "Persuaive", value: "persuasive" },
                                    { label: "Empathetic", value: "empathetic" },
                                ]}
                                />

                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full flex-wrap gap-4 lg:gap-2">
                            <div className="flex items-center space-x-2">
                                <span>N=</span>
                                <DropDown onTop color="rgba(0, 0, 0, .3)" options={[
                                    { label: "1", value: "1" },
                                    { label: "2", value: "2" },
                                    { label: "3", value: "3" },
                                    { label: "4", value: "4" },
                                    { label: "5", value: "5" }
                                ]} />
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>lang=</span>
                                <DropDown onTop color="rgba(0, 0, 0, .3)" options={[
                                    { label: "English", value: "english" },
                                    { label: "French", value: "french" },
                                    { label: "Spanish", value: "spanish" },
                                ]} />
                            </div>
                            <Button fullWidth={false} text="Generate" clickHandler={() => { }} />
                        </div>
                    </div>

                </div>
                <ContentEditor />
            </div>
        </div>
    )
}

export default TemplatesLayout