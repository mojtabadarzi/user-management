import { ChangeEvent } from "react";

type InputBoxProps = {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean
}

const InputBox = ({ type = "text", placeholder, value, onChange, required = true }: InputBoxProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="border px-4 py-3 rounded-xl text-sm"
            value={value}
            onChange={onChange}
            required={required}
        />
    );
}

export default InputBox;
