"use client";
import { useLang } from "@/context/LanguageContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  const handleToggle = () => setLang(lang === "en" ? "es" : "en");

  return (
    <button
      onClick={handleToggle}
      className="fixed top-[100px] right-6 bg-[#C8102E] text-white px-6 py-3 rounded-md text-sm md:text-base font-semibold shadow-lg hover:bg-[#a11226] transition z-50 border border-white/20 flex items-center justify-center gap-2"
      style={{
        backdropFilter: "blur(6px)",
        letterSpacing: "0.5px",
      }}
    >
      {lang === "en" ? "EN / ESPAÑOL" : "ES / ENGLISH"}
    </button>
  );
}
