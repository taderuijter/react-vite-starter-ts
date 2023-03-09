import { useTranslation } from "react-i18next";
import { Dropdown } from "flowbite-react";

function LanguageSwitcher(): JSX.Element {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown
      label={t("components.languageSwitcher.currentLanguage", {
        lng: i18n.language,
      })}>
      <Dropdown.Item onClick={() => changeLanguage("en")}>
        {t("components.languageSwitcher.languages.en")}
      </Dropdown.Item>
      <Dropdown.Item onClick={() => changeLanguage("nl")}>
        {t("components.languageSwitcher.languages.nl")}
      </Dropdown.Item>
    </Dropdown>
  );
}

export default LanguageSwitcher;
