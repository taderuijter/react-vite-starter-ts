import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "store/GlobalContext";
import { Button } from "design-system/actions/Button/Button";

export const Cookies = () => {
  const { t } = useTranslation();
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
              {t("components.cookies.message")}
              <Link
                to="/privacy"
                className="underline underline-offset-4 ml-2 text-primary font-semibold hover:text-secondary">
                {t("components.cookies.page")}
              </Link>
            </p>
            <div className="mt-4 flex items-center gap-x-2">
              <Button
                text={t("components.cookies.accept")}
                type="button"
                styling="solid"
                onClick={handleClose}
              />
              <Button
                text={t("components.cookies.reject")}
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
