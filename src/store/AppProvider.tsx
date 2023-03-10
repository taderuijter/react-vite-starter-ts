import React from "react";
import { CounterProvider } from "@/store/CounterContext";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <CounterProvider>{children}</CounterProvider>
);

export default AppProvider;
