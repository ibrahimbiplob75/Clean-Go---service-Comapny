import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  deleteUser,signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Config/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();


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
    

    const signInWithGoogle = () => {
        setloader(true);
      return signInWithPopup(auth, googleProvider);
    };

    const logOut=()=>{
        setloader(true);
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(CurrentUser)=>{
            console.log(CurrentUser)
            setUser(CurrentUser)
            setloader(false);
        })
        return()=>{
            unSubscribe();
        }
    },[])
    

    const authInfo = {
      createUser,
      userLogin,
      signInWithGoogle,
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