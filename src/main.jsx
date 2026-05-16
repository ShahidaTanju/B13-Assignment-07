import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Layouts/Root';
import Home from './Pages/Home';
import FriendsDetails from './Pages/FriendsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home>
        </Home>
      },
      {
        path: '/friend/:id',
        element: <FriendsDetails></FriendsDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
