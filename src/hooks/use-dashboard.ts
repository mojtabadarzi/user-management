import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useDashboardApi } from "./use-dashboard-api";
import { useCallback, useEffect, useState } from "react";
import { FormType, StatusType, User } from "../types/global";

const useDashboard = () => {
    const { token } = useAuth();
    const { fetchUsersApi, addUserApi, updateUserApi, deleteUserApi } = useDashboardApi()
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [users, setUsers] = useState<User[]>([]);
    const [msg, setMsg] = useState("")
    const [messageStatus, setMessageStatus] = useState<StatusType>(null)
    const [loading, setLoading] = useState(true)
    const [form, setForm] = useState<FormType>({ first_name: '', last_name: '', email: '' });
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchUsers = useCallback((currentPage: number) => {
        setLoading(true)
        fetchUsersApi(currentPage).then((res) => {
            setUsers(res.data.data);
            setTotalPages(res.data.total_pages);
        }).catch((err) => {
            const message = err?.message || "Error Loading Data, Try Again Later"
            setMsg(message)
            setMessageStatus("error")
        }).finally(() => setLoading(false))
    }, [fetchUsersApi]);

    useEffect(() => {
        if (!token) {
            navigate('/');
            return;
        }
        const currentPage = Number(searchParams.get('page')) || 1;
        setPage(currentPage);
        fetchUsers(currentPage);
    }, [token, navigate, searchParams]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        setSearchParams({ page: newPage.toString() });
    };

    // TODO: should merge some codes
    const handleAddUser = useCallback(() => {
        setLoading(true)
        clearStatus()
        addUserApi(form).then(() => {
            setIsModalOpen(false)
            setForm({ first_name: '', last_name: '', email: '' });
            setMsg("User Successfully Added")
            setMessageStatus("success")
            fetchUsers(page)
        }).catch((err) => {
            const message = err?.message || "Error Loading Data, Try Again Later"
            setMsg(message)
            setMessageStatus("error")
        }).finally(() => setLoading(false))
    }, [addUserApi, fetchUsers, page, form]);

    const handleEditUser = useCallback(() => {
        if (editingUserId === null) return;

        setLoading(true)
        clearStatus()
        updateUserApi(editingUserId, form).then(() => {
            setEditingUserId(null);
            setForm({ first_name: '', last_name: '', email: '' });
            setIsModalOpen(false);
            setMsg("User Successfully Edited")
            setMessageStatus("success")
        }).catch((err) => {
            const message = err?.message || "Error Loading Data, Try Again Later"
            setMsg(message)
            setMessageStatus("error")
        }).finally(() => setLoading(false))
    }, [editingUserId, updateUserApi, form]);

    const handleDeleteUser = useCallback((id: number) => {
        setLoading(true)
        clearStatus()
        deleteUserApi(id).then(() => {
            setMsg("User Successfully Deleted")
            setMessageStatus("success")
            fetchUsers(page)
        }).catch((err) => {
            const message = err?.message || "Error Loading Data, Try Again Later"
            setMsg(message)
            setMessageStatus("error")
        }).finally(() => setLoading(false))
    }, [deleteUserApi, fetchUsers, page]);

    const showDetails = useCallback((id: number) => {
        navigate(`/user/${id.toString()}`)
    }, [navigate])

    const clearStatus = () => {
        setMsg("")
        setMessageStatus(null)
    }

    const onEditHandle = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number, first_name: string, last_name: string, email: string) => {
        e.stopPropagation()
        setEditingUserId(id);
        setForm({
            first_name,
            last_name,
            email,
        });
        setIsModalOpen(true);
        clearStatus()
    }, [])

    const onDeleteHandle = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.stopPropagation()
        handleDeleteUser(id)
    }, [handleDeleteUser])

    const onDetailsHandle = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.stopPropagation()
        showDetails(id)
    }, [showDetails])

    const onAddUserHandler = useCallback(() => {
        setEditingUserId(null);
        setForm({ first_name: '', last_name: '', email: '' });
        setIsModalOpen(true);
        clearStatus()
    }, [])

    return {
        page,
        totalPages,
        isModalOpen,
        editingUserId,
        form,
        messageStatus,
        msg,
        loading,
        users,
        onAddUserHandler,
        setForm,
        setIsModalOpen,
        clearStatus,
        showDetails,
        handleEditUser,
        handlePageChange,
        handleAddUser,
        onEditHandle,
        onDeleteHandle,
        onDetailsHandle,
    }// TODO: should shrink
}

export { useDashboard }