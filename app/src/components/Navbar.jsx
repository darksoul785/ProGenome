import React, { useState } from 'react'
import logo from '../assets/logo.png';

import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: false,
        }
        this.handleMenuClose = this.handleMenuClose.bind(this)
    }
    
    handleClick = () => {
        this.setState({ nav: !this.state.nav });
    };

    handleMenuClose() {
        this.setState({nav: false});
    }

    render() {
        const path = window.location.pathname // site's current path
        const { nav } = this.state;
        let menu, mobileMenu

        if (path === '/') {
            menu = (
                <div className='px-2 flex justify-between items-center h-full'>
                    <h1 className='text-3xl mr-4 ml-4 sm:text-4xl'>
                        <img src={logo} className='logo h-9' alt='logo' />
                    </h1>
                    <div className='flex items-center'>
                        <ul className='hidden md:flex'>
                            <li><a className='hover:text-blue-900' href='#Home'> Home </a></li>
                            <li><a className='hover:text-blue-900' href='#About'> About Us </a></li>
                            <li><a className='hover:text-blue-900' href='#Prices'> Prices </a></li>
                            <li><a className='hover:text-blue-900' href='#Contact'> Contact Us </a></li>
                        </ul>
                    </div>
                        { path === '/' ? ( // cambiar por validacion para log in
                            <div className='hidden md:flex pr-4'>
                                <button className='border-none bg-transparent text-black mr-4'> Log In </button>
                                <button className='px-6 py-2'>Sign Up</button>
                            </div>
                        ) : (<div className='hidden md:flex pr-4'>
                                <button className='border-none bg-transparent text-black mr-4 flex items-center'>
                                    <AiOutlineUser size="25" className='mr-2' /> Profile
                                </button>
                            </div>
                        ) }
                    <div className='md:hidden mr-4' onClick={this.handleClick}>
                        {!this.state.nav ? (<AiOutlineMenu size={25} />) : (<AiOutlineClose size={25} />)}
                    </div>
                </div>
            )
        } else if (path === '/search') {
            menu = (
                <div></div>
            )
        }

        mobileMenu = (
            <div>
                <li className='border-b-2 border-zinc-300 w-full'><a onClick={ this.handleMenuClose } href='/'         > Home </a></li>
                <li className='border-b-2 border-zinc-300 w-full'><a onClick={ this.handleMenuClose } href='/#About'   > About Us </a></li>
                <li className='border-b-2 border-zinc-300 w-full'><a onClick={ this.handleMenuClose } href='/#Prices'  > Prices </a></li>
                <li className='border-b-2 border-zinc-300 w-full'><a onClick={ this.handleMenuClose } href='/#Contact' > Contact Us </a></li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-blue-800 px-8 py-3 mb-4'> Log In </button>
                    <button className='px-8 py-3'> Sign Up </button>
                </div>
            </div>
        )

        return (
            <div className='w-full h-[4.5rem] z-10 bg-[#f3f3f3] fixed drop-shadlow-lg'>
                { menu }
                <ul className={!this.state.nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                    { mobileMenu }
                </ul>
            </div>
        )
    }    
}

export default Navbar