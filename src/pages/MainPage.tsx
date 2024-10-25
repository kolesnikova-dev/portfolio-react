import { About, Skills, Projects, Contacts, SendEmail } from '../sections';
import { StyledGrid, Section, SideBySideSection } from '../components';
import { Box, Grid2 as Grid } from '@mui/material';

const sections = {
  top: {
    left: { component: About, size: 6, key: 'about-section' },
    right: { component: Skills, size: 4, key: 'skills-section' },
  },
  middle: {
    component: Projects,
    key: 'projects-section',
  },
  bottom: {
    left: { component: SendEmail, size: 8, key: 'certifications-section' },
    right: { component: Contacts, size: 4, key: 'contacts-section' },
  },
};

const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="full-width">
      <Grid container spacing={2} className="full-width">
        {/* about and skills section */}
        <StyledGrid>
          <SideBySideSection section={sections.top} />
        </StyledGrid>
        {/* projects section */}
        <StyledGrid>
          <Section component={sections.middle.component} />
        </StyledGrid>
        {/* contacts section */}
        <StyledGrid>
          <SideBySideSection section={sections.bottom} />
        </StyledGrid>
      </Grid>
    </Box>
  );
};

export default MainPage;
