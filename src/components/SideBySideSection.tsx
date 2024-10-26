import { Box, Grid2 as Grid } from '@mui/material';
import { Section } from './Section';
import { fullBorderGridStyle } from '../pages';
import type { SideBySideSection as SideBySide} from '../types/sectionTypes';


type Props = {
  section: SideBySide,
}


export const SideBySideSection: React.FC<Props> = ({ section }) => {
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
              {/* removed 
                        className="display-flex"
                from Section below */}
            <Section component={side.component} /> 
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
