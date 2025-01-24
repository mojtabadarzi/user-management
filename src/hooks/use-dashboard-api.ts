import axios from 'axios';
import { useAuth } from '../contexts/auth-context';

export const useDashboardApi = () => {
    const { token } = useAuth();

    const api = axios.create({
        baseURL: 'https://reqres.in/api', // TODO: move to .env
        headers: { Authorization: `Bearer ${token}` },
    });

    const fetchUsersApi = (page: number) => api.get(`/users?page=${page}`);
    const fetchUserDetailApi = (id: number) => api.get(`/users/${id}`);
    const addUserApi = (userData: any) => api.post('/users', userData);
    const updateUserApi = (id: number, userData: any) => api.put(`/users/${id}`, userData);
    const deleteUserApi = (id: number) => api.delete(`/users/${id}`);

    return { fetchUsersApi, fetchUserDetailApi, addUserApi, updateUserApi, deleteUserApi };
};
