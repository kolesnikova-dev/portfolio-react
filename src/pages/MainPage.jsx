import React from 'react';
import Picture from '../components/Picture/Picture';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Certifications from '../components/Certifications/Certifications';
import Contacts from '../components/Contacts/Contacts';
import Stats from '../components/Stats/Stats';

const MainPage = () => {
  return (
 <>
      <Picture />
      <Skills />
      <Projects />
      <Stats />
      <Certifications />
      <Contacts />
 </>

  );
};

export default MainPage;