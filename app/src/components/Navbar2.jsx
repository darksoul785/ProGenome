import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { logo } from "../assets";
import { useNavigate } from "react-router";

export const Navbar2 = () => {
    const navigate = useNavigate();
    const onLogin = () => {
        navigate('/Login',{
            replace: true,
        });
    }
    const handleClick = () => {
        setnav((previousState)=>!previousState);
    }
    const handleMenuClose = () => {
        setnav((previousState)=>previousState = false);
    }  
  const [nav, setnav] = useState(false)
  return (
    <> 
      <div className="w-full h-[4.5rem] z-10 bg-[#f3f3f3] fixed drop-shadlow-lg">
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
                            <li onClick={onLogin} className="hover:cursor-pointer" >Login</li>

                            {/*}
                            <li><a className='hover:text-[#44AF58]' href='#Contact'> Log In </a></li>
                            <li><a className='hover:text-[#44AF58]' href='#Contact'> Sign Up </a></li>
                            */}
                        </ul>
                    </div>
                    
                    <div className='md:hidden mr-4' onClick={handleClick}>
                        {nav ? (<AiOutlineMenu size={25} />) : (<AiOutlineClose size={25} />)}
                    </div>
                </div>

        <ul className={nav ? "hidden": "absolute bg-zinc-200 w-full px-8 rounded-b-2xl md:hidden"}>
        <div className='font-montserrat font-semibold text-[#3961AB]'>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ handleMenuClose } href='/'         > Home </a></li>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ handleMenuClose } href='/#About'   > About Us </a></li>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ handleMenuClose } href='/#Prices'  > Prices </a></li>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ handleMenuClose } href='/#Contact' > Contact Us </a></li>
                {/* <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ this.handleMenuClose } href='/#Contact' > Log In </a></li>
                <li className='border-b-2 bg-[#E4E8EB] w-full'><a onClick={ this.handleMenuClose } href='/#Contact' > Sign Up </a></li> */}
                {/* <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-blue-800 px-8 py-3 mb-4 '> Log In </button>
                    <button className='px-8 py-3'> Sign Up </button>
                </div> */}
            </div>
        </ul>
      </div>
    </>
  );
};
