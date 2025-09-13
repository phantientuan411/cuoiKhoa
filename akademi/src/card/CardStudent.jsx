import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const CardStudent = ({ student }) => {
  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="bg-white p-4 my-2 rounded-2xl shadow-sm flex items-center justify-between border border-gray-200">
      
      {/* Cột 1: Tên và Avatar */}
      <div className="flex items-center space-x-4 w-1/4">
        <div className="bg-gray-300 w-12 h-12 rounded-full"></div>
        <div className="flex flex-col">
          <span className="font-bold text-lg text-gray-800">{student.FullName}</span>
        </div>
      </div>
      
      {/* Các cột dữ liệu khác */}
      <div className="text-gray-600 w-1/12">{student.IdStudent}</div>
      <div className="text-gray-500 text-sm w-1/12">{formatDate(student.DayOfBird)}</div>
      <div className="text-gray-600 w-1/6">{student.Mom} & {student.Dad}</div>
      <div className="text-gray-600 w-1/12">{student.Adress}</div>
      
      {/* Cột 6: Liên hệ (Icons) */}
      <div className="flex items-center space-x-2 w-1/12">
        <div className="bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200">
          <FaPhoneAlt className="text-gray-500" />
        </div>
        <div className="bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200">
          <FaEnvelope className="text-gray-500" />
        </div>
      </div>
      
      {/* Cột 7: ClassId (Grade) */}
      <div className="w-1/12">
        <span className="bg-orange-500 text-white font-semibold py-1 px-4 rounded-full">{student.ClassId}</span>
      </div>
      
      {/* Cột 8: Action (More options) */}
      <div className="text-gray-400 cursor-pointer w-1/12">
        <span className="text-2xl">...</span>
      </div>
    </div>
  );
};

export default CardStudent;