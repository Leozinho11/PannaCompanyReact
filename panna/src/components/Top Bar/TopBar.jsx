import React from "react";
import './TopBar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/Homepage Images/logoCopa.png'


export function TopBar() {
    return(
        <nav className="top-bar">
            <Link to='/'>
            <img src={logo}
             className="logo"
             alt="logo"
             /></Link>
            
             

            <ul className="navbar">
                
                   <li><strong><Link to='/'>Home</Link></strong></li>
                    <li><strong><Link to='tabelas'>Tabelas</Link></strong></li>
                    <li><strong><Link to=''>Jogos</Link></strong></li>
                

            </ul>
        </nav>
    )
}