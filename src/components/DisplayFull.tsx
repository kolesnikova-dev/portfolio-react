import {
  Box,
  CardMedia,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import type { Project } from "../types/projectTypes";
import { ProjectHeader } from "./index";

import { getUrl } from "../utils/index";

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
  const { video, details } = project;
  if (!video) {
    throw new Error("Could not load video");
  }

  const cloudinaryUrl = getUrl(video);

  return (
    <section className="padding-2rem">
      {/* Top Section: title and links */}
      <ProjectHeader
        project={project}
        fullDisplay={fullDisplay}
        toggleDisplay={toggleDisplay}
        index={index}
      />

      <Box display="flex" flexDirection={{ xs: "column", lg: "row" }}>
        <div className="display-flex  flex-1 flex-center">
          {/* Middle Section: video and thumbnails */}
          <div className="width-80 margin-top-2rem">
            <CardMedia
              component="video"
              src={cloudinaryUrl}
              controls
              className="border-radius-4px"
            />
          </div>
        </div>

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
