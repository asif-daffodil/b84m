import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Pages/About";
import Layout from "./layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
])


export default router;