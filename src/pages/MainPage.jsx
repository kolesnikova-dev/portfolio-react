import { 
  About, 
  Skills, 
  Projects, 
  Certifications, 
  Stats 
} from '../components';
import { Box } from '@mui/material';

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
  console.log(section);
  return (
    <>
      {
       Object.values(section).map(side => (
        <Section key={side.key} component={side.component} />
       ))
      }
    </>
  )
}

const MainPage = () => {
  return (
    <>
      <SideBySideSection section={sections.top} />
      <Section component={sections.middle.component} />
      <SideBySideSection section={sections.bottom} />
    </>
  );
};

export default MainPage;