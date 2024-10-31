import React, { useRef } from 'react';

import { Typography, Tooltip } from '@mui/material';

// import { useIntersectionObserver } from '../utils';
import { skillsData } from '../data/skillsData';


export const Skills: React.FC = () => {
  const skillRef: React.MutableRefObject<HTMLElement | undefined> = useRef();
  // const isInView = useIntersectionObserver(skillRef);

  return (
    <section>
      <div>
        {Object.entries(skillsData).map(([skill, svg]) => (
          <div
            ref={skillRef}
            key={skill}
            className='display-flex flex-center'
          >
            {/* <Typography>{skill}</Typography> */}
            <Tooltip title={<p>{skill}</p>} placement="right" arrow> 
              {svg}
            </Tooltip> 
          </div>
        ))}
      </div>
      <Typography variant="h3">Skills</Typography>
    </section>
  );
};
