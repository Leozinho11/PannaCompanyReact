import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import './Style.css';
import TablesLobby from "../tables/Tables";
import { TopBar } from '../../components/Top Bar/TopBar';
import { FirstButton } from '../../components/First Button/FirstButton';
import { Card } from '../../components/Cards/Cards';
import mainPhoto from '../../images/Homepage Images/quadras.png';
import transfersPhoto from '../../images/Cards Images/transferphoto.jpeg';
import matchesPhoto from '../../images/Cards Images/classics.jpg';
import tablesPhoto from '../../images/Cards Images/trofeusCompeticoes.png';


function Home() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <TopBar />
      

      <img className="fields" 
      alt="mainPhoto" 
      src={mainPhoto}
       />

   <div className="main-text">
        <h1>BEM VINDO AO PANNA,</h1>
        <h3>o melhor site futebolistico que você poderia encontrar.</h3>
    </div>
    <FirstButton name='VER NOTICIAS' />

<div className="contentboxes">

    <Card image={tablesPhoto} imageDescription='cardTabela'
    text="Quer saber como andam os maiores times do mundo em suas competições ?"
    buttonName="VER TABELAS" directedTo='../tables/Tables'
    />

    <Card image={matchesPhoto} imageDescription= 'cardPartidas'
    text= "Quer saber quanto está o placar das partidas que estão acontecendo ou já aconteceram ?"
    buttonName="VER PARTIDAS"
    />

   <Card image={transfersPhoto} imageDescription= 'cardTransferencias'
    text= "Quer ver as principais transferências que estão acontecendo no mundo do futebol ?"
    buttonName="VER TRANSFERÊNCIAS"
    />
  </div>

    

</div>
  );
}

export default Home;
