import React from 'react';

export default function NavBar({ toggleSidebar }) {
    return (
        <div className='shadow-lg p-5 h-20 w-full flex items-center justify-between'>
            <div className='text-xl font-semibold'>NavBar</div>
            {/* دکمه برای حالت موبایل */}
            <button onClick={toggleSidebar} className='sm:hidden text-gray-50 bg-blue-600 px-4 py-2 rounded'>
                &#9776; {/* Hamburger icon */}
            </button>
        </div>
    );
}
