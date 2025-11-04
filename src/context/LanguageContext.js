"use client";
import { createContext, useContext, useState } from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const t = lang === "en" ? en : es;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
