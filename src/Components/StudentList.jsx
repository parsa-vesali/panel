// import React, { useState, useEffect } from 'react';

// // داده‌های نمونه
// const sampleStudents = [
//     { id: 1, name: 'علی رضایی', grade: 'A' },
//     { id: 2, name: 'زهرا حسینی', grade: 'B' },
//     { id: 3, name: 'محمد امیری', grade: 'C' },
//     { id: 4, name: 'فاطمه کریمی', grade: 'B' },
//     { id: 5, name: 'سارا محمدی', grade: 'A' }
// ];

// export default function StudentList() {
//     const [students, setStudents] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         // فرض می‌کنیم داده‌ها از یک API یا فایل JSON دریافت می‌شوند
//         // برای مثال ما از داده‌های نمونه استفاده می‌کنیم
//         setStudents(sampleStudents);
//     }, []);

//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     // فیلتر کردن دانش‌آموزان براساس جستجو
//     const filteredStudents = students.filter(student =>
//         student.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="p-5">
//             <h2 className="text-2xl font-bold mb-4">لیست دانش‌آموزان</h2>

//             <input
//                 type="text"
//                 placeholder="جستجو دانش‌آموز..."
//                 className="border p-2 rounded mb-4 w-full"
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />

//             <table className="min-w-full bg-white rounded shadow">
//                 <thead>
//                     <tr className="bg-gray-200">
//                         <th className="py-2 px-4">نام</th>
//                         <th className="py-2 px-4">نمره</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredStudents.map(student => (
//                         <tr key={student.id} className="border-t">
//                             <td className="py-2 px-4">{student.name}</td>
//                             <td className="py-2 px-4">{student.grade}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

import React, { useState } from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'

export default function StudentList() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className='flex h-screen'>
                <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className='flex-1'>
                    <NavBar toggleSidebar={toggleSidebar} />
                    <div className='px-5 py-5'>
                        
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
