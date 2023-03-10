// Import React libraries
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import Layout from "@/components/layout/Layout";
import Container from "@/components/layout/Container";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - React Vite Starter (JS Build)</title>
      </Helmet>

      <Layout>
        <Container className="mt-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {t("pages.about.title")}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t("pages.about.content")}
          </p>
        </Container>
      </Layout>
    </>
  );
}

export default About;
