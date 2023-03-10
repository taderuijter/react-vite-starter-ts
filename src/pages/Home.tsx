// Import React libraries
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import Layout from "@/components/layout/Layout";

function Home() {
  const { t } = useTranslation();

  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage - React Vite Starter (JS Build)</title>
      </Helmet>

      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 space-y-4">
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
