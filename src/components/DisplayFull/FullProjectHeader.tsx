import Box from "@mui/material/Box";

import {
  githubIconOptions,
  liveLinkOptions,
  unfoldIconOptions,
} from "../../data/hoverIconOptions";
import { IconWithTooltip } from "../IconWithTooltip";

const headerFlexDirection = {
  xs: "row" as const,
  sm: "row" as const,
  md: "row" as const,
};

const seeLessBox = (
  <div className="display-flex flex-center flex-gap-1rem">
    <span className="title md-font blue-font">See less</span>
    <span>
      <IconWithTooltip icon={unfoldIconOptions} placement="right" />
    </span>
  </div>
);

type Props = {
  handleToggleDisplay: () => void;
  githubLink: string;
  liveLink?: string;
};

export const FullProjectHeader: React.FC<Props> = ({
  handleToggleDisplay,
  githubLink,
  liveLink,
}) => {
  return (
    <Box
      component="header"
      className="display-flex flex-space bg-whitesmoke border-radius-4px pointer padding-inline-15rem padding-block-1rem"
      flexDirection={headerFlexDirection}
      onClick={handleToggleDisplay}
    >
      <IconWithTooltip
        {...githubIconOptions(githubLink)}
        placement="right"
        fullDisplay={true}
      />
      {liveLink && (
        <IconWithTooltip
          {...liveLinkOptions(liveLink)}
          placement="right"
          fullDisplay={true}
        />
      )}

      <div>{seeLessBox}</div>
    </Box>
  );
};
