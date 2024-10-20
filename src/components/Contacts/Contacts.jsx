import React from 'react';
import './ContactsStyle.css';
import Contact from './Contact';
import { useState } from 'react';
import { contactsData } from '../../models/data';

export const Contacts = () => {
  
  const [copied, setCopied] = useState(false);
 
  const copyEmail = () => {
      try { 
       // Copy the text inside the text field
      navigator.clipboard.writeText(contactsData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch(error) {
      alert(`Error: couldnt copy email: ${error}`);
    }
  };


  return (
    <section>
      <header>Links</header>
      <div className="contacts-section">

        {/* github */}
        <Contact data={contactsData.currentGithub} />

        {/* linked in */}
        <Contact data={contactsData.linkedIn} />


        {/* email container */}
        <div className="email-container" onClick={copyEmail}>
          <div className='email'>
            {contactsData.email}
          </div>
          <div className="click-to-copy">{copied ? 'copied!' : 'click to copy'}</div>

        </div>






      </div>
    </section>
  )
}
