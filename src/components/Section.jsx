import { Box } from '@mui/material';

export const Section = ({ component: Component }) => {
    return (
      <Box component="section">
        <Component />
      </Box>
    )
  }
