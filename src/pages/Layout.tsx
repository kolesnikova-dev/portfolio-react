import { Outlet } from 'react-router-dom';
import { Paper, Box } from '@mui/material';
import { Footer } from '../components/index';
import { darkPaperStyle } from '../MUIStyles/MUIStyles';

export const Layout = () => {
  return (
    <Paper sx={darkPaperStyle}>
      <Box className="App">
        {/* Main section */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </Box>
    </Paper>
  );
};
