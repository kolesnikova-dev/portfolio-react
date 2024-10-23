import { Contacts } from '../../sections';
import { NavBar } from '../index';
import { symbols } from '../../models/data.js';
import { Box } from '@mui/material';

export const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <Box component="footer">
      <NavBar />
      <Contacts />
      <Box mt={6}>{symbols.copyright} Veronika Kolesnikova, {year}</Box>
    </Box>
  )
}
