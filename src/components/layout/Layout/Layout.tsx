import { Navbar } from "components/navigation/Navbar/Navbar";
import { Link } from "react-router-dom";

export interface LayoutProps {
  children: React.ReactNode;
}

const renderBrand = () => (
  <span className="text-xl font-bold text-gray-900">React Boilerplate</span>
);

const renderNavLinks = () => (
  <>
    <Link className="text-sm hover:text-slate-600" to="/">
      Home
    </Link>
    <Link className="text-sm hover:text-slate-600" to="/inputs">
      Inputs
    </Link>
    <Link className="text-sm hover:text-slate-600" to="/users">
      Users
    </Link>
  </>
);

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar
      brand={renderBrand()}
      navLinks={renderNavLinks()}
      style="bg-slate-100 py-4"
    />
    {children}
  </>
);
