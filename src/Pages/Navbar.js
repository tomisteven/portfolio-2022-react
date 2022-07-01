import React from 'react'
import "./css/Navbar.css"
import logWeb from "../assets/web.png"
import pdf from "../assets/cv.pdf"
import img_cv from "../assets/cv.png"
import { Navbar, Nav, Container, Offcanvas} from "react-bootstrap"
import Image from 'react-bootstrap/Image'


export default function NavbarComponent() {


const expand = 'lg' || 'sm'
     

  return (
    <>
        
    <Navbar key={expand} bg="ligth" expand={expand} className="mb-4 mt-4">
      <Container expand={expand} fluid>
        <Navbar.Brand href="#">
            <Container className='contNavbarLogo'>
                <Image className='img-logo'  src={logWeb} />
            </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className='btn-link-boos' href="/">Inicio</Nav.Link>
              <Nav.Link className='btn-link-boos' href="/top-proyects">Top Proyectos</Nav.Link>
              <Nav.Link className='btn-link-boos' href="/webs">Webs</Nav.Link>
              <Nav.Link className='btn-link-boos' href="/about-me">Quien soy?</Nav.Link>
              <Nav.Link className='btn-link-boos' href="/contactMe">Contacto</Nav.Link>
              <a href={pdf} style={{
                            textDecoration: 'none',
                            color: '#000',
                            marginTop: '8px',
                        }} color="#fff" target="_blank" rel="noopener noreferrer" download="TomasSteven-Cv.pdf">
                            <h6 className='btn-link-boos'>Descargar Cv <img src={img_cv} alt=""/></h6>
                            
                        </a>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  
  
    </>
  )

}


/* <div className='container-navbar'>
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









    </div> */