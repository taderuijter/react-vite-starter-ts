// Import React libraries
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import { Layout } from "design-system/layout/Layout/Layout";
import { Container } from "design-system/layout/Container/Container";
import { FetchUsers } from "queries/FetchUsers";

function Home() {
  const { t } = useTranslation();

  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Boilerplate - using react-query and useFetch hook</title>
      </Helmet>

      <Layout>
        <Container className="mt-8 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            {t("pages.users.title")}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t("pages.users.content")}
          </p>
          <FetchUsers />
        </Container>
      </Layout>
    </div>
  );
}

export default Home;
