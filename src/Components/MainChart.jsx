// ProgressChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const MainChart = () => {
    const data = {
        labels: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'فرودین', 'اردیبهشت'],
        datasets: [
            {
                label: 'ریاضی',
                data: [85, 88, 84, 90, 92, 85, 89, 91],
                borderColor: '#60a5fa',
                backgroundColor: '#ffffff', // White background
                fill: true,
                tension: 0.3,
            },
            {
                label: 'فیزیک',
                data: [68, 60, 69, 63, 66, 64, 77, 78],
                borderColor: '#4ade80',
                backgroundColor: '#ffffff', // White background
                fill: true,
                tension: 0.3,
            },
            {
                label: 'شیمی',
                data: [42, 55, 64, 47, 50, 48, 36, 39],
                borderColor: '#f43f5e',
                backgroundColor: '#ffffff', // White background
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: '#333' }, // Change legend label color
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#333',
                titleColor: '#fff',
            },
        },
        scales: {
            x: {
                ticks: { color: '#333' }, // Change x-axis tick color
                grid: { color: 'rgba(0, 0, 0, 0.1)' }, // Adjust grid color
                font: {
                    family: 'Dana', // Custom font family
                    size: 14,
                },
            },
            y: {
                ticks: { color: '#333' }, // Change y-axis tick color
                grid: { color: 'rgba(0, 0, 0, 0.1)' }, // Adjust grid color
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="h-full p-4 bg-white rounded shadow"> {/* Update background color */}
            <h2 className="text-center text-black mb-4">پیشرفت دانش‌آموزان در دروس مختلف</h2> {/* Update text color */}
            <Line data={data} options={options} />
        </div>
    );
};

export default MainChart;
