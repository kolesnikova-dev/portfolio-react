import React from 'react';
// import components
import { 
  About, 
  Skills, 
  Projects, 
  Certifications, 
  Contacts, 
  Stats 
} from '../components';

// import certifications data
import { certificationsData } from '../models/certificationsData';

const MainPage = () => {
  return (
 <>
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Certifications data={certificationsData} header="Certifications" />
      <Contacts />
 </>

  );
};

export default MainPage;