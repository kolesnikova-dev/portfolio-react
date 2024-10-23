import { 
  About, 
  Skills, 
  Projects, 
  Contacts 
} from '../sections';
import { lightPaperStyle, fullBorderGridStyle } from '../MUIStyles/MUIStyles';
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
   component: Contacts, key: 'contacts-section' 
    // left: { component: Certifications, size: 8, key: 'certifications-section' },
    // right: { component: Contacts, size: 4, key: 'contacts-section' },
  },

};

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
      <Grid container direction={{xs: 'column', md: 'row'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='display-flex flex-center'>
      {
       Object.values(section).map(side => (
        <Grid  key={side.key} size={side.size} sx={fullBorderGridStyle('topSectionWidth')}>
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
    <Paper sx={{...lightPaperStyle, paddingBlockStart: '2vh', paddingBlockEnd: '2vh'}} className='display-flex flex-center full-width' >
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
        {/* about and skills section */}
          <StyledGrid>
            <SideBySideSection section={sections.top} />
          </StyledGrid>
          {/* projects section */}
          <StyledGrid>
            <Section component={sections.middle.component} />
          </StyledGrid>
          {/* contacts section */}
          {/* <StyledGrid>
            <Section component={sections.bottom.component} />
          </StyledGrid> */}
      </Grid>
    
    </Box>
  );
};

export default MainPage;