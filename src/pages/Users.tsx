// Import React libraries
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import { Layout } from "components/layout/Layout/Layout";
import { Container } from "components/layout/Container/Container";
import { FetchUsers } from "queries/FetchUsers";
import { SearchInput } from "components/inputs/Search/Search";

function Home() {
  const { t } = useTranslation();

  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Boilerplate - using react-query and useFetch hook</title>
      </Helmet>

      <Layout>
        <Container style="space-y-8 py-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {t("pages.users.title")}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t("pages.users.content")}
          </p>
          <SearchInput
            name="search"
            id="search"
            placeholder="Search for a user"
            onChange={(event) => console.log(event.target.value)}
          />
          <FetchUsers />
        </Container>
      </Layout>
    </div>
  );
}

export default Home;
