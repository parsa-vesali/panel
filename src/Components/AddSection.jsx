import React from 'react';
import { IoIosAdd } from "react-icons/io";

export default function AddSection() {
    return (
        <div className='col-span-12 lg:col-span-6 flex flex-col gap-y-5'>
            <Box title='اضافه کردن درس' subtitle='برای افزودن درس جدید' color='bg-yellow-500' hoverColor='bg-yellow-400' />
            <Box title='اضافه کردن دانش‌آموز' subtitle=' افزودن دانش‌آموز جدید' color='bg-rose-500' hoverColor='bg-rose-400' />
            <Box title='اضافه کردن معلم' subtitle='برای افزودن  معلم جدید' color='bg-emerald-500' hoverColor='bg-emerald-400' />
            <Box title='اضافه کردن پرسنل' subtitle=' افزودن  عضو جدید به پرسنل' color='bg-cyan-500' hoverColor='bg-cyan-400' />
        </div>
    );
}

function Box({ title, subtitle, color, hoverColor }) {
    return (
        <div className="bg-white px-2 py-4 lg:p-4 w-full h-full flex justify-between items-center shadow rounded">
            <div className="">
                <h2 className='font-Dana-Bold'>{title}</h2>
                <p className='text-gray-500  line-clamp-1'>{subtitle}</p>
            </div>
            <button className={`${color} flex items-center  text-white text-sm rounded-full px-3 py-1.5 transition-all duration-300`}>
            اضافه کردن   <IoIosAdd className=' text-xl' />  
            </button>
        </div>
    );
}
