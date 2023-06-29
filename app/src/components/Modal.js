import React from "react";
import { AiOutlineClose, AiFillCaretRight } from 'react-icons/ai'

const Modal = ({ isVisible, onClose, matches, selectedTerm, selectedId }) => {
    if ( !isVisible ) return ( null );

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
                        justify-center items-center" id="wrapper" onClick = { handleClose }>
            <div className="w-[900px] flex flex-col">
                <button className="text-white text-xl place-self-end mb-3" onClick = { () => onClose() }>
                    <AiOutlineClose size={25} />
                </button>
                <div className="bg-white p-2 rounded">
                    <div className="p-6">
                        {
                            matches.amount === 0
                            ?
                            <h1 className="text-3xl font-bold">
                                There were not results for "<b className="text-gray-500">{ selectedTerm }</b>" on other databases.
                            </h1>
                            :
                            <h1 className="text-3xl font-bold">
                                { matches.amount } Possible Matches found for "<b className="text-gray-500">{ selectedTerm }</b>"
                            </h1>
                        }
                        <p className="text-2xl pb-4 pt-4">Choose one of the following results we found so you can compare them</p>
                        <div className="max-h-64 overflow-y-auto text-xl">
                        {
                            matches.data.map((item, index) => (
                                <div className="flex items-center justify-center">
                                    <button className="text-[#FFF] bg-[#44AF58] font-bold p-3 rounded-full w-8/12 flex items-center justify-center
                                                        m-2 mr-5 hover:bg-transparent hover:text-[#44AF58] hover:border-2 hover:border-[#44AF58]"
                                                        type="button" onClick={() => window.location.href = `/proteinByIds?pId=${selectedId}&sId=${item.split(' ')[0]}`} >
                                        <AiFillCaretRight className="pl-2 pr-2" size={30} /> Choose - {item}
                                    </button>
                                </div>
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