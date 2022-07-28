import React from "react";
import './Style.css';
import { TopBar } from '../../components/Top Bar/TopBar';
import { Button } from '../../components/Button/Button';
import { FirstButton } from '../../components/First Button/FirstButton';
import { Card } from '../../components/Cards/Cards';
import mainPhoto from '../../images/Homepage Images/quadras.png';
import transfersPhoto from '../../images/Cards Images/transferphoto.jpeg';
import matchesPhoto from '../../images/Cards Images/classics.jpg';
import tablesPhoto from '../../images/Cards Images/trofeusCompeticoes.png';


function Home() {
  return (
    <div className="App">
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

    <Card image={tablesPhoto} imageDescription='cardTabela'
    text="Quer saber como andam os maiores times do mundo em suas competições ?"
    button='VER TABELAS' // NEED TO FIX THE CARDS BUTTONS
    />
    

    

</div>
  );
}

export default Home;
