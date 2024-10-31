import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import { ProjectIconBox } from './IconWithTooltip/ProjectIconBox';
import { Project } from '../types';
import { regularGridStyle } from '../MUIStyles/MUIStyles';

type Props = {
  project: Project,
  fullDisplay: boolean,
  toggleDisplay: (newIndex: number) => void;
  index: number,
}

export const DisplayPreview: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
  const { title, subheader, githubLink, liveLink, thumbnails } = project;
  const projectLinks = { githubLink, liveLink };

  return (
    <Box sx={regularGridStyle(thumbnails)}>
      <div>
        {/* <CardContent> */}
          <CardHeader
          sx={{ backgroundColor: 'whitesmoke', opacity: '0.9', color: 'black' }}
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
        {/* </CardContent> */}
      </div>
    </Box>
  );

}