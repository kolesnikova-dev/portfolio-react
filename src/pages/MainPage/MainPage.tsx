import { useState } from "react";
import type React from "react";

import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const MainPage: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const ProjectsSection = sections.middle.component;

  return (
    <div className="full-width flex-grow-1">
      {/* Navigation bar -- start */}
      <div className="display-flex flex-space">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Blog" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* ToggleTheme section */}
        <div className="display-flex flex-center pd-inline-15rem">
          <ThemeToggle />
        </div>
      </div>
      {/* Navigation bar -- end */}

      {/* CustomTabPanels -- start */}
      <CustomTabPanel value={value} index={0}>
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        I am going to be a blog!!
      </CustomTabPanel>
      {/* CustomTabPanels -- end */}
    </div>
  );
};
