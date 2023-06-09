import { render, fireEvent, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button, ButtonProps } from "design-system/actions/Button/Button";

describe("Button", () => {
  let onClickCalled = false;
  const onClickMock = () => {
    onClickCalled = true;
  };

  const defaultProps: ButtonProps = {
    type: "button",
    styling: "solid",
    text: "Click me",
    onClick: onClickMock,
  };

  beforeEach(() => {
    onClickCalled = false;
  });

  test("renders the button with the correct text and type", () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByRole("button", { name: defaultProps.text });
    expect(button).not.toBeNull();
    expect(button.getAttribute("type")).toEqual(defaultProps.type);
  });

  test("calls onClick handler when clicked", () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByRole("button", { name: defaultProps.text });
    fireEvent.click(button);
    expect(onClickCalled).toBe(true);
  });

  test.each([
    ["solid", "bg-primary"],
    ["outline", "border-gray-300"],
    ["transparent", "bg-transparent"],
  ])("renders with the correct styling: %s", (styling, expectedClass) => {
    render(
      <Button {...defaultProps} styling={styling as ButtonProps["styling"]} />,
    );

    const button = screen.getByRole("button", { name: defaultProps.text });
    expect(button.className).toContain(expectedClass);
  });
});
