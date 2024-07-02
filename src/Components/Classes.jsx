// ./Pages/Classes.js
import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// داده‌های نمونه کلاس‌ها
const classesData = [
    { id: 1, name: 'ریاضیات', teacher: 'استاد احمدی', time: '08:00 - 10:00', location: 'کلاس 101' },
    { id: 2, name: 'فیزیک', teacher: 'استاد نادری', time: '10:30 - 12:30', location: 'کلاس 102' },
    { id: 3, name: 'شیمی', teacher: 'استاد حسینی', time: '13:00 - 15:00', location: 'کلاس 103' },
    { id: 4, name: 'زبان انگلیسی', teacher: 'استاد کریمی', time: '15:30 - 17:30', location: 'کلاس 104' },
    // داده‌های بیشتر...
];

export default function Classes() {
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
                        {/* جدول کلاس‌ها */}
                        <TableContainer component={Paper} className='mt-5'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>نام کلاس</TableCell>
                                        <TableCell align="right">استاد</TableCell>
                                        <TableCell align="right">زمان</TableCell>
                                        <TableCell align="right">محل</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {classesData.map((cls) => (
                                        <TableRow key={cls.id}>
                                            <TableCell component="th" scope="row">
                                                {cls.name}
                                            </TableCell>
                                            <TableCell align="right">{cls.teacher}</TableCell>
                                            <TableCell align="right">{cls.time}</TableCell>
                                            <TableCell align="right">{cls.location}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
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
