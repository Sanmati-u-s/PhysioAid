import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { logoutUser } from '@/store/auth'
import { Heart, LogOut, User, Activity, Menu, X } from 'lucide-react'
import { toast } from 'sonner'

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, user } = useSelector(state => state.auth)
  
  const isExercisePage = location.pathname.includes('/exercises')

  const handleAuthAction = () => {
    if (isAuthenticated) {
      // Logout
      dispatch(logoutUser()).then((data) => {
        if (data?.payload?.success) {
          toast.success('Logged out successfully')
          navigate('/auth/login')
        }
      })
    } else {
      // Navigate to login
      navigate('/auth/login')
    }
  }

  return (

    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div 
            className='flex items-center gap-2 cursor-pointer' 
            onClick={() => navigate('/main/home')}
          >
            <img
              src={'/images/logo.webp'}
              alt='Physio Aid Logo'
              className='w-12 h-12 object-contain rounded-lg bg-white'
              style={{ background: 'transparent' }}
            />
            <span className='text-xl font-bold text-gray-900'>Physio Aid</span>
          </div>

          {/* Navigation & User Info & Auth Button */}
          <div className='hidden md:flex items-center gap-4'>
            {/* Exercises Button */}
            <Button 
              onClick={() => navigate(isExercisePage ? '/main/home' : '/main/exercises')}
              variant='ghost'
              className='gap-2 cursor-pointer'
            >
              <Activity className='w-4 h-4' />
              {isExercisePage ? 'Back to Home' : 'Exercises'}
            </Button>

            {isAuthenticated && user && (
              <div className='flex items-center gap-2 px-3 py-1.5 bg-teal-50 rounded-lg'>
                <User className='w-4 h-4 text-teal-600' />
                <span className='text-sm font-medium text-gray-700'>
                  {user.name}
                </span>
              </div>
            )}
            
            <Button 
              onClick={handleAuthAction}
              variant={isAuthenticated ? 'outline' : 'default'}
              className='gap-2 cursor-pointer'
            >
              {isAuthenticated ? (
                <>
                  <LogOut className='w-4 h-4' />
                  Logout
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </div>

          {/* Mobile right actions: Name pill + menu toggle */}
          <div className='md:hidden flex items-center gap-2'>
            {isAuthenticated && user && (
              <div className='flex items-center gap-1.5 px-2.5 py-1 bg-teal-50 rounded-md max-w-[50vw]'>
                <User className='w-4 h-4 text-teal-600' />
                <span className='text-xs font-medium text-gray-700 truncate'>
                  {user.name}
                </span>
              </div>
            )}
            <Button
              variant='outline'
              size='icon'
              aria-label='Toggle menu'
              onClick={() => setMobileOpen(prev => !prev)}
              className='cursor-pointer'
            >
              {mobileOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        {mobileOpen && (
          <div className='md:hidden pb-4'>
            <div className='mt-2 rounded-xl border bg-white shadow-sm p-3'>
              {isAuthenticated && user && (
                <div className='flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg mb-2'>
                  <User className='w-4 h-4 text-teal-600' />
                  <span className='text-sm font-medium text-gray-700 truncate'>
                    {user.name}
                  </span>
                </div>
              )}

              <Button 
                onClick={() => { 
                  navigate(isExercisePage ? '/main/home' : '/main/exercises')
                  setMobileOpen(false) 
                }}
                variant='ghost'
                className='w-full justify-start gap-2'
              >
                <Activity className='w-4 h-4' />
                {isExercisePage ? 'Back to Home' : 'Exercises'}
              </Button>

              <Button 
                onClick={handleAuthAction}
                variant={isAuthenticated ? 'outline' : 'default'}
                className='w-full justify-start gap-2 mt-2'
              >
                {isAuthenticated ? (
                  <>
                    <LogOut className='w-4 h-4' />
                    Logout
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
