import React from 'react'

import "./css/Navbar.css"

import logWeb from "../assets/web.png"

export default function Navbar() {
  return (
    <div className='container'>
        <nav className='navbar'>
            <div class="contNavbarItems">
                <h3 className='itemNavbar'>Top Proyects</h3>
                <h3 className='itemNavbar'>Presentacion</h3>
                <h3 className='itemNavbar'>Webs</h3>
                <h3 className='itemNavbar'>Contacto</h3>
            </div>
            <div class="contNavbarLogo">
                <img  src={logWeb} alt="web"/>
            </div>
        </nav>









    </div>
  )

}
