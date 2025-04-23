import Box from "@mui/material/Box";

import {
  githubIconOptions,
  liveLinkOptions,
  unfoldIconOptions,
} from "../../data/hoverIconOptions";
import type { Project } from "../../types";
import { IconWithTooltip } from "../index";

import "./projectHeaderStyles.css";

type Props = {
  project: Project;
  toggleDisplay: (newIndex: number) => void;
  index: number;
};

export const PreviewProjectHeader: React.FC<Props> = ({
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
