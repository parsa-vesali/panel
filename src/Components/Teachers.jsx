// ./Pages/Teachers.js
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

// فرض داده‌های نمونه
const teachersData = [
    { id: 1, name: 'استاد احمدی', subject: 'ریاضیات', email: 'ahmadi@example.com' },
    { id: 2, name: 'استاد نادری', subject: 'فیزیک', email: 'naderi@example.com' },
    { id: 3, name: 'استاد حسینی', subject: 'شیمی', email: 'hoseini@example.com' },
    { id: 4, name: 'استاد کریمی', subject: 'زبان انگلیسی', email: 'karimi@example.com' },
    // داده‌های بیشتر...
];

export default function Teachers() {
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
                        {/* جدول اساتید */}
                        <TableContainer component={Paper} className='mt-5 responsive-table-container '>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>نام</TableCell>
                                        <TableCell align="right">موضوع</TableCell>
                                        <TableCell align="right">ایمیل</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {teachersData.map((teacher) => (
                                        <TableRow key={teacher.id}>
                                            <TableCell component="th" scope="row">
                                                {teacher.name}
                                            </TableCell>
                                            <TableCell align="right">{teacher.subject}</TableCell>
                                            <TableCell align="right">{teacher.email}</TableCell>
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
