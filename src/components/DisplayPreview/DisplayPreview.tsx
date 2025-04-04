import { Project } from "../../types";
import { getUrl } from "../../utils/index";
import { ProjectHeader } from "../index";
import { PreviewBox } from "./MUIStyles";

type Props = {
  project: Project;
  fullDisplay: boolean;
  toggleDisplay: (newIndex: number) => void;
  index: number;
};

export const DisplayPreview: React.FC<Props> = ({
  project,
  fullDisplay,
  toggleDisplay,
  index,
}) => {
  const cloudinaryUrl = getUrl(project.thumbnails);

  return (
    <PreviewBox thumbnails={cloudinaryUrl}>
      <ProjectHeader
        project={project}
        fullDisplay={fullDisplay}
        toggleDisplay={toggleDisplay}
        index={index}
      />
    </PreviewBox>
  );
};
