import React from 'react';
// import components
import Contacts from '../../components/Contacts/Contacts';
import Form from '../../components/Form/Form';
//import styles
import './ContactPageStyle.css';

const ContactPage = () => {
  return (
    <section className='display-flex contact-page'>

      {/* contact form container */}
      <div className="contact-form-container">

        {/* form */}
        <Form />

        <p className='display-flex flex-center'>Let's get in touch</p>

      </div>

      {/* contacts, or relevant links */}
      <Contacts />
    </section>
  )
}

export default ContactPage;                                              