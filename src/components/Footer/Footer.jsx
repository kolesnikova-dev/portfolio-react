import { symbols } from '../../models/data.js';
import './FooterStyle.css';

export const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <div className="copyright">{symbols.copyright} Veronika Kolesnikova, {year}</div>
    </div>
  )
}
