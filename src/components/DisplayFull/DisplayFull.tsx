import { Box, CardMedia } from "@mui/material";

import type { Project } from "../../types/projectTypes";
import { getUrl } from "../../utils/index";
import { FullProjectHeader, ProjectDetails } from "./internal";

type Props = {
  project: Project;
  fullDisplay: boolean;
  toggleDisplay: (newIndex: number) => void;
  index: number;
};

export const DisplayFull: React.FC<Props> = ({
  project,
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

  const cloudinaryUrl = getUrl(video);

  return (
    <section className="pd-2rem">
      {/* Top Section: title and links */}
      <FullProjectHeader
        githubLink={githubLink}
        liveLink={liveLink}
        handleToggleDisplay={handleToggleDisplay}
      />

      {/* Project box */}
      <Box display="flex" flexDirection={{ xs: "column", xl: "row" }}>
        {/* Video box */}
        <Box
          className="display-flex flex-1 flex-center flex-gap-1rem margin-top-2rem"
          flexDirection={{
            xs: "column",
            sm: "row",
            md: "column",
          }}
        >
          {/* Title box */}
          <div>
            <h2 className="title">{project.title}</h2>
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
        <ProjectDetails details={details} />
      </Box>
    </section>
  );
};
