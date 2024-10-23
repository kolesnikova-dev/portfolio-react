import { Contacts } from '../../sections';
import { symbols } from '../../models/data.js';
import { Box } from '@mui/material';

export const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <Box component="footer" pt={2}>
      <Box>{symbols.copyright} Veronika Kolesnikova, {year}</Box>
    </Box>
  )
}
