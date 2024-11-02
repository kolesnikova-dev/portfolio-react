import { icons } from '../../data/icons';

import { IconWithTooltip } from './IconWithTooltip';


const unfoldIconOptions = {
  true: {
    ariaLabel: 'See less information',
    icon: icons.UnfoldLess,
  },
  false: {
    ariaLabel: 'See more information',
    icon: icons.UnfoldMore,
  },
};

const githubIconOptions = (githubLink: string) => ({
  icon: {
    ariaLabel: 'View on GitHub',
    icon: icons.GithubBlack,
  }, 
  link: {
    ariaLabel: 'View on GitHub',
    url: githubLink,
  }
});

const externalLinkOptions = (liveLink: string) => ({
  icon: { 
    ariaLabel: 'Navigate to live website',
    icon: icons.ExternalLink,
  },
  link: {
    ariaLabel: 'Navigate to live website',
    url: liveLink ?? undefined,
  }
});


export const ProjectIconBox = ({
  projectLinks,
  fullDisplay,
  toggleDisplay,
  index,
}: {
  projectLinks: {
    liveLink?: string,
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
    <div className="display-flex flex-center center-column">
      <IconWithTooltip
        icon={unfoldIconOptions[fullDisplay.toString()]}
        onClick={handleToggleDisplay}
        placement='right'
      />
      <IconWithTooltip {...githubIconOptions(githubLink)} placement='right'/>
      <IconWithTooltip {...externalLinkOptions(liveLink)} placement='right'/>
    </div>
  );
};
