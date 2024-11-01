// import React, { useRef } from 'react';

import { Typography, Tooltip } from '@mui/material';

// import { useIntersectionObserver } from '../utils';
import { skillsData } from '../data/skillsData';


export const Skills: React.FC = () => {
  // const skillRef: React.MutableRefObject<HTMLElement | undefined> = useRef();
  // const isInView = useIntersectionObserver(skillRef);

  return (
    <section>
      <div className='display-flex flex-center flex-gap-1vw'>
        {skillsData.map(({skill, icon: SvgPath}) => (
          <div
            // ref={skillRef}
            aria-label={skill}
            key={skill}
            className='pointer'
          >
            <Tooltip title={<p>{skill}</p>} placement="bottom" arrow>
              {SvgPath}
            </Tooltip>
          </div>
        ))}
      </div>
      <Typography variant="h3">Skills</Typography>
    </section>
  );
};
