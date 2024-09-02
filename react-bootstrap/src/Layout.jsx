import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Menubar from "./Components/Menubar";


const Layout = () => {
    return (
        <div>
            <Menubar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;