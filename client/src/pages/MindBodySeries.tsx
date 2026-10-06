import { PageFrame } from "@/components/SiteChrome";
import { mindBodyArticles, mindBodyIntroduction } from "@/content/mindBody";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function MindBodySeries() {
  const { locale } = useLanguage();
  const isEnglish = locale === "en";
  const title = isEnglish ? "Mind & Body" : "心與身";
  usePageMetadata(title, isEnglish ? "A ten-part bilingual series on body, psyche, image, symbol, trauma, and growth." : "一個關於身體、心靈、意象、象徵、創傷與成長的十篇雙語系列。", locale);

  return (
    <PageFrame>
      <main className="page-section mind-body-series">
        <div className="mind-body-series-head">
          <Link href="/writing" className="text-link"><ArrowLeft size={14} />{isEnglish ? "Back to writing" : "返回文字頁"}</Link>
          <p className="eyebrow"><span />{isEnglish ? "Writing series" : "文字系列"}</p>
          <h1>{title}</h1>
          <p className="mind-body-introduction">{mindBodyIntroduction[locale]}</p>
        </div>
        <div className="mind-body-list">
          {mindBodyArticles.map((article) => (
            <Link key={article.slug} href={`/writing/mind-body/${article.slug}`} className="mind-body-card">
              <span className="mind-body-number">{String(article.number).padStart(2, "0")}</span>
              <span className="mind-body-card-copy">
                <span className="mind-body-card-title">{article.title[locale]}</span>
                <span className="mind-body-card-link">{isEnglish ? "Read article" : "閱讀文章"} <ArrowRight size={14} /></span>
              </span>
            </Link>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}
