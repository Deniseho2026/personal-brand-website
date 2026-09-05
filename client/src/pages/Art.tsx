import { PageFrame } from "@/components/SiteChrome";
import { initialArtworks, projects, t } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { trpc } from "@/lib/trpc";
import { ArrowUpRight } from "lucide-react";

export default function Art() {
  const { locale } = useLanguage();
  usePageMetadata(locale === "en" ? "Art & Collections" : "藝術與作品系列", locale === "en" ? "Watercolour paintings, sketches, creative experiments, projects, and collections by Denise Ho." : "何穎文的水彩作品、速寫、創作實驗、項目和作品系列。", locale);
  const content = trpc.content.listPublished.useQuery({ kind: "artwork" });
  const projectContent = trpc.content.listPublished.useQuery({ kind: "project" });
  const collectionContent = trpc.content.listPublished.useQuery({ kind: "collection" });
  const artworks = content.data?.length ? content.data.map(item => ({ slug: item.slug, image: item.imageUrl || initialArtworks[0].image, title: { en: item.titleEn, zh: item.titleZh }, year: item.year || "—", medium: { en: item.mediumEn || "", zh: item.mediumZh || "" }, description: { en: item.excerptEn || "", zh: item.excerptZh || "" } })) : initialArtworks;
  const dbPairs = [...(projectContent.data || []), ...(collectionContent.data || [])];
  const projectPairs = dbPairs.length ? dbPairs.map(item => ({ type: { en: item.kind === "project" ? "Project" : "Collection", zh: item.kind === "project" ? "項目" : "作品系列" }, title: { en: item.titleEn, zh: item.titleZh }, description: { en: item.excerptEn || "", zh: item.excerptZh || "" } })) : projects;
  return <PageFrame>
    <section className="page-section art-intro"><div><p className="eyebrow"><span />{locale === "en" ? "Art" : "藝術"}</p><h1>{locale === "en" ? "Painting as a way of noticing." : "繪畫，是一種看見的方式。"}</h1></div><p>{locale === "en" ? "I began painting watercolour several years ago and gradually fell in love with its movement, transparency, and unpredictability. Watercolour often has a life of its own; what appears to be a mistake can become the most interesting part of a painting." : "我在幾年前開始畫水彩，漸漸愛上它的流動、透明與不可預測。水彩常常有自己的生命；一些看似的失誤，反而可以成為畫面中最有趣的部分。"}</p></section>
    <section className="page-section art-gallery">{artworks.map((artwork, index) => <article className={`art-piece art-piece-${index + 1}`} key={artwork.slug}><div className="art-image"><img src={artwork.image} alt={t(artwork.title, locale)} /></div><div className="art-meta"><h2>{t(artwork.title, locale)}</h2><p>{artwork.year} · {t(artwork.medium, locale)}</p><p>{t(artwork.description, locale)}</p></div></article>)}</section>
    <section className="page-section is-paper collections-section"><div><p className="eyebrow"><span />{locale === "en" ? "Projects & collections" : "項目與作品系列"}</p><h2>{locale === "en" ? "What I have done, and how I gather the work." : "我所完成的事，以及我如何整理這些工作。"}</h2></div><div className="collection-explain"><p><strong>{locale === "en" ? "Projects" : "項目"}</strong>{locale === "en" ? " are particular exhibitions, workshops, teaching programmes, and community endeavours." : "是一些具體完成過的展覽、工作坊、教學計劃和社區活動。"}</p><p><strong>{locale === "en" ? "Collections" : "作品系列"}</strong>{locale === "en" ? " gather artwork or writing around a shared theme, image, or question." : "則以共同的主題、圖像或提問，把藝術作品和文字放在一起。"}</p></div><div className="project-pairs">{projectPairs.map(project => <article key={project.title.en}><p className="content-label">{t(project.type, locale)}</p><h3>{t(project.title, locale)}</h3><p>{t(project.description, locale)}</p><ArrowUpRight size={18} /></article>)}</div></section>
  </PageFrame>;
}
