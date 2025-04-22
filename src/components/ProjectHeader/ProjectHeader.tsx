import Box from "@mui/material/Box";

import { icons } from "../../data/icons";
import type { Project } from "../../types";
import { IconWithTooltip } from "../index";

import "./projectHeaderStyles.css";

const unfoldIconOptions = {
  ariaLabel: "See more information",
  icon: icons.UnfoldMore,
};

const githubIconOptions = (githubLink: string) => ({
  icon: {
    ariaLabel: "View on GitHub",
    icon: icons.GithubBlack,
  },
  link: {
    ariaLabel: "View on GitHub",
    url: githubLink,
  },
});

const liveLinkOptions = (liveLink: string) => ({
  icon: {
    ariaLabel: "Navigate to live website",
    icon: icons.ExternalLink,
  },
  link: {
    ariaLabel: "Navigate to live website",
    url: liveLink,
  },
});

type Props = {
  project: Project;
  toggleDisplay: (newIndex: number) => void;
  index: number;
};

export const ProjectHeader: React.FC<Props> = ({
  project,
  toggleDisplay,
  index,
}) => {
  const { title, githubLink, liveLink, subheader } = project;

  const handleToggleDisplay = () => {
    toggleDisplay(index);
  };

  const titleBox = (
    <div>
      <span className="title">{title}</span>
      <span>
        <IconWithTooltip icon={unfoldIconOptions} placement="right" />
      </span>
    </div>
  );

  const headerFlexDirection = {
    xs: "row" as const,
    sm: "column" as const,
    md: "row" as const,
  };

  return (
    <Box
      className="display-flex flex-space bg-whitesmoke border-radius-4px pointer padding-inline-15rem padding-block-1rem"
      flexDirection={headerFlexDirection}
      onClick={handleToggleDisplay}
    >
      <div>
        <div>{titleBox}</div>
        <p className="subheader text-left">{subheader}</p>
      </div>

      <div
        className={`display-flex center-column ${liveLink && "flex-gap-1vw"}`}
      >
        <IconWithTooltip
          {...githubIconOptions(githubLink)}
          placement="right"
          fullDisplay={false}
        />
        {liveLink && (
          <IconWithTooltip
            {...liveLinkOptions(liveLink)}
            placement="right"
            fullDisplay={false}
          />
        )}
      </div>
    </Box>
  );
};
