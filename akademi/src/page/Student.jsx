
import StudentData from '../dataCard/StudentData.jsx'
import { Link, Outlet } from 'react-router-dom'
const Student = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='head flex w-full items-center justify-between'>
                    <div className='logo font-bold text-3xl m-5'>
                        Student
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
                        <Link to="/addStudent">
                            <button className='addStudent flex items-center justify-center rounded-xl w-auto h-10 border border-black'>
                                + New Student
                            </button>
                        </Link>

                    </div>

                </div>
                <div className='tableStudent w-full flex flex-col'>
                    <StudentData></StudentData>
                </div>

            </div>
        </div>
    )
}

export default Student