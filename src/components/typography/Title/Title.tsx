import React from "react";

// Set types for props
export interface TitleProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

export const Title = ({ type, text }: TitleProps) => {
  // Ensure the 'type' prop is a valid heading element
  const validHeading = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(type)
    ? type
    : "h1";

  // Create and return the heading element with the specified type and text
  return React.createElement(validHeading, null, text);
};
