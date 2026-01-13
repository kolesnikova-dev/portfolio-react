import { Fragment } from "react/jsx-runtime";

import Grid2 from "@mui/material/Grid2";

import { SideBySideSection } from "../../components";
import { About, Contacts, Projects, SendEmail, Skills } from "../../sections";

import type { Sections } from "../../types/sectionTypes";

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
const ProjectsSection = sections.middle.component;

export const HomePage = () => {
  return (
    <Fragment>
      {/* About and Skills section */}
      <Grid2 className="pd-block-pos-relative">
        <SideBySideSection section={sections.top} />
      </Grid2>
      {/* Projects section */}
      <Grid2 className="pd-block-pos-relative">
        <ProjectsSection />
      </Grid2>
      {/* Contacts section */}
      <Grid2 className="pd-block-pos-relative">
        <SideBySideSection section={sections.bottom} />
      </Grid2>
    </Fragment>
  );
};
