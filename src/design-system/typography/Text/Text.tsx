import { ReactNode } from "react";

export interface TextTypes {
  children: ReactNode;
}

export const Content = ({ children }: TextTypes) => <div>{children}</div>;
