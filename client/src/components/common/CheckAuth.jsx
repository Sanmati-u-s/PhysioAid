import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

const CheckAuth = ({isAuthenticated, isLoading, user, children}) => {
  const location = useLocation();

  // Avoid redirecting while auth state is loading
  if (isLoading) {
    return <div className="flex items-center justify-center w-full py-10 text-gray-600">Checking session...</div>;
  }

  if(!isAuthenticated && !(location.pathname.includes('/auth'))){
    return <Navigate to='/auth/login' />
  }

  if(isAuthenticated && location.pathname.includes('/auth')){
    if(user?.role === "admin"){
        return <Navigate to='/admin/dashboard'/>
    }else{
        return <Navigate to='/main/home' />
    }
  }

  if(isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')){
    return <Navigate to='/unauth'/>
  }

  if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('/main')){
    return <Navigate to='/admin/dashboard'/>
  }

  return <>{children}</>
}

export default CheckAuth