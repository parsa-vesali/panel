import React from 'react';
import { PiStudentLight } from 'react-icons/pi';
import { MdChevronLeft } from "react-icons/md";

export default function InfoBoxes() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
            <Box params={{ title: 'درس ها', number: 67 }} icon={<PiStudentLight />} />
            <Box params={{ title: 'معلم ها', number: 30 }} icon={<PiStudentLight />} />
            <Box params={{ title: 'دانش آموز', number: 500 }} icon={<PiStudentLight />} />
            <Box params={{ title: 'فایل ها', number: 1320 }} icon={<PiStudentLight />} />
        </div>
    );
}

function Box({ icon, params }) {
    return (
        <div className="flex flex-col gap-y-4 shadow p-4 bg-white border-b-2 border-blue-400 rounded-t">
            <div className="flex justify-between items-center">
                <span className=' font-Dana-Bold text-gray-500'>{params.title}</span>
                <span className=' bg-blue-500 flex items-center justify-center text-white p-1 rounded text-2xl'>{icon}</span>
            </div>
            <div className="flex items-center justify-center">
                <span className=" font-Dana-Bold text-xl">
                    {params.number} +
                </span>
            </div>
            <div className="flex items-center justify-center">
                <button className='flex items-center justify-center gap-x-2 rounded-full text-white w-28 py-1 bg-blue-500 text-sm'>
                    مشاهده همه <MdChevronLeft />
                </button>
            </div>
        </div>
    );
}
