import { House, History, ChartSpline } from "lucide-react";
import { NavLink } from "react-router";
import { TimelineContext } from "../../Contexts/Context";
import { useContext } from "react";

const Navbar = () => {

    const { timelineData } = useContext(TimelineContext);

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between px-10">
                {/* left side */}
                <div className="px-15 flex items-center">
                    <img src="/src/assets/logo.png" alt="" />
                </div>
                {/* right side */}
                <div className="flex items-centers gap-4">
                    <NavLink to={'/'}>
                        <button className="flex border bg-[#244d3f] px-2 py-2 text-white rounded-xl text-md"><House /> Home</button>
                    </NavLink>
                    <NavLink to={'/timeline'}>
                        <button className="flex border  px-2 py-2  rounded-xl text-md"><History /> Timeline({timelineData.length})</button>
                    </NavLink>
                    <NavLink to={'status'}>
                        <button className="flex border  px-2 py-2  rounded-xl text-md"><ChartSpline /> Status</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;