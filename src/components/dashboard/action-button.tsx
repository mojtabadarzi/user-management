import { memo } from "react";
import { ActionButtonType } from "../../types/global";

const ActionButton = memo(({ title, onClick, classname }: ActionButtonType) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white px-4 py-1 text-xs font-semibold 
                rounded-lg border border-transparent ${classname}`}
        >
            {title}
        </button>
    );
})

export default ActionButton;