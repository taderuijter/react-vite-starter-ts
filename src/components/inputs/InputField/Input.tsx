import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

// Input type
export interface InputProps {
  label: string;
  required?: boolean;
  type: "text" | "number" | "email" | "url" | "tel";
  name: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputField = ({
  label,
  required,
  type,
  name,
  id,
  placeholder,
  disabled,
  onChange,
}: InputProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [blurred, setBlurred] = useState(false);

  const handleBlur = () => {
    setBlurred(true);

    // Check for error after blur
    if (required && value === "") {
      setError(true);
    } else if (type === "email" && !value.includes("@")) {
      setError(true);
    } else if (type === "url") {
      try {
        new URL(value);
        setError(false);
      } catch (e) {
        setError(true);
      }
    } else if (type === "tel" && !/^\+?\d{7,14}$/.test(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative mt-2">
        <input
          type={type}
          name={name}
          id={id}
          className={`block w-full rounded-md border-0 py-1.5 sm:text-sm sm:leading-6 ${
            error && blurred
              ? "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
              : "text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
          }`}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onBlur={handleBlur}
          onChange={inputHandler}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && blurred && (
        <p className="mt-2 text-xs text-red-600" id="email-error">
          {type === "email"
            ? "Please enter a valid email address"
            : type === "url"
            ? "Please enter a valid url like: https://www.example.com"
            : type === "tel"
            ? "Please enter a valid phone number"
            : "This field is required"}
        </p>
      )}
    </div>
  );
};
