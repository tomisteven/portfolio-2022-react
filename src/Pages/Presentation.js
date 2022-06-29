import React from 'react'
import "./css/Presentation.css"
import img from "../assets/fondo.png"
//import img from "../assets/avatar1.png"
import { Link } from 'react-router-dom';


export default function Presentation() {

  
 

  return (
    
    <div className='container-presentation'>
      <div className="contPresentacion">
          <h3 className='presentationTitle'>Tomas Steven</h3>
          <h5 className='presentationSubtitle'>Desarrollador de aplicaciones Web</h5>
          <Link to="/top-proyects">
              <button className='presentationButton'>Ver Proyectos</button>
          </Link>
          
        
    
        </div>
      <div className="contImg">
        <img src={img} alt=""/>
      </div>
    </div>
     
  )
}
