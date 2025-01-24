import { MessageBox } from '../common/message-box';
import Loading from '../dashboard/loading';
import { useLogin } from '../../hooks/use-login';
import InputBox from '../common/input-box';

const LoginForm = () => {
    const { handleSubmit, email, password, setEmail, setPassword, loading, msg, messageStatus, clearStatus } = useLogin()

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col gap-4">
                    <InputBox
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputBox
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 w-full text-white px-6 py-3 rounded mt-8 text-sm 
                        rounded-xl hover:opacity-70 transition"
                >
                    {loading ? <Loading /> : "Login"}
                </button>
            </form>
            {msg && messageStatus && <MessageBox msg={msg} onClose={clearStatus} status={messageStatus} />}
        </>
    );
};

export default LoginForm;
