import {
  Typography,
  CardMedia,
  CardHeader,
  TableRow,
  TableCell, 
  TableContainer,
} from '@mui/material';

import { ProjectIconBox } from '.';
import type { Project } from '../types/projectTypes';

import { getUrl } from '../utils/cloudinaryUtils';


type Props = {
  project: Project,
  fullDisplay: boolean,
  toggleDisplay: (newIndex: number) => void;
  index: number,
}


export const DisplayFull: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
  const { title, githubLink, liveLink, video, details, subheader } = project;
  if(!video) {
    throw new Error('Could not load video');
  }

  const projectLinks = { liveLink, githubLink };
  const cloudinaryUrl = getUrl(video);

  return (
    <section className='padding-2rem'>
      {/* Top Section: title and links */}
        <div className='bg-whitesmoke border-radius-4px'>
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
        </div>

      {/* Middle Section: video and thumbnails */}
          <div className='display-flex flex-center center-column margin-top-2rem'>
            <CardMedia
              component="video"
              src={cloudinaryUrl}
              controls
             className='full-width border-radius-4px'
            />
          </div>

      {/* Bottom section: project details */}
      <div className='margin-top-2rem'>
        <div className="test-background display-flex flex-center center-column"
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Project Overview
          </Typography>

         <TableContainer className="full-width">
            <table>
              <tbody>
                {Object.entries(details).map(([point, detail]) => (
                  <TableRow key={point}>
                    <TableCell className="border">
                      <h2>
                        {point}
                      </h2>
                      <p>
                        {detail}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </TableContainer>
          
        </div>
      </div>
    </section>
  );
};
