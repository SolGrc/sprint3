"use client"
import React, { useState } from 'react';
import './Navbar.css';
import { Icon } from '../Icon';
import { useRouter } from 'next/navigation';

const Navbar=()=> {
    const [showNav, setshownav] = useState(false)
    const changeState =()=>{
        if (showNav==true){ 
            setshownav(false)
        } 
        else {
            setshownav(true)
        }
    }
    const Router=useRouter()
    return (
        <div class="menu-1">
        <ul>
            <li><button onClick={()=>Router.push("/hola")} title="home">Home</button></li>
            <li><button href="/cuentas" title="cuentas">Cuentas</button></li>
            <li><button href="/prestamos" title="prestamos">Prestamos</button></li>
            <li><button href="/transferencias" title="transferencias">Transferencias</button></li>
        </ul>
    </div>
);
}

export default Navbar;