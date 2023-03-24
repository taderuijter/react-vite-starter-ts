// Library imports
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Global styles
import "assets/styles/index.css";

// import i18n (needs to be bundled ;))
import "plugins/i18n";

// Router pages
import TagManager from "react-gtm-module";
import Home from "pages/Home";
import Inputs from "pages/Inputs";
import NotFound from "pages/NotFound";

// Store
import AppProvider from "store/AppProvider";

// Google tag manager
const tagManagerArgs = {
  gtmId: "GTM-N829CWR",
};

TagManager.initialize(tagManagerArgs);

// React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inputs",
    element: <Inputs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>,
);
