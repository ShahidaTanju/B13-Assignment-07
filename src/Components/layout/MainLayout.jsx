import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../../Pages/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;