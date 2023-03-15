// Import React libraries
import { Link } from "react-router-dom";

// Set types for props
export type LinkTypes = {
  type: "internal-link" | "external-link";
  styling: "solid" | "outline" | "transparent";
  href: string;
  text: string;
};

export const InternalLink = ({ type, styling, href, text }: LinkTypes) => {
  // Render button styling
  const renderLinkLayout = () => {
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
  const renderLink = () => {
    switch (type) {
      case "internal-link":
        return (
          <Link
            to={href}
            className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderLinkLayout()}`}
            role="button"
            aria-label={text}>
            {text}
          </Link>
        );
      case "external-link":
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderLinkLayout()}`}
            aria-label={text}>
            {text}
          </a>
        );
      default:
        return null;
    }
  };

  return renderLink();
};
