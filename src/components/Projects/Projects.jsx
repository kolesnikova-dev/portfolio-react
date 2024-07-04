import React from 'react';
import { projectsData, symbols } from '../../models/data';
import Button from '../Button/Button';
import Project from './Project';
import './ProjectsStyle.css';
import { useState } from 'react';

const Projects = () => {

  const dataKeys = Object.keys(projectsData);
  const [currentProject, setCurrentProject] = useState(dataKeys[0]);


  const changeProjectImage = (action) => {
    const currentIndex = dataKeys.indexOf(currentProject);
    switch(action) {
      case 'backward':
        const prevIndex = (currentIndex - 1 + dataKeys.length) % dataKeys.length;
        setCurrentProject(dataKeys[prevIndex]);
        break;
      case 'forward':
        const nextIndex = (currentIndex + 1) % dataKeys.length;
        setCurrentProject(dataKeys[nextIndex]);
        break;
    }
  };

  return (
    <section className='projects-section'>
        <header>Projects</header>
    <div>
  
      <div className='projects-container'>
                  <Project data={projectsData[currentProject]} />
                  
                    {/* button container */}
                  <div className="button-container">
                    <Button thisClass='slider-button' symbol={symbols.backward} action={()=> changeProjectImage('backward')} />
                    <Button thisClass='slider-button' symbol={symbols.forward} action={()=> changeProjectImage('forward')} />
                  </div>
              </div>

      </div>

    </section>
  )
}

export default Projects;