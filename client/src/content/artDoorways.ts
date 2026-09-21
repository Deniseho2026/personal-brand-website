import type { Locale } from "@/contexts/LanguageContext";

export type ArtDoorway = {
  slug: "watercolour" | "expressive-arts" | "art-in-community";
  number: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  image: string;
  alt: Record<Locale, string>;
};

export type WatercolourArtwork = {
  title: string;
  image: string;
  width: number;
  height: number;
};

const storageBase = "https://personalbrnd-eozfgujc.manus.space";

export const artLandingCopy = {
  eyebrow: { en: "Art", zh: "藝術" },
  title: { en: "Seeing the World Through an Artistic Eye", zh: "用藝術之眼看世界" },
  introduction: {
    en: "Art lives in my life in different ways: through observing the surrounding world, expressing the inner world, and creating spaces where people can meet.",
    zh: "藝術以不同的方式存在於我的生命之中：觀看周遭的世界、表達內在的世界，以及創造讓人與人相遇的空間。",
  },
} satisfies Record<string, Record<Locale, string>>;

export const artDoorways: ArtDoorway[] = [
  {
    slug: "watercolour",
    number: "01",
    title: { en: "Watercolour", zh: "水彩" },
    subtitle: { en: "How I use watercolour to record the surrounding world I see", zh: "如何用水彩畫記錄我看見的周遭環境" },
    image: `${storageBase}/manus-storage/art-doorway-watercolour_efa7b7b0.jpg`,
    alt: { en: "Watercolour brushstrokes on paper", zh: "紙上的水彩筆觸" },
  },
  {
    slug: "expressive-arts",
    number: "02",
    title: { en: "Expressive Arts", zh: "表達藝術" },
    subtitle: { en: "How free creation can express the inner world", zh: "如何以自由的創作表達內心世界" },
    image: `${storageBase}/manus-storage/art-doorway-expressive-arts_716fdcb6.jpg`,
    alt: { en: "Layered expressive arts marks", zh: "層疊的表達藝術痕跡" },
  },
  {
    slug: "art-in-community",
    number: "03",
    title: { en: "Art in Community", zh: "社群中的藝術" },
    subtitle: { en: "How people can meet through art", zh: "如何讓人與人透過藝術相遇" },
    image: `${storageBase}/manus-storage/art-doorway-community_3a88e097.jpg`,
    alt: { en: "People gathered around a creative activity", zh: "人們圍繞創作活動相聚" },
  },
];

export const watercolourArtworks: WatercolourArtwork[] = [
  { title: "Autumn", image: `${storageBase}/manus-storage/Autumn_68b3a4ce.jpg`, width: 1925, height: 2048 },
  { title: "pussycat", image: `${storageBase}/manus-storage/pussycat_2bea629f.jpg`, width: 1536, height: 2048 },
  { title: "go for adventure", image: `${storageBase}/manus-storage/go_for_adventure_a177ed24.jpg`, width: 2048, height: 1356 },
  { title: "lightfromparadise", image: `${storageBase}/manus-storage/lightfromparadise_118bcce3.jpg`, width: 2029, height: 2048 },
  { title: "solitude", image: `${storageBase}/manus-storage/solitude_10a7b9bd.jpg`, width: 2048, height: 1008 },
  { title: "cloud", image: `${storageBase}/manus-storage/cloud_b876700d.jpg`, width: 1393, height: 2048 },
  { title: "look up", image: `${storageBase}/manus-storage/look_up_78df1f13.jpg`, width: 2012, height: 2048 },
  { title: "green", image: `${storageBase}/manus-storage/green_249ead1e.jpg`, width: 2048, height: 1536 },
  { title: "gentleman", image: `${storageBase}/manus-storage/gentleman_7b0d3079.jpg`, width: 1536, height: 2048 },
  { title: "road", image: `${storageBase}/manus-storage/road_e4333a90.jpg`, width: 1536, height: 2048 },
  { title: "gentle blue", image: `${storageBase}/manus-storage/gentle_blue_c4240e1e.jpg`, width: 1536, height: 2048 },
  { title: "park", image: `${storageBase}/manus-storage/park_f078a765.jpg`, width: 2048, height: 1536 },
  { title: "quiet", image: `${storageBase}/manus-storage/quiet_32b0c5d9.jpg`, width: 1648, height: 2048 },
  { title: "obsession", image: `${storageBase}/manus-storage/obsession_0b1a72f3.jpg`, width: 1644, height: 2048 },
];

export function getArtDoorway(slug: string) {
  return artDoorways.find((doorway) => doorway.slug === slug);
}
