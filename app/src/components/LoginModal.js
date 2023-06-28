import React from "react";
import { AiOutlineClose } from 'react-icons/ai'

const LoginModal = ({ isVisible, onClose}) => {
    if ( !isVisible ) return ( null );

    //const handleClose = (e) => {
     //   if (e.target.id === 'wrapper') onClose();
    //}

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper">
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={onClose}></button>
                <div className="bg-white p-2 rounded"> Modal </div>
            </div>
        </div>
    );
}

export default LoginModal