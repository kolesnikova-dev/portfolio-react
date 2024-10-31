import Grid2 from '@mui/material/Grid2';
import { Section } from './Section';
import { fullBorderGridStyle } from '../pages';
import type { SideBySideSection as SideBySide} from '../types/sectionTypes';


type Props = {
  section: SideBySide,
}


export const SideBySideSection: React.FC<Props> = ({ section }) => {
  return (
    <section>
      <Grid2
        container
        direction={{ xs: 'column', md: 'row' }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="display-flex flex-center"
      >
        {Object.values(section).map((side) => (
          <Grid2
            key={side.key}
            size={side.size}
            sx={fullBorderGridStyle('topSectionWidth')}
          >
            <Section component={side.component} /> 
          </Grid2>
        ))}
      </Grid2>
    </section>
  );
};
