import { FormEvent, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { LoginResponse, StatusType } from "../types/global";
import { AxiosResponse } from "axios";
import { login } from "../services/login";

export const useLogin = () => {
    const { setToken } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("")
    const [messageStatus, setMessageStatus] = useState<StatusType>(null)

    const handleSubmit = async (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();
        login(email, password).then((res: AxiosResponse<LoginResponse>) => {
            setToken(res?.data?.token);
        }).catch((err) => {
            const message = err?.message
            setMsg(message)
            setMessageStatus("error")
        }).finally(() => setLoading(false))
    };

    const clearStatus = () => {
        setMsg("")
        setMessageStatus(null)
    }

    return { handleSubmit, email, password, setEmail, setPassword, loading, msg, messageStatus, clearStatus }
}