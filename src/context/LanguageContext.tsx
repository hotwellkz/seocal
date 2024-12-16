import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, defaultLang = 'en' }: { children: ReactNode, defaultLang?: string }) {
  const [lang, setLang] = useState(defaultLang);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}