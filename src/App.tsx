import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="font-nunito-sans bg-slate-200 min-h-screen">
            <div className="w-full max-w-screen-xl px-8 py-12 mx-auto flex justify-between app">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
};

export default App;
