import { useRef } from 'react';
import { useIntersectionObserver } from '../utils';
import { Box, Typography, Tooltip, IconButton } from '@mui/material';
import { SiTypescript, SiJavascript, SiPython, SiGit, SiReact, SiCss3, SiExpress, SiMongoose } from "react-icons/si";

const skillsData = {
  JavaScript: SiJavascript, 
  TypeScript: SiTypescript, 
  Python: SiPython, 
  Git: SiGit, 
  React: SiReact, 
  CSS: SiCss3, 
  Express: SiExpress, 
  Mongoose: SiMongoose,
};

export const Skills = () => {
  
  const skillRef = useRef();
  const isInView = useIntersectionObserver(skillRef);

  return (
    <section>
      <div>
      {Object.entries(skillsData).map(([skill, ReactIcon]) => (
        <Box ref={skillRef} key={skill} className={`display-flex flex-center ${isInView && 'delayedAppear'}`} >
          <Typography>{skill}</Typography>
          <Tooltip title={<p>{skill}</p>} placement="right" arrow>
            <IconButton fontSize="large" sx={{ color: 'white' }} aria-label={skill}>
              <ReactIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ))}
      </div>
      <Typography variant="h3">Skills</Typography>
    </section>
  )
}
