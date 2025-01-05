import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../components/ProjectDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,


    },
    {

        path: "/project/:id",
        element: < ProjectDetails />

    }

]);

export default router;