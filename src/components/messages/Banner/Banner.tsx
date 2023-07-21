import { XMarkIcon } from "@heroicons/react/20/solid";

// Set types for props
export interface BannerProps {
  children: React.ReactNode;
  toggle: boolean;
  handleToggle: (value: boolean) => void;
}

export const Banner = ({ children, toggle, handleToggle }: BannerProps) => {
  const handleClose = () => {
    handleToggle(!toggle);
  };

  return (
    <>
      {toggle && (
        <div className="flex items-center gap-x-6 bg-slate-900 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
          <p className="text-sm leading-6 text-white">{children}</p>
          <div className="flex flex-1 justify-end">
            <button
              onClick={handleClose}
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
