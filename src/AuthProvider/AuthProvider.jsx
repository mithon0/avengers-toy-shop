import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user,setUser]=useState(null);

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const loginUser=(email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password);
  }
  const googleSignIn =(googleProvider)=>{
  return  signInWithPopup(auth,googleProvider)
  }
  const gitHubSignIn=(gitProvider)=>{
   return signInWithPopup(auth,gitProvider)
  }
  const updateUser=(userInfo)=>{
    updateProfile(auth.currentUser,userInfo)
    .then(() => {
      
  }).catch((error) => {
      
  });
 

  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,userInfo=>{  
     setUser(userInfo);
     });
     return ()=> {
        unSubscribe();
     }
   },[])

   const loggedUser =auth.currentUser;
  
   const logOut =()=>{
    return signOut(auth);
  }
 
  const authInfo = {
    user,
    registerUser,
    loginUser,
    updateUser,
    loggedUser,
    logOut,
    loading,
    googleSignIn,
    gitHubSignIn
  };
  return (
    <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
  );
};

export default AuthProvider;