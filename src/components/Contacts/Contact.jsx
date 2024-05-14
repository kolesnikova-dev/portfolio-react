import React from 'react';
import './ContactsStyle.css';

const Contact = ({data}) => {
  const url = data.url;

  const conditionalTitle = 
      url.includes('kweeuhree') ? <div>Actively updated account:</div> :
      url.includes('firstname') ? <div>Original account:</div> : 
      null;

  return (
    <div className='link-container'>
        {conditionalTitle}
        <a href={data.url} target='_blank'>
            <img src={data.logo} alt="Link" />
        </a>
    </div>
  );
};

export default Contact;