import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { aboutData } from "../src/data/aboutData";
import { About } from "../src/sections/index";

describe("About component", () => {
  test("renders about section", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    expect(screen.getByAltText("Nika's Picture")).toBeInTheDocument();

    expect(screen.getByText(aboutData.greeting)).toBeInTheDocument();
  });
});
