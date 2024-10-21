import { 
  About, 
  Skills, 
  Projects, 
  Certifications, 
  Stats 
} from '../components';
import { Box, Grid2 as Grid } from '@mui/material';

const sections = { 
  top: {
    left: { component: About, key: 'about-section' },
    right: { component: Skills, key: 'skills-section' },
  },
  middle: {
   component: Projects, key: 'projects-section' 
  },
  bottom: {
    left: { component: Stats, key: 'stats-section' },
    right: { component: Certifications, key: 'certifications-section' },
  },

};

const Section = ({ component: Component }) => {
  return (
    <Box component="section">
      <Component />
    </Box>
  )
}

const SideBySideSection = ({ section }) => {
  return (
    <>
      {
       Object.values(section).map(side => (
        <Section className="display-flex" key={side.key} component={side.component} />
       ))
      }
    </>
  )
}

const gridSize = 8;

const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} className="display-flex flex-center" >
        <Grid size={gridSize}>
          <SideBySideSection section={sections.top} />
        </Grid>
        <Grid size={gridSize}>
          <Section component={sections.middle.component} />
        </Grid>
        <Grid size={gridSize}>
          <SideBySideSection section={sections.bottom} />
        </Grid>
      </Grid>
    
    </Box>
  );
};

export default MainPage;