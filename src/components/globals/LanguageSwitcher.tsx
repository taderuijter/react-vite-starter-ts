import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { useClickOutside } from "@/hooks/useClickOutside";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useClickOutside(ref, closeMenu);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
    setSearchValue("");
  };

  const languageList = [
    { label: t("components.languageSwitcher.languages.en"), value: "en" },
    { label: t("components.languageSwitcher.languages.nl"), value: "nl" },
  ];

  const filteredList = languageList.filter((lang) =>
    lang.label.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <button
          type="button"
          className="flex rounded-md border px-4 py-2 space-x-2 border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="language-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleMenu}>
          <div>{t("components.languageSwitcher.currentLanguage")}</div>
          {isOpen ? (
            <ChevronUpIcon className="w-[20px] h-[20px]" />
          ) : (
            <ChevronDownIcon className="w-[20px] h-[20px]" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div className="flex items-center px-4 py-2">
              <label htmlFor="language-search" className="sr-only">
                Search for a language
              </label>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute top-0 left-0 w-[20px] h-[20px] ml-2 mt-2 text-gray-400" />
                <input
                  type="text"
                  name="language-search"
                  id="language-search"
                  className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md pl-8"
                  placeholder="Search for a language"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>

            {filteredList.map((lang) => (
              <button
                type="button"
                key={lang.value}
                className={`${
                  i18n.language === lang.value
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left`}
                onClick={() => setLanguage(lang.value)}>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
