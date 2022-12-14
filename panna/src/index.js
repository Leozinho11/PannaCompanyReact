import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Tables from './pages/tables/Tables';
import Matches from './pages/matches/Matches'; 
import Brasileirao from './pages/tables/leagues/Brasilerao';
import reportWebVitals from './reportWebVitals';
import './style/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='tabelas' element={<Tables />} />
        <Route path='partidas' element={<Matches />} />
        <Route path='tabelas/brasileirao' element={<Brasileirao />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
