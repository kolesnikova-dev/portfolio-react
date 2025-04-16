import React from "react";

import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { About } from "../src/sections/index";
import { aboutData } from "../src/data/aboutData";

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
