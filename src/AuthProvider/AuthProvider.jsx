import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const registerUser = (email, password) => {
     
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const loginUser=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password);
  }
  const user = 'alim mia';
  const authInfo = {
    user,
    registerUser,
    loginUser
  };
  return (
    <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
  );
};

export default AuthProvider;