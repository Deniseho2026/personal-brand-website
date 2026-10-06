import { PageFrame } from "@/components/SiteChrome";
import { mindBodyArticles } from "@/content/mindBody";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function MindBodyArticle() {
  const { locale } = useLanguage();
  const [location] = useLocation();
  const slug = decodeURIComponent(location.replace(/^\/writing\/mind-body\//, "").split(/[?#]/)[0]);
  const article = mindBodyArticles.find((item) => item.slug === slug);
  const isEnglish = locale === "en";
  const title = article?.title[locale] ?? "";
  const paragraphs = article?.body[locale] ?? [];
  usePageMetadata(article ? title : (isEnglish ? "Mind & Body" : "心與身"), article ? title : "Denise Ho", locale);

  if (!article) {
    return <PageFrame><section className="page-section access-page"><p className="eyebrow"><span />{isEnglish ? "Mind & Body" : "心與身"}</p><h1>{isEnglish ? "This article is not available." : "找不到這篇文章。"}</h1><Link href="/writing/mind-body" className="button-primary">{isEnglish ? "Return to Mind & Body" : "返回心與身"}</Link></section></PageFrame>;
  }

  return (
    <PageFrame>
      <article className="article-detail mind-body-article">
        <div className="article-detail-head">
          <Link href="/writing/mind-body" className="text-link"><ArrowLeft size={14} />{isEnglish ? "All Mind & Body articles" : "所有心與身文章"}</Link>
          <p className="content-label">{isEnglish ? "Mind & Body" : "心與身"} · {String(article.number).padStart(2, "0")}</p>
          <h1>{title}</h1>
        </div>
        <div className="article-body mind-body-article-body">
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {article.references.length > 0 ? <section className="mind-body-references"><h2>{isEnglish ? "References" : "參考資料"}</h2>{article.references.map((reference, index) => <p key={index}>{reference}</p>)}</section> : null}
          <div className="article-end"><span /><p>{isEnglish ? "Mind & Body" : "心與身"}</p></div>
        </div>
        <div className="article-detail-foot">
          <Link href="/writing/mind-body" className="text-link"><ArrowLeft size={14} />{isEnglish ? "Back to series" : "返回系列"}</Link>
          <Link href="/contact" className="text-link">{isEnglish ? "Begin a conversation" : "開始對話"}<ArrowRight size={14} /></Link>
        </div>
      </article>
    </PageFrame>
  );
}
