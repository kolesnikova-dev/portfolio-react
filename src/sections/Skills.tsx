import React, { useRef } from 'react';
import { useIntersectionObserver } from '../utils';
import { Box, Typography, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { SiTypescript, SiJavascript, SiPython, SiGit, SiReact, SiCss3, SiExpress, SiMongoose } from "react-icons/si";
import { IconType } from 'react-icons';

type SkillsDataType = {
  [key: string]: IconType,
}

const skillsData: SkillsDataType = {
  JavaScript: SiJavascript, 
  TypeScript: SiTypescript, 
  Python: SiPython, 
  Git: SiGit, 
  React: SiReact, 
  CSS: SiCss3, 
  Express: SiExpress, 
  Mongoose: SiMongoose,
};

export const Skills: React.FC = () => {
  
  const skillRef: React.MutableRefObject<HTMLElement | undefined> = useRef();
  const isInView = useIntersectionObserver(skillRef);

  return (
    <section>
      <div>
      {Object.entries(skillsData).map(([skill, ReactIcon]) => (
        <Box ref={skillRef} key={skill} className={`display-flex flex-center ${isInView && 'delayedAppear'}`} >
          <Typography>{skill}</Typography>
          <Tooltip title={<p>{skill}</p>} placement="right" arrow>
            <IconButton sx={{ color: 'white' }} aria-label={skill}>
              <ReactIcon fontSize='large' />
            </IconButton>
          </Tooltip>
        </Box>
      ))}
      </div>
      <Typography variant="h3">Skills</Typography>
    </section>
  )
}
