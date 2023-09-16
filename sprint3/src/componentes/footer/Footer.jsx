"use client"
import React, { useState } from 'react';
import './Footer.css';
import { Icon } from '../Icon';

const Footer=()=> {
    return (
    <section className='sectionFooter' >
        <div className='containerFooter'>
            <div className='containerImg' >
                <img src="./fotos/itbank.png" alt="itbank"/> 
            </div>
            <div className='containerInfoGral' >
                <div class="itemInfo">
                    <h4>Direcciones</h4>
                    <p>Av. San Juan 123</p>
                    <p>Estados Unidos 4567</p>
                    <h4>Teléfono</h4>
                    <p>0810-123-4567</p>
                    <p>0810-123-4567</p>
                </div>
                <div class="itemInfo">
                    <h4>Horario</h4>
                    <p>Lunes a viernes: de 8:30 a 14:00 h.</p>
                    <h4>Horario comercial</h4>
                    <p>Lunes a viernes: 10:00 a 19:30 h.</p> 
                    <p>Sábados: 10:00 a 14:00 h.</p>
                </div>
                
            </div>
            <div class="containerLinks">
                <h4>Información</h4>
                <ul>
                    <li><a href="index.html" title="inicio">Home</a></li>
                    <li><a href="cuentas.html" title="cuentas">Cuentas</a></li>
                    <li><a href="prestamos.html" title="prestamos">Prestamos</a></li>
                    <li><a href="transferencias.html" title="transferencias">Transferencias</a></li>
                </ul>
            </div>
            
        </div>
        <div class="containerSocials">
            <div class="social">
                <Icon 
                    className='Icon' 
                    type={"facebook"} 
                /> 
            </div>
            <div class="social">
                <Icon 
                    className='Icon' 
                    type={"instagram"} 
                /> 
            </div>
            <div class="social">
                <Icon 
                    className='Icon' 
                    type={"twitter"} 
                /> 
            </div>
        </div>
        <h5>COPYRIGHT © 2023 ITBANK</h5>  
    </section>
);
}

export default Footer;