import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie' 
const GuestLayout = () => {
  const cookies = new Cookies()
   const authuser = cookies.get(import.meta.env.VITE_APP_NAME)
   const navigate = useNavigate()
   useEffect(()=>{
     if (authuser) {
    
     navigate('/dashboard')
   }
   },[])
  
  return (
    <Outlet/>
  )
}

export default GuestLayout