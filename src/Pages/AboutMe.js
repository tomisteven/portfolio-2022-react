import React, {useState} from 'react';
import "./css/AboutMe.css"
import imgaboutme from '../assets/avatares.png';
import icon from '../assets/icon.svg';

import react from '../assets/react.svg'
import node from '../assets/nodejs.svg'
import mongo from '../assets/mongodb.svg'
import reactrouter from '../assets/reactrouter.svg'
import redux from '../assets/redux.svg'
import html from '../assets/html5.svg'
import git from '../assets/git.svg'
import express from '../assets/express.svg'
import css3 from '../assets/css3.svg'
import Loader from './Loader';
import jest from '../assets/jest.svg'
import replit from '../assets/replit.svg'

function AboutMe() {
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
    <div className='container-aboutme'>
      <div className="cont-aboutMe">
        <img className='contImgAbout' src={imgaboutme} alt=""/>
        <div className="contDescription">
          <h1 className='title-aboutMe'><span className='span'>Ab</span>out Me</h1>
          <p className='description-aboutme'>
          Tengo 24 años, Me dedico al desarrollo web hace 2 años, abarco tanto Front End como Back end. Ultilizo NodeJs para el BackEnd y Javascript para FrontEnd. Aplico con MongoDb y SqlServer. Realice proyectos completos con ReactJs y NodeJS. Actualmente me estoy expandiendo en el mundo BackEnd. A continuacion mis proyectos...
          </p>  
        </div>
      </div>
      <h3 className='tecnologias-aboutMe'>Tecnologias</h3>
      <div className="icons-tecnologias">
        <div class="cont-img-about">
          <img src={icon} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={react} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={redux} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={mongo} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={html} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={reactrouter} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={node} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={git} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={express} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={css3} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={jest} alt=""/>
        </div>
        <div class="cont-img-about">
        <img src={replit} alt=""/>
        </div>
      </div>
       
    </div>
}
    </>
    
  );
}

export default AboutMe;
