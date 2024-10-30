import { Canvas } from '@react-three/fiber';

import { Paper, Grid2 as Grid } from '@mui/material';

import { lightPaperStyle } from '../pages';
import { Particles } from './THREEJsComponents/Particles';

type Props = {
  children: React.ReactNode,
};


export const StyledGrid: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      sx={{
        ...lightPaperStyle,
        paddingBlockStart: '2vh',
        paddingBlockEnd: '2vh',
        position: 'relative',
      }}
      className="display-flex flex-center full-width"
    >
        {/* canvas -- start */}
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,  // set the particles are behind the content
          }}
        >
          <Particles />
        </Canvas>
      {/* canvas -- end */}

      <Grid size={10} style={{ zIndex: 2 }}>
        {children}
      </Grid>
    </Paper>
  );
};
