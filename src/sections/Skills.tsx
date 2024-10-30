import React, { useRef } from 'react';

import { Box, Typography, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';

// import { useIntersectionObserver } from '../utils';
import { skillsData } from '../data/skillsData';


export const Skills: React.FC = () => {
  const skillRef: React.MutableRefObject<HTMLElement | undefined> = useRef();
  // const isInView = useIntersectionObserver(skillRef);

  return (
    <section>
      <div>
        {Object.entries(skillsData).map(([skill, ReactIcon]) => (
          <Box
            ref={skillRef}
            key={skill}
            className={`display-flex flex-center `}
          >
            <Typography>{skill}</Typography>
            <Tooltip title={<p>{skill}</p>} placement="right" arrow>
              <IconButton sx={{ color: 'white' }} aria-label={skill}>
                <ReactIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        ))}
      </div>
      <Typography variant="h3">Skills</Typography>
    </section>
  );
};
