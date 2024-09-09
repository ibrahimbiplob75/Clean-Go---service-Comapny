import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import Booking from "../Pages/Booking";
import TrackOrder from "../Pages/TrackOrder";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Components/Layouts/Dashboard";
import AddEquipment from "../Pages/AddEquipment";
import DashboardLayout from "../Components/Layouts/DashboardLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
      {
        path: "/booking/order",
        element: (
          <PrivateRoute>
            <TrackOrder></TrackOrder>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/add-equip",
        element: <AddEquipment></AddEquipment>,
      },
    ],
  },
]);
    


export default route;