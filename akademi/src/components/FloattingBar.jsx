import React, { useState, useEffect } from 'react';

const FloatingBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Kiểm tra nếu người dùng cuộn xuống hơn 100px
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Thêm listener cho sự kiện cuộn
        window.addEventListener('scroll', handleScroll);

        // Cleanup: Xóa listener khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`
                float
                fixed top-0 left-0 w-full text-white p-4 text-center z-50
                transition-transform duration-300
                ${isScrolled ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className='logo'>
                 <div className='flex w-12 h-12 bg-orange-500 justify-center items-center text-white text-xl rounded-xl font-bold'>
                                    <b>A</b>
                                </div>
            </div>
        </div>
    );
};

export default FloatingBar;