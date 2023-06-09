// Import React libraries
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import { Dashboard } from "design-system/layout/Dashboard/Dashboard";
import { Alert } from "design-system/messages/Alert/Alert";

function Home() {
  const { t } = useTranslation();

  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Boilerplate - vite, typescript, cypress & i18n</title>
      </Helmet>

      <Dashboard>
        <Alert
          type="warning"
          title="Attention needed"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        />
        <h1 className="text-4xl font-bold text-gray-900">
          {t("pages.home.title")}
        </h1>
        <p className="mt-4 text-lg text-gray-500">{t("pages.home.content")}</p>
      </Dashboard>
    </div>
  );
}

export default Home;
