import { Box } from '@mui/material';
import {
  UnfoldMoreDoubleSharp,
  UnfoldLessDoubleSharp,
  OpenInNewSharp,
  GitHub,
} from '@mui/icons-material';

import { IconWithTooltip } from './IconWithTooltip';
import { SetStateAction } from 'react';

const unfoldIconOptions = {
  true: {
    ariaLabel: 'See less information',
    icon: UnfoldLessDoubleSharp,
  },
  false: {
    ariaLabel: 'See more information',
    icon: UnfoldMoreDoubleSharp,
  },
};

const githubIconOptions = {
  ariaLabel: 'View on GitHub',
  icon: GitHub,
};

const externalLinkOptions = {
  ariaLabel: 'Navigate to live website',
  icon: OpenInNewSharp,
};


export const ProjectIconBox = ({
  projectLinks,
  fullDisplay,
  toggleDisplay,
  index,
}: {
  projectLinks: {
    liveLink: string,
    githubLink: string,
  },
  fullDisplay: boolean,
  toggleDisplay: (newIndex: number) => void,
  index: number,
}) => {
  const { liveLink, githubLink } = projectLinks;

  const handleToggleDisplay = () => {
    toggleDisplay(index);
  };

  return (
    <Box className="display-flex flex-center center-column">
      <IconWithTooltip
        icon={unfoldIconOptions[fullDisplay.toString()]}
        onClick={handleToggleDisplay}
      />
      <IconWithTooltip icon={githubIconOptions} link={githubLink} />
      <IconWithTooltip icon={externalLinkOptions} link={liveLink} />
    </Box>
  );
};
