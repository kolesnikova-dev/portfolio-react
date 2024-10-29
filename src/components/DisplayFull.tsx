import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Grid2 as Grid,
  Paper,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
} from '@mui/material';

import { ProjectIconBox } from '.';
import { testPaperStyle } from '../pages';
import type { Project } from '../types/projectTypes'


type Props = {
  project: Project,
  fullDisplay: boolean,
  toggleDisplay: (newIndex: number) => void;
  index: number,
}


export const DisplayFull: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
  const { title, githubLink, liveLink, video, details, subheader } = project;
  const projectLinks = { liveLink, githubLink };
  const rows = Object.entries(details);
  return (
    <Box component="section" sx={{ padding: '2rem' }}>
      {/* Top Section: title and links */}
      <Card>
        <CardContent sx={{ padding: '0', paddingBottom: '0' }}>
          <CardHeader
            sx={{ opacity: '0.9', paddingBottom: '0' }}
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
      <Grid container spacing={2} sx={{ marginTop: '2rem' }} className='display-flex flex-center center-column'>
        <Grid>
          <Card>
            <CardMedia
              component="video"
              src={video}
              autoPlay
              controls
              sx={{ width: '100%', borderRadius: '4px' }}
            />
          </Card>
        </Grid>
      </Grid>

      {/* Bottom section: project details */}
      <Box sx={{ marginTop: '2rem' }}>
        <Paper
          elevation={2}
          sx={{ ...testPaperStyle, p: 1 }}
          className="display-flex flex-center center-column"
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Project Overview
          </Typography>

         <TableContainer className="w-full max-w-4xl mx-auto my-4">
            <Table>
              <TableBody>
                {Object.entries(details).map(([point, detail]) => (
                  <TableRow key={point} className="hover:bg-gray-50">
                    <TableCell className="border">
                      <Typography variant="h6" className="font-medium capitalize" sx={{ color: 'whitesmoke'}}>
                        {point}
                      </Typography>
                    </TableCell>
                    <TableCell className="border">
                      <Typography variant="body1" sx={{ color: 'whitesmoke'}}>
                        {detail}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
        </Paper>
      </Box>
    </Box>
  );
};
