import React from "react";
import { MemoryRouter } from "react-router-dom";

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import emailjs from "@emailjs/browser";

import { Form } from "../src/components/Form/Form";
import { isTimePeriodValid } from "../src/utils/index";

// Mock emailjs
vi.mock("@emailjs/browser", () => ({
  default: {
    init: vi.fn(),
    sendForm: vi.fn(() => Promise.resolve("Success")),
  },
}));

vi.mock("../src/utils/isTimePeriodValid", () => ({
  isTimePeriodValid: vi.fn(() => true),
}));

describe("Form Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>,
    );
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders form fields correctly", () => {
    expect(screen.getByTestId("user-name")).toBeDefined();
    expect(screen.getByLabelText("Enter your email")).toBeDefined();
    expect(screen.getByLabelText("Add a message")).toBeDefined();
    expect(screen.getByLabelText("Send the form")).toBeDefined();
  });

  it("prevents rapid form submissions", async () => {
    vi.mocked(isTimePeriodValid).mockReturnValue(false);

    await userEvent.type(screen.getByLabelText("Enter your name"), "John Doe");
    await userEvent.type(
      screen.getByLabelText("Enter your email"),
      "john@example.com",
    );
    await userEvent.type(
      screen.getByLabelText("Add a message"),
      "Test message",
    );

    fireEvent.click(screen.getByLabelText("Send the form"));

    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });
});
