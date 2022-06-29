import React from 'react'

import "../Pages/css/Contactme.css"


const ContactMe = () => {
  return (
    <div className="content">

        <h1 className="logo">Contac<span>to</span></h1>

        <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                
                <form action="">
                    <p>
                        <label>Nombre y Apellido</label>
                        <input type="text" name="fullname"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label>Numero de Celular</label>
                        <input type="tel" name="phone"/>
                    </p>
                    <p>
                        <label>Asunto</label>
                        <input type="text" name="affair"/>
                    </p>
                    <p class="block">
                       <label>Mensaje</label> 
                        <textarea name="message" rows="3"></textarea>
                    </p>
                    <p class="block">
                        <button>
                            Enviar
                        </button>
                    </p>
                </form>
            </div>
            <div className="contact-info">
                <h4>More Info</h4>
                <ul className='ul-text-contact' >
                    <li><i className="fas fa-map-marker-alt"></i>Buenos aires, Argentina</li>
                    <li><i className="fas fa-phone"></i> (+54) 11 3475 0981</li>
                    <li><i className="fas fa-envelope-open-text"></i> tomsteven22@hotmail.com</li>
                </ul>
                <p className='p-text-contact'>Contactame atravez de mis redes sociales disponibles, para agendar una entrevista podes contactarme a tomsteven22@hotmail o a mi celular 1134750981.</p>
                
            </div>
        </div>

        </div>

  )
}

export default ContactMe