import { Box, Grid2 as Grid } from '@mui/material';
import { Section } from './Section';
import { fullBorderGridStyle } from '../pages';

export const SideBySideSection = ({ section }) => {
  return (
    <Box component="section">
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="display-flex flex-center"
      >
        {Object.values(section).map((side) => (
          <Grid
            key={side.key}
            size={side.size}
            sx={fullBorderGridStyle('topSectionWidth')}
          >
            <Section className="display-flex" component={side.component} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
