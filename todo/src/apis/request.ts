// apis/request.ts
import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {Platform} from 'react-native';
import {getToken} from '../utils/tokenHandler';

const getBaseUrl = () => {
  if (__DEV__) {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:3000/api';
    }
    return 'http://localhost:3000/api';
  }
  return 'your_production_api_url';
};

// Define public routes that don't need authentication
const publicRoutes = ['/signup', '/login', '/forgot-password'];

// Create a single instance
const ApiInstance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
ApiInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Check if the route requires authentication
    const isPublicRoute = publicRoutes.some(route =>
      config.url?.includes(route),
    );

    // Only add token for protected routes
    if (!isPublicRoute) {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    console.log('Request Error:', error);
    return Promise.reject(error);
  },
);

// Add response interceptor
ApiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    console.log('Response Error:', error);
    return Promise.reject(error);
  },
);

export default ApiInstance;
