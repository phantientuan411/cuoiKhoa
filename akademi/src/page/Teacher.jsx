import React from 'react'
import TeacherData  from '../dataCard/TeacherData'
const Teacher = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='head flex w-full items-center justify-between'>
                    <div className='logo font-bold text-3xl m-5'>
                        Teacher
                    </div>
                    <div>

                    </div>
                </div>
                <div className=' flex w-full items-center justify-around'>
                    <div>
                        <div className='searh-das flex gap-2 h-8 rounded-2xl m-5 border-1 items-center'>
                            <input
                                type="text"
                                placeholder='search here'
                                className='input-dasboard text-center p-1'
                            />
                        </div>
                    </div>
                    <div>
                        <button className='addStudent flex items-center justify-center rounded-xl w-auto h-10 border border-black'>
                            + New Teacher
                        </button>
                    </div>

                </div>
                <div className='tableStudent flex flex-col'>
                    <TeacherData></TeacherData>
                </div>

            </div>
        </div>
    )
}

export default Teacher;