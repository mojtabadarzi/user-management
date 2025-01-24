import { MessageProps } from "../../types/global";

export const MessageBox = ({ msg, onClose, status = "error" }: MessageProps) => {
    if (!msg) return null;

    return <div className={`flex items-center justify-between gap-2 min-w-[320px] fixed bottom-4 left-1/2
            transform -translate-x-1/2 p-4 rounded-xl shadow-md z-50 bg-gray-100 text-gray-500
            ${status === "error" && "bg-red-100 text-red-500"}
            ${status === "success" && "bg-green-100 text-green-500"}
            `}>
        {msg}
        <button className={`text-gray-500
        ${status === "error" && "text-red-500"}
        ${status === "success" && "text-green-500"}
        `}
            onClick={onClose}>
            ✕
        </button>
    </div>

}