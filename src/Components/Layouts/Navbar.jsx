import React from 'react';
import List from './List';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Navbar = () => {
  const navigate=useNavigate();
  const {user,logOut}=useAuth()
  const logout=()=>{
    logOut().then(res=>{
      navigate("/login")
    });
  }
    return (
      <div className="navbar bg-base-300 w-full">
        <div className=" w-full max-w-[1200px] m-auto">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <Link to={"/"} className="mx-2 flex-1 px-2 text-2xl font-bold">
            Lab Assistant
          </Link>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <List></List>
            </ul>
          </div>
        </div>
        <div className="mr-10">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/dashboard"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a onClick={() => logout()}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link
                to={"/login"}
                className="btn btn-info text-white font-semibold"
              >
                Signin
              </Link>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;