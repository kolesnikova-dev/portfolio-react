import React, { useState, useEffect } from 'react';
//import emailjs 
import emailjs from '@emailjs/browser';

const Form = () => {
  //initialize form state
  const [formData, setFormData] = useState({
    user_name :'',
    user_email: '',
    message: ''
  });

  const [lastEmailSent, setLastEmailSent] = useState(null);
  const [error, setError] = useState('');

  //import public key
  const public_key_emailjs = import.meta.env.VITE_PUBLIC_KEY;
  //import service id
  const service_id_emailjs = import.meta.env.VITE_SERVICE_ID;
  //import template id
  const template_id_emailjs = import.meta.env.VITE_TEMPLATE_ID; 

  // initialize emailjs with the public key
  useEffect(() => {   
    emailjs.init(public_key_emailjs);
  }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const now = new Date();

    if (lastEmailSent && (now - lastEmailSent) < 60000) {
      setError('Too many attempts. Please wait a minute before sending another email.');
      removeError();
      return;
    }

    emailjs.sendForm(service_id_emailjs, template_id_emailjs, event.target)
            .then(() => {
                console.log('Email sent');
                setLastEmailSent(new Date());
                setError('');
            }, (error) => {
                console.log('Failed to send the email.', error);
                setError('Failed to send the email.');
                removeError();
            });

    event.target.reset();
    
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };


  const removeError = () => {
    setTimeout(() => {
      setError('');
    }, 3000);
  }



  // main function-----------------------------------
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <title>Contact Form</title>

        <input type="hidden" name="contact_number" value="697483" />
        <label>Name</label>
        <input type="text" name="user_name" onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="user_email" onChange={handleChange} />
        <label>Message</label>
        <textarea name="message" onChange={handleChange}></textarea>
        <input type="submit" value="Send" />

        {error && <p className='fade-out'>{error}</p>}
    </form>
  )
}

export default Form;



  // window.onload = function() {
  //   document.getElementById('contact-form').addEventListener('submit', function(event) {
  //       event.preventDefault();
  //       // these IDs from the previous steps
  //       emailjs.sendForm('contact_service', 'contact_form', this)
  //           .then(() => {
  //               console.log('SUCCESS!');
  //           }, (error) => {
  //               console.log('FAILED...', error);
  //           });
  //   });
  // }