import { Paper, Grid2 as Grid } from '@mui/material';
import { Project } from '../index';

export const StyledProject = ({ project, sx, toggleDisplay, index, fullDisplay }) => {
    return (
      <Paper sx={sx} elevation={3} className='display-flex flex-center' >
        <Grid className='full-width'>
          <Project project={project} fullDisplay={fullDisplay} toggleDisplay={() => toggleDisplay(index)}/>
        </Grid>
      </Paper>
    )
  }