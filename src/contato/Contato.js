import './Contato.css'
import React from 'react'
import logo from './imgs/logo-glancam-lar-amar.svg'
import whats from './imgs/whatsapp.svg'
import smart from './imgs/smartphone.svg'
import email from './imgs/email.svg'
import location from './imgs/location.svg'

const Contato = () => {
    return (
        <section className="contato">
            <div className="contato-title"><h1>&lt;ENTRE EM CONTATO/&gt;</h1></div>
            <div className="contato-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.7663555043655!2d-46.57608254885779!3d-23.68431207195517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43a1ffa670b1%3A0x9ec2cb8b6f0a0426!2sTv.%20Padre%20Anchieta%2C%2082%20-%20Vila%20Jordanopolis%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009891-590!5e0!3m2!1spt-BR!2sbr!4v1611681141044!5m2!1spt-BR!2sbr" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className="contato-contatos">
                <div className="contato-logo">
                    <img src={logo} alt="<GLANCAM/>"/>
                </div>
                <div className="contato-item">
                    <div><img src={whats} alt="<WHATSAPP/>"/></div>
                    <div><a href="https://api.whatsapp.com/send?phone=+5511988109988&text=Olá, gostaria de pedir um orçamento para a criação de um site." target="_blank">+55 (11) 98810-9988</a></div>
                </div>
                <div className="contato-item">
                    <div><img src={smart} alt="<CELULAR/>"/></div>
                    <div><a href="tel:+5511988109988" target="_blank">+55 (11) 98810-9988</a></div>
                </div>
                <div className="contato-item">
                    <div><img src={email} alt="<EMAIL/>"/></div>
                    <div><a href="glancam.webdev@gmail.com?subject=Olá%20again" target="_blank">glancam.webdev@gmail.com</a></div>
                </div>
                <div className="contato-item">
                    <div><img src={location} alt="<LOCALIZAÇÃO/>"/></div>
                    <div><a href="https://www.google.com/maps/place/Tv.+Padre+Anchieta,+82+-+Vila+Jordanopolis,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09891-590/@-23.684317,-46.573888,16z/data=!4m5!3m4!1s0x94ce43a1ffa670b1:0x9ec2cb8b6f0a0426!8m2!3d-23.684317!4d-46.5738885?hl=pt-BR" target="_blank">Tv. Pe. Anchieta, 82 - Vila Jordanópolis</a></div>
                </div>
            </div>
            <div className="contato-orcar">
                <a href="contato.html">PEÇA JÁ SEU ORÇAMENTO</a>
            </div>
        </section>
    )
}

export default Contato
