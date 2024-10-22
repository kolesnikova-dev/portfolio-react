import { useState} from 'react';
import { Box, Typography, Grid2 as Grid } from '@mui/material';
import { StyledProject } from '../index';
import { darkPaperStyle, regularGridStyle } from '../../MUIStyles/MUIStyles';
import { projectsData } from '../../models/projectsData';
import './ProjectsStyle.css';

const Projects = () => {
  const [fullDisplay, setFullDisplay] = useState(false);
  const [expandedProject, setExpandedProject] = useState(-1);

  const toggleDisplay = (newIndex) => {
    setFullDisplay((prev) => !prev);
    setExpandedProject(projectsData[newIndex]);
  }

  const expandedGridStyle = {
    ...darkPaperStyle,
    border: '4px solid var(--color-pale-blue)',
    width: '100%'
  };

  const displayAllProjects = () => {
    return (
      <Grid container rowSpacing={4} columnSpacing={3} className="display-flex flex-center"> 
      {
       Object.values(projectsData).map((project, index) => (
        <StyledProject  
          key={project.title} 
          project={project} 
          fullDisplay={fullDisplay} 
          index={index}
          toggleDisplay={toggleDisplay} 
          sx={regularGridStyle(project.thumbnails)} />
       ))
       }
      </Grid>
    )
  }

  const displayExpandedProject = () => {
    return (
      <StyledProject   
        key={expandedProject.title} 
        project={expandedProject} 
        fullDisplay={fullDisplay} 
        index={-1} 
        toggleDisplay={toggleDisplay}
        sx={expandedGridStyle} 
      />
    )
  }

  return (
    <Box component="section" className="height95vh">
       <Box>
        <Typography m={1} variant="h5">Projects</Typography>
       </Box>
       <Box className="display-flex flex-center inherit-height">
        {
         !fullDisplay ? displayAllProjects() : displayExpandedProject()
        }
      </Box>

    </Box>
  )
}

export default Projects;