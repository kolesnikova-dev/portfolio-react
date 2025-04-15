import Box from "@mui/material/Box";

import { icons } from "../../data/icons";
import type { Project } from "../../types";
import { IconWithTooltip } from "../index";

import "./projectHeaderStyles.css";

const unfoldIconOptions = {
  true: {
    ariaLabel: "See less information",
    icon: icons.UnfoldLess,
  },
  false: {
    ariaLabel: "See more information",
    icon: icons.UnfoldMore,
  },
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
  fullDisplay: boolean;
  toggleDisplay: (newIndex: number) => void;
  index: number;
};

export const ProjectHeader: React.FC<Props> = ({
  project,
  fullDisplay,
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
        <IconWithTooltip
          icon={unfoldIconOptions[fullDisplay.toString()]}
          placement="right"
        />
      </span>
    </div>
  );

  const headerFlexDirection = fullDisplay
  ? { xs: "column" as const, sm: "column" as const, md: "row" as const }
  : { xs: "row" as const, sm: "row" as const };

  return (
    <Box
      className="display-flex flex-space bg-whitesmoke border-radius-4px pointer padding-inline-15rem padding-block-1rem"
      flexDirection={headerFlexDirection}
      onClick={handleToggleDisplay}
    >
      <div className="full-width">
        <div>{titleBox}</div>
        <p className="subheader">{subheader}</p>
      </div>

      <div
        className={`display-flex ${!fullDisplay && "center-column"} ${liveLink && "flex-gap-1vw"}`}
      >
        <IconWithTooltip
          {...githubIconOptions(githubLink)}
          placement="right"
          fullDisplay={fullDisplay}
        />
        {liveLink && (
          <IconWithTooltip
            {...liveLinkOptions(liveLink)}
            placement="right"
            fullDisplay={fullDisplay}
          />
        )}
      </div>
    </Box>
  );
};
