// Set types for props
export type ButtonTypes = {
  type: "button" | "submit";
  styling: "solid" | "outline" | "transparent";
  text: string;
  onClick: () => void;
};

export const Button = ({ type, styling, text, onClick }: ButtonTypes) => {
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
        return (
          <button
            onClick={onClick}
            type="button"
            className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderButtonLayout()}`}
            aria-label={text}>
            {text}
          </button>
        );
      default:
        return (
          <button
            onClick={onClick}
            type="submit"
            className={`inline-flex items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-200 ${renderButtonLayout()}`}
            aria-label={text}>
            {text}
          </button>
        );
    }
  };

  return renderButton();
};
