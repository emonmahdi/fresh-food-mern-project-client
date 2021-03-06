import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Components/hooks/useAuth';
import { CircularProgress } from "@mui/material";


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    let location = useLocation();
    
    if(isLoading){
        <CircularProgress />
    }

    if (user.email) { return children} 

    return <Navigate to='/login' state={{from : location}}></Navigate> 
};

export default PrivateRoute;