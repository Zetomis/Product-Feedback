import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="px-4 py-2 rounded border border-black">{children}</div>
    );
};

export default Container;
