import React, { useState } from "react";

// Input type
export interface CheckBoxProps {
  label: string;
  srOnly?: boolean;
  required?: boolean;
  options: { id: string; value: string }[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({
  label,
  srOnly,
  required,
  options,
  onChange,
}: CheckBoxProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      const newSelectedValues = selectedValues.filter((v) => v !== value);
      setSelectedValues(newSelectedValues);
    }

    onChange(event);
  };

  return (
    <div>
      <label
        className={`block text-sm font-medium leading-6 text-gray-900 ${
          srOnly ? "srOnly" : ""
        }`}>
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <fieldset className="mt-4">
        <div className="space-y-5">
          {options.map((item) => (
            <div key={item.id} className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id={item.id}
                  aria-describedby="comments-description"
                  name={item.value}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  value={item.value}
                  onChange={handleCheckboxChange}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor={item.value}
                  className="font-medium text-gray-900">
                  {item.value}
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
