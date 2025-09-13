import React from 'react'
import MyCalendar from '../components/Calendar.jsx'
const Event = () => {
  return (
    <div>
            <div className='w-full'>
                <div className='head flex flex-col w-full items-center justify-between'>
                    <div className='logo font-bold text-3xl m-5'>
                        Event
                    </div>
                    <div>
                      <MyCalendar></MyCalendar>
                    </div>
                </div>
              </div>
    </div>
  )
}

export default Event