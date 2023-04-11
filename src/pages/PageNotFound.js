import React from 'react'
import Header from "../components/Header";
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col items-center justify-center h-[100vh]'>
                <h2 className="text-xl font-semibold">Page Not Found</h2>

                <NavLink to="/">
                    <h2 className='font-bold text-2xl mt-4 text-blue-700 underline'>Go To Home</h2>
                </NavLink>
            </div>
        </div>
    )
}

export default PageNotFound