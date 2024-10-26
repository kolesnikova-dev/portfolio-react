import { Paper, Grid2 as Grid } from '@mui/material';

import { lightPaperStyle } from '../pages';


type Props = {
  children: React.ReactNode,
}


export const StyledGrid: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      sx={{
        ...lightPaperStyle,
        paddingBlockStart: '2vh',
        paddingBlockEnd: '2vh',
      }}
      className="display-flex flex-center full-width"
    >
      <Grid size={10}>{children}</Grid>
    </Paper>
  );
};
