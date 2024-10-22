import { Box, Typography, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { OpenInNewSharp, GitHub } from '@mui/icons-material';
import { UnfoldIcon } from '../UnfoldIcon/UnfoldIcon';


export const Project = ({ project, fullDisplay, toggleDisplay }) => {
  const { title, githubLink, liveLink, video, details, subheader } = project;

  const displayPreview = () => {
    return (
      <Box className="full-width">
        <Card>
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
      <Box className="height90vh full-width">
     <Card className="full-width">
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

