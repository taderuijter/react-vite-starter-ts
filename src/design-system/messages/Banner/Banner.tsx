import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { GlobalContext } from "store/GlobalContext";

// Set types for props
export interface BannerProps {
  href?: string;
  children: React.ReactNode;
}

export const Banner = ({ href, children }: BannerProps) => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleClose = () => {
    dispatch({ type: "TOGGLE_BANNER", payload: false });
  };

  return (
    <>
      {state.banner && (
        <div className="flex items-center gap-x-6 bg-slate-900 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
          <p className="text-sm leading-6 text-white">
            {href ? <Link to={href}>{children}</Link> : <>{children}</>}
          </p>
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
