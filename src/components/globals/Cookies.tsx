import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "@/store/GlobalContext";
import { Button } from "@/components/globals/Button";

export const Cookies = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleClose = () => {
    dispatch({ type: "TOGGLE_COOKIES", payload: false });
  };

  return (
    <>
      {state.cookies && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
          <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
            <p className="text-sm leading-6 text-gray-900">
              Our website uses cookies to improve your browsing experience and
              to personalize the content and advertisements we show you. By
              using our website, you consent to our use of cookies. You can
              manage your cookie preferences at any time through your browser
              settings.
              <Link
                to="/privacy"
                className="underline underline-offset-4 ml-2 text-primary font-semibold hover:text-secondary">
                Cookie Policy
              </Link>
            </p>
            <div className="mt-4 flex items-center gap-x-2">
              <Button
                text="Accept all"
                type="button"
                styling="solid"
                onClick={handleClose}
              />
              <Button
                text="Reject all"
                type="button"
                styling="outline"
                onClick={handleClose}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
