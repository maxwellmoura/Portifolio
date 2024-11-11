import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
      <article>
        <div className='texto'>
          <h1>Maxwell Christino de Moura</h1>
          <h2>Nascido: Garanhuns - PE</h2>
          <h2>Data Nascimento: 03/04/1984</h2>
          <h2>Mora em Sobral - CE</h2>
        </div>
        <div className='imagem'>
          <img src="/assets/Max.jpg" alt="Maxwell-Imagem" />
          <div className="botoes">
            <a target="_blank" href="/assets/pdf/cvDevETi.pdf" className="botao outer-shadow">Download CV</a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Home
