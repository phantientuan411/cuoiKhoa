//admin
import React, { useState, useEffect } from 'react';
import Dasboard from '../../page/Dasboard';
const ListbtnTeacher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Thay đổi logic, không dùng toggle nữa
    const openSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const desktopSidebarClasses = `w-64 bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`;
    const mobileSidebarClasses = `fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-all duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`;

    return (
        <div className="flex h-screen">
            {/* Vùng kích hoạt hiện navbar */}
            <div
                onMouseEnter={openSidebar}
                onMouseLeave={closeSidebar}
                className="fixed top-0 left-0 h-full w-40 z-index" // Đặt vùng kích hoạt rộng khoảng 64px
            >
                <div className={isMobile ? mobileSidebarClasses : desktopSidebarClasses}>
                    <nav className="nav-bg flex h-full">
                        <div className='navBar bg-blue-700 flex w-full flex-col h-full'>
                            <div className='banner flex w-full mt-7 ml-7 gap-3 gap-3'>
                                <div className='flex w-12 h-12 bg-orange-500 justify-center items-center text-xl rounded-xl font-bold'>
                                    <b>A</b>
                                </div>
                                <div className='flex w-auto h-auto justify-center items-center text-xl rounded font-bold'>
                                    Akademi
                                </div>
                            </div>
                            <div className='flex flex-col gap-7 mt-6 mb-6'>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>Dasboard</button>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>Student</button>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>Teacher</button>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>Event</button>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>Finance</button>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>Food</button>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>User</button>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>Chat</button>
                                <button className='btn-left-col w-8/10 h-9 ml-auto'>Latest Activity</button>
                                
                            </div>
                            <div className='credit ml-2'>
                                <b className='text-xs'>Akademi - School Admission Dashboard</b>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <main
                className={`flex-grow p-6 transition-all duration-300 ${isOpen && !isMobile ? 'ml-64' : 'ml-0'
                    }`}
            >
                <Dasboard></Dasboard>
            </main>

            {/* Overlay chỉ dành cho mobile */}
            {isMobile && !isOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
                ></div>
            )}
        </div>
    );
};

export default ListbtnTeacher;