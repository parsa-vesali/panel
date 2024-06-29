import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";

import { Link } from 'react-router-dom';



export default function SideBar({ isOpen, toggleSidebar }) {
    return (
        <div className={`fixed top-0 right-0 h-full w-[75%] sm:w-[20%] shadow p-5 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 sm:right-auto sm:left-0 z-50`} style={{ backgroundColor: '#1C2434' }}>

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

            <ul className='flex flex-col gap-y-2 py-6 child-hover:bg-blue-100/20 child:transition-all child:duration-300'>
                <li className='bg-blue-100/20 p-2 rounded-md'>
                    <Link className='flex items-center gap-x-2 '>
                        <RxDashboard />صفحه اصلی
                    </Link>
                </li>
                <li className=' p-2 rounded-md'>
                    <Link className='flex items-center gap-x-2'>
                        <LuUsers /> دانش آموزان
                    </Link>
                </li>
                <li className=' p-2 rounded-md'>
                    <Link className='flex items-center gap-x-2'>
                        <LuUsers />  درس ها
                    </Link>
                </li>
                <li className=' p-2 rounded-md'>
                    <Link className='flex items-center gap-x-2'>
                        <LuUsers />  معلم ها
                    </Link>
                </li>
                <li className=' p-2 rounded-md'>
                    <Link className='flex items-center gap-x-2'>
                        <LuUsers /> تنطیمات
                    </Link>
                </li>
                <li className=' p-2 rounded-md'>
                    <Link className='flex items-center gap-x-2'>
                        <LuUsers /> مدرسه
                    </Link>
                </li>
                <li className=' p-2 rounded-md'>
                    <Link className='flex items-center gap-x-2'>
                        <LuUsers /> پروفایل
                    </Link>
                </li>

            </ul>

            <div className="flex items-center gap-x-1 absolute left-0 right-0 bottom-0 bg-blue-400 text-black py-2  px-7 cursor-pointer">
                <CiLogout className=' text-xl' />   خروج از حساب کاربری
            </div>
        </div>
    );
}
