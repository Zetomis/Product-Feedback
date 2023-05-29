import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="w-full max-w-screen-xl px-8 py-12 mx-auto flex justify-between app">
            <Sidebar />
            <Main />
        </div>
    );
};

export default Home;
