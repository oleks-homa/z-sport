import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const signIn = (formData) => API.post('/api/user/signin', formData);
export const signUp = (formData) => API.post('/api/user/signup', formData);