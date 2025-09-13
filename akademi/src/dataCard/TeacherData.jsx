import React, { useState, useEffect } from 'react';
import CardTeacher from '../card/CardTeacher.jsx'
import { get } from '../server/apiClient';

const TeacherData = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await get('/teacher'); // URL đến endpoint API của giáo viên
        setTeachers(response.data.data);
      } catch (err) {
        console.error('Failed to fetch teachers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  if (loading) {
    return <div>Đang tải danh sách giáo viên...</div>;
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Danh sách giáo viên</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {teachers.map((teacher) => (
          <CardTeacher key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default TeacherData;