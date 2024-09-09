import React from 'react';
import { NavLink } from 'react-router-dom';

const List = () => {
    return (
      <>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-ghost"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-ghost"
            }
            to={"/services"}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-ghost"
            }
            to={"/booking/order"}
          >
            My Booking
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-ghost"
            }
            to={"/about"}
          >
            about
          </NavLink>
        </li>
      </>
    );
};

export default List;