import React,  { useState } from 'react';

import { Typography, Grid2 as Grid } from '@mui/material';

import { DisplayFull, DisplayPreview } from '../../components/index';
import { regularGridStyle, expandedGridStyle } from '../../MUIStyles/MUIStyles';
import { projectsData } from '../../data/projectsData';
import { Project } from '../../types';

import './ProjectsStyle.css';


const FullMemoizedStyledProject = React.memo(DisplayFull);
const PreviewMemoizedStyledProject = React.memo(DisplayPreview);


const Projects: React.FC = () => {
  const [fullDisplay, setFullDisplay] = useState<boolean>(false);
  const [expandedProject, setExpandedProject] = useState<number>(-1);

  const toggleDisplay = (newIndex: number) => {
    setFullDisplay((prev) => !prev);
    setExpandedProject(newIndex);
  };

  const styledProjectProps = (project: Project, index: number) => ({
    project,
    fullDisplay,
    index,
    toggleDisplay,
    sx: fullDisplay ? expandedGridStyle : regularGridStyle(project.thumbnails),
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
          <PreviewMemoizedStyledProject
            key={index}
            {...styledProjectProps(project, index)}
          />
        ))}
      </Grid>
    );
  };

  const displayExpandedProject = () => {
    return (
      <FullMemoizedStyledProject
        {...styledProjectProps(projectsData[expandedProject], -1)}
      />
    );
  };

  return (
    <section>
      <div>
        <Typography m={1} variant="h5">
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
