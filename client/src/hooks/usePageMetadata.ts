import { useEffect } from "react";
import type { Locale } from "@/contexts/LanguageContext";

export function usePageMetadata(title: string, description: string, locale: Locale) {
  useEffect(() => {
    document.title = `${title} | Denise Ho`;
    document.documentElement.lang = locale === "zh" ? "zh-Hant-HK" : "en";
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);
  }, [title, description, locale]);
}
