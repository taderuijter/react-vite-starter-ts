// Import React libraries
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Set types for props
export type ButtonTypes = {
  type: "button" | "internal-link" | "external-link" | "submit";
  styling: "solid" | "outline" | "transparent";
  href?: string;
  text: string;
  onClick?: () => void;
};

export const Button = ({ type, styling, href, text, onClick }: ButtonTypes) => {
  // Error message if you forget href or onClick
  useEffect(() => {
    if ((type === "button" || type === "submit") && !onClick) {
      console.error(
        "You need to pass an onClick function to the Button component when using the button or submit type.",
      );
    } else if (
      (type === "internal-link" || type === "external-link") &&
      !href
    ) {
      console.error(
        "You need to pass an href to the Button component when using the link type.",
      );
    }
  }, [type, href, onClick]);

  // Render button styling
  const renderButtonLayout = () => {
    switch (styling) {
      case "solid":
        return "text-white bg-primary border border-transparent rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
      case "outline":
        return "text-black bg-white border border-gray-300 rounded-md hover:bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
      default:
        return "text-black bg-transparent border border-transparent rounded-md hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
    }
  };

  // Render buttons type
  const renderButton = () => {
    switch (type) {
      case "button":
        return onClick ? (
          <button
            onClick={onClick}
            type="button"
            className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderButtonLayout()}`}
            aria-label={text}>
            {text}
          </button>
        ) : null;
      case "internal-link":
        return href ? (
          <Link
            to={href}
            className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderButtonLayout()}`}
            role="button"
            aria-label={text}>
            {text}
          </Link>
        ) : null;
      case "external-link":
        return href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderButtonLayout()}`}
            aria-label={text}>
            {text}
          </a>
        ) : null;
      default:
        return onClick ? (
          <button
            onClick={onClick}
            type="submit"
            className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderButtonLayout()}`}
            aria-label={text}>
            {text}
          </button>
        ) : null;
    }
  };

  return renderButton();
};
