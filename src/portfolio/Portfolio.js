import React from 'react'
import SetaE from './imgs/SetaGlancamE.svg'
import SetaD from './imgs/SetaGlancamD.svg'
import Port1 from './imgs/port1.png'
import Port2 from './imgs/port2.png'
import Port3 from './imgs/port3.png'
import Port4 from './imgs/port4.png'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio-title">
                <h1>&lt;PORTFÓLIO/&gt;</h1>
            </div>
            <div className="portfolio-trabalhos">
                <div className="portfolio-left-arrow arrow">
                    <img src={SetaE} alt="<"/>
                </div>
                <div className="portfolio-gallery">
                    <div className="portfolio-image-1">
                        <img src={Port1} alt="Site Claoto Home"/>
                    </div>
                    <div className="portfolio-image-2">
                        <img src={Port2} alt="Site Claoto Serviços"/>
                    </div>
                    <div className="portfolio-image-3">
                        <img src={Port3} alt="Site Claoto Contato"/>
                    </div>
                    <div className="portfolio-image-4">
                        <img src={Port4} alt="Site Claoto Contato"/>
                    </div>
                </div>
                <div className="portfolio-right-arrow arrow">
                    <img src={SetaD} alt=">"/>
                </div>
            </div>
            <div className="portfolio-buttons">
                <button className="portfolio-btn-ativo"></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className="portfolio-orcar">
                <a href="">PEÇA SEU ORÇAMENTO</a>
            </div>
        </section>
    )
}
export default Portfolio
