import React from 'react'
import pdf from "../assets/cv.pdf"
import "../Pages/css/Contactme.css"
import wapp from "../assets/wapp.png"
import email from "../assets/email.png"
import linkedin from "../assets/linkedin.svg"


const ContactMe = () => {
  return (
    <div className="contactme-container">
        <div class="card-email">
            <img src={email} alt=""/>
            <h3><span>Email:</span> Tomsteven22@hotmail.com</h3>
        </div>
        <div class="card-email">
            <img src={wapp} alt=""/>
            <h3><span>Telefono Movil:</span> 1134750981</h3>
        </div>
        <div class="card-email">
            <img src={linkedin} alt=""/>
            <h3><span>Linkedin:</span> Tomisteven</h3>
        </div>
    </div>
  )
}

export default ContactMe