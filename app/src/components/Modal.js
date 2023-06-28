import React from "react";
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ isVisible, onClose, matches }) => {
    if ( !isVisible ) return ( null );

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
                        justify-center items-center" id="wrapper" onClick = { handleClose }>
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end mb-3" onClick = { () => onClose() }>
                    <AiOutlineClose size={25} />
                </button>
                <div className="bg-white p-2 rounded">
                    <div className="p-6">
                        <h1 className="text-4xl font-bold">
                            {matches.amount} Matches Found
                        </h1>
                        <p className="text-2xl pb-4 pt-4">PG hoose one of the results we found so you can compare with {}</p>
                        <div className="max-h-64 overflow-y-auto text-xl">
                        {
                            matches.data.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal