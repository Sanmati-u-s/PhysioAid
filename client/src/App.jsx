import './App.css'
import { Route, Routes } from 'react-router-dom'
import CheckAuth from './components/common/CheckAuth';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './store/auth';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Importing layouts
import MainLayout from './components/main/Layout';
import AuthLayout from './components/auth/Layout';
import AdminLayout from './components/admin/Layout';

// Importing pages
import Home from './pages/main/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/admin/Dashboard';
import Exercises from './pages/main/Exercises';
import ExercisesResults from './pages/main/ExercisesResults';
import Profile from './pages/main/Profile';

function App() {
  // const user = {role:'user'};
  // const isAuthenticated = false;
  // const isLoading = false;

  const {user,isAuthenticated,isLoading} = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth());
  },[dispatch])

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
         <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path='main' element={<CheckAuth isAuthenticated={isAuthenticated} isLoading={isLoading} user={user}>
          <MainLayout />
        </CheckAuth>}>
        <Route path='home' element={<Home />}/>
          <Route path='profile' element={<Profile />}/>
        <Route path='exercises' element={<Exercises/>}>
        </Route>
        <Route path='exercises/results' element={<ExercisesResults/>}/>
        </Route>

        <Route path='auth' element={<CheckAuth isAuthenticated={isAuthenticated} isLoading={isLoading} user={user}>
          <AuthLayout />
        </CheckAuth>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>

        <Route path='admin' element={<CheckAuth isAuthenticated={isAuthenticated} isLoading={isLoading} user={user}>
          <AdminLayout />
        </CheckAuth>}>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
