import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { skillsData } from "../src/data/skillsData";
import { Skills } from "../src/sections/index";

describe("Skills component", () => {
  test("renders all skills of Skills section", async () => {
    render(
      <MemoryRouter>
        <Skills />
      </MemoryRouter>,
    );

    await Promise.all(
      skillsData.map(async (skill) => {
        const ariaLabel = await screen.findByLabelText(skill.skill);
        expect(ariaLabel).toBeInTheDocument();
      }),
    );
  });
});
