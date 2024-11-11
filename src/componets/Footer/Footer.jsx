import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <h2>Me envie uma mensagem!</h2>
                    <div className="redes-sociais">
                        <a href="https://wa.me/5588999760102" className="outer-shadow">
                            <img src="./assets/whatsapp.png" alt="whatsapp" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100010188225652" className="outer-shadow">
                            <img src="./assets/facebook.png" alt="facebook" />
                        </a>
                        <a href="https://github.com/maxwellmoura" className="outer-shadow github-icon">
                            <img src="./assets/github.png" alt="github" />
                        </a>
                        <a href="https://www.instagram.com/orc.dev/" className="outer-shadow">
                            <img src="./assets/instagram.png" alt="instagram" />
                        </a>
                    </div>
                    <h2>Desenvolvido por Maxwell Moura</h2>
                </div>
            </footer>
        </div>
    )
}

export default Footer
