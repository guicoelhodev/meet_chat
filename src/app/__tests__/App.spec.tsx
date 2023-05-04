import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { App } from "../index";

describe("Simple App test", () => {
  test("Should be render on screen", () => {
    render(<App />);

    const titleElement = screen.getByText(/Hello world/i);
    expect(titleElement).toBeInTheDocument();
  });
});
