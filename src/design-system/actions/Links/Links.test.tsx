import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";
import {
  InternalLink,
  ExternalLink,
  LinkProps,
} from "design-system/actions/Links/Links";

describe("Links", () => {
  const defaultProps: LinkProps = {
    styling: "solid",
    href: "/example",
    text: "Link text",
  };

  describe("InternalLink", () => {
    test("renders the link with correct href and text", () => {
      render(
        <BrowserRouter>
          <InternalLink {...defaultProps} />
        </BrowserRouter>,
      );

      const link = screen.getByRole("link", { name: defaultProps.text });
      expect(link).not.toBeNull();
      expect(link.getAttribute("href")).toEqual(defaultProps.href);
    });

    test.each([
      ["solid", "bg-primary"],
      ["outline", "border-gray-300"],
      ["transparent", "bg-transparent"],
      ["link", "border-transparent"],
    ])("renders with the correct styling: %s", (styling, expectedClass) => {
      render(
        <BrowserRouter>
          <InternalLink
            {...defaultProps}
            styling={styling as LinkProps["styling"]}
          />
        </BrowserRouter>,
      );

      const link = screen.getByRole("link", { name: defaultProps.text });
      expect(link.className).toContain(expectedClass);
    });
  });

  describe("ExternalLink", () => {
    const externalHref = "https://example.com";

    test("renders the link with correct href and text", () => {
      render(<ExternalLink {...defaultProps} href={externalHref} />);

      const link = screen.getByRole("link", { name: defaultProps.text });
      expect(link).not.toBeNull();
      expect(link.getAttribute("href")).toEqual(externalHref);
      expect(link.getAttribute("target")).toEqual("_blank");
      expect(link.getAttribute("rel")).toEqual("noopener noreferrer");
    });

    test.each([
      ["solid", "bg-primary"],
      ["outline", "border-gray-300"],
      ["transparent", "bg-transparent"],
      ["link", "border-transparent"],
    ])("renders with the correct styling: %s", (styling, expectedClass) => {
      render(
        <ExternalLink
          {...defaultProps}
          href={externalHref}
          styling={styling as LinkProps["styling"]}
        />,
      );

      const link = screen.getByRole("link", { name: defaultProps.text });
      expect(link.className).toContain(expectedClass);
    });
  });
});
