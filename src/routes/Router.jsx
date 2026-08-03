import MainLayout from "../Components/layout/MainLayout"
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import TimeLine from "../Pages/TimeLine";
import Stats from "../Pages/Stats";
import FriendsDetails from "../Pages/FriendsDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/timeline",
                element: <TimeLine></TimeLine>
            },
            {
                path: "/friendDetails/:id",
                element: <FriendsDetails></FriendsDetails>
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            }
        ],
    },
]);

