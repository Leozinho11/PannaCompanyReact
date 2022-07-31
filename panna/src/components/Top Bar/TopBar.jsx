import React from "react";
import './TopBar.css';
import { Link } from 'react-scroll'
import logo from '../../images/Homepage Images/logoCopa.png'
import Home from "../../pages/home/Home";
import TablesLobby from "../../pages/tables/Tables";

export function TopBar() {
    return(
        <nav className="top-bar">
            <Link to={Home} spy={true} smooth={true} offset={90} duration={1000} >
            <img src={logo}
             className="logo"
             alt="logo"
             />
            </Link>
             

            <ul className="navbar">
                <li><a href=""><strong> Home </strong></a></li>  
                <li><a href=""><strong> Jogos </strong></a></li>
                <li><a href={TablesLobby} onClick><strong> Tabelas </strong></a></li>

            </ul>
        </nav>
    )
}