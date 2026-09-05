export type LocalizedText = { en: string; zh: string };

export type PublishedContentRecord = {
  slug: string;
  titleEn: string;
  titleZh: string;
  excerptEn?: string | null;
  excerptZh?: string | null;
  bodyEn?: string | null;
  bodyZh?: string | null;
  imageUrl?: string | null;
  linkUrl?: string | null;
  categoryEn?: string | null;
  categoryZh?: string | null;
  mediumEn?: string | null;
  mediumZh?: string | null;
  year?: string | null;
};

export function mapJourneyRecord(item: PublishedContentRecord, index: number) {
  return {
    year: item.year || String(index + 1).padStart(2, "0"),
    title: { en: item.titleEn, zh: item.titleZh } satisfies LocalizedText,
    body: { en: item.excerptEn || item.bodyEn || "", zh: item.excerptZh || item.bodyZh || "" } satisfies LocalizedText,
    image: item.imageUrl || "",
  };
}

export function mapWorkRecord(item: PublishedContentRecord, index: number) {
  return {
    key: item.slug,
    index: String(index + 1).padStart(2, "0"),
    title: { en: item.titleEn, zh: item.titleZh } satisfies LocalizedText,
    description: { en: item.excerptEn || item.bodyEn || "", zh: item.excerptZh || item.bodyZh || "" } satisfies LocalizedText,
    href: item.linkUrl || "/work",
    image: item.imageUrl || "",
  };
}

export function mapArticlePreview(item: PublishedContentRecord, fallback: { image: string; category: LocalizedText; title: LocalizedText; excerpt: LocalizedText; href: string }) {
  return {
    image: item.imageUrl || fallback.image,
    category: { en: item.categoryEn || "Notes", zh: item.categoryZh || "筆記" } satisfies LocalizedText,
    title: { en: item.titleEn, zh: item.titleZh } satisfies LocalizedText,
    excerpt: { en: item.excerptEn || "", zh: item.excerptZh || "" } satisfies LocalizedText,
    href: `/writing/${item.slug}`,
  };
}

export function splitArticleBody(value: string | null | undefined) {
  return (value || "").split(/\n\s*\n/).map(paragraph => paragraph.trim()).filter(Boolean);
}
