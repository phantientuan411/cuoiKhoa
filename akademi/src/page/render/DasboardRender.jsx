import React, { useState, useEffect } from 'react'
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { get } from '../../server/apiClient';

const DasboardRender = () => {
    const [data, setData] = useState({
        students: [],
        teachers: [],
        events: [],
        food: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [studentsRes, teachersRes, eventsRes, foodRes] = await Promise.all([
                    get('/student'),
                    get('/teacher'),
                    get('/teacher'),
                    get('/teacher')
                ]);
                setData({
                    students: studentsRes.data.data,
                    teachers: teachersRes.data.data,
                    events: eventsRes.data.data,
                    food: foodRes.data.data
                });
            } catch (error) {
                console.error('Failed to fetch data: ', error);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div>Đã xảy ra lỗi: {error}</div>;
    }

    return (
        <div className='w-8/10 flex justify-around m-auto'>
            <div className='render-dasboard flex w-auto h-auto bg-white-900 gap-4 p-4 rounded-lg shadow-md'>
                <div className='w-auto h-auto rounded-full bg-blue-500 p-4'>
                    <PiStudentBold className='text-6xl text-white' />
                </div>
                <div className='flex flex-col w-auto'>
                    <div>Students</div>
                    <div className='text-2xl font-bold'>
                        {data.students.length}
                    </div>
                </div>
            </div>
            <div className='render-dasboard flex w-auto h-auto bg-white-900 gap-4 p-4 rounded-lg shadow-md'>
                <div className='w-auto h-auto rounded-full bg-green-500 p-4'>
                    <FaChalkboardTeacher className='text-6xl text-white' />
                </div>
                <div className='flex flex-col w-auto'>
                    <div>Teachers</div>
                    <div className='text-2xl font-bold'>
                        {data.teachers.length}
                    </div>
                </div>
            </div>
            <div className='render-dasboard flex w-auto h-auto bg-white-900 gap-4 p-4 rounded-lg shadow-md'>
                <div className='w-auto h-auto rounded-full bg-yellow-500 p-4'>
                    <BsCalendarEvent className='text-6xl text-white' />
                </div>
                <div className='flex flex-col w-auto'>
                    <div>Events</div>
                    <div className='text-2xl font-bold'>
                        {data.events.length}
                    </div>
                </div>
            </div>
            <div className='render-dasboard flex w-auto h-auto bg-white-900 gap-4 p-4 rounded-lg shadow-md'>
                <div className='w-auto h-auto rounded-full bg-red-500 p-4'>
                    <IoFastFoodOutline className='text-6xl text-white' />
                </div>
                <div className='flex flex-col w-auto'>
                    <div>Food</div>
                    <div className='text-2xl font-bold'>
                        {data.food.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DasboardRender

            