import { Outlet } from 'react-router-dom';
import { Paper, Box } from '@mui/material';
import { NavBar, Footer } from '../components/index';
import { darkPaperStyle } from '../MUIStyles/MUIStyles';

export const Layout = () => {
  return (
    <Paper sx={darkPaperStyle}>
      <Box className="App">

        {/* Navigation bar */}
          <NavBar />

        {/* Main section */}
          <Outlet />

        {/* Footer */}
          <Footer />
      
      </Box>
    </Paper>
  );
};
