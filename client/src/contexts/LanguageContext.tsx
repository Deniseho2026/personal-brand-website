import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "en" | "zh";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem("denise-ho-locale");
    return saved === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    localStorage.setItem("denise-ho-locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-Hant-HK" : "en";
  }, [locale]);

  const toggleLocale = () => setLocale(current => (current === "en" ? "zh" : "en"));

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
