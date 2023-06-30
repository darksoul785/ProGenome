import React from "react";
import { AiOutlineClose } from 'react-icons/ai'
import { Auth } from "./auth";

const SignInModal = ({ isVisible, onClose}) => {
    if ( !isVisible ) return ( null );

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[400px] h-[600px] flex flex-col rounded-full">
                <button className="text-white text-xl place-self-end" onClick={onClose}><AiOutlineClose size={25}/></button>
                <div className="bg-white p-10 rounded"> <Auth/> </div>
            </div>
        </div>
    );
}

export default SignInModal