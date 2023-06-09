import { createContext, FC } from "react";

type Language = {
  label: string;
  value: string;
};

type Props = {
  children: React.ReactNode;
};

const initialState: Language[] = [
  { label: "English", value: "en" },
  { label: "Nederlands", value: "nl" },
];

export const LanguageContext = createContext<Language[]>(initialState);

export const LanguageProvider: FC<Props> = ({ children }) => (
  <LanguageContext.Provider value={initialState}>
    {children}
  </LanguageContext.Provider>
);
