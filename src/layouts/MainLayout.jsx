import { Outlet } from "react-router";
import Navbar from "../components/Ui/Navbar";
import Footer from "../components/Ui/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;