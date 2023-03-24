// Input type
export interface RadioType {
  label: string;
  description?: string;
  srOnly?: boolean;
  required?: boolean;
  options: { id: string; value: string }[];
  onChange: (value: string) => void;
}

export const Radio = ({
  label,
  description,
  srOnly,
  required,
  options,
  onChange,
}: RadioType) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
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
      {description && <p className="text-sm text-gray-500">{description}</p>}
      <fieldset className="mt-4">
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {options.map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                id={item.id}
                name="notification-method"
                type="radio"
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                value={item.value}
                onChange={inputHandler}
              />
              <label
                htmlFor={item.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
