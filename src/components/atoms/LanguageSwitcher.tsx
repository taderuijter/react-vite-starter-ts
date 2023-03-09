import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher(): JSX.Element {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => setIsOpen(!isOpen);

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex justify-center items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label={t("components.languageSwitcher.label") || ""}>
        <span>
          {t("components.languageSwitcher.currentLanguage", {
            lng: i18n.language,
          })}
        </span>
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu">
          <div className="py-1" role="none">
            <button
              type="button"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => changeLanguage("en")}
              role="menuitem">
              {t("components.languageSwitcher.languages.en")}
            </button>
            <button
              type="button"
              className="block text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => changeLanguage("nl")}
              role="menuitem">
              {t("components.languageSwitcher.languages.nl")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
