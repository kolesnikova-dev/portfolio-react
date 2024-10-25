import { Box, Typography, Card, CardMedia, CardContent, CardHeader, Grid2 as Grid, Paper } from '@mui/material';
import { ProjectIconBox } from '.';
import { testPaperStyle } from '../pages';

  
export const DisplayFull = ({ project, fullDisplay, toggleDisplay}) => {
    const { title, githubLink, liveLink, video, details, subheader } = project;
    const projectLinks = { liveLink, githubLink };

    return (
     <Box component="section" sx={{ padding: '2rem' }}>
     {/* Top Section: title and links */}
       <Card>
          <CardContent sx={{padding:'0', paddingBottom:'0'}}>
            <CardHeader
            sx={{ opacity: '0.9', paddingBottom:'0'}}
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
 
     {/* Middle Section: video and thumbnails */}
     <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
       <Grid xs={12} md={7}>
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
     <Paper elevation={2} sx={{...testPaperStyle, p: 1}} className="display-flex flex-center center-column">
       <Typography variant="h5" component="h2" gutterBottom>Project Overview</Typography>
       {details.map((detail, index) => (
         <Typography variant="body1" key={index}>{detail}</Typography>
       ))}
            </Paper>
     </Box>

   </Box>
    )}