// Import React Libraries
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Container } from "components/layout/Container/Container";

export interface NavbarProps {
  brand: React.ReactNode;
  navLinks?: React.ReactNode;
  style?: string;
}

export const Navbar = ({
  brand,
  navLinks,
  style = "bg-slate-100 py-4",
}: NavbarProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };

  return (
    <header className={style}>
      <Container style="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" title="Home" aria-label="Home" className="flex">
              {brand}
            </a>
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
            {navLinks}
          </nav>
        </div>

        {expanded && (
          <nav>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">{navLinks}</div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};
