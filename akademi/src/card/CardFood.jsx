import React from 'react'
import { get, post } from '../server/apiClient.js';

// Hàm để lấy tất cả sinh viên
const getAllStudents = async () => {
  try {
    const response = await get('/student'); // URL chỉ cần phần đuôi
    return response.data;
  } catch (error) {
    console.error('Failed to fetch student:', error);
    throw error;
  }
};

// Hàm để thêm một sinh viên mới
const createNewStudent = async (studentData) => {
    try {
        const response = await post('/student', studentData);
        return response.data;
    } catch (error) {
        console.error('Failed to create student:', error);
        throw error;
    }
};

// Sử dụng các hàm
const fetchAndDisplayStudents = async () => {
    const students = await getAllStudents();
    console.log(students);
};

fetchAndDisplayStudents();
const CardFood = () => {
  return (
    <div>
      
    </div>
  )
}

export default CardFood