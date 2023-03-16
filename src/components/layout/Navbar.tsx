// Import React Libraries
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/store/LanguageContext";

// Import components
import { InternalLink, ExternalLink } from "@/components/globals/Links";
import { Dropdown } from "@/components/globals/Dropdown";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState<boolean>(false);
  const languages = useContext(LanguageContext);

  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };

  const changeLanguage = (value: string): void => {
    i18n.changeLanguage(value);
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

          <nav className="hidden lg:items-center lg:ml-16 lg:mr-auto lg:space-x-8 lg:flex">
            <InternalLink
              text={t("components.navbar.links.home")}
              href="/"
              styling="link"
            />
            <InternalLink
              text={t("components.navbar.links.about")}
              href="/about"
              styling="link"
            />
          </nav>

          <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">
            <Dropdown
              search={true}
              options={languages}
              onChange={(value) => {
                changeLanguage(value);
              }}
            />
            <ExternalLink
              text="Check on Github"
              href="https://www.github.com"
              styling="solid"
            />
          </nav>
        </div>

        {expanded && (
          <nav>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <InternalLink
                  text={t("components.navbar.links.home")}
                  href="/"
                  styling="link"
                />
                <InternalLink
                  text={t("components.navbar.links.about")}
                  href="/about"
                  styling="link"
                />

                <Dropdown
                  search={false}
                  options={languages}
                  onChange={(value) => {
                    changeLanguage(value);
                  }}
                />
                <ExternalLink
                  text="Check on Github"
                  href="https://www.github.com"
                  styling="solid"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Navbar;
