import './Servicos.css';
import ImagemInformativo from './imgs/informativo.svg';
import ImagemPublicitario from './imgs/publicitario.svg';
import ImagemEcommerce from './imgs/e-commerce.svg';
import ImagemLogo from './imgs/logo.svg';
import ImagemManutencao from './imgs/manutencao.svg';
import ImagemHospedagm from './imgs/hospedagem.svg';
import React from 'react'

const servicos = [
    { id: 0, nome: 'SITES INFORMATIVOS', imagem: ImagemInformativo },
    { id: 1, nome: 'SITES PUBLICITÁRIOS', imagem: ImagemPublicitario },
    { id: 2, nome: 'E-COMMERCE', imagem: ImagemEcommerce },
    { id: 3, nome: 'LOGOS', imagem: ImagemLogo },
    { id: 4, nome: 'MANUTENÇÃO', imagem: ImagemManutencao },
    { id: 5, nome: 'HOSPEDAGEM', imagem: ImagemHospedagm },
];

function alterarImagem(id) {

let circulos = document.querySelectorAll(".servicos-buttons button")
circulos = Array.from(circulos)
circulos.forEach(item=>item.className = "")
circulos[id].classList.add("servicos-btn-ativo")

let itens = document.querySelectorAll(".servicos-carroussel .servico")
itens = Array.from(itens)
itens.forEach(item=>{
    item.querySelector("img").src = servicos.filter(servico => servico.id === id)[0].imagem;
    item.querySelector("img").alt = servicos.filter(servico => servico.id === id)[0].nome;
    item.querySelector("h2").innerHTML = servicos.filter(servico => servico.id === id)[0].nome;
    id++;
})
}

const Servicos = () => {
    return (
        <section className="servicos">
            <div className="servicos-title"><h1>&lt;NOSSOS SERVIÇOS/&gt;</h1></div>
            <div className="servicos-carroussel">
                <div className="servico">
                    <img src={ImagemInformativo} alt="Sites Informativos" />
                    <h2>sites informativos</h2>
                </div>
                <div className="servico">
                    <img src={ImagemPublicitario} alt="Sites Publicitários" />
                    <h2>sites publicitários</h2>
                </div>
                <div className="servico">
                    <img src={ImagemEcommerce} alt="E-Commerce" />
                    <h2>e-commerce</h2>
                </div>
            </div>
            <div className="servicos-buttons">
                <button className="servicos-btn-ativo" onClick={() => alterarImagem(0)}></button>
                <button onClick={() => alterarImagem(1)}></button>
                <button onClick={() => alterarImagem(2)}></button>
                <button onClick={() => alterarImagem(3)}></button>
            </div>
            <div className="servicos-saiba-mais">
                <a href="./saibamais.html">SAIBA MAIS</a>
            </div>
        </section>
    )
}
export default Servicos
