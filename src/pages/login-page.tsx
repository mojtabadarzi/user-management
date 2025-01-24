import LoginForm from '../components/login/login-form';

const LoginPage = () => {
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
