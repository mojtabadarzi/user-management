
type ErrorProps = { msg: string | null, onCloseErrorMessage: () => void }
export const ErrorBox = ({ msg, onCloseErrorMessage }: ErrorProps) => {
    if (!msg) return null;

    return <div className="flex items-center justify-between gap-2 bg-red-100 min-w-[320px] 
            fixed bottom-4 left-1/2 transform -translate-x-1/2 text-red-500 p-4 rounded-xl shadow-md z-50">
        {msg}
        <button className="text-red-500" onClick={onCloseErrorMessage}>
            ✕
        </button>
    </div>

}