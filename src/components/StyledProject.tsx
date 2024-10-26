import { Paper, Grid2 as Grid, SxProps } from '@mui/material';

import { DisplayFull, DisplayPreview } from './index';
import { Project } from '../types';


const displayOptions = {
  true: DisplayFull,
  false: DisplayPreview,
};

type Props = {
  project: Project,
  sx: SxProps,
  toggleDisplay: (newIndex: number) => void,
  index: number,
  fullDisplay: boolean,
}


export const StyledProject: React.FC<Props> = ({
  project,
  sx,
  toggleDisplay,
  index,
  fullDisplay,
}) => {

  const DisplayProject = displayOptions[fullDisplay.toString()];

  return (
    <Paper sx={sx} elevation={3} className="display-flex flex-center">
      <Grid className="full-width">
        <DisplayProject
          project={project}
          fullDisplay={fullDisplay}
          toggleDisplay={() => toggleDisplay(index)}
        />
      </Grid>
    </Paper>
  );
};
