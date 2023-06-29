import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import SignInModal from './SignInModal';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: false,
            showModal: false,
        }
        this.handleMenuClose = this.handleMenuClose.bind(this)
    }
    
    openSignInModal = () => {
    
        this.setState({ showModal: true });
    
    }

    handleClick = () => {
        this.setState({ nav: !this.state.nav });
    };

    handleMenuClose() {
        this.setState({nav: false});
    }
    handleCloseModal = () => {
        this.setState({ showModal: false});
      }
    render() {
        const path = window.location.pathname // site's current path
        const { nav } = this.state;
        let menu, mobileMenu
        
        if (path === '/') {
            menu = (
                <div className='px-2 flex justify-between justify-items-center h-full items-center'>
                    <h1 className='text-3xl py-4 mr-4 ml-4 sm:text-4xl'>
                        <img src={logo} className='logo h-9 sm:py-0' alt='logo' />
                    </h1>
                    <div className='font-montserrat font-semibold text-[#3961AB] flex items-center'>
                        <ul className='hidden md:flex'>
                            <li><a className='hover:text-[#44AF58]' href='#Home'> Home </a></li>
                            <li><a className='hover:text-[#44AF58]' href='#About'> About Us </a></li>
                            <li><a className='hover:text-[#44AF58]' href='#Prices'> Prices </a></li>
                            <li><a className='hover:text-[#44AF58]' href='#Contact'> Contact Us </a></li>
                            <li><button className='hover:test-[#44AF58]' onClick={ () => this.openSignInModal() }>Sign In</button></li>

                            {/*}
                            <li><a className='hover:text-[#44AF58]' href='#Contact'> Log In </a></li>
                            <li><a className='hover:text-[#44AF58]' href='#Contact'> Sign Up </a></li>
                            */}
                        </ul>
                    </div>
                    <div className='md:hidden mr-4' onClick={this.handleClick}>
                        {!this.state.nav ? (<AiOutlineMenu size={25} />) : (<AiOutlineClose size={25} />)}
                    </div>
                </div>
            )
        } else { /** if (path === '/search') */
            menu = (
                <div className='px-2 flex justify-between justify-items-center h-full'>
                    <h1 className='text-3xl py-4 mr-4 ml-4 sm:text-4xl'>
                        <img src={logo} className='logo h-9 sm:py-0' alt='logo' />
                    </h1>
                    <div className='font-montserrat font-semibold text-[#3961AB] flex items-center'>
                        <ul className='hidden md:flex'>
                            <li><button className='hover:test-[#44AF58]' onClick={ () => this.openSignInModal() }>Sign In</button></li>
                        </ul>
                    </div>
                    <div className='md:hidden mr-4' onClick={this.handleClick}>
                        {!this.state.nav ? (<AiOutlineMenu size={25} />) : (<AiOutlineClose size={25} />)}
                    </div>
                </div>
            )
        }

        mobileMenu = (
            <div className='font-montserrat font-semibold text-[#3961AB]'>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ this.handleMenuClose } href='/'         > Home </a></li>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ this.handleMenuClose } href='/#About'   > About Us </a></li>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ this.handleMenuClose } href='/#Prices'  > Prices </a></li>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ this.handleMenuClose } href='/#Contact' > Contact Us </a></li>
                <li><button className='border-b-2 bg-[#E4E8EB]' onClick={ () => this.openSignInModal() }>Sign In</button></li>
                {/* <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ this.handleMenuClose } href='/#Contact' > Log In </a></li>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ this.handleMenuClose } href='/#Contact' > Sign Up </a></li> */}
                {/* <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-blue-800 px-8 py-3 mb-4 '> Log In </button>
                    <button className='px-8 py-3'> Sign Up </button>
                </div> */}
            </div>
        )

        return (
            <div className='w-full h-[4.5rem] z-10 bg-[#f3f3f3] fixed drop-shadlow-lg'>
                { menu }
                <ul className={!this.state.nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 rounded-b-2xl md:hidden'}>
                    { mobileMenu }
                </ul>
                <SignInModal isVisible = { this.state.showModal } onClose = { this.handleCloseModal }/>
            </div>
            
        )
    }    
}

export default Navbar

/* { path === '/' ? ( // cambiar por validacion para log in
<div className='hidden md:flex pr-4'>
<button className='border-none bg-transparent text-black mr-4'> Log In </button>
<button className='px-6 py-2'>Sign Up</button>
</div>
) : (<div className='hidden md:flex pr-4'>
<button className='border-none bg-transparent text-black mr-4 flex items-center'>
    <AiOutlineUser size="25" className='mr-2' /> Profile
</button>
</div>
) } */