// Imports
import { describe, it } from "vitest";
import { render } from "@testing-library/react";

// To Test
import Stepper from "@/components/Stepper";

// Tests
describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    render(<Stepper />);
  });
});
