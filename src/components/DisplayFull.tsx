import {
  Box,
  CardMedia,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import { IconWithTooltip } from "../components/index";
import { icons } from "../data/icons";
import type { Project } from "../types/projectTypes";
import { ProjectHeader } from "./index";

import { getUrl } from "../utils/index";

const unfoldIconOptions = {
  ariaLabel: "See less information",
  icon: icons.UnfoldLess,
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

const headerFlexDirection = {
  xs: "row" as const,
  sm: "column" as const,
  md: "row" as const,
};

type Props = {
  project: Project;
  fullDisplay: boolean;
  toggleDisplay: (newIndex: number) => void;
  index: number;
};

export const DisplayFull: React.FC<Props> = ({
  project,
  fullDisplay,
  toggleDisplay,
  index,
}) => {
  const { video, details, liveLink, githubLink } = project;
  if (!video) {
    throw new Error("Could not load video");
  }

  const handleToggleDisplay = () => {
    toggleDisplay(index);
  };

  const titleBox = (
    <div>
      <span className="title blue-font">See less</span>
      <span>
        <IconWithTooltip icon={unfoldIconOptions} placement="right" />
      </span>
    </div>
  );

  const cloudinaryUrl = getUrl(video);

  return (
    <section className="padding-2rem">
      {/* Top Section: title and links */}
      <Box
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

        <div>{titleBox}</div>
      </Box>

      {/* Project box */}
      <Box display="flex" flexDirection={{ xs: "column", lg: "row" }}>
        {/* Video box */}
        <Box
          className="display-flex flex-1 flex-center flex-gap-1vw margin-top-2rem"
          flexDirection={{ xs: "column", md: "row", lg: "column" }}
        >
          {/* Title box */}
          <div>
            <span className="title">{project.title}</span>
          </div>

          {/* Middle Section: video and thumbnails */}
          <div className="width-80">
            <CardMedia
              component="video"
              src={cloudinaryUrl}
              controls
              className="border-radius-4px"
            />
          </div>
        </Box>

        {/* Bottom section: project details */}
        <div className="flex-1 padding-05rem margin-top-2rem">
          <div className="test-background flex-column center-column">
            <TableContainer>
              <table>
                <tbody>
                  {Object.entries(details).map(([point, detail]) => (
                    <TableRow key={point}>
                      <TableCell className="border">
                        <h2>{point}</h2>
                        <p>{detail}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </div>
        </div>
      </Box>
    </section>
  );
};
