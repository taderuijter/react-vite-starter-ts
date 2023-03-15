import React from "react";
import { CounterProvider } from "@/store/CounterContext";
import { GlobalProvider } from "@/store/GlobalContext";
import { LanguageProvider } from "@/store/LanguageContext";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <CounterProvider>
    <GlobalProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </GlobalProvider>
  </CounterProvider>
);

export default AppProvider;
