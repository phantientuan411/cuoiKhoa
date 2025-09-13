import axios from 'axios';

// Tạo một instance của Axios với cấu hình mặc định
const axiosClient = axios.create({
  baseURL: 'http://localhost:8001/', // Thay đổi thành API của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tạo các phương thức GET, POST, PUT, DELETE
const get = async (url, config = {}) => {
  return await axiosClient.get(url, config);
};

const post = async (url, data, config = {}) => {
  return await axiosClient.post(url, data, config);
};

const put = async (url, data, config = {}) => {
  return await axiosClient.put(url, data, config);
};

const del = async (url, config = {}) => {
  return await axiosClient.delete(url, config);
};

export { get, post, put, del };