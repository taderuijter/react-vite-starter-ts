import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";

// Input type
export interface PasswordProps {
  label: string;
  srOnly?: boolean;
  required?: boolean;
  name: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Password = ({
  label,
  srOnly,
  required,
  name,
  id,
  placeholder,
  disabled,
  onChange,
}: PasswordProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = () => {
    setBlurred(true);

    // Check for error after blur
    if (required && value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <div className="relative mt-2">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id}
          className={`block w-full rounded-md border-0 py-1.5 sm:text-sm sm:leading-6 ${
            error && blurred
              ? "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
              : "text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
          }`}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onBlur={handleBlur}
          onChange={inputHandler}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={togglePasswordVisibility}
          aria-label="Toggle password visibility">
          {showPassword ? (
            <EyeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
          ) : (
            <EyeSlashIcon
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
      {error && blurred && (
        <p className="mt-2 text-xs text-red-600" id="email-error">
          This field is required
        </p>
      )}
    </div>
  );
};
