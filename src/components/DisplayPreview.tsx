import { Box, Card, CardContent, CardHeader } from '@mui/material';

import { ProjectIconBox } from './IconWithTooltip/ProjectIconBox';
import { Project } from '../types';

type Props = {
  project: Project,
  fullDisplay: boolean,
  toggleDisplay: (newIndex: number) => void;
  index: number,
}

export const DisplayPreview: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
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
                index={index}
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
