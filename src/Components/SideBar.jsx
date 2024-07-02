import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaCodeBranch, FaQuestionCircle, FaRegChartBar } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineUser, AiOutlineRead, AiOutlineFile, AiOutlineCalendar, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai'; // آیکون‌های اوتلاین

export default function SideBar({ isOpen, toggleSidebar }) {
    const location = useLocation();

    return (
        <div className={`fixed h-screen lg:sticky bottom-0 top-0 right-0 w-[75%] lg:w-[20%] shadow p-5 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:right-auto lg:left-0 z-50`} style={{ backgroundColor: '#1C2434', maxHeight: '100vh', overflowY: 'auto' }}>
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
                <li className={`p-2 rounded-md ${location.pathname === '/dashboard' ? 'bg-blue-100/20' : ''}`}>
                    <Link to="/dashboard" className='flex items-center gap-x-2'>
                        <RxDashboard /> صفحه اصلی
                    </Link>
                </li>
                <li className={`p-2 rounded-md ${location.pathname === '/studentlist' ? 'bg-blue-100/20' : ''}`}>
                    <Link to="/studentlist" className='flex items-center gap-x-2'>
                        <LuUsers /> دانش آموزان
                    </Link>
                </li>
                <li className={`p-2 rounded-md ${location.pathname === '/teachers' ? 'bg-blue-100/20' : ''}`}>
                    <Link to="/teachers" className='flex items-center gap-x-2'>
                        <AiOutlineUser /> اساتید
                    </Link>
                </li>
                <li className={`p-2 rounded-md ${location.pathname === '/classes' ? 'bg-blue-100/20' : ''}`}>
                    <Link to="/classes" className='flex items-center gap-x-2'>
                        <AiOutlineRead /> کلاس‌ها
                    </Link>
                </li>
                <li className={`p-2 rounded-md ${location.pathname === '/reports' ? 'bg-blue-100/20' : ''}`}>
                    <Link to="/reports" className='flex items-center gap-x-2'>
                        <AiOutlineFile /> گزارش‌ها
                    </Link>
                </li>
                <li className={`p-2 rounded-md ${location.pathname === '/calendar' ? 'bg-blue-100/20' : ''}`}>
                    <Link to="/calendar" className='flex items-center gap-x-2'>
                        <AiOutlineCalendar /> تقویم
                    </Link>
                </li>
                <li className={`p-2 rounded-md ${location.pathname === '/messages' ? 'bg-blue-100/20' : ''}`}>
                    <Link to="/messages" className='flex items-center gap-x-2'>
                        <AiOutlineMail /> پیام‌ها
                    </Link>
                </li>
                <li className={`p-2 rounded-md ${location.pathname === '/settings' ? 'bg-blue-100/20' : ''}`}>
                    <Link to="/settings" className='flex items-center gap-x-2'>
                        <AiOutlineSetting /> تنظیمات
                    </Link>
                </li>
            </ul>

            <div className=" absolute left-0 right-0 bottom-0 bg-blue-400 text-slate-600 py-2 px-5 cursor-pointer ">
                <div className="flex items-start gap-x-3 child:flex child:gap-x-1 child:items-center child-hover:text-black child:transition-all child:duration-150 child:text-sm">
                    <span className=' border-l-2 border-slate-500 pl-4  '>
                        <FaCodeBranch /> ورژن 1.1
                    </span>
                    <span>
                        <FaQuestionCircle /> پشتیبانی
                    </span>
                </div>
            </div>
        </div>
    );
}
