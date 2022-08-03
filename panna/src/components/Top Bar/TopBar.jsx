import React from "react";
import './TopBar.css';
import { Link, Outlet, } from 'react-router-dom';
import logo from '../../images/Homepage Images/logoCopa.png'


function TopBar() {




    return(
        <div className="TopBar">
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

        <Outlet />

        </div>

        
    )
}

export default TopBar