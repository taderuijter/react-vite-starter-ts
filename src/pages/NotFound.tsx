// Import React libraries
import { Helmet } from "react-helmet";

// Import components
import { Dashboard } from "design-system/layout/Dashboard/Dashboard";

function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404: Not Found</title>
      </Helmet>

      <Dashboard>
        <h1 className="text-3xl font-bold underline">404 Not Found</h1>
      </Dashboard>
    </>
  );
}

export default NotFound;
