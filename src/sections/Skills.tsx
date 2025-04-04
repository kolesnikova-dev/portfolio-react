import { Typography, Tooltip } from "@mui/material";

import { skillsData } from "../data/skillsData";

export const Skills: React.FC = () => {
  return (
    <section>
      <div className="display-flex flex-center flex-gap-1vw">
        {skillsData.map(({ skill, icon: SvgPath }) => (
          <div aria-label={skill} key={skill} className="pointer">
            <Tooltip title={<p>{skill}</p>} placement="bottom" arrow>
              {SvgPath}
            </Tooltip>
          </div>
        ))}
      </div>
      <Typography variant="h3">Skills</Typography>
    </section>
  );
};
