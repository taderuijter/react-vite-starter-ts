import { useState } from "react";

// Input type
export interface SelectTypes {
  label: string;
  srOnly?: boolean;
  required?: boolean;
  name: string;
  id: string;
  defaultValue: string;
  disabled?: boolean;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export const Select = ({
  label,
  srOnly,
  required,
  name,
  id,
  defaultValue,
  disabled,
  options,
  onChange,
}: SelectTypes) => {
  const [value, setValue] = useState(defaultValue);

  const inputHandler = (value: string) => {
    setValue(value);
    onChange(value);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-sm font-medium leading-6 text-gray-900 ${
          srOnly ? "srOnly" : ""
        }`}>
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-2">
        <select
          id={id}
          name={name}
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
          defaultValue={value}
          onChange={(e) => inputHandler(e.target.value)}
          disabled={disabled}>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
