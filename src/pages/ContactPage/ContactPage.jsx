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

      <div className='display-flex flex-center get-in-touch'><div><span>Let's</span><span>get</span><span>in</span><span>touch</span></div></div>

        {/* form */}
        <Form />



      </div>

      {/* contacts, or relevant links */}
      <Contacts />
    </section>
  )
}

export default ContactPage;                                              