import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { skillsData } from "../data/skillsData";

const SKILLS_HEADER = "Skills";
const HEADER_INDEX = -1;

export const Skills: React.FC = () => {
  const [isHovered, setHover] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(HEADER_INDEX);

  const toggleHover = (skill: string) => setHover(skill);

  useEffect(() => {
    const delay = currentIndex === HEADER_INDEX ? 2200 : 1800; // Display header for longer than skills
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev >= skillsData.length - 1) {
          return HEADER_INDEX;
        }
        return prev + 1;
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section>
      {/* All skills container */}
      <Box
        className="display-flex flex-center flex-gap-2rem"
        flexWrap={{ xs: "wrap", lg: "nowrap" }}
      >
        {skillsData.map(({ skill, icon: SvgPath }, index) => (
          // A specific skill container -- green shadow box
          <div
            className={`rd-transparent-border green-box-shadow p-6 ${currentIndex === index && "glow"} hover-glow pointer`}
            key={skill}
          >
            {/* A specific skill */}
            <Box
              component="p"
              onMouseEnter={() => toggleHover(skill)}
              onMouseLeave={() => toggleHover("")}
              aria-label={skill}
              className="pointer"
            >
              {/* Skill svg */}
              {SvgPath}
            </Box>
          </div>
        ))}
      </Box>

      <header className="pt-3">
        <h2>
          {isHovered
            ? isHovered
            : currentIndex >= 0
              ? skillsData[currentIndex].skill
              : SKILLS_HEADER}
        </h2>
      </header>
    </section>
  );
};
