import React from 'react'
import NavBar from './navBar'
import Footer from './footer'


interface IProps {
    children: React.ReactNode
}
const MainLayout = ({ children }: IProps) => {
    return (
        <div className=' min-h-screen flex flex-col justify-between'>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
