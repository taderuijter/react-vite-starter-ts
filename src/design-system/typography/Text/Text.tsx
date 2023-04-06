import { ReactNode } from "react";

export interface TextTypes {
  children: ReactNode;
}

export const Text = ({ children }: TextTypes) => <div>{children}</div>;
