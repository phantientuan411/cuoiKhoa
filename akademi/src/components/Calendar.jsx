import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import { useState } from 'react'
import dayjs from 'dayjs'

const localizer = dayjsLocalizer(dayjs)

const MyCalendar = (props) => {
  const [myEventsList, setMyEventsList] = useState([
    // Your event objects go here, e.g.:
    { title: 'Meeting', start: new Date(2025, 8, 15, 10, 0), end: new Date(2025, 8, 15, 11, 0) },
    { title: 'Lunch', start: new Date(2025, 8, 15, 12, 30), end: new Date(2025, 8, 15, 13, 30) },
  ]);
  return (
    <div>
      <Calendar
q        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}
export default MyCalendar;