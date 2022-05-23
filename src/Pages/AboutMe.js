import React from 'react';
import "./css/AboutMe.css"
import imgaboutme from '../assets/imgaboutme.jpg';

function AboutMe() {
  return (
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff1e00b7" fill-opacity="1" d="M0,288L40,261.3C80,235,160,181,240,176C320,171,400,213,480,208C560,203,640,149,720,160C800,171,880,245,960,234.7C1040,224,1120,128,1200,96C1280,64,1360,96,1400,112L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff1e00b7" fill-opacity="1" d="M0,64L24,101.3C48,139,96,213,144,224C192,235,240,181,288,170.7C336,160,384,192,432,208C480,224,528,224,576,208C624,192,672,160,720,138.7C768,117,816,107,864,117.3C912,128,960,160,1008,149.3C1056,139,1104,85,1152,85.3C1200,85,1248,139,1296,160C1344,181,1392,171,1416,165.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    </div>
  );
}

export default AboutMe;
