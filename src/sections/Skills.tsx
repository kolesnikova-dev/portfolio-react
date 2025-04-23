import Tooltip from "@mui/material/Tooltip";

import { skillsData } from "../data/skillsData";

export const Skills: React.FC = () => {
  return (
    <section>
      <header>
        <div className="display-flex flex-center flex-gap-1vw">
          {skillsData.map(({ skill, icon: SvgPath }) => (
            <h2 aria-label={skill} key={skill} className="pointer">
              <Tooltip title={<p>{skill}</p>} placement="bottom" arrow>
                {SvgPath}
              </Tooltip>
            </h2>
          ))}
        </div>
        <h2>Skills</h2>
      </header>
    </section>
  );
};
