import type { Project } from "../../types";
import { getUrl } from "../../utils/index";
import { PreviewBox, PreviewProjectHeader } from "./internal";

type Props = {
  project: Project;
  fullDisplay: boolean;
  toggleDisplay: (newIndex: number) => void;
  index: number;
};

export const DisplayPreview: React.FC<Props> = ({
  project,
  toggleDisplay,
  index,
}) => {
  const cloudinaryUrl = project.thumbnails && getUrl(project.thumbnails);
  if (!cloudinaryUrl) {
    console.error(`${project.title} is missing its cloudinaryUrl`);
  }
  return (
    <PreviewBox thumbnails={cloudinaryUrl}>
      <PreviewProjectHeader
        project={project}
        toggleDisplay={toggleDisplay}
        index={index}
      />
    </PreviewBox>
  );
};
