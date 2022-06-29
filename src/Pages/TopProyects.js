import React from 'react'
import { useState, useEffect } from 'react'
import "./css/TopProyects.css"
import info from "../assets/informacion.png"
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { SpinnerRoundOutlined } from 'spinners-react';



export default function TopProyects() {

  const [proyects, setProyects] = useState([]);
  const [loading, setLoading] = useState(false);
    
    const getProyects = async () => {
      setLoading(true);
      const proyects = await fetch('./proyects.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const proyectsJson = await proyects.json();
      setProyects(proyectsJson);
      setLoading(false);
    }

    console.log(proyects);

    useEffect(() => {
      getProyects();
    }, []);
    

  const infoSweet = () => {
    swal({
      title: "Información",
      text: "Esta seccion es de proyectos mas complejos trabajados unicamente por mi, en cada seccion del proyecto va a tener una breve descripcion de lo que se hizo, ademas de una imagen de lo que se hizo. Para mas informacion sobre cada proyecto puedes hacer click en el boton de Ver Proyecto ",
      icon: "info",
      button: "Aceptar",
    });
  }


  return (
    <>
    {
      loading ? 
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh'
      }}>
        <SpinnerRoundOutlined  color='black'/>
      </div>
           :
    <div className='container-proyects'>
      <div className="cont-title-proyects">
        <h3 className='title-topProyects'>Top Proyects</h3>
        <button onClick={infoSweet} style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}>
          <img src={info} alt=""/>
        </button>
      </div>
      <div className="contImgProyects">
        {
          proyects.map(proyect => (
            <div key={proyect.id} className="proyects-imgs">
          <img className='imgPoyect' src={proyect.imagen} alt=""/>
          <Link to={`/proyect/${proyect.id}`}>
                <button className='button-proyect'>Ver Proyecto</button>
            </Link>
        </div>
          ))
        }
      </div>
    </div>
    }

    </>
  )
}


           