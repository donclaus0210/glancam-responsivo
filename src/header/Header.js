import React from 'react'
import './Header.css'
import logo from './imgs/logo-glancam-lar-amar.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="<GLANCAM/>"/>
      </div>
      <div className="header-menu">
        <nav>
          <a href="/#sobre">SOBRE</a>
          <a href="/#servicos">SERVIÇOS</a>
          <a href="/#portfolio">PORTFÓLIO</a>
          <a href="/#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  )
}
export default Header