import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext =createContext(null);
const auth =getAuth(app);

const AuthProvider = ({children}) => {
  const[loading,setLoading]=useState(false)

const registerUser=(email,password)=>{
  setLoading(true)
 return createUserWithEmailAndPassword(auth,email,password);
}
const user ='alim mia';
    const authInfo ={
        user,
        registerUser
    };
    return (
      <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
    );
};

export default AuthProvider;