import React from 'react';
import List from './List';

const Navbar = () => {
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

          <div className="mx-2 flex-1 px-2">Lab Assistant</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <List></List>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;