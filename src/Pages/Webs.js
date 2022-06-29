import React, {useState} from 'react'
import "./css/Webs.css"

import calculator from "../assets/calculator-web.png"
import astro from "../assets/astro.png"
import shopweb from "../assets/shopweb.png"
import tasks from "../assets/tasks.png"
import blog from "../assets/blog.png"
import web1 from "../assets/web1.png"
import crudapi from "../assets/crudapi.png"
import tictac from "../assets/tictac.png"
import construccion from "../assets/construccion.png"
import gitFilters from "../assets/gitFilters.png"
import Loader from './Loader'

export default function Webs() {

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
    <div>
      <div className="cont-webs">
        <h2 className="web-title">Proyectos Web</h2>
        <div className="cont-webs-img">
            <article className="card" style={{
              backgroundImage: `url(${calculator})`
            }} >
              <div className="card__content">
                      <h3 className="card__title">Calculadora <span className='span_title'> 2020</span></h3>
                      <p className="card__description">Realizada con Html, css y Javascript</p>
                      <a target={"_blank"} rel="noreferrer" href="https://calculadora-responsive.netlify.app/">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
            <article className="card" style={{
              backgroundImage: `url(${astro})`
            }}>
              <div class="card__content">
                      
                      <h3 className="card__title">Astro Web <span className='span_title'> 2020</span></h3>
                      <p className="card__description">Tan solo Boostrap, Html y css para el desarrollo de este sitio web responsivo y colorido</p>
                      <a target={"_blank"} rel="noreferrer" href="https://sitio-comercial.netlify.app">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
            <article className="card" style={{
              backgroundImage: `url(${shopweb})`
            }}>
              <div className="card__content">
                      <h3 className="card__title">Catalogo web <span className='span_title'> 2020</span></h3>
                      <p className="card__description">Catalogo web, realizado con Javascript y html. Tiene funciones de filtro y busqueda, por cada articulo se crea una pagina nueva.</p>
                      <a target={"_blank"} rel="noreferrer" href="https://catalogo-onlinne.netlify.app/">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
            <article className="card" style={{
              backgroundImage: `url(${web1})`
            }}>
              <div className="card__content">
                      <h3 className="card__title">Web Estudiantil <span className='span_title'> 2020</span></h3>
                      <p className="card__description">Web realizada en unas horas, inspirado en colores claros y muestra de trabajos de manera sensilla...</p>
                      <a target={"_blank"} rel="noreferrer" href="https://sitio-web-informativo.netlify.app">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
            <article className="card" style={{
              backgroundImage: `url(${tasks})`
            }}>
              <div className="card__content">
                      <h3 className="card__title">Sistema de notas <span className='span_title'> 2021</span></h3>
                      <p className="card__description">Desplagada con servidor en Heroku, html, javascript y Backend con Node, almacena,edita y borra tareas...</p>
                      <a target={"_blank"} rel="noreferrer" href="https://turnos-web.netlify.app/">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>

            <article className="card" style={{
              backgroundImage: `url(${blog})`
            }}>
              <div className="card__content">
                      <h3 className="card__title">Blog Estudiantil<span className='span_title'> 2021</span></h3>
                      <p className="card__description">Pensado en muestra de trabajos y Cartas, trabajado con Html, Javascript y css con Materialize...</p>
                      <a target={"_blank"} rel="noreferrer" href="https://blog-individual.netlify.app/">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
            <article className="card" style={{
              backgroundImage: `url(${tictac})`
            }}>
              <div className="card__content">
                      <h3 className="card__title">Ta te ti <span className='span_title'> 2022</span></h3>
                      <p className="card__description">Tateti, desarrollado con Javascript y Html, simple y divertido...</p>
                      <a target={"_blank"} rel="noreferrer" href="https://ta-te-ti-v2.netlify.app">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
            
            <article className="card" style={{
              backgroundImage: `url(${gitFilters})`
            }}>
              <div className="card__content">
                      <h3 className="card__title">Filter users Github<span className='span_title'> 2022</span></h3>
                      <p className="card__description">Filtro de busquedas de usuarios de GitHub con estadisticas y graficos</p>
                      <a target={"_blank"} rel="noreferrer" href="https://filtergitusers.netlify.app">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
            <article className="card" style={{
              backgroundImage: `url(${crudapi})`
            }}>
              <div className="card__content">
                      <h3 className="card__title">Sitio en construccion<span className='span_title'> 2022</span></h3>
                      <p className="card__description">Filtro de busquedas de usuarios de GitHub con estadisticas y graficos</p>
                      <a target={"_blank"} rel="noreferrer" href="https://calculadora-responsive.netlify.app/">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
            <article className="card" style={{
              backgroundImage: `url(${construccion})`
            }}>
              <div className="card__content">
                      <h3 className="card__title">Sitio en construccion<span className='span_title'> 2022</span></h3>
                      <p className="card__description">Filtro de busquedas de usuarios de GitHub con estadisticas y graficos</p>
                      <a target={"_blank"} rel="noreferrer" href="https://calculadora-responsive.netlify.app/">
                          <button className="card__button">Ver Proyecto</button>
                      </a>
              </div>
            </article>
      </div>
    </div>
    </div>
}
</>
  )
}


