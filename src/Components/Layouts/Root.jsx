import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Banner from "../Home/Banner";
import FriendsCard from "../Friends/FriendsCard";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FriendsCard></FriendsCard>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;