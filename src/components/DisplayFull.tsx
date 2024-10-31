import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Grid2 as Grid,
  TableCell, 
  TableContainer, 
} from '@mui/material';

import { ProjectIconBox } from '.';
import type { Project } from '../types/projectTypes';


type Props = {
  project: Project,
  fullDisplay: boolean,
  toggleDisplay: (newIndex: number) => void;
  index: number,
}


export const DisplayFull: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
  const { title, githubLink, liveLink, video, details, subheader } = project;
  const projectLinks = { liveLink, githubLink };

  return (
    <section className='padding-2rem'>
      {/* Top Section: title and links */}
      <Card>
        <CardContent className='no-padding no-padding-bottom'>
          <CardHeader
            className='no-padding opacity0-9'
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

      {/* Middle Section: video and thumbnails */}
      <Grid container spacing={2} className='display-flex flex-center center-column margin-top-2rem'>
          <Card>
            <CardMedia
              component="video"
              src={video}
              controls
             className='full-width border-radius-4px'
            />
          </Card>
      </Grid>

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
                  <tr key={point}>
                    <TableCell className="border">
                      <h3>
                        {point}
                      </h3>
                    </TableCell>
                    <TableCell className="border">
                      <p>
                        {detail}
                      </p>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
          
        </div>
      </div>
    </section>
  );
};
