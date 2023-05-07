import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Username } from "..";

describe("Test Username component", () => {
  test("Should be get disabled when isEditable is false", () => {
    const { getByRole } = render(<Username isEditable={false} />);

    const button = getByRole("button");

    fireEvent.click(button);
    expect(button).toHaveAttribute("disabled");
  });

  test("Should be get enabled when isEditable is true", () => {
    const { getByRole } = render(<Username isEditable={true} />);

    const button = getByRole("button");

    fireEvent.click(button);
    expect(button).not.toHaveAttribute("disabled");
  });
});
