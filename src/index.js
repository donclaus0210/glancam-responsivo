import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header';
import Introduction from './introduction/Introduction'
import Servicos from './servicos/Servicos'
import Portfolio from './portfolio/Portfolio'
import Contato from './contato/Contato'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Introduction/>
    <Servicos/>
    <Portfolio/>
    <Contato/>
  </React.StrictMode>,
  document.getElementById('root')
);
