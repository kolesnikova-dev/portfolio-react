import { icons } from '../../data/icons';

import { IconWithTooltip } from './IconWithTooltip';


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


  return (
    <div className="display-flex flex-center center-column">
      <IconWithTooltip {...githubIconOptions(githubLink)} placement='right'/>
      <IconWithTooltip {...externalLinkOptions(liveLink)} placement='right'/>
    </div>
  );
};
