import React from 'react';
import "./css/AboutMe.css"
import imgaboutme from '../assets/imgaboutme.jpg';

function AboutMe() {
  return (
    <div className='container-aboutme'>
      <div className="cont-aboutMe">
        <img className='contImgAbout' src={imgaboutme} alt=""/>
        <div className="contDescription">
          <h1 className='title-aboutMe'><span className='span'>Ab</span>out Me</h1>
          <p className='description-aboutme'>
          Tengo 24 años, Me dedico al desarrollo web hace 2 años, abarco tanto Front End como Back end. Ultilizo NodeJs para BackEnd y Javascript para FrontEnd. Aplico con MongoDb y SqlServer. Realice proyectos completos con ReactJs y NodeJS. Actualmente me estoy expandiendo en el mundo BackEnd. A continuacion mis proyectos...
          </p>  
        </div>
      </div>
       
    </div>
  );
}

export default AboutMe;
