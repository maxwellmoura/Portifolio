import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <NavLink className='brand' to='/'>
                <h1>Home</h1>
            </NavLink>
            <ul className='link-lista'>
                <li><NavLink to='/sobre'>
                Sobre
                </NavLink></li>
                <li><NavLink to='/linguagens'>
                Linguagens
                </NavLink></li>
                <li><NavLink to='/projetos'>
                Projetos
                </NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar