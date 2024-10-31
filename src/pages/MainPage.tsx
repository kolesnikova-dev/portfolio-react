import React from 'react';

import { About, Skills, Projects, Contacts, SendEmail } from '../sections';
import { StyledGrid, Section, SideBySideSection } from '../components';
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
      <div className="full-width">
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
      </div>
    </div>
  );
};

