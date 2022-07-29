import React from "react";
import './TopBar.css';
import logo from '../../images/Homepage Images/logoCopa.png'
import { Link } from "react-router-dom";

export function TopBar() {
    return(
        <nav className="top-bar">
            <Link to='/'>
            <img src={logo}
             className="logo"
             alt="logo"
             />
             </Link>
             

            <ul className="navbar">
                <li><a href=""><strong> Home </strong></a></li>  
                <li><a href=""><strong> Jogos </strong></a></li>
                <li><Link to='/Tabelas'><strong> Tabelas </strong></Link></li>

            </ul>
        </nav>
    )
}