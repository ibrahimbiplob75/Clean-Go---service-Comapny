import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}= useAuth()

    if(loader){
          <div>
            <div className="flex w-3/4 m-auto justify-center items-center h-screen flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>; 
    }
    
    if(!user){
        return <Navigate to={"/login"}></Navigate>
    }
    return  children
};

export default PrivateRoute;