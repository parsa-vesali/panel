import React from 'react';
import { PiStudentLight, PiBookOpen , PiChalkboard , PiFileDocDuotone } from 'react-icons/pi';
import { MdChevronLeft } from "react-icons/md";

export default function InfoBoxes() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
            <Box params={{ title: 'درس ها', number: 67 }} icon={<PiBookOpen />} />
            <Box params={{ title: 'معلم ها', number: 30 }} icon={<PiStudentLight />} />
            <Box params={{ title: 'دانش آموز', number: 500 }} icon={<PiChalkboard />} />
            <Box params={{ title: 'فایل ها', number: 1320 }} icon={<PiFileDocDuotone />} />
        </div>
    );
}

function Box({ icon, params }) {
    return (
        <div className="flex flex-col gap-y-4 shadow py-2 px-4 bg-white border-b-2 border-blue-400 rounded-t cursor-pointer hover:scale-105 duration-300 text-gray-500 hover:bg-dark-blue hover:text-gray-50">
            <div className="flex justify-between items-center">
                <span className=' font-Dana-Bold'>{params.title}</span>
                <span className=' bg-blue-500 flex items-center justify-center text-white p-1 rounded text-2xl'>{icon}</span>
            </div>
            <div className="flex items-center justify-center">
                <span className=" font-Dana-Bold text-xl">
                    {params.number} +
                </span>
            </div>
            <div className="flex justify-end">
                <button className='flex items-center justify-center text-sm hover:text-blue-400'>
                    مشاهده همه <MdChevronLeft />
                </button>
            </div>
        </div>
    );
}
