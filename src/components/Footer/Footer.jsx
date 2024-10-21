import { symbols } from '../../models/data.js';
import { Box } from '@mui/material';
import './FooterStyle.css';

export const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <Box component="footer" className='footer-container'>
      <Box className="copyright">{symbols.copyright} Veronika Kolesnikova, {year}</Box>
    </Box>
  )
}
