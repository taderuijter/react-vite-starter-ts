// Set types for props
export interface ButtonProps {
  type: "button" | "submit" | "reset";
  style?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  ariaLabel?: string;
  onClick: () => void;
}

// Define constants for button sizes
const BUTTON_SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-2 text-lg",
  xl: "px-8 py-2 text-xl",
};

export const Button = ({
  type,
  style = "text-white bg-primary border border-transparent hover:bg-secondary focus:ring-secondary",
  size = "md",
  children,
  ariaLabel = "",
  onClick,
}: ButtonProps) => (
  <button
    onClick={onClick}
    type={type === "button" ? "button" : type === "submit" ? "submit" : "reset"}
    className={`inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
    ${BUTTON_SIZES[size]} ${style}`}
    aria-label={ariaLabel}>
    {children}
  </button>
);
