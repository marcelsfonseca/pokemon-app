import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from 'Pages/Menu';
import Jogo from 'Pages/Jogo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <Jogo />
  </React.StrictMode>
);