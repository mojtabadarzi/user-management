import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const Layout = ({ children, title, back, titleButton }: { children: ReactNode, title: string, back?: ReactNode, titleButton?: ReactNode }) => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null);
        navigate('/');
    };

    return (
        <section className="p-4 max-w-[1024px] mx-auto">
            <article className="flex justify-between w-full items-center">
                {back}
                <section className="flex gap-4 items-center">
                    <h1 className="text-xl sm:text-2xl">{title}</h1>
                    {titleButton}
                </section>
                <button
                    onClick={handleLogout}
                    className="bg-gray-900 text-white px-6 py-2 rounded-xl hover:opacity-60 transition"
                >
                    Logout
                </button>
            </article>
            {children}
        </section>
    );
};

export default Layout;
