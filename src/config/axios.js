import {notification} from 'antd';
import axios from 'axios';
import dotenv from 'dotenv';
import LocalStorageServices from '../services/LocalStorageServices';

dotenv.config();

const PORT = process.env.PORT || 5000;

axios.defaults.baseURL = `http://localhost:${PORT}`;

axios.interceptors.request.use(
  config => {
    if (config.url.includes('/signin') || config.url.includes('/register'))
      return config;

    const token = LocalStorageServices.getToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err.response?.status === 401) {
      LocalStorageServices.removeToken();
      window.location.reload();
      notification.error({
        message: 'Please signin again',
      });
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

export default axios;
