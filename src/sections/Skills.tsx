import React, { useRef } from 'react';

import { Typography, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';

// import { useIntersectionObserver } from '../utils';
import { skillsData } from '../data/skillsData';


export const Skills: React.FC = () => {
  const skillRef: React.MutableRefObject<HTMLElement | undefined> = useRef();
  // const isInView = useIntersectionObserver(skillRef);

  return (
    <section>
      <div className='display-flex flex-center'>
        {skillsData.map(({skill, icon: SvgPath}) => (
          <div
            // ref={skillRef}
            key={skill}
          >
            {/* <Typography>{skill}</Typography> */}
            <Tooltip title={<p>{skill}</p>} placement="right" arrow>
              {/* <IconButton sx={{ color: 'white' }} aria-label={skill}>
                <ReactIcon fontSize="large" />
              </IconButton> */}
              {SvgPath}
            </Tooltip>
          </div>
        ))}
      </div>
      <Typography variant="h3">Skills</Typography>
    </section>
  );
};
