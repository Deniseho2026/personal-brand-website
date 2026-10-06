import { PageFrame } from "@/components/SiteChrome";
import { articleText, initialArticles } from "@/content/siteContent";
import { mindBodyImage } from "@/content/mindBody";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowRight, Bookmark } from "lucide-react";
import { Link } from "wouter";

export default function Writing() {
  const { locale } = useLanguage();
  const isEnglish = locale === "en";
  usePageMetadata(isEnglish ? "Notes on Psychology & Life" : "深度心理學筆記", isEnglish ? "Reflective writing on psychology, creativity, life transition, and human experience." : "關於心理學、創意、人生轉折與人類經驗的反思文字。", locale);
  return <PageFrame>
    <section className="page-section page-intro writing-intro"><p className="eyebrow"><span />{isEnglish ? "Writing" : "文字"}</p><h1>{isEnglish ? "Notes on Psychology & Life" : "深度心理學筆記"}</h1><p>{isEnglish ? "A home for slower thinking about Jungian psychology, creativity, loss, transition, and the everyday texture of being human." : "一個容納慢一點思考的地方：榮格心理學、創意、失落、轉折，以及人之所以為人的日常紋理。"}</p></section>
    <section className="page-section article-list">
      <div className="article-list-meta"><p>{isEnglish ? "Recent notes" : "近期筆記"}</p><Bookmark size={17} /></div>
      <article className="article-card mind-body-entry">
        <div className="article-image"><img src={mindBodyImage} alt={isEnglish ? "Abstract watercolour and ink study" : "抽象水彩及墨水作品"} /></div>
        <div className="article-copy"><p className="content-label">{isEnglish ? "Mind & Body Series" : "心與身系列"}</p><p>{isEnglish ? "A ten-part bilingual exploration of body, psyche, image, symbol, trauma, and growth." : "一個從身體、心靈、意象、象徵、創傷與成長出發的十篇雙語系列。"}</p><Link href="/writing/mind-body" className="text-link">{isEnglish ? "Explore series" : "瀏覽系列"} <ArrowRight size={14} /></Link></div>
      </article>
      {initialArticles.filter(article => !article.listingCopy && article.availableLanguages.includes(locale)).map((article, index) => <article className="article-card" key={article.slug}><div className="article-image"><img src={article.image} alt={articleText(article.title, locale)} /></div><div className="article-copy"><p className="content-label">{articleText(article.category, locale)}</p><p>{articleText(article.excerpt, locale)}</p><Link href="/writing/translator-preface" className="text-link">{isEnglish ? "Read note" : "閱讀筆記"} <ArrowRight size={14} /></Link></div><span className="article-index">{String(index + 1).padStart(2, "0")}</span></article>)}
    </section>
  </PageFrame>;
}
