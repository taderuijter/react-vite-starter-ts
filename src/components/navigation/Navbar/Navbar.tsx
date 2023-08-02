import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Container } from "components/layout/Container/Container";

export interface NavbarProps {
  brand: React.ReactNode;
  pages: { name: string; href: string }[];
  Link: React.ElementType;
  style?: string;
}

export const Navbar = ({
  brand,
  pages,
  Link,
  style = "bg-white lg:bg-transparent py-4 fixed z-50 w-full",
}: NavbarProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };

  const renderNav = () =>
    pages.map((page, index) => (
      <Link
        key={index}
        to={page.href}
        className="ml-4 text-sm font-medium text-slate-900 hover:text-slate-500 lg:text-gray-200 lg:hover:text-gray-400"
        aria-current={page.name}
        itemProp="name">
        {page.name}
      </Link>
    ));

  return (
    <header className={style}>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" title="Home" aria-label="Home" className="flex">
              {brand}
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-900"
              aria-label="Toggle navigation"
              onClick={toggleExpanded}>
              {expanded ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>

          <nav className="hidden lg:items-center lg:ml-auto lg:space-x-8 lg:flex">
            {renderNav()}
          </nav>
        </div>

        {expanded && (
          <nav>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">{renderNav()}</div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};
