import React, { ReactNode } from "react";

export interface TextType {
  children: ReactNode;
}

export const Content: React.FC<TextType> = ({ children }) => (
  <div>{children}</div>
);
