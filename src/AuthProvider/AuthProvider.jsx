import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Config/Firebase.config';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [loader,setloader]=useState(true)
    const [user,setUser]=useState()

    const createUser = (email, password) => {
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin=(email,password)=>{
        setloader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setloader(true);
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(CurrentUser)=>{
            if(CurrentUser){
                setloader(false);
                setUser(CurrentUser)
            }
            else{
                console.log("User not availiabe");
            }
        })
        return()=>{
            unSubscribe();
        }
    },[])
    

    const authInfo = {
      createUser,
      userLogin,
      logOut,
      user,
      loader,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;