import { DisplayFull, DisplayPreview } from '../../components/index';
import { Box } from '@mui/material'


export const Project = ({ project, fullDisplay, toggleDisplay }) => {
  const { title, githubLink, liveLink, video, details, subheader, thumbnails } = project;


  return (
    <Box className="full-width">
      {
      !fullDisplay 
      ? <DisplayPreview project={project} fullDisplay={fullDisplay} toggleDisplay={toggleDisplay}/>
      : <DisplayFull project={project} fullDisplay={fullDisplay} toggleDisplay={toggleDisplay}/>
      }
    </Box>
  );
};

