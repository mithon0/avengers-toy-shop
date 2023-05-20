import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
        const {user,loading}=useContext(AuthContext)
       
        if(user?.email){
            return children
        }
        if(loading==false){
            return<progress className=" text-center progress w-56"></progress>
        }
        console.log(loading);
    
    return <Navigate to="/login"></Navigate>
};

export default PrivetRoutes;