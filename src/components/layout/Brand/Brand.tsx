// Import react libraries
import { useContext } from "react";
import { GlobalContext } from "store/GlobalContext";
import { Link } from "react-router-dom";

export const Brand = () => {
  const { state } = useContext(GlobalContext);

  return (
    <Link to="/" title="Home" aria-label="Home" className="flex">
      {state.brandImage ? (
        <img
          src={state.brandImage}
          alt={state.brandName}
          className="w-auto h-8 sm:h-10"
        />
      ) : (
        <span className="text-xl font-bold text-gray-900">
          {state.brandName}
        </span>
      )}
    </Link>
  );
};
