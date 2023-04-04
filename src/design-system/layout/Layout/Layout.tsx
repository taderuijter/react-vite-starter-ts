import Navbar from "design-system/navigation/Navbar/Navbar";

export interface LayoutTypes {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutTypes) => (
  <>
    <Navbar />
    {children}
  </>
);
