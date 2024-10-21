import { Box, Typography, Tooltip, IconButton } from '@mui/material';
import { SiTypescript, SiJavascript, SiPython, SiGit, SiReact, SiCss3, SiExpress, SiMongoose } from "react-icons/si";
import './SkillsStyle.css';

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
  
  return (
    <section>
      <header>Skills</header>
      <div>
      {Object.entries(skillsData).map(([skill, ReactIcon]) => (
        <Box key={skill}>
          <Typography>{skill}</Typography>
          <Tooltip title={<p>{skill}</p>} placement="bottom" arrow>
            <IconButton fontSize="large" sx={{ color: 'white' }} aria-label={skill}>
              <ReactIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ))}
      </div>
    </section>
  )
}
