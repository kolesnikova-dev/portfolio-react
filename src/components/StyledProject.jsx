import { Paper, Grid2 as Grid } from '@mui/material';
import { DisplayFull, DisplayPreview } from '../components/index';
import {  } from './DisplayFull';

const displayOptions = {
  true: DisplayFull,
  false: DisplayPreview,
}

export const StyledProject = ({ project, sx, toggleDisplay, index, fullDisplay }) => {

  const DisplayProject = displayOptions[fullDisplay];

    return (
      <Paper sx={sx} elevation={3} className='display-flex flex-center' >
        <Grid className='full-width'>
          <DisplayProject project={project} fullDisplay={fullDisplay} toggleDisplay={() => toggleDisplay(index)} />
        </Grid>
      </Paper>
    )
  }