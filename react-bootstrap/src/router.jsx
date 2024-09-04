import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Pages/About";
import Layout from "./layout";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";


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
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/blog',
                element: <Blog />,
            }
        ],
    },
])


export default router;