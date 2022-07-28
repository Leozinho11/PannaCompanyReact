import React from "react";
import './TopBar.css';
import logo from '../../images/Homepage Images/logoCopa.png'

export function TopBar() {
    return(
        <nav className="top-bar">
            <a href="../../pages/home/Home">
            <img src={logo}
             className="logo"
             alt="logo"
             />
             </a>

            <ul className="navbar">
                <li><a href=""><strong> Home </strong></a></li>  
                <li><a href=""><strong> Jogos </strong></a></li>
                <li><a href=""><strong> Tabelas </strong></a></li>

            </ul>
        </nav>
    )
}