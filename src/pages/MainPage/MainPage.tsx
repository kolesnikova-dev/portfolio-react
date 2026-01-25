import { useState } from "react";
import type React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { ThemeToggle } from "../../components";
import { BlogPage, HomePage } from "../internal";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export const MainPage: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="full-width grow">
      {/* Navigation bar -- start */}
      <div className="display-flex flex-space">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Home and Blog tabs"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab
              label={
                <div>
                  <span className="blue-font">~/</span>Home
                </div>
              }
              {...a11yProps(0)}
            />
            <Tab label="/Blog" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* ToggleTheme section */}
        <div className="display-flex flex-center pd-inline-15rem">
          <ThemeToggle />
        </div>
      </div>
      {/* Navigation bar -- end */}

      {/* TabPanels */}
      <TabPanel value={value} index={0}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BlogPage />
      </TabPanel>
    </div>
  );
};
