import { Link } from "react-router-dom";

// Set types for props
export interface LinkProps {
  styling: "solid" | "outline" | "transparent" | "link";
  href: string;
  text: string;
}

const renderLinkLayout = (
  styling: "solid" | "outline" | "transparent" | "link",
) => {
  switch (styling) {
    case "solid":
      return "inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 text-white bg-primary border border-transparent rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
    case "outline":
      return "inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 text-black bg-white border border-gray-300 rounded-md hover:bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
    case "transparent":
      return "inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 text-black bg-transparent border border-transparent rounded-md hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
    default:
      return "inline-flex items-center justify-center text-sm font-semibold text-black bg-transparent border border-transparent hover:underline hover:underline-offset-4 focus:outline-none";
  }
};

export const InternalLink = ({ styling, href, text }: LinkProps) => (
  <Link to={href} className={`${renderLinkLayout(styling)}`} aria-label={text}>
    {text}
  </Link>
);

export const ExternalLink = ({ styling, href, text }: LinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderLinkLayout(
      styling,
    )}`}
    aria-label={text}>
    {text}
  </a>
);
