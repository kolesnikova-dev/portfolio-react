import Grid2 from '@mui/material/Grid2';

import type { SideBySideSection as SideBySide} from '../types/sectionTypes';


type Props = {
  section: SideBySide,
}

const fullBorderGridStyle = (section) => ({
  width:  {
    xs: '100%',
    sm: '100%',
    md: '40%',
  },
  '--Grid-borderWidth': '1px',
  border: 'var(--Grid-borderWidth) solid',
  borderColor: 'white',
  p: 1,
});


export const SideBySideSection: React.FC<Props> = ({ section }) => {
  return (
    <section>
      <Grid2
        container
        direction={{ xs: 'column', md: 'row' }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="display-flex flex-center"
      >
        {Object.values(section).map((side) => {
          const Component = side.component;
          return (
            <Grid2
              key={side.key}
              size={side.size}
              sx={fullBorderGridStyle}
            >
              <Component  /> 
             </Grid2>
          )
        })}
      </Grid2>
    </section>
  );
};
