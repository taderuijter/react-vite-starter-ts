import { useState } from "react";

// Input type
export interface TextAreaType {
  label: string;
  srOnly?: boolean;
  required?: boolean;
  name: string;
  id: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const TextArea = ({
  label,
  srOnly,
  required,
  name,
  id,
  disabled,
  onChange,
}: TextAreaType) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [blurred, setBlurred] = useState(false);

  const handleBlur = () => {
    setBlurred(true);

    // Check for error after blur
    if (required && value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

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
        <textarea
          rows={4}
          name={name}
          id={id}
          className={`block w-full rounded-md border-0 py-1.5 sm:text-sm sm:leading-6 ${
            error && blurred
              ? "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
              : "text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
          }`}
          defaultValue={""}
          disabled={disabled}
          onBlur={handleBlur}
          onChange={(e) => inputHandler(e.target.value)}
        />
      </div>
      {error && blurred && (
        <p className="mt-2 text-xs text-red-600" id="email-error">
          This field is required
        </p>
      )}
    </div>
  );
};
