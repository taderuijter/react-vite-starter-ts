import { Navbar } from "components/navigation/Navbar/Navbar";
import { Link } from "react-router-dom";

export interface LayoutProps {
  children: React.ReactNode;
}

const pages = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar
      Link={Link}
      brand={
        <span className="text-xl font-bold text-gray-900">
          React Boilerplate
        </span>
      }
      pages={pages}
    />
    {children}
  </>
);
