import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login/login-form';
import { useAuth } from "../contexts/auth-context";

const LoginPage = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (token) {
            navigate('/dashboard');
        }
    }, [token, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-md rounded-xl w-full sm:w-96 mx-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
