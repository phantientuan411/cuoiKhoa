import React from 'react'
import { Outlet } from 'react-router-dom'
import StudentDetail from './StudentDetail'

const AddStudent = () => {
  return (
    <div className='add-student w-full h-full flex flex-col'>
      <div>
        <div className='logo font-bold text-xl m-5'><h1>ADD NEW STUDENT</h1></div>
        <div></div>
      </div>
      <div className='w-full h-auto flex flex-col'>
        <div >
          <StudentDetail></StudentDetail>
        </div>

      </div>
      <div></div>
    </div>
  )
}

export default AddStudent