// filepath: c:\mindx\Wcuoikhoa\akademi\src\AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dasboard from './page/Dasboard.jsx';
import Student from './page/Student.jsx';
import Teacher from './page/Teacher.jsx';
import Event from './page/Event.jsx';
import Finance from './page/Finance.jsx';
import Food from './page/Food.jsx';
import Class from './page/Class.jsx';
import Chat from './page/Chat.jsx';
import LastestActive from './page/LastestActive.jsx';
import Interface from './Interface.jsx';
import AddStudent from './page/Add/Student/AddStudent.jsx';
import AddTeacher from './page/Add/teacher/AddTeacher.jsx';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Interface><Dasboard /></Interface>} />
        <Route path="/dashboard" element={<Interface><Dasboard /></Interface>} />
        <Route path="/student" element={<Interface><Student /></Interface>} />
        <Route path="addStudent" element={<Interface><AddStudent /></Interface>} />

        <Route path="/teacher" element={<Interface><Teacher /></Interface>} />
        <Route path="addTeacher" element={<Interface><AddTeacher /></Interface>} />

        <Route path="/event" element={<Interface><Event /></Interface>} />
        <Route path="/finance" element={<Interface><Finance /></Interface>} />
        <Route path="/food" element={<Interface><Food /></Interface>} />
        <Route path="/class" element={<Interface><Class /></Interface>} />
        <Route path="/chat" element={<Interface><Chat /></Interface>} />
        <Route path="/latestActivity" element={<Interface><LastestActive /></Interface>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;