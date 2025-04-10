import './App.css'
import {HashRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import Community from "./components/community/Community.tsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path={"/community"} element={<Community/>} />
            </Routes>
        </HashRouter>
    );
}

export default App
