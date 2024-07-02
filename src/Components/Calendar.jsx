// ./Pages/Calendar.js
import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Alert from '@mui/material/Alert';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment-jalaali';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// تنظیم Localizer برای استفاده از Moment-Jalaali
moment.loadPersian({ dialect: 'persian-modern' });
const localizer = momentLocalizer(moment);

// رویدادهای نمونه
const events = [
    {
        id: 0,
        title: 'جلسه شورای آموزش',
        start: new Date(2024, 6, 10, 10, 0),
        end: new Date(2024, 6, 10, 12, 0),
        resource: 'اتاق جلسات',
    },
    {
        id: 1,
        title: 'تعطیلی مدرسه',
        start: new Date(2024, 6, 14),
        end: new Date(2024, 6, 14),
    },
    // رویدادهای بیشتر...
];

export default function Calendar() {
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
                        {/* تقویم */}
                        <BigCalendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: '80vh', margin: '20px 0', backgroundColor: '#f3f4f6', borderRadius: '10px' }}
                            eventPropGetter={(event) => ({
                                style: {
                                    backgroundColor: '#38bdf8', // رنگ آبی برای تم رویدادها
                                    color: 'white',
                                    borderRadius: '5px',
                                    padding: '5px',
                                },
                            })}
                            messages={{
                                next: "بعد",
                                previous: "قبل",
                                today: "امروز",
                                month: "ماه",
                                week: "هفته",
                                day: "روز",
                                agenda: "برنامه",
                                date: "تاریخ",
                                time: "زمان",
                                event: "رویداد",
                                noEventsInRange: "هیچ رویدادی در این بازه زمانی وجود ندارد",
                                showMore: (total) => `+ ${total} بیشتر`
                            }}
                        />
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
