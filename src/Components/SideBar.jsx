import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";



export default function SideBar({ isOpen, toggleSidebar }) {
    return (
        <div className={`fixed top-0 right-0 h-full w-[75%] sm:w-[20%] bg-blue-950 shadow-xl p-5 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 sm:right-auto sm:left-0`}>
            <div className="flex items-center justify-between border-b border-white/50 pb-6">
                
                <div className='flex flex-col gap-y-3'>
                    <div className='flex items-center gap-x-2 cursor-pointer '>
                        <span className=' bg-blue-400 p-1.5 rounded-lg text-xl'>
                            <FaRegChartBar />
                        </span>
                        <h2 className='text-lg sm:text-xl font-Dana-Bold '>پنل مدیر</h2>
                    </div>
                </div>

                <button onClick={toggleSidebar} className='sm:hidden text-gray-50 text-2xl'>
                    <IoCloseOutline />
                </button>
            </div>
        </div>
    );
}
