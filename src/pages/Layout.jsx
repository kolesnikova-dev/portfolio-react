import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { NavBar, Footer } from '../components/index';


export const Layout = () => {
  return (
    <Box className="App">

      {/* Navigation bar */}
        <NavBar />

      {/* Main section */}
        <Outlet />

      {/* Footer */}
        <Footer />
    
    </Box>
  );
};
