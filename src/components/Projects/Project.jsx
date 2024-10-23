import { Box, Typography, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { UnfoldMoreDoubleSharp, UnfoldLessDoubleSharp } from '@mui/icons-material';
import { IconWithTooltip } from '../index';
import { ProjectIconBox } from './ProjectIconBox';

const unfoldIconOptions = {
  true: {
    ariaLabel: "See less information",
    icon: UnfoldLessDoubleSharp,
  },
  false: {
    ariaLabel: "See more information",
    icon: UnfoldMoreDoubleSharp,
  },
}

export const Project = ({ project, fullDisplay, toggleDisplay }) => {
  const { title, githubLink, liveLink, video, details, subheader } = project;

  const displayPreview = () => {
    return (
      <Box className="full-width">
        <Card sx={{backgroundColor: 'whitesmoke', opacity: '0.9'}}>
          <CardContent>
            <CardHeader
              action={
                <ProjectIconBox 
                  project={project} 
                  fullDisplay={fullDisplay} 
                  toggleDisplay={toggleDisplay}
                />
              }
              title={title}
              subheader={subheader}
            />
            </CardContent>
       </Card>
      </Box>
    )
  }


  const displayFull = () => {
   return (
      <Box className="full-width">
        <Card className="full-width"  sx={{backgroundColor: 'whitesmoke'}}>
          <CardContent>
                <CardHeader
                action={
                  <IconWithTooptip icon={unfoldIconOptions[fullDisplay]} onClick={toggleDisplay}/>
                }
                title={title}
                subheader={subheader}
              />
                </CardContent>
        </Card>
      </Box>
    )
  }

  return (
    <Box className="full-width">
      {
      !fullDisplay 
      ? displayPreview()
      : displayFull()
      }
    </Box>
  );
};

