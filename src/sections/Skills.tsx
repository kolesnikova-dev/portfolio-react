import React, { useRef } from 'react';

import { Typography, Tooltip } from '@mui/material';

// import { useIntersectionObserver } from '../utils';
import { skillsData } from '../data/skillsData';


export const Skills: React.FC = () => {
  const skillRef: React.MutableRefObject<HTMLElement | undefined> = useRef();
  // const isInView = useIntersectionObserver(skillRef);

  return (
    <section>
      <div  className='display-flex flex-center'>
        {Object.entries(skillsData).map(([skill, svg]) => (
            <Tooltip title={<p>{skill}</p>} placement="bottom" arrow> 
              {svg}
            </Tooltip> 
        ))}
      </div>
      <Typography variant="h5">Skills</Typography>
    </section>
  );
};
