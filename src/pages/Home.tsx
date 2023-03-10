// Import React libraries
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import Layout from "@/components/layout/Layout";
import Container from "@/components/layout/Container";

function Home() {
  const { t } = useTranslation();

  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Boilerplate - vite, typescript, cypress & i18n</title>
      </Helmet>

      <Layout>
        <Container className="mt-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {t("pages.home.title")}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t("pages.home.content")}
          </p>
        </Container>
      </Layout>
    </div>
  );
}

export default Home;
