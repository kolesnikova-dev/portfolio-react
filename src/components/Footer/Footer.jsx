import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';


export const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <Box component="footer" pt={2}>
      <Box className="display-flex flex-center">
        <CopyrightIcon />
        <Typography variant='body1' sx={{color: 'whitesmoke'}}>
          Veronika Kolesnikova, {year}
        </Typography>
      </Box>
    </Box>
  )
}
