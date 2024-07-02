import React, { useState } from 'react'
import SideBar from './SideBar';
import NavBar from './NavBar';
import Alert from '@mui/material/Alert';

export default function Messages() {
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
                        <div className='px-5 py-5 h-screen'>
                        <Alert  variant="filled" severity="info" color='primary'>این صفحه در حال ساخت میباشد</Alert>
                        </div>
                    </div>
                </div>
                {/* OVERLAY */}
                {isSidebarOpen && (
                    <div onClick={toggleSidebar} className="fixed w-full h-full top-0 left-0 bg-black/40 z-20 md:backdrop-blur transition-all"></div>
                )}
            </>
        
    )
}
