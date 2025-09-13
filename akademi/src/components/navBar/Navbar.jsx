
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Listbtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFlow, setIsFlow] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handleMouseEnter = () => {
        setIsOpen(true);
        setIsFlow(true);


    };
    const handleMouseLeave = () => {
        setIsOpen(false);
        setIsFlow(false);
    };
    const closeSidebar = () => {
        setIsOpen(false);
        setIsFlow(false);
    };

    const desktopSidebarClasses = `w-64 bg-gray-900 text-white transition-all duration-300 
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    ${isFlow ? 'overflow-y-scroll' : 'overflow-hidden'}`;
    const mobileSidebarClasses = `fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-all duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`;
    const navigationItems = [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/profile', label: 'Profile' },
        { path: '/student', label: 'Student' },
        { path: '/teacher', label: 'Teacher' },
        { path: '/event', label: 'Event' },
        { path: '/finance', label: 'Finance' },
        { path: '/food', label: 'Food' },
        { path: '/class', label: 'Class' },
        { path: '/chat', label: 'Chat' },
        { path: '/activity', label: 'Latest Activity' },
        { path: '/report', label: 'Report' },
    ];
    return (
        <div className="relative h-screen">
            {/* Vùng kích hoạt hiện navbar */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="fixed top-0 left-0 h-full w-1 z-40 "
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
                            <nav className="flex-1 px-4 py-6 space-y-2">
                                {navigationItems.map((item, index) => (
                                    <Link to={item.path} key={index} className="flex items-center w-full}">
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setIsOpen(false)
                                                if (isMobile) closeSidebar();
                                            }}
                                            className="btn-left-col flex items-center w-full px-4 py-3 text-left text-white rounded-lg hover:bg-blue-700 hover:bg-opacity-50 transition-all duration-200 group"
                                        >

                                            <span className="font-medium">{item.label}</span>
                                        </button></Link>
                                ))}
                            </nav>
                            <div className='credit ml-2'>
                                <b className='text-xs'>Akademi - School Admission Dashboard</b>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Overlay chỉ dành cho mobile */}
            {isMobile && isOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
                ></div>
            )}
        </div>
    );
};

export default Listbtn;