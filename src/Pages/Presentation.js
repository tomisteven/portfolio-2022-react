import React from 'react'
import "./css/Presentation.css"
import img from "../assets/webImg.png"


export default function Presentation() {
  return (
    <div className='container'>

      <div class="contPresentacion">
        <div class="conttitleSubtitle">
          <h3 className='presentationTitle'>Tomas Steven</h3>
          <h5 className='presentationSubtitle'>Desarrollador Web</h5>
        </div>
        <button className='presentationButton' >Ver Proyectos</button>
      </div>
      <div class="contImg">
        <img src={img} alt=""/>
      </div>

    </div>
  )
}
