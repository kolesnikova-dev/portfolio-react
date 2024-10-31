import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

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
    <div className="full-width">
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
    </div>
  );
};
