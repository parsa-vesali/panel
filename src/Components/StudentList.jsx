import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import { Students } from '../Constant';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function StudentList() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [page, setPage] = useState(1);
    const studentsPerPage = 8;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Calculate pagination indexes
    const startIndex = (page - 1) * studentsPerPage;
    const endIndex = startIndex + studentsPerPage;
    const displayedStudents = Students.slice(startIndex, endIndex);

    const handleEdit = (studentId) => {
        // Handle edit logic here, e.g., open a dialog or navigate to edit page
        console.log(`Editing student with ID: ${studentId}`);
    };

    const handleDelete = (studentId) => {
        // Handle delete logic here, e.g., show confirmation dialog and delete the student
        console.log(`Deleting student with ID: ${studentId}`);
    };

    return (
        <>
            <div className='flex'>
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className='flex-1'>
                    <NavBar toggleSidebar={toggleSidebar} />
                    <div className='p-5'>
                        <TableContainer className='responsive-table-container' component={Paper} sx={{ overflowX: 'auto' }}> 
                            <Table >
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#1C2434', color: 'white' }}>
                                        <TableCell sx={{ color: 'white' }}>نام</TableCell>
                                        <TableCell sx={{ color: 'white' }}>نام خانوادگی</TableCell>
                                        <TableCell sx={{ color: 'white' }}>کد ملی</TableCell>
                                        <TableCell sx={{ color: 'white' }}>رشته</TableCell>
                                        <TableCell sx={{ color: 'white' }}>پایه</TableCell>
                                        <TableCell sx={{ color: 'white' }}>معدل</TableCell>
                                        <TableCell sx={{ color: 'white' }}>عملیات</TableCell> {/* Added table cell for actions */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedStudents.map(student => (
                                        <TableRow key={student.id}>
                                            <TableCell>{student.name}</TableCell>
                                            <TableCell>{student.lastName}</TableCell>
                                            <TableCell>{student.nationalCode}</TableCell>
                                            <TableCell>{student.major}</TableCell>
                                            <TableCell>{student.grade}</TableCell>
                                            <TableCell>{student.gpa}</TableCell>
                                            <TableCell>
                                                <IconButton
                                                    aria-label="edit"
                                                    size="small"
                                                    onClick={() => handleEdit(student.id)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="delete"
                                                    size="small"
                                                    onClick={() => handleDelete(student.id)}
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
                                count={Math.ceil(Students.length / studentsPerPage)}
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
