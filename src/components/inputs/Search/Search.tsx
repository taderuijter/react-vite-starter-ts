import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

// Input type
export interface SearchProps {
  name: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = ({
  name,
  id,
  placeholder,
  disabled,
  onChange,
}: SearchProps) => {
  const [value, setValue] = useState("");

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <div className="relative mt-2 flex items-center">
      <MagnifyingGlassIcon className="absolute h-[18px] w-[18px] text-gray-400 ml-2" />
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={inputHandler}
        className="block w-full rounded-md border-0 py-1.5 px-8 sm:text-sm sm:leading-6 text-gray-900 shadow-sm text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
      />
    </div>
  );
};
