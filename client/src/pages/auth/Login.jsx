import Form from "@/components/common/Form"
import { loginFormControls } from "@/config"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import useScrollToTop from "../../hooks/useScrollToTop"
import { loginUser } from "@/store/auth"
import { toast } from "sonner"

const initialState = {
    email:'',
    password:''
}

const Login = () => {
  useScrollToTop();
  const [formData,setFormData] = useState(initialState)
  const dispatch = useDispatch();

  function onSubmit(event){
    event.preventDefault()

    dispatch(loginUser(formData)).then((data) => {
        if(data.payload?.success){
            // Login successful
            toast.success(data.payload?.message)
            console.log('Login successful');
        }else{
            // Login failed
            toast.error(data.payload?.message || 'Login failed.')
            console.log('Login failed');
        }
    })
  }

  return (
    <div className="max-auto w0full max-w-md space-y-6 border p-8 rounded-md shadow-sm">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Login</h1>
        <p className="mt-2"> Dont't have an account?
          <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/register'>Register</Link>
        </p>
      </div>

      <Form 
        formControls={loginFormControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Login