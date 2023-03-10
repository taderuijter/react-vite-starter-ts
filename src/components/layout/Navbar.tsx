// Import React Libraries
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

// Import components
import Button from "@/components/globals/Button";
import LanguageSwitcher from "@/components/globals/LanguageSwitcher";

function Navbar(): JSX.Element {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };

  return (
    <header className="py-4 bg-slate-100">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" title="Home" aria-label="Home" className="flex">
              <span className="text-xl font-bold text-gray-900">
                React Boilerplate
              </span>
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

          <nav className="hidden lg:items-center lg:ml-16 lg:mr-auto lg:space-x-16 lg:flex">
            <Link
              to="/"
              title="Home"
              aria-label="Home"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              {t("components.navbar.links.home")}
            </Link>
            <Link
              to="/about"
              title="About"
              aria-label="About"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              {t("components.navbar.links.about")}
            </Link>
          </nav>

          <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">
            <LanguageSwitcher />
            <Button />
          </nav>
        </div>

        {expanded && (
          <nav>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <Link
                  to="/"
                  title="Home"
                  aria-label="Home"
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                  {t("components.navbar.links.home")}
                </Link>
                <Link
                  to="/about"
                  title="About"
                  aria-label="About"
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                  {t("components.navbar.links.about")}
                </Link>

                <LanguageSwitcher />
                <Button />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
export default Navbar;
