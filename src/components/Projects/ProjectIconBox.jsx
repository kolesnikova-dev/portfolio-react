import { Box } from '@mui/material';
import { UnfoldMoreDoubleSharp, UnfoldLessDoubleSharp, OpenInNewSharp, GitHub } from '@mui/icons-material';
import { IconWithTooltip } from '../index';

const unfoldIconOptions = {
    true: {
      ariaLabel: "See less information",
      icon: UnfoldLessDoubleSharp,
    },
    false: {
      ariaLabel: "See more information",
      icon: UnfoldMoreDoubleSharp,
    },
  }
  
  const githubIconOptions = {
    ariaLabel: 'Navigate to Github',
    icon: GitHub,
  }
  
  const externalLinkOptions = {
    ariaLabel: 'Navigate to live website',
    icon: OpenInNewSharp,
  }
  
export const ProjectIconBox = ({ project, fullDisplay, toggleDisplay}) => {
    return (
      <Box className="display-flex flex-center center-column">
          <IconWithTooltip icon={unfoldIconOptions[fullDisplay]} onClick={toggleDisplay}/>
          <IconWithTooltip icon={githubIconOptions} link={project.githubLink} />
          <IconWithTooltip icon={externalLinkOptions} link={project.liveLink} />
      </Box>
    )
  }