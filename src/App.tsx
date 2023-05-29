import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";

const App = () => {
    return (
        <div className="font-nunito-sans bg-slate-200 min-h-screen">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
            </Routes>
        </div>
    );
};

export default App;
