import React from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twiter from '../assets/twitter.svg'
import "./css/Footer.css"


export default function Footer() {
  return (
    <div className='container-footer'>
        <div className='footer'>
            <img src={github} alt=""/>
            <img src={twiter} alt=""/>
            <img src={linkedin} alt=""/>
            
        </div>    
    </div>
  )
}
