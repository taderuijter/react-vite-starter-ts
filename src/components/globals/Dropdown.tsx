// Import React libraries
import { useState, useRef } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";

// Custom hooks
import { useClickOutside } from "@/hooks/useClickOutside";

// Type checking for the dropdown
export type DropdownTypes = {
  search: boolean;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
};

// Component
export const Dropdown = ({ search, options, onChange }: DropdownTypes) => {
  const [label, setLabel] = useState(options[0].label);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useClickOutside(ref, closeMenu);

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const dropdownHandler = (item: { label: string; value: string }) => {
    setLabel(item.label);
    onChange(item.value);
    setIsOpen(false);
    setSearchValue("");
  };

  const filteredDropdown = options.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <button
          type="button"
          className="flex rounded-md border px-4 py-2 space-x-2 border-gray-300 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary transition-all duration-200"
          id="language-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleMenu}>
          <div>{label}</div>
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
            {search && (
              <div className="flex items-center px-4 py-2">
                <label htmlFor="language-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute top-0 left-0 w-[20px] h-[20px] ml-2 mt-2 text-gray-400" />
                  <input
                    type="text"
                    name="language-search"
                    id="language-search"
                    className="inline-flex items-center justify-center px-8 py-2 text-sm w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
              </div>
            )}

            {filteredDropdown.map((item) => (
              <button
                type="button"
                key={item.value}
                className={`${
                  label === item.label
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                } block px-4 py-2 text-sm w-full text-left focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200`}
                onClick={() => dropdownHandler(item)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
