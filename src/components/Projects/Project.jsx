import { Box, Typography, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { OpenInNewSharp, GitHub } from '@mui/icons-material';
import { UnfoldIcon } from '../UnfoldIcon/UnfoldIcon';


export const Project = ({ project, fullDisplay, toggleDisplay }) => {
  const { title, githubLink, liveLink, video, details, subheader } = project;

  const displayPreview = () => {
    return (
      <Box className="full-width">
        <Card sx={{backgroundColor: 'whitesmoke', opacity: '0.9'}}>
          <CardContent>
            <CardHeader
              action={
                <UnfoldIcon mode={fullDisplay} toggleDisplay={toggleDisplay}/>
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
                  <UnfoldIcon mode={fullDisplay} toggleDisplay={toggleDisplay}/>
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

