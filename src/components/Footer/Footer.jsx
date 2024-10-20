import { symbols } from '../../models/data.js';
import './FooterStyle.css';

export const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <div className='footer-container'>
      {/* social media? */}
      {/* idk what */}
      <div className="copyright">{symbols.copyright} Veronika Kolesnikova, {year}</div>
    </div>
  )
}
