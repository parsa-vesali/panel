// Components/ClassList.js
import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import { Classes } from '../Constant';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function classes() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [page, setPage] = useState(1);
    const classesPerPage = 8;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Calculate pagination indexes
    const startIndex = (page - 1) * classesPerPage;
    const endIndex = startIndex + classesPerPage;
    const displayedClasses = Classes.slice(startIndex, endIndex);

    const handleEdit = (classId) => {
        // Handle edit logic here, e.g., open a dialog or navigate to edit page
        console.log(`Editing class with ID: ${classId}`);
    };

    const handleDelete = (classId) => {
        // Handle delete logic here, e.g., show confirmation dialog and delete the class
        console.log(`Deleting class with ID: ${classId}`);
    };

    return (
        <>
            <div className='flex'>
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className='flex-1'>
                    <NavBar toggleSidebar={toggleSidebar} />
                    <div className='p-5'>
                        <TableContainer className='responsive-table-container' component={Paper} sx={{ overflowX: 'auto' }}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#1C2434', color: 'white' }}>
                                        <TableCell sx={{ color: 'white' }}>نام کلاس</TableCell>
                                        <TableCell sx={{ color: 'white' }}>نام معلم</TableCell>
                                        <TableCell sx={{ color: 'white' }}>تعداد دانش‌آموز</TableCell>
                                        <TableCell sx={{ color: 'white' }}>برنامه کلاس</TableCell>
                                        <TableCell sx={{ color: 'white' }}>عملیات</TableCell> {/* Added table cell for actions */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedClasses.map(cls => (
                                        <TableRow key={cls.id}>
                                            <TableCell>{cls.className}</TableCell>
                                            <TableCell>{cls.teacherName}</TableCell>
                                            <TableCell>{cls.studentCount}</TableCell>
                                            <TableCell>{cls.schedule}</TableCell>
                                            <TableCell>
                                                <IconButton
                                                    aria-label="edit"
                                                    size="small"
                                                    onClick={() => handleEdit(cls.id)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="delete"
                                                    size="small"
                                                    onClick={() => handleDelete(cls.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* Pagination */}
                        <Stack dir="ltr" spacing={1} direction="row" justifyContent="center" mt={2}>
                            <Pagination
                                count={Math.ceil(Classes.length / classesPerPage)}
                                page={page}
                                onChange={handleChangePage}
                                color="primary"
                            />
                        </Stack>
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
