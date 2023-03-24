import React from "react";

// Set types for props
export interface TitleType {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

export const Title: React.FC<TitleType> = ({ type, text }) => {
  // Ensure the 'type' prop is a valid heading element
  const validHeading = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(type)
    ? type
    : "h1";

  // Create and return the heading element with the specified type and text
  return React.createElement(validHeading, null, text);
};
