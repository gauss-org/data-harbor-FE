import { describe, it, expect } from "vitest";
import { render, screen } from "@test-utils";
import Welcome from ".";

describe("Welcome component", () => {
  it("renders correctly", () => {
    render(<Welcome />);
    expect(screen.getByText("Data Harbor")).toBeInTheDocument();
  });
});
