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
                    <NavLink to='/' end>
                        {({ isActive }) => (
                            <button className={`flex border  px-2 py-2  rounded-xl text-md ${isActive
                                ? "bg-[#244d3f] text-white"
                                : "bg-white border-[#244d3f] text-[#244d3f]"
                                }`}><House /> Home</button>
                        )}
                    </NavLink>
                    <NavLink to='/timeline'>
                        {({ isActive }) => (
                            <button className={`flex border  px-2 py-2  rounded-xl text-md ${isActive
                                ? "bg-[#244d3f] text-white"
                                : "bg-white border-[#244d3f] text-[#244d3f]"
                                }`}><History /> Timeline({timelineData.length})</button>
                        )}
                    </NavLink>
                    <NavLink to='stats'>
                        {({ isActive }) => (
                            <button className={`flex border  px-2 py-2  rounded-xl text-md ${isActive
                                ? "bg-[#244d3f] text-white"
                                : "bg-white border-[#244d3f] text-[#244d3f]"
                                }`}><ChartSpline /> Stats</button>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;