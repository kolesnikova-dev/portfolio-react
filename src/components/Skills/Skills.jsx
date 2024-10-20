import React from 'react';
import Card from '../Card/Card';
import './SkillsStyle.css';
import { skillsData } from '../../models/data';

const Skills = () => {
  
  return (
    <section className='skills-section'>
      <header>Skills</header>
      <div className='card-section'>
      {Object.values(skillsData).map((skill, index) => (
        <Card key={skill + index} data={skill} thisClass={'skill'}/>
      ))}
      </div>
    </section>
  )
}

export default Skills;