// Import React libraries
import { Helmet } from "react-helmet";

// Import components
import Layout from "@/components/globals/Layout";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - React Vite Starter (JS Build)</title>
      </Helmet>

      <Layout>
        <h1 className="text-3xl font-bold underline">About</h1>
      </Layout>
    </>
  );
}

export default About;
