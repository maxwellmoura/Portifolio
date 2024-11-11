import React from 'react'
import './Projetos.css'

const Projetos = () => {
    return (
        <section className="projetos section" id="projetos">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Meus projetos</h2>
                    </div>
                </div>
                <div className="projeto">
                    <a href="https://agencia-silk.vercel.app/">
                        <img src="/assets/agencia.PNG" alt="Agencia de Viagem" />
                        <h1>Projeto 1</h1>
                        <div className="informacoes-projeto">
                            <h2>Agencia de Viagem</h2>
                            <p>Projeto feito usando HTML e CSS</p>
                            <p>🔗 Ver no GitHub Pages</p>
                        </div>
                    </a>
                </div>

                <div className="projeto">
                    <a href="https://mini-blog-seven-xi.vercel.app/">
                        <img src="/assets/miniblog.png" alt="MiniBlog" />
                        <h1>Projeto 2</h1>
                        <div className="informacoes-projeto">
                            <h2>MiniBlog</h2>
                            <p>Projeto feito usando HTML, CSS, <br />
                                JavaScript, React, FireBase</p>
                            <p>🔗 Ver no GitHub Pages</p>
                        </div>
                    </a>
                </div>

                <div className="projeto">
                    <a href="https://lanchonete-three.vercel.app/">
                        <img src="/assets/lanchonete.png" alt="Lanchonete" />
                        <h1>Projeto 3</h1>
                        <div className="informacoes-projeto">
                            <h2>Lanchonete</h2>
                            <p>Projeto feito usando HTML, CSS</p>
                            <p>🔗 Ver no GitHub Pages</p>
                        </div>
                    </a>
                </div>
                <div className="projeto">
                    <a href="https://ladding-page-pied.vercel.app/">
                        <img src="/assets/lanchonete.png" alt="Ladding-Page" />
                        <h1>Projeto 4</h1>
                        <div className="informacoes-projeto">
                            <h2>Ladding Page</h2>
                            <p>Projeto feito usando HTML, CSS</p>
                            <p>🔗 Ver no GitHub Pages</p>
                        </div>
                    </a>
                </div>
                <div className="projeto">
                    <a href="https://pet-hotel-one.vercel.app/">
                        <img src="/assets/lanchonete.png" alt="Pet-Hotel" />
                        <h1>Projeto 5</h1>
                        <div className="informacoes-projeto">
                            <h2>Pet Hotel</h2>
                            <p>Projeto feito usando HTML, CSS, JavaScript e React</p>
                            <p>🔗 Ver no GitHub Pages</p>
                        </div>
                    </a>
                </div>
                <div className="projeto">
                    <a href="https://to-do-list-orcin-phi-13.vercel.app/">
                        <img src="/assets/lanchonete.png" alt="To-Do" />
                        <h1>Projeto 6</h1>
                        <div className="informacoes-projeto">
                            <h2>To-Do-List</h2>
                            <p>Projeto feito usando HTML, CSS, JavaScript e React</p>
                            <p>🔗 Ver no GitHub Pages</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projetos
