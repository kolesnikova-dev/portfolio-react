import React, { ElementType } from 'react';

import { Box } from '@mui/material';


type Props = {
  component: ElementType,
}


export const Section: React.FC<Props> = ({ component: Component }) => {
  return (
    <Box component="section">
      <Component />
    </Box>
  );
};
