import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./css/IndividualProyect.css"


export default function TopProyectsIndivudual() {

  const { id } = useParams();  
  //obtener id de la url
  
  const [proyect, setProyects] = React.useState([]);
  
  
  const getProyects = async () => {
    
    const proyects = await fetch('/proyects.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const proyectsJson = await proyects.json();
    
    const proyect = proyectsJson.filter(proyect => proyect.id === id);
    
    setProyects(proyect);
  }
  

  

  useEffect(() => {
    getProyects();
  }, []);
    


    
  return (
    <>
    
      {
        proyect.map(el => (
          <div className='container-proyects-individual'>
            <div class="column-info">
              <div className='container-proyects-individual-info'>
                <h1>{el.titulo}</h1>
                <h3>Año {el.año}</h3>
                <p>{el.descripcion}</p>
                <a className={el.url ? "btn-proyect-url" : "none"} href={el.url} target='_blank' rel='noopener noreferrer'>Ver Proyecto</a>
              </div>
              <div className='container-proyects-individual-img'>
                <img src={el.imagen} alt={el.name} />
              </div>
            </div>
            {
              el.production ? 
              <div>
                <h2  className="production_proyect">Actualmente en produccion!</h2>
              </div>
              : null
            }

            {
              el.url ?
              <>
              </>
              :
             <div className='cont-img-x-url'>
                    {
                      el.imagenes.map(imagen => (
                        <>
                        <h2 className='h2-descripcion-img'>{imagen.descripcion}</h2>
                        <img className='img-proyect-individual' src={imagen.imagen} alt='imagen proyecto'/>
                        </>
                      ))
                    }
            </div>

            }
                
              
          </div>
        
        ))
      }
    
  </>
)
}
