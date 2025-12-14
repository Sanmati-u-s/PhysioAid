import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '@/components/common/Form'
import { registerFormControls } from '@/config'
import useScrollToTop from '../../hooks/useScrollToTop'
import { registerUser } from '@/store/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const initialState = {
  patientName: '',
  email: '',
  password: '',
  age: '',
  phone: '',
  gender: ''
}

const Register = () => {  useScrollToTop();  const [formData,setFormData] = useState(initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event){
    event.preventDefault()

    dispatch(registerUser(formData)).then((data) => {
      if(data.payload?.success){
        // Registration successful
        console.log('Registration successful');
        toast.success(data.payload?.message)
        navigate('/auth/login');
      }else{
        // Registration failed
        toast.error(data.payload?.message || 'Registration failed.')
        console.log('Registration failed');
      }
    })
  }

  return (
    <div className='mx-auto w-full max-w-md space-y-6 border p-8 rounded-md shadow-sm'> 
      <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create a new account</h1>
      <p className='mt-2'>Already Have an account?
        <Link className='font-medium ml-2 text-primary hover:underline' to='/auth/login'>Login</Link>
      </p>
      <Form 
        formControls={registerFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Register