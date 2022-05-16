import React from 'react'
import "./css/TopProyects.css"
import restoService from "../assets/restoservices.png"
import helpcine from "../assets/heplcine.png"
import gestionate from "../assets/gestionate.png"
import structlife from "../assets/structLife.png"

export default function TopProyects() {
  return (
    <div className='container-proyects'>
      <h3 className='title-topProyects'>Top Proyects</h3>
      <div class="contImgProyects">
        <img  className='imgPoyect' src={restoService} alt=""/>
        <img className='imgPoyect' src={helpcine} alt=""/>
        <img className='imgPoyect' src={gestionate} alt=""/>
        <img className='imgPoyect' src={structlife} alt=""/>
      </div>
    </div>
  )
}
