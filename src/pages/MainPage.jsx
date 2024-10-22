import { 
  About, 
  Skills, 
  Projects, 
  Certifications, 
  Stats 
} from '../components';
import { lightPaperStyle } from '../MUIStyles/MUIStyles';
import { Paper, Box, Grid2 as Grid } from '@mui/material';

const sections = { 
  top: {
    left: { component: About, size: 6, key: 'about-section' },
    right: { component: Skills, size: 4, key: 'skills-section' },
  },
  middle: {
   component: Projects, key: 'projects-section' 
  },
  bottom: {
    left: { component: Stats, size: 4, key: 'stats-section' },
    right: { component: Certifications, size: 8, key: 'certifications-section' },
  },

};

const fullBorderGridStyle = {
  width: '100%',
  '--Grid-borderWidth': '1px',
  borderTop: 'var(--Grid-borderWidth) solid',
  borderLeft: 'var(--Grid-borderWidth) solid',
  borderRight: 'var(--Grid-borderWidth) solid',
  borderBottom: 'var(--Grid-borderWidth) solid',
  borderColor: 'white',
  p: 1,
}

const gridSize = 10;

const Section = ({ component: Component }) => {
  return (
    <Box component="section">
      <Component />
    </Box>
  )
}

const SideBySideSection = ({ section }) => {
  return (
    <Box component="section">
      <Grid container direction='column' columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='display-flex flex-center'>
      {
       Object.values(section).map(side => (
        <Grid  key={side.key} size={side.size} sx={fullBorderGridStyle}>
          <Section className="display-flex" component={side.component} />
        </Grid>
       ))
      }
      </Grid>
    </Box>
  )
}

const StyledGrid = ({ children }) => {
  return (
    <Paper sx={lightPaperStyle} className='display-flex flex-center full-width' >
      <Grid size={gridSize} >
        {children}
      </Grid>
    </Paper>
  )
}


const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="full-width">
      <Grid container spacing={2} className="full-width" >
          <StyledGrid>
            <SideBySideSection section={sections.top} />
          </StyledGrid>
          <StyledGrid>
            <Section component={sections.middle.component} />
          </StyledGrid>
          <StyledGrid>
            <SideBySideSection section={sections.bottom} />
          </StyledGrid>
      </Grid>
    
    </Box>
  );
};

export default MainPage;