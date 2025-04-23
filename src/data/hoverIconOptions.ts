import { icons } from "../data/svgIcons";

export const unfoldIconOptions = {
  ariaLabel: "See less information",
  icon: icons.UnfoldLess,
};

export const githubIconOptions = (githubLink: string) => ({
  icon: {
    ariaLabel: "View on GitHub",
    icon: icons.GithubBlack,
  },
  link: {
    ariaLabel: "View on GitHub",
    url: githubLink,
  },
});

export const liveLinkOptions = (liveLink: string) => ({
  icon: {
    ariaLabel: "Navigate to live website",
    icon: icons.ExternalLink,
  },
  link: {
    ariaLabel: "Navigate to live website",
    url: liveLink,
  },
});
