import { useState } from 'react';
import { Box, Typography, Grid2 as Grid } from '@mui/material';
import { StyledProject } from '../../components/index';
import { regularGridStyle, expandedGridStyle } from '../../MUIStyles/MUIStyles';
import { projectsData } from '../../models/projectsData';
import './ProjectsStyle.css';

const Projects = () => {
  const [fullDisplay, setFullDisplay] = useState(false);
  const [expandedProject, setExpandedProject] = useState(-1);

  const toggleDisplay = (newIndex) => {
    setFullDisplay((prev) => !prev);
    setExpandedProject(projectsData[newIndex]);
  };

  const styledProjectProps = (project, index) => ({
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
        {Object.values(projectsData).map((project, index) => (
          <StyledProject
            key={project.title}
            {...styledProjectProps(project, index)}
          />
        ))}
      </Grid>
    );
  };

  const displayExpandedProject = () => {
    return (
      <StyledProject
        key={expandedProject.title}
        {...styledProjectProps(expandedProject, -1)}
      />
    );
  };

  return (
    <Box component="section">
      <Box>
        <Typography m={1} variant="h5">
          Projects
        </Typography>
      </Box>
      <Box className="display-flex flex-center inherit-height">
        {!fullDisplay ? displayAllProjects() : displayExpandedProject()}
      </Box>
    </Box>
  );
};

export default Projects;
