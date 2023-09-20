"use client"
import './page.module.css';
import LoginForm from '@/componentes/loginComponents/Login';
import RegistrarForm from '@/componentes/loginComponents/Registrar';
import RecuperarForm from '@/componentes/loginComponents/User-recovery';
import { useEffect, useState } from 'react';
import Header from '@/componentes/header/Header';
import { useRouter } from 'next/navigation';



function Login() {
  useEffect (()=>{
    if (user.length>0) {Router.push("/home")}
  },[])
  const [user, setUser] = useState([])
  const Router=useRouter()

  return (
    <div className="App">
        
      {
        !user.length > 0 ? <LoginForm setUser={setUser} /> : null
      }

      <RecuperarForm />
      <RegistrarForm />
      

    </div>
  );
}

export default Login;