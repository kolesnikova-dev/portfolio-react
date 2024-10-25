import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { ProjectIconBox } from './IconWithTooltip/ProjectIconBox';

export const DisplayPreview = ({ project, fullDisplay, toggleDisplay }) => {
  const { title, subheader, githubLink, liveLink } = project;
  const projectLinks = { githubLink, liveLink };

  return (
    <Box className="full-width">
      <Card sx={{ backgroundColor: 'whitesmoke', opacity: '0.9' }}>
        <CardContent>
          <CardHeader
            action={
              <ProjectIconBox
                projectLinks={projectLinks}
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
  );
};
