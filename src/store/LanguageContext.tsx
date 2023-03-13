import { createContext, FC } from "react";

interface Language {
  label: string;
  value: string;
}

const initialState: Language[] = [
  { label: "English", value: "en" },
  { label: "Nederlands", value: "nl" },
];

export const LanguageContext = createContext<Language[]>(initialState);

interface Props {
  children: React.ReactNode;
}

export const LanguageProvider: FC<Props> = ({ children }) => (
  <LanguageContext.Provider value={initialState}>
    {children}
  </LanguageContext.Provider>
);
