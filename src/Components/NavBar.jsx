import React from 'react';
import { FaBars } from "react-icons/fa6";
import { FaRegUser, FaChevronDown, FaSearch } from "react-icons/fa";
import {  } from "react-icons/fa";

export default function NavBar({ toggleSidebar }) {
    return (
        <div className='container shadow p-5 h-20 w-full flex items-center justify-between  bg-white'>

            <div className='flex items-center gap-x-2.5 cursor-pointer pl-10'>
                <span className='w-10 h-10 flex items-center justify-center text-white rounded-full bg-blue-400 text-xl'>
                    <FaRegUser />
                </span>
                <div className="flex flex-col ">
                    <h2 className='font-Dana-Bold'>پارسا صفدری</h2>
                    <span className=' text-sm text-gray-500'>مدیر هنرستان</span>
                </div>
                <span className=' text-gray-800'>
                    <FaChevronDown />
                </span>
            </div>

            <div className="relative w-80 mr-10 hidden lg:flex items-center justify-between bg-gray-100 p-1 rounded-lg">
                <input className='bg-transparent p-1' type="text" placeholder='جستجو....' />
                <span className=' text-gray-500 p-1'>
                    <FaSearch/>
                </span>
            </div>

            {/* دکمه برای حالت موبایل */}
            <button onClick={toggleSidebar} className='sm:hidden text-white bg-blue-500 p-2.5 rounded'>
                <FaBars />
            </button>
        </div>
    );
}
