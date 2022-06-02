import React from 'react'
import "./css/Webs.css"

import calculator from "../assets/calculator-web.png"
import astro from "../assets/astro.png"
import shopweb from "../assets/shopweb.png"
import tasks from "../assets/tasks.png"
import blog from "../assets/blog.png"
import web1 from "../assets/web1.png"
import tictac from "../assets/tictac.png"
import construccion from "../assets/construccion.png"

export default function Webs() {
  return (
    <div>
      <div class="cont-webs">
        <h2 className="web-title">Proyectos Web</h2>
        <div class="cont-webs-img">
          <img src={calculator} alt="webs" />
          <img src={astro} alt="webs" />
          <img src={shopweb} alt="webs" />
          <img src={tasks} alt="webs" />
          <img src={blog} alt="webs" />
          <img src={web1} alt="webs" />
          <img src={tictac} alt="webs" />
          <img src={construccion} alt="webs" />
          
      </div>
    </div>
    </div>
  )
}


/*  <article class="card">
    <div class="card__content">
      <h3 class="card__title">TITLE</h3>
      <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit! Neque
        consequatur velit...</p>
    </div>
  </article> */