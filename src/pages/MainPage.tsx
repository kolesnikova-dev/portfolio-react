import React from 'react';

import Grid2 from '@mui/material/Grid2';

import { About, Skills, Projects, Contacts, SendEmail } from '../sections';
import { Section, SideBySideSection } from '../components';
import type { Sections } from '../types/sectionTypes';


const sections: Sections = {
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


export const MainPage: React.FC = () => {
  return (
    <div style={{ flexGrow: 1 }} className="full-width">
        {/* about and skills section */}
        <Grid2 className="styled-grid">
          <SideBySideSection section={sections.top} />
        </Grid2>
        {/* projects section */}
        <Grid2 className="styled-grid">
          <Section component={sections.middle.component} />
        </Grid2>
        {/* contacts section */}
        <Grid2 className="styled-grid">
          <SideBySideSection section={sections.bottom} />
        </Grid2>
    </div>
  );
};

