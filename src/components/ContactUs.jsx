import React from 'react'
import emailjs from '@emailjs/browser';

export const ContactUs = () => {


    const sendEmail = (e) => {
        e.preventDefault();
    
        //parametros: servicio de correo, template del mensaje, formulario: mediante el event se captura los datos del formulario, user ID
        emailjs.sendForm('service_6x0c5cs','template_hxusu4w',e.target,'M6-eYZ2t-SlAWJHPS')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }

  return (
    <form className='form' onSubmit={sendEmail}>
      <h2 id='form-title'>CONTACT US</h2>
        <p>
            <label htmlFor="user_name" className='label-form' >NOMBRE</label>
            <input type="text" className='input-form' id="name" name="user_name"  required />
        </p>
        <p>
            <label htmlFor="user_email" className='label-form'>CORRECO ELECTRONICO</label>
            <input type="email" id="email" className='input-form' name="user_email"  required />
        </p>
        <p>
            <label htmlFor="user_msg" className='label-form'>MENSAJE</label>
            <textarea name="user_msg" id="msg" cols="30" rows="10"></textarea>
        </p>
        <p>
          <button className="btn-form">Enviar</button>
        </p>
        <p className='msg-form' ></p>
        <hr />

    </form>
  )
}
