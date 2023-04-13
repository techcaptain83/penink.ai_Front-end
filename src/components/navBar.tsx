import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./units/logo";

interface ILink {
    label: string;
    href: string;
}

const links: ILink[] = [
    { label: "Home", href: "/" },
    {label:"Templates",href:"/templates"},
    { label: "features", href: "#features" },
    { label: "resources", href: "#resources" },
    { label: "use cases", href: "#usecases" },
    { label: "blog", href: "#blog" },
    { label: "pricing", href: "#pricing" },
]
const NavBar = () => {
    const [shownav, setShowNav] = useState<boolean>(false)
    return (
        <div className='bg-black/80 md:w-full h-[10vh] md:px-14 msm:px-4 flex items-center justify-between'>
            {/* <img src='/logo.png' alt='logo' className='w-24' /> */}
            
            <Logo/>
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
                </div>
                <button className="w-fit h-fit msm:block md:hidden mt-6" onClick={() => setShowNav(!setShowNav)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" />
                    </svg>
                </button>
            </div>
            }
            <div className="w-fit h-fit msm:hidden md:block">

                <Link to={'/login'}>
                    <button className='bg-primary hover:ring-2 ring-gray-400 transition-all duration-200 text-white rounded-lg py-2 px-6'>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar