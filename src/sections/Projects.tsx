import React,  { useState } from 'react';

import { Typography, Grid2 as Grid } from '@mui/material';

import { DisplayFull, DisplayPreview } from '../components/index';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';


const FullMemoizedProject = React.memo(DisplayFull);
const PreviewMemoizedProject = React.memo(DisplayPreview);


const Projects: React.FC = () => {
  const [fullDisplay, setFullDisplay] = useState<boolean>(false);
  const [expandedProject, setExpandedProject] = useState<number>(-1);

  const toggleDisplay = (newIndex: number) => {
    setFullDisplay((prev) => !prev);
    setExpandedProject(newIndex);
  };

  const projectProps = (project: Project, index: number) => ({
    project,
    fullDisplay,
    index,
    toggleDisplay,
  });

  const displayAllProjects = () => {
    return (
      <Grid
        container
        rowSpacing={4}
        columnSpacing={3}
        className="display-flex flex-center"
      >
        {Object.values(projectsData).map((project: Project, index: number) => (
          <PreviewMemoizedProject
            key={index}
            {...projectProps(project, index)}
          />
        ))}
      </Grid>
    );
  };

  const displayExpandedProject = () => {
    return (
      <FullMemoizedProject
        {...projectProps(projectsData[expandedProject], -1)}
      />
    );
  };

  return (
    <section className='styled-grid light-paper'>
      <div>
        <Typography mb={4} variant="h4">
          Projects
        </Typography>
      </div>
      <div className="display-flex flex-center inherit-height">
        {!fullDisplay ? displayAllProjects() : displayExpandedProject()}
      </div>
    </section>
  );
};

export default Projects;
