import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteConfig;