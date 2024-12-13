import { Navigate } from "react-router-dom";
import About from "../pages/about/About";
import Apps from "../pages/apps/Apps";
import Home from "../pages/home/Home";
import Webs from "../pages/webs/Webs";

export const routeElements = [
    {
        path: "/",
        element: <Navigate to="/home" replace />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/apps",
        element: <Apps/>
    },
    {
        path: "/web",
        element: <Webs/>
    }
];