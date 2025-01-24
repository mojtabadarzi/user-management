import { memo } from "react";
import { AddUserButtonType } from "../../types/global";

const AddUserButton = memo(({ title, onClick }: AddUserButtonType) => {
    return (
        <button
            onClick={onClick}
            className="bg-green-500 text-white px-4 py-2 rounded rounded-xl hover:opacity-60 transition"
        >
            {title}
        </button>
    );
})

export default AddUserButton;

