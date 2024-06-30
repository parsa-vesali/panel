import React, { useState, useEffect } from 'react';
import { FaBars, FaRegUser, FaChevronDown, FaSearch, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function NavBar({ toggleSidebar }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'آیا مطمئن هستید؟',
            text: "شما از حساب کاربری خود خارج می‌شوید!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله، خارج شو!',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'خارج شدید!',
                    'شما با موفقیت خارج شدید.',
                    'success'
                ).then(() => {
                    navigate('/');
                });
            }
        });
    };

    // Check screen size on mount and resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for lg
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleDropdown = () => {
        if (isMobile) {
            setDropdownOpen(!dropdownOpen);
        }
    };

    return (
        <div className='container shadow p-5 h-20 w-full flex items-center justify-between bg-white'>
            <div
                className={`relative flex items-center gap-x-2.5 cursor-pointer pl-10 ${isMobile ? '' : 'group'}`}
                onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                onMouseLeave={() => !isMobile && setDropdownOpen(false)}
                onClick={toggleDropdown}
            >
                <span className='w-10 h-10 flex items-center justify-center text-white rounded-full bg-blue-400 text-xl'>
                    <FaRegUser />
                </span>
                <div className="flex flex-col">
                    <h2 className='font-Dana-Bold'>پارسا صفدری</h2>
                    <span className='text-sm text-gray-500'>مدیر هنرستان</span>
                </div>
                <span className='text-gray-800'>
                    <FaChevronDown />
                </span>

                <div
                    className={`absolute top-14 left-0 w-48 bg-white shadow-md rounded-lg p-2 border-t-2 border-blue-500 transition-all duration-300 ${
                        dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    <ul className='flex flex-col child:gap-x-2 child:text-gray-500'>
                        <li className='flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer'>
                            <FaUser className=' text-sm' />
                            پروفایل
                        </li>
                        <li className='flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer'>
                            <FaCog className=' text-sm' />
                            تنظیمات
                        </li>
                        <li onClick={handleLogout} className='flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer'>
                            <FaSignOutAlt className=' text-sm text-red-500' />
                            خروج
                        </li>
                    </ul>
                </div>
            </div>

            <div className="relative w-80 mr-10 hidden lg:flex items-center justify-between bg-gray-100 p-1 rounded-lg">
                <input className='bg-transparent p-1' type="text" placeholder='جستجو....' />
                <span className='text-gray-500 p-1'>
                    <FaSearch />
                </span>
            </div>

            {/* دکمه برای حالت موبایل */}
            <button onClick={toggleSidebar} className='lg:hidden text-white bg-blue-500 p-2.5 rounded'>
                <FaBars />
            </button>
        </div>
    );
}
