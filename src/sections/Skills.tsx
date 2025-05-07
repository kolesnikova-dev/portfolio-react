import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { skillsData } from "../data/skillsData";

const SKILLS_HEADER = "Skills";

export const Skills: React.FC = () => {
  const [isHovered, setHover] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const toggleHover = (skill: string) => setHover(skill);

  useEffect(() => {
    const delay = currentIndex === -1 ? 2200 : 1800; // Display header for longer than skills
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev >= skillsData.length - 1) {
          return -1;
        }
        return prev + 1;
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section>
      <div className="display-flex flex-center flex-gap-2rem">
        {skillsData.map(({ skill, icon: SvgPath }, index) => (
          <div
            className={`rd-transparent-border green-box-shadow pd-inline-15rem pd-05rem ${currentIndex === index && "glow"} hover-glow pointer`}
            key={skill}
          >
            <Box
              component="p"
              onMouseEnter={() => toggleHover(skill)}
              onMouseLeave={() => toggleHover("")}
              aria-label={skill}
              className="pointer"
            >
              {SvgPath}
            </Box>
          </div>
        ))}
      </div>

      <header>
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
