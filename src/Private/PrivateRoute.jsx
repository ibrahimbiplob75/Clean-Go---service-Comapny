import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Components/UI/Loader';

const PrivateRoute = ({children}) => {
    const {user,loader}= useAuth();
    const location = useLocation();
    
    if(loader){
       return <Loader></Loader>   
    }
    
    if (user) {
      return children;
    } 
    return <Navigate state={location.pathname} to="/login"></Navigate>;
    
    
};

export default PrivateRoute;