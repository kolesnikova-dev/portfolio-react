import Box from "@mui/material/Box";

import {
  githubIconOptions,
  liveLinkOptions,
  unfoldIconOptions,
} from "../../data/hoverIconOptions";
import { IconWithTooltip } from "../IconWithTooltip";

const seeLessBox = (
  <div className="display-flex flex-center flex-gap-1rem">
    <span className="title md-font blue-font">See less</span>
    <span>
      <IconWithTooltip icon={unfoldIconOptions} placement="right" />
    </span>
  </div>
);

type Props = {
  handleToggleDisplay: (e) => void;
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
      className="display-flex flex-space bg-whitesmoke border-radius-4px pointer pd-inline-15rem pd-block-1rem"
      flexDirection="row"
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

      {seeLessBox}
    </Box>
  );
};
