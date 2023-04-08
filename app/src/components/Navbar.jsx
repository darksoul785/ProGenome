import React, { useState } from 'react'
import logo from '../images/logo.png';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='w-full h-[4.5rem] z-10 bg-[#f3f3f3] fixed drop-shadlow-lg'>
            <div className='px-2 flex justify-between items-center h-full'>
                <h1 className='text-3xl font-bold mr-4 ml-4 sm:text-4xl'>
                    <img src={logo} className="logo h-9" alt="logo" />
                </h1>
                <div className='flex items-center'>
                    <ul className="hidden md:flex lg:">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About Us</a></li>
                        <li><a href="#Prices">Prices</a></li>
                        <li><a href="#Contact Us">Contact Us</a></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Log In</button>
                    <button className='px-6 py-2'>Sign Up</button>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    { !nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />  }
                    
                </div>
            </div>

            <ul className={ !nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8' }>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About Us</li>
                <li className='border-b-2 border-zinc-300 w-full'>Prices</li>
                <li className='border-b-2 border-zinc-300 w-full'>Contact Us</li>                
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-blue-800 px-8 py-3 mb-4'>Log In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar