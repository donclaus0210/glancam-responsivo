import React from 'react'
import Logo from './imgs/logo.svg'
import LinkedIn from './imgs/linkedin.svg'
import WhatsApp from './imgs/whatsapp.svg'
import Facebook from './imgs/facebook.svg'
import Instagram from './imgs/instagram.svg'
import GitHub from './imgs/github.svg'
import Telegram from './imgs/telegram.svg'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                    <div className="footer-sobre">
                        <img src={Logo} alt="<GLANCAM/>"/>
                        <p>Somos uma jovem empresa de desenvolvimento web, buscando trazer maior competitividade, inovação e simplicidade, modernizando empresas para o século XXI, através da criação de sites.</p>
                        <a href="#">SAIBA MAIS</a>
                    </div>
                    <div className="footer-redes-sociais">
                        <div className="footer-redes-title"><h2>&lt;REDES SOCIAIS/&gt;</h2></div>
                        <div className="footer-item1"><a href="https://www.google.com/" target="_blank"><img src={LinkedIn} alt="LinkedIn"/></a></div>
                        <div className="footer-item2"><a href="https://wa.me/message/NVD3VAS3LPX2P1" target="_blank"><img src={WhatsApp} alt="WhatsApp"/></a></div>
                        <div className="footer-item3"><a href="https://www.google.com/" target="_blank"><img src={Facebook} alt="Facebook"/></a></div>
                        <div className="footer-item4"><a href="https://www.instagram.com/_glancam_/?hl=pt-br" target="_blank"><img src={Instagram} alt="Instagram"/></a></div>
                        <div className="footer-item5"><a href="https://github.com/GLANCAM" target="_blank"><img src={GitHub} alt="GitHub"/></a></div>
                        <div className="footer-item6"><a href="https://www.google.com/" target="_blank"><img src={Telegram} alt="Telegram"/></a></div>
                    </div>
                </div>
            </footer>
            <footer className="copy">
                <p>Copyright &copy; 2021 Equipe GLANCAM LTDA - Alguns direitos reservados.</p>
            </footer>
        </>
    )
}

export default Footer
