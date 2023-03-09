// Import React libraries
import { Helmet } from "react-helmet";

// Import components
import Layout from "@/components/globals/Layout";

function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404: Not Found</title>
      </Helmet>

      <Layout>
        <h1 className="text-3xl font-bold underline">404 Not Found</h1>
      </Layout>
    </>
  );
}

export default NotFound;
