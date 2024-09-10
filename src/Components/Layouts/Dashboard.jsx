import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";
const Dashboard = () => {
    return (
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            <label
              htmlFor="my-drawer-2"
              className=" btn  drawer-button w-full lg:hidden"
            >
              <AiOutlineBars className="h-5 w-5" />
            </label>
            <h1 className="text-center text-4xl text-pink-500 mt-10">
              Welcome to your Dashboard
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
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/dashboard/add-equip"}>Add new Equipment</Link>
              </li>
              <li>
                <Link to={"/dashboard/booked-equip"}>Manage Booking</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;