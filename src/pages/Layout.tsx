import React from 'react';
import { Outlet } from 'react-router-dom';

import { Paper, Box } from '@mui/material';

import { darkPaperStyle } from '../MUIStyles/MUIStyles';

import { Footer } from '../components/index';


export const Layout: React.FC = () => {
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
