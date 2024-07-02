// ./Pages/Reports.js
import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Alert from '@mui/material/Alert';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Chart from 'chart.js/auto';

// داده‌های نمونه برای نمودارها
const barData = {
    labels: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن'],
    datasets: [
        {
            label: 'دانش آموزان جدید',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
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
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
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

export default function Reports() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='flex'>
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className='flex-1'>
                    <NavBar toggleSidebar={toggleSidebar} />
                    <div className='px-5 py-5 h-screen overflow-auto'>
                        <Alert variant="filled" severity="info" color='primary'>
                            این صفحه در حال ساخت میباشد
                        </Alert>

                        {/* نمودارها و کارت‌های اطلاعاتی */}
                        <Grid container spacing={3} className='mt-5'>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">دانش آموزان جدید</Typography>
                                        <Bar data={barData} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">نمرات متوسط</Typography>
                                        <Line data={lineData} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">مباحث درسی</Typography>
                                        <Pie data={pieData} />
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* کارت اطلاعاتی برای نمایش برخی از اعداد و ارقام */}
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">اطلاعات کلیدی</Typography>
                                        <Typography variant="body2">تعداد کل دانش آموزان: 500</Typography>
                                        <Typography variant="body2">تعداد کلاس‌ها: 25</Typography>
                                        <Typography variant="body2">تعداد اساتید: 15</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            {/* OVERLAY */}
            {isSidebarOpen && (
                <div onClick={toggleSidebar} className="fixed w-full h-full top-0 left-0 bg-black/40 z-20 md:backdrop-blur transition-all"></div>
            )}
        </>
    );
}
