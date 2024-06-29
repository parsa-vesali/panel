import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoBoxes from '../Components/InfoBoxes';


export default function Dashboard() {
    useEffect(() => {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            toast.success('با موفقیت وارد شدید', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
            sessionStorage.removeItem('isLoggedIn');
        }
    }, []);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='flex h-screen'>
                <ToastContainer />
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className='flex-1'>
                    <NavBar toggleSidebar={toggleSidebar} />
                    <div className='px-5 py-10'>
                        <InfoBoxes />
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
