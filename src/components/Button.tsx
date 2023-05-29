import { ReactNode } from "react";

const Button = ({
    children,
    onClickEvent,
}: {
    children: ReactNode;
    onClickEvent: () => void;
}) => {
    return (
        <button
            className="border border-black rounded font-semibold px-4 py-2"
            onClick={onClickEvent}
        >
            {children}
        </button>
    );
};

export default Button;
