// Library imports
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";

// Global styles
import "assets/styles/index.css";

// import i18n (needs to be bundled ;))
import "plugins/i18n";

// Store
import AppProvider from "store/AppProvider";

// Google tag manager
const tagManagerArgs = {
  gtmId: "GTM-N829CWR",
};

// import component
import App from "App";

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
