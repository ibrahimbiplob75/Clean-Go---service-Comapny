import React, { useContext } from 'react';
import  { AuthContext } from '../AuthProvider/AuthProvider';

const useAuth = () => {
    const authHook=useContext(AuthContext)
    return authHook;
};

export default useAuth;