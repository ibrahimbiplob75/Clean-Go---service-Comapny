import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";
import useAuth from '../../Hook/useAuth';
import UseAxios from '../../Hook/UseAxios';
import UserRole from '../../Hook/UserRole';
const Dashboard = () => {
    const role=UserRole();
    return (
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button w-full lg:hidden"
            >
              <AiOutlineBars className="h-5 w-5" />
            </label>
            <h1 className="text-center text-4xl text-pink-500 mt-10">
              Welcome to Dashboard You are roling as {role}
            </h1>
            <Outlet></Outlet>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li className="text-xl shadow-2xl m-4 rounded-xl font-semibold">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-xl shadow-2xl m-4 rounded-xl font-semibold">
                <Link to={"/dashboard/users"}>All users</Link>
              </li>
              <li className="text-xl shadow-2xl m-4 rounded-xl font-semibold">
                <Link to={"/dashboard/booked-equip"}>Manage Booking</Link>
              </li>
              <li className="text-xl shadow-2xl m-4 rounded-xl font-semibold">
                <Link to={"/dashboard/add-equip"}>Add new Equipment</Link>
              </li>
              <li className="text-xl shadow-2xl m-4 rounded-xl font-semibold">
                <Link to={"/dashboard/manage-equip"}>Manage Equipment</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;