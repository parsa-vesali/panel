import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import { Teachers } from '../Constant'; // Ensure you have a Teachers array in your constants file
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TeacherList() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [page, setPage] = useState(1);
    const teachersPerPage = 8;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Calculate pagination indexes
    const startIndex = (page - 1) * teachersPerPage;
    const endIndex = startIndex + teachersPerPage;
    const displayedTeachers = Teachers.slice(startIndex, endIndex);

    const handleEdit = (teacherId) => {
        // Handle edit logic here, e.g., open a dialog or navigate to edit page
        console.log(`Editing teacher with ID: ${teacherId}`);
    };

    const handleDelete = (teacherId) => {
        // Handle delete logic here, e.g., show confirmation dialog and delete the teacher
        console.log(`Deleting teacher with ID: ${teacherId}`);
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
                                    <TableRow sx={{ backgroundColor: '#22c55e', color: 'white' }}>
                                        <TableCell sx={{ color: 'white' }}>نام</TableCell>
                                        <TableCell sx={{ color: 'white' }}>نام خانوادگی</TableCell>
                                        <TableCell sx={{ color: 'white' }}>کد ملی</TableCell>
                                        <TableCell sx={{ color: 'white' }}>رشته تخصصی</TableCell>
                                        <TableCell sx={{ color: 'white' }}>سال تدریس</TableCell>
                                        <TableCell sx={{ color: 'white' }}>عملیات</TableCell> {/* Added table cell for actions */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedTeachers.map(teacher => (
                                        <TableRow key={teacher.id}>
                                            <TableCell>{teacher.name}</TableCell>
                                            <TableCell>{teacher.lastName}</TableCell>
                                            <TableCell>{teacher.nationalCode}</TableCell>
                                            <TableCell>{teacher.specialization}</TableCell>
                                            <TableCell>{teacher.yearsOfExperience}</TableCell>
                                            <TableCell>
                                                <IconButton
                                                    aria-label="edit"
                                                    size="small"
                                                    onClick={() => handleEdit(teacher.id)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="delete"
                                                    size="small"
                                                    onClick={() => handleDelete(teacher.id)}
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
                                count={Math.ceil(Teachers.length / teachersPerPage)}
                                page={page}
                                onChange={handleChangePage}
                                color="secondary"
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
