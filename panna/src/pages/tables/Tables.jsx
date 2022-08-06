import React from "react";
import { Outlet } from 'react-router-dom'
import TopBar from "../../components/Top Bar/TopBar";
import { Button } from "../../components/Button/Button";
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
                <img src={SerieAItalia} alt='SerieAItalia' />
                <button>
                    <h1>Campeonato Italiano</h1>
                </button>
            </div>

            </div>

        </div>
    )
}

export default Tables