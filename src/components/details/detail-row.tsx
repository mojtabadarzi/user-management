import { DetailsRowProps } from "../../types/global";
import { truncate } from "../../utils/truncate";
import { NotAssign } from "../common/not-assign";

export const DetailsRow = ({ label, value, loading, border = true }: DetailsRowProps) => (
    <div className={`${border && "border-b"} flex justify-between items-center gap-2 py-4`}>
        <span className="text-sm sm:text-base text-gray-500 block">{label}</span>
        {loading ? (
            <div className="animate-pulse bg-gray-200 h-4 w-24 rounded-lg" />
        ) : (
            value ? value?.includes("https://")
                ? <a href={value} className='text-blue-500 hover:underline transition'>Support Link</a>
                : <p className="text-base sm:text-lg font-bold text-gray-800">{truncate(value, 32)}</p>
                : <NotAssign />
        )}
    </div>
)
