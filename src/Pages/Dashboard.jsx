import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex h-screen'>
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='flex-1'>
                <NavBar toggleSidebar={toggleSidebar} />
                <div className='p-4'>Main Content</div>
            </div>
        </div>
    );
}
