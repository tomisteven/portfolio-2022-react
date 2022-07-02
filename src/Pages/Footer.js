import React from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twiter from '../assets/twitter.svg'
import "./css/Footer.css"


export default function Footer() {
  return (
    <div className='container-footer'>
        <div className='footer'>
          <a target="_blank" rel='noreferrer' href="https://github.com/tomisteven">
            <img src={github} alt=""/>
          </a>
          
            <img src={twiter} alt=""/>
         
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/tomas-steven-a5b83b20b/">
            <img src={linkedin} alt=""/>
          </a>
            
        </div>    
    </div>
  )
}
