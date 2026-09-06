import { PageFrame } from "@/components/SiteChrome";
import { initialArticles, t } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowRight, Bookmark } from "lucide-react";
import { Link } from "wouter";

export default function Writing() {
  const { locale } = useLanguage();
  usePageMetadata(locale === "en" ? "Notes on Psychology & Life" : "深度心理學筆記", locale === "en" ? "Reflective writing on psychology, creativity, life transition, and human experience." : "關於心理學、創意、人生轉折與人類經驗的反思文字。", locale);
  return <PageFrame>
    <section className="page-section page-intro writing-intro"><p className="eyebrow"><span />{locale === "en" ? "Writing" : "文字"}</p><h1>{locale === "en" ? "Notes on Psychology & Life" : "深度心理學筆記"}</h1><p>{locale === "en" ? "A home for slower thinking about Jungian psychology, creativity, loss, transition, and the everyday texture of being human." : "一個容納慢一點思考的地方：榮格心理學、創意、失落、轉折，以及人之所以為人的日常紋理。"}</p></section>
    <section className="page-section article-list"><div className="article-list-meta"><p>{locale === "en" ? "Recent notes" : "近期筆記"}</p><Bookmark size={17} /></div>{initialArticles.map((article, index) => <article className="article-card" key={article.slug}><div className="article-image"><img src={article.image} alt={t(article.title, locale)} /></div><div className="article-copy"><p className="content-label">{t(article.category, locale)} <span>·</span> {t(article.date, locale)}</p><h2>{t(article.title, locale)}</h2><p>{t(article.excerpt, locale)}</p><Link href={`/writing/${article.slug}`} className="text-link">{locale === "en" ? "Read note" : "閱讀筆記"} <ArrowRight size={14} /></Link></div><span className="article-index">{String(index + 1).padStart(2, "0")}</span></article>)}</section>
  </PageFrame>;
}
