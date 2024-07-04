import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import List from './List';

const MainLayouts = ({children}) => {
    

    return (
      <div>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <List></List>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default MainLayouts;