import type React from "react";

import Grid2 from "@mui/material/Grid2";

import { SideBySideSection, ThemeToggle } from "../../components";
import { About, Contacts, Projects, SendEmail, Skills } from "../../sections";
import type { Sections } from "../../types/sectionTypes";

import "./mainPageStyles.css";

const sections: Sections = {
  top: {
    left: { component: About, size: 6, key: "about-section" },
    right: { component: Skills, size: 4, key: "skills-section" },
  },
  middle: {
    component: Projects,
    key: "projects-section",
  },
  bottom: {
    left: { component: SendEmail, size: 8, key: "certifications-section" },
    right: { component: Contacts, size: 4, key: "contacts-section" },
  },
};

export const MainPage: React.FC = () => {
  const ProjectsSection = sections.middle.component;

  return (
    <div className="full-width flex-grow-1">
      {/* ToggleTheme section should live inside a navigation bar, or be housed in the same slice */}
      {/* ToggleTheme section */}
      <div className="display-flex flex-center right pd-inline-15rem">
        <ThemeToggle />
      </div>
      {/* About and Skills section */}
      <Grid2 className="styled-grid">
        <SideBySideSection section={sections.top} />
      </Grid2>
      {/* Projects section */}
      <Grid2 className="styled-grid">
        <ProjectsSection />
      </Grid2>
      {/* Contacts section */}
      <Grid2 className="styled-grid">
        <SideBySideSection section={sections.bottom} />
      </Grid2>
    </div>
  );
};
