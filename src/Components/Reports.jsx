// Components/Reports.js
import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import SchoolIcon from '@mui/icons-material/School';
import { Chart, registerables } from 'chart.js';

// Register chart.js components
Chart.register(...registerables);

// Sample data for charts
const barData = {
    labels: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن'],
    datasets: [
        {
            label: 'دانش آموزان جدید',
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.8)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: [65, 59, 80, 81, 56, 55]
        }
    ]
};

const lineData = {
    labels: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن'],
    datasets: [
        {
            label: 'نمرات متوسط',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55]
        }
    ]
};

const pieData = {
    labels: ['ریاضیات', 'فیزیک', 'شیمی', 'زبان انگلیسی'],
    datasets: [
        {
            data: [300, 50, 100, 75],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A']
        }
    ]
};

const keyInfo = [
    { label: 'تعداد کل دانش آموزان', value: 500, icon: <PeopleIcon sx={{ fontSize: 40 }} />, gradient: 'bg-gradient-to-r from-pink-500 to-orange-400' },
    { label: 'تعداد کلاس‌ها', value: 25, icon: <ClassIcon sx={{ fontSize: 40 }} />, gradient: 'bg-gradient-to-r from-blue-500 to-teal-400' },
    { label: 'تعداد اساتید', value: 15, icon: <SchoolIcon sx={{ fontSize: 40 }} />, gradient: 'bg-gradient-to-r from-green-500 to-lime-400' },
];

export default function Reports() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="flex">
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-1">
                    <NavBar toggleSidebar={toggleSidebar} />
                    <div className="p-6 h-screen overflow-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <Typography variant="h6">دانش آموزان جدید</Typography>
                                <Bar data={barData} />
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <Typography variant="h6">نمرات متوسط</Typography>
                                <Line data={lineData} />
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <Typography variant="h6">مباحث درسی</Typography>
                                <Pie data={pieData} />
                            </div>
                            {keyInfo.map((info, index) => (
                                <div key={index} className={`flex items-center p-4 rounded-lg text-white ${info.gradient}`}>
                                    <div className="bg-white bg-opacity-20 p-4 rounded-full mr-2">
                                        {info.icon}
                                    </div>
                                    <div className='mr-5'>
                                        <Typography variant="body1" className="font-bold">{info.label}</Typography>
                                        <Typography variant="h4" className="font-bold">{info.value}</Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* OVERLAY */}
            {isSidebarOpen && (
                <div onClick={toggleSidebar} className="fixed w-full h-full top-0 left-0 bg-black/40 z-20 transition-all"></div>
            )}
        </>
    );
}
