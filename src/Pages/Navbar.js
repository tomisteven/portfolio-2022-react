import React from 'react'
import "./css/Navbar.css"
import logWeb from "../assets/web.png"
import pdf from "../assets/cv.pdf"
import img_cv from "../assets/cv.png"

export default function Navbar() {

  const goHome = () => {
    window.location.href = "/"
  }
  const goProyects = () => {
    window.location.href = "/top-proyects"
  }
  const goAboutMe = () => {
    window.location.href = "/about-me"
  }
  const goWebs = () => {
    window.location.href = "/webs"
  }
    const goContact = () =>{
        window.location.href = "/contactMe"
    } 

  return (
    <div className='container-navbar'>
        <nav className='navbar'>
            <div className="contNavbarItems">
                <button onClick={goHome} style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}>
                    <h3 className='itemNavbar'>Home</h3>
                </button>


                <button onClick={goProyects} style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}>
                    <h3 className='itemNavbar'>Top Proyects</h3>
                </button>

                <button onClick={goWebs} style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}>
                    <h3 className='itemNavbar'>Webs</h3>
                </button>


                <button onClick={goAboutMe} style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}>
                    <h3 className='itemNavbar'>Quien Soy?</h3>
                </button>


                <button onClick={goContact} style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}>
                    <h3 className='itemNavbar'>Contacto</h3>
                </button>
                <button style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#fff',
                    boxShadow: 'none',
                }}>
                        <a href={pdf} style={{
                            textDecoration: 'none',
                            color: '#000',
                        }} color="#fff" target="_blank" rel="noopener noreferrer" download="TomasSteven-Cv.pdf">
                            <h6 className='itemNavbar'>Descargar Cv <img style={{
                                width: '30px',
                                marginLeft: '10px',
                                position: 'relative',
                                top: "5px"
                            }} src={img_cv} alt=""/></h6>
                            
                        </a>
                 </button>
            </div>
            <div className="contNavbarLogo">
                <img  src={logWeb} alt="web"/>
            </div>
        </nav>









    </div>
  )

}
