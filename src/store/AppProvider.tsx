import React from "react";
import { GlobalProvider } from "store/GlobalContext";
import { LanguageProvider } from "store/LanguageContext";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <GlobalProvider>
    <LanguageProvider>{children}</LanguageProvider>
  </GlobalProvider>
);

export default AppProvider;
