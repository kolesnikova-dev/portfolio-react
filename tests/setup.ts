// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "intersection-observer";
import "@testing-library/jest-dom";

import "@testing-library/jest-dom/vitest";
import { expect, vi } from "vitest";

beforeAll(() => {
  global.IntersectionObserver = vi.fn(() => ({
    root: null,
    rootMargin: "0px",
    thresholds: [0],
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
    takeRecords: vi.fn(() => []),
  }));
});

window.alert = vi.fn();
