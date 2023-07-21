// Import React libraries
import { Helmet } from "react-helmet";

// Import components
import { Layout } from "components/layout/Layout/Layout";
import { Container } from "components/layout/Container/Container";

function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404: Not Found</title>
      </Helmet>

      <Layout>
        <Container>
          <h1 className="text-3xl font-bold underline">404 Not Found</h1>
        </Container>
      </Layout>
    </>
  );
}

export default NotFound;
