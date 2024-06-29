// ProgressChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const MainCahrt = () => {
    const data = {
        labels: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'فرودین', 'اردیبهشت'],
        datasets: [
            {
                label: 'ریاضی',
                data: [85, 88, 84, 90, 92, 85, 89, 91],
                borderColor: '#60a5fa',
                backgroundColor: '#1C2434',
                fill: true,
                tension: 0.3,
            },
            {
                label: 'فیزیک',
                data: [68, 60, 69, 63, 66, 64, 77, 78],
                borderColor: '#4ade80',
                backgroundColor: '#1C2434',
                fill: true,
                tension: 0.3,
            },
            {
                label: 'شیمی',
                data: [42, 55, 64, 47, 50, 48, 36, 39],
                borderColor: '#f43f5e',
                backgroundColor: '#1C2434',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: '#fff' },
            },
          
            tooltip: {
                enabled: true,
                backgroundColor: '#333',
                titleColor: '#fff',
            },
        },
        scales: {
            x: {
                ticks: { color: '#fff' },
                grid: { color: 'rgba(255, 255, 255, 0.2)' },
                font: {
                    family: 'Dana', // استفاده از فونت کاستوم
                    size: 14,
                },
            },
            y: {
                ticks: { color: '#fff' },
                grid: { color: 'rgba(255, 255, 255, 0.2)' },
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="h-full p-4 bg-dark-blue rounded shadow">
            <h2 className="text-center text-white mb-4">پیشرفت دانش‌آموزان در دروس مختلف</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default MainCahrt;
