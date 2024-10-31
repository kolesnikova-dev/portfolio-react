import Grid2 from '@mui/material/Grid2';

import { lightPaperStyle } from '../pages';

type Props = {
  children: React.ReactNode,
};


export const StyledGrid: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        ...lightPaperStyle,
        paddingBlockStart: '2vh',
        paddingBlockEnd: '2vh',
        position: 'relative',
      }}
      className="display-flex flex-center full-width"
    >
      <Grid2 size={10} style={{ zIndex: 2 }}>
        {children}
      </Grid2>
    </div>
  );
};
