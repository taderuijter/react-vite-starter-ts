import { useState } from "react";
import { Switch } from "@headlessui/react";

// Input type
export interface ToggleType {
  label: string;
  srOnly?: boolean;
  required?: boolean;
  onChange: (value: boolean) => void;
}

export const Toggle = ({ label, srOnly, required, onChange }: ToggleType) => {
  const [enabled, setEnabled] = useState(false);

  const inputHandler = (value: boolean) => {
    setEnabled(value);
    onChange(value);
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
      <div className="relative mt-2">
        <Switch
          checked={enabled}
          onChange={() => inputHandler(!enabled)}
          onKeyPress={() => inputHandler(!enabled)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            enabled ? "bg-primary" : "bg-gray-200"
          }`}>
          <span
            aria-hidden="true"
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              enabled ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </Switch>
      </div>
    </div>
  );
};
