import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contactsection.css"

// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contatsectiun() {

  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('service_x472s48', 'template_n6djzcw', form.current, 'AOa7mjkIa75hoT3sW')
      .then(() => {
          setStatus('sent');
          form.current.reset();
      }, () => {
          setStatus('error');
      });
  };

  return (
    <div className='maska'>
        <img className='pozadinaa' src="./slike/cvetsuprotno.jpg" alt="pozadina" />

        <div className='wrapConct' >
            <div className='cont'>
              <h1>CONTACT</h1>
              <p>Get in touch</p>
            </div>
         
          <div className='contactWrap'>
          <div className='left'>
            <form ref={form} onSubmit={sendEmail}>
            <div className='imput-name'>
              <label >Name</label>
              <input type="text" name="user_name" placeholder='Your Name' required />
            </div>

            <div className='imput-name'>
              <label >Email</label>
              <input type="email" name="user_email" placeholder='Your Email' required />
            </div>

            <div className='imput-name'>
              <label >Your message</label>
              <textarea name="message" rows={8} required />
            </div>

            <br />
            <input type="submit" value={status === 'sending' ? 'Sending...' : 'Send'} className='btn' disabled={status === 'sending'} />
            <div role="status" aria-live="polite">
              {status === 'sent' && <p>Thank you! Your message has been sent.</p>}
              {status === 'error' && <p>Something went wrong. Please try again or email designstarla@gmail.com.</p>}
            </div>
            </form>
          </div>
          
          </div>
        </div>
    </div>
  )
}
