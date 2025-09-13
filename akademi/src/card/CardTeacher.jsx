import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const CardTeacher = ({ teacher }) => {
  return (
    <div className="bg-white p-6 my-4 mx-2 rounded-2xl shadow-md flex flex-col items-center text-center">
      <div className="bg-purple-200 w-24 h-24 rounded-full mb-4"></div>
      <div className="font-bold text-lg text-gray-800">{teacher.FullName}</div>
      <div className="text-gray-500 text-sm mb-4">{teacher.Subject}</div>
      
      <div className="flex items-center space-x-4">
        <div className="bg-purple-100 p-2 rounded-full cursor-pointer hover:bg-purple-200">
          <FaPhoneAlt className="text-purple-600" />
        </div>
        <div className="bg-purple-100 p-2 rounded-full cursor-pointer hover:bg-purple-200">
          <FaEnvelope className="text-purple-600" />
        </div>
      </div>
    </div>
  );
};

export default CardTeacher;