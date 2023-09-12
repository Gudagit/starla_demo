import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contactsection.css"

// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contatsectiun() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x472s48', 'template_n6djzcw', form.current, 'AOa7mjkIa75hoT3sW')
      .then((result) => {
          console.log(result.text);
          console.log("poslato")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='maska'>   
          
          
        <div className='wrapConct' >
        <img className='pozadinaa' src="./slike/cvetsuprotno.jpg" alt="pozadina" />

            <div className='cont'>
              <h1>CONTACT</h1>
              <p>Get in touch</p>
            </div>
         
          <div className='contactWrap'>
          <div className='left'>
            <form ref={form} onSubmit={sendEmail}>
            <div className='imput-name'>
              <label >Name</label>
              <input type="text" name="user_name" placeholder='Your Name' />
            </div>
            
            <div className='imput-name'>
              <label >Email</label>
              <input type="email" name="user_email" placeholder='Your Email' />
            </div>

            <div className='imput-name'>
              <label >Your message</label>
              <textarea name="message" rows={8} />
            </div>            
            
            <br />
            <input type="submit" value="Send" className='btn' />
            </form>
          </div>
          
          </div>
        </div>
    </div>
  )
}
