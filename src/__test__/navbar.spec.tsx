import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders links to the Home and About pages", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });

    expect(homeLink.getAttribute("href")).toBe("/");
    expect(aboutLink.getAttribute("href")).toBe("/about");

    expect(screen.getByTestId("navbar")).toMatchSnapshot();
  });
});
