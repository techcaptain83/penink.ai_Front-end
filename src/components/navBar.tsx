import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./units/logo";

interface ILink {
    label: string;
    href: string;
}

const links: ILink[] = [
    { label: "Home", href: "/" },
    { label: "Templates", href: "/templates" },
    { label: "features", href: "#features" },
    { label: "resources", href: "#resources" },
    { label: "use cases", href: "#usecases" },
    { label: "blog", href: "#blog" },
    { label: "pricing", href: "#pricing" },
]

enum Lang {
    en = "en",
    fr = "fr",
    sp = "sp"
}

const NavBar = () => {
    const [shownav, setShowNav] = useState<boolean>(false);
    const [showChangeLang, setShowChangeLang] = useState<boolean>(false);
    const { i18n } = useTranslation();

    const handleChangeLang = (lang: Lang) => {
        i18n.changeLanguage(lang);
        setShowChangeLang(false);
    }

    const languageOptions: {
        label: string;
        value: Lang
    }[] = [
            { label: "English", value: Lang.en },
            { label: "Français", value: Lang.fr },
            { label: "Español", value: Lang.sp }
        ]

    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth > 768) {
                setShowNav(false)
            }
        }
        window.addEventListener("resize", resizeHandler)
        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])

    return (
        <div className='bg-black/80 md:w-full h-[10vh] md:px-14 msm:px-4 flex items-center justify-between'>

            <Logo />
            <div className='flex items-center md:flex msm:hidden space-x-6'>
                {links.map((link, index) => (
                    <Link to={link.href} key={index}>
                        <p className='text-white capitalize hover:text-primary transition-all duration-200'>{link.label}</p>
                    </Link>
                ))}
            </div>
            <button className="w-fit h-fit msm:block md:hidden" onClick={() => setShowNav(!shownav)}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white" />
                </svg>
            </button>
            {shownav && <div className="fixed top-0 right-0 bg-white px-6 flex items-start gap-10 h-screen z-50">
                <div className=" flex flex-col gap-4  text-black  p-6 ">
                    {links.map((link, index) => (
                        <Link to={link.href} key={index} onClick={() => setShowNav(false)}>
                            <p className=' capitalize hover:text-primary transition-all duration-200'>{link.label}</p>
                        </Link>
                    ))}
                    <Link to={'/login'} onClick={() => setShowNav(false)}>
                        <button className='bg-primary hover:ring-2 ring-gray-400 transition-all duration-200 text-white rounded-lg py-2 px-6'>
                            Login
                        </button>
                    </Link>
                    <div>
                        <button onClick={() => setShowChangeLang(!showChangeLang)}
                            data-dropdown-toggle="dropdown" className="text-white bg-primary focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-6 py-2 text-center space-x-2 inline-flex items-center uppercase" type="button">
                            <span>{i18n.language}</span>
                            <FaChevronDown />
                        </button>
                        {showChangeLang && <div id="dropdown" className={`z-20 bg-blackish absolute   text-black divide-y divide-gray-100 rounded-md shadow`}
                        >
                            <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
                                {
                                    languageOptions.map((option, i) => (
                                        <li key={i}>
                                            <div role="button" onClick={() => handleChangeLang(option.value)}
                                                className="block px-4 py-1 hover:bg-gray-800 hover:text-white">{option.label}</div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>}
                    </div>
                </div>
                <button className="w-fit h-fit msm:block md:hidden mt-6" onClick={() => setShowNav(!setShowNav)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" />
                    </svg>
                </button>
            </div>
            }
            <div className="w-fit h-fit msm:hidden md:flex items-center space-x-5">

                <Link to={'/login'}>
                    <button className='bg-primary hover:ring-2 ring-gray-400 transition-all duration-200 text-white rounded-lg py-2 px-6'>
                        Login
                    </button>
                </Link>
                <div className="w-fit h-fit msm:hidden md:block">
                    <div className="flex items-center gap-2">
                        <div>
                            <button onClick={() => setShowChangeLang(!showChangeLang)}
                                data-dropdown-toggle="dropdown" className="text-white bg-primary focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center space-x-2 inline-flex items-center uppercase" type="button">
                                <span>{i18n.language}</span>
                                <FaChevronDown />
                            </button>
                            {showChangeLang && <div id="dropdown" className={`z-20 bg-blackish absolute   text-black divide-y divide-gray-100 rounded-md shadow`}
                            >
                                <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    {
                                        languageOptions.map((option, i) => (
                                            <li key={i}>
                                                <div role="button" onClick={() => handleChangeLang(option.value)}
                                                    className="block px-4 py-1 hover:bg-gray-800 hover:text-white">{option.label}</div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            {/* language in a circle and dropdown */}
        </div >
    )
}

export default NavBar