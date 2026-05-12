import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL || '/api' });

API.interceptors.request.use(config => {
  const token = localStorage.getItem('adminToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const submitAdmission = (data) => API.post('/admissions', data);
export const submitContact = (data) => API.post('/contact', data);
export const getNews = (params) => API.get('/news', { params });
export const getNewsArticle = (slug) => API.get(`/news/${slug}`);
export const getFaculty = () => API.get('/faculty');
export const getTestimonials = () => API.get('/testimonials');

export const adminLogin = (data) => API.post('/auth/login', data);
export const getAdminStats = () => API.get('/admin/stats');
export const getAdmissions = () => API.get('/admin/admissions');
export const getContacts = () => API.get('/admin/contacts');
export const updateAdmissionStatus = (id, status) => API.patch(`/admin/admissions/${id}/status`, { status });

export default API;
