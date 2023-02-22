// Import React libraries
import { Helmet } from "react-helmet";

// Import components
import Layout from "@/components/Layout";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage - React Vite Starter (JS Build)</title>
      </Helmet>

      <Layout>
        <h1 className="text-3xl font-bold underline">Homepage</h1>
      </Layout>
    </>
  );
}

export default Home;
