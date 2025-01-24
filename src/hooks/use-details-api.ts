import axios from 'axios';
import { useAuth } from '../contexts/auth-context';

export const useDetailsApi = () => {
    const { token } = useAuth();

    const api = axios.create({
        baseURL: 'https://reqres.in/api', // TODO: move to .env
        headers: { Authorization: `Bearer ${token}` },
    });

    const fetchUserDetailApi = (id: number) => api.get(`/users/${id}`);

    return { fetchUserDetailApi };
};
