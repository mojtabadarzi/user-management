import { AxiosResponse } from 'axios';
import { useDetailsApi } from './use-details-api';
import { StatusType, UserListType, UserResponseType } from '../types/global';
import { useEffect, useState } from 'react';

const defaultUser = [{ label: "First Name", value: "" },
{ label: "Last Name", value: "" },
{ label: "Email", value: "" },
{ label: "Description", value: "" },
{ label: "Url", value: "", border: false },
] // TODO: export from contants

export const useDetails = (userId: number) => {
    const { fetchUserDetailApi } = useDetailsApi()
    const [user, setUser] = useState<Array<UserListType>>(defaultUser);
    const [avatar, setAvatar] = useState<string>("");
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState("")
    const [messageStatus, setMessageStatus] = useState<StatusType>(null)

    useEffect(() => {
        const loadUser = () => {
            setLoading(true)
            clearStatus()
            fetchUserDetailApi(userId).then((res: AxiosResponse<UserResponseType>) => {
                setUser([
                    { label: "First Name", value: res?.data?.data?.first_name },
                    { label: "Last Name", value: res?.data?.data?.last_name },
                    { label: "Email", value: res?.data?.data?.email },
                    { label: "Description", value: res?.data?.support.text },
                    { label: "Url", value: res?.data?.support.url, border: false }
                ]); // TODO: find better solution
                setAvatar(res?.data?.data?.avatar)
            }).catch((err) => {
                const message = err?.message || "Error loading data, tye again later"
                setMsg(message)
                setMessageStatus("error")
            }).finally(() => setLoading(false))
        };
        loadUser();
    }, [userId]);

    const clearStatus = () => {
        setMsg("")
        setMessageStatus(null)
    }

    return { fetchUserDetailApi, loading, user, avatar, clearStatus, msg, messageStatus };
};
