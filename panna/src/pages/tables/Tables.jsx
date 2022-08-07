import React from "react";
import './Tables.css';
import { Outlet } from 'react-router-dom';
import { Button } from "../../components/Button/Button";
import TopBar from "../../components/Top Bar/TopBar";
import Brasileirao from "../../images/Tables Competitions Images/brasileirao.jpg";
import Bundesliga from "../../images/Tables Competitions Images/bundesliga.png";
import LaLiga from "../../images/Tables Competitions Images/laliga.jpg";
import Ligue1 from "../../images/Tables Competitions Images/ligue1.png";
import Premier from "../../images/Tables Competitions Images/premierleague.png";
import SerieAItalia from "../../images/Tables Competitions Images/serieaitalia.jpg";
import Libertadores from "../../images/Tables Competitions Images/libertadores_logo.jpg";
import Champions from "../../images/Tables Competitions Images/championsimg.jpg";

function Tables (){
    
    return(

        <div className="TablesLobby">
            <TopBar />
            <Outlet />

            <div class="tbmenutxt"><h1>CONFIRA AQUI AS TABELAS DAS <br /> MAIORES COMPETIÇÕES DO MUNDO:</h1></div>

            <div className="tbSelector">

            <div className="item">
                <img src={Brasileirao} alt='Brasileirão' />
                <Button name='Brasileirão Série A' />
            </div>

            <div className="item">
                <img src={SerieAItalia} alt='SerieAItalia' />
                <Button name='Campeonato Italiano' />
            </div>

            <div className="item">
                <img src={Bundesliga} alt='Bundesliga' />
                <Button name='Campeonato Alemão' />
            </div>

            <div className="item">
                <img src={LaLiga} alt='La Liga' />
                <Button name='Campeonato Espanhol' />
            </div>

            <div className="item">
                <img src={Ligue1} alt='Ligue 1' />
                <Button name='Campeonato Francês' />
            </div>

            <div className="item">
                <img src={Premier} alt='Premier League' />
                <Button name='Campeonato Inglês' />
            </div>

            <div className="item">
                <img src={Libertadores} alt='Libertadores' />
                <Button name='Libertadores' />
            </div>

            <div className="item">
                <img src={Champions} alt='Champions League' />
                <Button name='Champions League' />
            </div>

            </div>

        </div>
    )
}

export default Tables