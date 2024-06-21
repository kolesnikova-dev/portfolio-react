import React, { useState, useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name :'',
    email: '',
    message: ''
  });

  //import public key
  const public_key_emailjs = import.meta.env.VITE_EMAILJS;

  (function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: {public_key_emailjs},
    });
  })();
  

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', formData)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });

    event.target.reset();
    
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

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