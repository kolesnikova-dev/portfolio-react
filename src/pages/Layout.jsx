import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { NavBar, Footer } from '../components/index';

export const Layout = () => {
  return (
    <Box>
      {/* Navigation bar */}
        <NavBar />
      {/* Main section */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box component="footer">
        <Footer />
      </Box>
    </Box>
  );
};
