import Box from "@mui/material/Box";

import {
  githubIconOptions,
  liveLinkOptions,
} from "../../data/hoverIconOptions";
import type { Project } from "../../types";
import { IconWithTooltip } from "../index";

type Props = {
  project: Project;
};

export const PreviewProjectHeader: React.FC<Props> = ({ project }) => {
  const { title, githubLink, liveLink, subheader } = project;

  const headerFlexDirection = {
    xs: "column" as const,
    sm: "column" as const,
    md: "column" as const,
  };

  return (
    // Entire box
    <Box className="inline-pd-box padding-block-2rem">
      {/* Whitesmoke header */}
      <Box
        className="display-flex flex-space bg-whitesmoke inline-pd-box"
        flexDirection={headerFlexDirection}
      >
        {/* Header and external links box */}
        <Box
          className="full-width display-flex flex-center pd-block-top-1rem"
          flexDirection={{ xs: "column", md: "row", lg: "row" }}
          justifyContent={{
            xs: "space-between",
            sm: "space-evenly",
            md: "space-evenly",
          }}
        >
          {/* Header */}
          <header>
            <h1 className="padding-inline-05rem">{title}</h1>
          </header>

          {/* External links box */}
          <Box
            className={`display-flex flex-center min-height-2rem ${liveLink && "flex-gap-2rem"} padding-block-1rem`}
            flexDirection={{
              xs: "row",
              // sm: "row",
              md: "row",
              lg: "row",
            }}
          >
            {/* GitHub link */}
            <IconWithTooltip
              {...githubIconOptions(githubLink)}
              placement="right"
              fullDisplay={false}
            />
            {/* Live website link */}
            {liveLink && (
              <IconWithTooltip
                {...liveLinkOptions(liveLink)}
                placement="right"
                fullDisplay={false}
              />
            )}
          </Box>
        </Box>

        {/* Subheader */}
        <h3>{subheader}</h3>
      </Box>
    </Box>
  );
};
