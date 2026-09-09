import type { Locale } from "@/contexts/LanguageContext";

export type LocalizedText = Record<Locale, string>;

export function t(value: LocalizedText, locale: Locale) {
  return value[locale];
}
