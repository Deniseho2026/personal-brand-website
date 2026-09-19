import { assetUrls } from "./media";
import type { Locale } from "@/contexts/LanguageContext";

export type ArticleText = Partial<Record<Locale, string>>;

export type WritingArticle = {
  slug: string;
  category: ArticleText;
  date: ArticleText;
  title: ArticleText;
  excerpt: ArticleText;
  body: Partial<Record<Locale, string[]>>;
  image?: string;
  availableLanguages: Locale[];
  listingCopy: boolean;
};

export function articleText(value: ArticleText, locale: Locale) {
  return value[locale] ?? value.en ?? value.zh ?? "";
}

export const initialArticles: WritingArticle[] = [
  {
    slug: "notes-on-transition",
    category: { en: "Psychology & everyday life", zh: "心理學與日常生活" },
    date: { en: "Notes from the studio", zh: "工作室筆記" },
    title: { en: "A place to pause before the next transition", zh: "在人生下一個轉折前，先停一停" },
    excerpt: { en: "A space for future reflections on the small inner movements that often precede outer change.", zh: "留給未來的反思：外在改變之前，那些細小而常被忽略的內在流動。" },
    body: { en: [], zh: [] },
    image: assetUrls.writing,
    availableLanguages: ["en", "zh"],
    listingCopy: false,
  },
];
