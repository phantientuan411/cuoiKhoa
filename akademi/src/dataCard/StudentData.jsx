import React, { useState, useEffect } from 'react';
import { get } from '../server/apiClient.js'; // Import hàm 'get' từ file của bạn
import CardStudent from '../card/CardStudent.jsx';

const StudentData = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
    console.log(students);
    
  // Hàm để lấy dữ liệu sinh viên từ API
  const fetchStudents = async () => {
    try {
      // Sử dụng hàm get() từ apiClient của bạn
      const response = await get('/student');
      setStudents(response.data.data);
    } catch (error) {
      console.error('Failed to fetch students:', error);
      setStudents([]); // Đảm bảo trạng thái là mảng rỗng nếu có lỗi
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (students.length === 0) {
    return <div>Không có sinh viên nào.</div>;
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen w-auto">
      <h1 className="text-3xl font-bold mb-6">Danh sách sinh viên</h1>

      {/* Tiêu đề các cột */}
      <div className="flex justify-between font-semibold text-gray-400 mb-4">
        <div className="w-1/4">Tên</div>
        <div className="w-1/12">ID</div>
        <div className="w-1/12">Ngày</div>
        <div className="w-1/6">Tên Phụ huynh</div>
        <div className="w-1/12">Thành phố</div>
        <div className="w-1/12">Liên hệ</div>
        <div className="w-1/12">Lớp</div>
        <div className="w-1/12">Hành động</div>
      </div>

      {/* Lặp qua danh sách sinh viên và hiển thị CardStudent */}
      {students.map((student) => (
        <CardStudent key={student._id} student={student} />
      ))}
    </div>
  );
};

export default StudentData;