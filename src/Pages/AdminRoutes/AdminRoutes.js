import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Components/hooks/useAuth';
import { CircularProgress } from "@mui/material";


const AdminRoutes = ({children}) => {
    const {user, admin, isLoading} = useAuth();
    let location = useLocation();
    
    if(isLoading){
        <CircularProgress />
    }

    if (user.email && admin) { return children} 

    return <Navigate to='/' state={{from : location}}></Navigate> 
};

export default AdminRoutes;