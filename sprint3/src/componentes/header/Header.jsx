"use client"
import React, { useState } from 'react';
import './Header.css';
import { Icon } from '../Icon';
import Navbar from '../navbar/Navbar.jsx';

function Header({showNavbar=true}) {
    const [showNav, setshownav] = useState(false)
    const changeState =()=>{
        if (showNav==true){ 
            setshownav(false)
        } 
        else {
            setshownav(true)
        }
        console.log("hola")
    }
    return (
    <header>
        <div className='containerHeader'>
            <div id='containerLogo'>
                <img class="logo-1" src="./fotos/itbank.png"  alt=""></img>
            </div>
            {
                showNavbar&&(<div className='containerIcon' onClick={changeState}>
                <Icon className='Icon' type={"bar"} /> 
            </div>)
            }
        </div>
        {
            showNavbar&&(<div className='navBar'>
            {
                showNav ? (<Navbar/>):null
            }
        </div>)
        }
    </header>
);
}

export default Header;