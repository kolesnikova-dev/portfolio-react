import React from 'react';
import NavBar from '../NavBar/NavBar';
import { symbols } from '../../models/data.js';
import './FooterStyle.css';

const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <NavBar className='footer-links'/>

      {/* social media? */}
      {/* idk what */}
      <div className="copyright">{symbols.copyright} Veronika Kolesnikova, {year}</div>
    </div>
  )
}

export default Footer;