import { NoResultProps } from "../../types/global";

const NoResult = ({ message = "No results found", subtext = "Try again later" }: NoResultProps) => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-1 py-8 text-gray-600 w-[1024px] h-64" data-testid="no_result">
            <p className="text-lg font-medium mt-4">{message}</p>
            <span className="text-sm font-thin">{subtext}</span>
        </div>
    );
}

export default NoResult;
