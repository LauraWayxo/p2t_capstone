import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth0(); 

    //fixes bug of refresh always leading to Homescreen by..

    //app loads, re-renders nothing
    if (isLoading) {
      return null; 
    }

    //user auth vs un-auth 
    if(isAuthenticated) {
      return <Outlet />
    }

    return <Navigate to="/" replace />;

  // return isAuthenticated ? (<Outlet />) : (<Navigate to="/" replace/>);
};

export default ProtectedRoute; 
