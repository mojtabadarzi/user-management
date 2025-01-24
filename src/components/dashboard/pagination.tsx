import { PaginationType } from "../../types/global"

export const Pagination = ({ page, handlePageChange, totalPages }: PaginationType) => {
    return <div className="flex justify-center items-center mt-4 gap-2">
        <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
            className={`p-4 py-1 mx-1 font-normal transition
            ${page === 1
                    ? "text-gray-200 cursor-not-allowed"
                    : "text-gray-800 hover:opacity-60"
                }`}
        >
            Previous
        </button>
        <div className='flex justify-center gap-1'>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (<button
                key={p}
                onClick={() => handlePageChange(p)}
                className={
                    `w-8 h-8 text-base hover:opacity-60 transition 
            ${p === page
                        ? "text-blue-500 font-extrabold"
                        : "text-gray-800 font-semibold"}`
                }
            >
                {p}
            </button>
            ))}
        </div>
        <button
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
            className={`p-4 py-1 mx-1 font-normal transition
            ${page === totalPages
                    ? "text-gray-200 cursor-not-allowed"
                    : "text-gray-800 hover:opacity-60"
                }`}
        >
            Next
        </button>
    </div>
}