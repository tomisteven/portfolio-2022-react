import React, {useState} from 'react'
import "./css/Presentation.css"
import img from "../assets/fondo.png"
//import img from "../assets/avatar1.png"
import { Link } from 'react-router-dom';

import Loader from './Loader';


export default function Presentation() {

  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false);
  }, 1000);

 

  return (
    <>
    {
      loading ? 
      <Loader />
      :
      <div className='container-presentation'>
        <div className="contPresentacion">
            <h3 className='presentationTitle'>Tomas Steven</h3>
            <h5 className='presentationSubtitle'>Desarrollador de aplicaciones Web</h5>
            <Link className='LINK' to="/webs">
                <button className='presentationButton'>Ver Proyectos</button>
            </Link>
          </div>
        <div className="contImg">
          <img src={img} alt=""/>
        </div>
      </div>

    }
    </>
  )
}
