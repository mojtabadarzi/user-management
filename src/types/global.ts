// TODO: separate type

import { Dispatch, ReactNode, SetStateAction } from "react";

export type UserListType = { label: string; value: string; border?: boolean }

export type UserResponseType = {
    data: {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        avatar: string
    };
    support: {
        url: string,
        text: string
    }
}

export type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

export type FormType = {
    first_name: string;
    last_name: string;
    email: string;
}

export type LoginResponse = {
    token: string;
}

export type StatusType = "error" | "success" | null

export type DetailsRowProps = {
    label: string;
    value?: string;
    loading: boolean;
    border?: boolean;
}

export type ModalFormType = {
    editingUserId: number | null,
    handleEditUser: () => void,
    handleAddUser: () => void, form: {
        first_name: string;
        last_name: string;
        email: string;
    }, setForm: Dispatch<SetStateAction<{
        first_name: string;
        last_name: string;
        email: string;
    }>>, loading: boolean
}

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export type AuthContextProps = {
    token: string | null;
    setToken: (token: string | null) => void;
}

export type ActionButtonType = {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    classname: string
}

export type NoResultProps = {
    message?: string;
    subtext?: string;
}

export type AddUserButtonType = {
    title: string;
    onClick: () => void,
}

export type PaginationType = {
    page: number;
    totalPages: number;
    handlePageChange: (page: number) => void
}

export type MessageProps = {
    msg: string | null,
    onClose: () => void,
    status: StatusType
}


