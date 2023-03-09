// Import React libraries
import { Helmet } from "react-helmet";

// Import components
import Layout from "@/components/Layout";
import Stepper from "@/components/Stepper";

function Home() {
  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage - React Vite Starter (JS Build)</title>
      </Helmet>

      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold underline">Homepage</h1>
          <Stepper />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
