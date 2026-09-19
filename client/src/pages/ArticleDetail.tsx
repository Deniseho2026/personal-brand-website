import { PageFrame } from "@/components/SiteChrome";
import { articleText, initialArticles } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function ArticleDetail() {
  const { locale } = useLanguage();
  const [location] = useLocation();
  const slug = decodeURIComponent(location.replace("/writing/", ""));
  const article = initialArticles.find(item => item.slug === slug);
  const title = article ? articleText(article.title, locale) : "";
  const category = article ? articleText(article.category, locale) : "";
  const body = article?.body[locale] ?? [];
  usePageMetadata(article ? title : (locale === "en" ? "Writing" : "文字"), article ? `${category} — Denise Ho` : "Denise Ho", locale);

  if (!article) return <PageFrame><section className="page-section access-page"><p className="eyebrow"><span />Writing</p><h1>{locale === "en" ? "This note is not available." : "找不到這篇筆記。"}</h1><Link href="/writing" className="button-primary">{locale === "en" ? "Return to writing" : "返回文字頁"}</Link></section></PageFrame>;
  return <PageFrame><article className="article-detail"><div className="article-detail-head"><Link href="/writing" className="text-link"><ArrowLeft size={14} />{locale === "en" ? "All writing" : "所有文字"}</Link><p className="content-label">{category}</p>{article.listingCopy && title ? <h1>{title}</h1> : null}</div>{article.image ? <img className="article-detail-image" src={article.image} alt={category} /> : null}{body.length ? <div className="article-body">{body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="article-end"><span /><p>{locale === "en" ? "A note from the studio" : "一則工作室筆記"}</p></div></div> : null}<div className="article-detail-foot"><Link href="/writing" className="text-link"><ArrowLeft size={14} />{locale === "en" ? "Back to notes" : "返回筆記"}</Link><Link href="/contact" className="text-link">{locale === "en" ? "Begin a conversation" : "開始對話"}<ArrowRight size={14} /></Link></div></article></PageFrame>;
}
