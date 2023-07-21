// Import React libraries
import { useState, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { SearchInput } from "@nomad/react-search-input";

// Custom hooks
import { useClickOutside } from "../../../hooks/useClickOutside";

// Type checking for the Dropdown
export interface DropdownProps {
  placeholder?: string;
  search: boolean;
  options: { label: string; value: string }[];
  onChange: (item: { label: string; value: string }) => void;
}

// Component
export const DropdownInput = ({
  placeholder = "Search",
  search,
  options,
  onChange,
}: DropdownProps) => {
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

  const DropdownHandler = (item: { label: string; value: string }) => {
    setLabel(item.label);
    onChange(item);
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
          className="flex rounded-md px-4 py-2 space-x-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-gray-700"
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
                <SearchInput
                  name="search"
                  id="search"
                  placeholder={placeholder}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
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
                } block px-4 py-2 text-sm w-full text-left focus:outline-none focus:ring-0 focus:bg-gray-100`}
                onClick={() => DropdownHandler(item)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
