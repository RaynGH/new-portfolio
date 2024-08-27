import React from 'react';
import { FaXmark } from "react-icons/fa6";


function Modal({open, onClose, children}) {
    return (
        <div onClick={onClose} 
            className={`fixed inset-0 flex justify-center items-center transition-colors
            ${open ? "visible bg-black/20" : "invisible"}`}>
            
            <div onClick={(e) => e.stopPropagation} className={`bg-white rounded-xl shadow p-5 transition-all
            ${open ? "scale-100 opacity-100" : "scale-100 opacity-0"}`}>
            
            <button onClick={onClose} 
                className='absolute top-2 right-2 p-1 text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
                <FaXmark/>
            </button>
            {children}
            </div>    
        </div>
    )
}

export default Modal;
