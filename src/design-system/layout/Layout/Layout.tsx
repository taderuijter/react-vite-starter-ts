import { Navbar } from "design-system/navigation/Navbar/Navbar";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
  </>
);
