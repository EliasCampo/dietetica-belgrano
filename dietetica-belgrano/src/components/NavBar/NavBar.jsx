import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


  return (

    <header>

        <h1>Dietetica belgrano</h1>

        <nav>
            <ul>
                <li>Frutas secas</li>
                <li>Especias</li>
                <li>Semillas</li>
            </ul>
        </nav>

        <CartWidget/>



    </header>
  )
}

export default NavBar