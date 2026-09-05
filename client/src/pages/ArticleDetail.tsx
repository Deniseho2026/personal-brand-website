import { PageFrame } from "@/components/SiteChrome";
import { initialArticles, t } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function ArticleDetail() {
  const { locale } = useLanguage();
  const [location] = useLocation();
  const slug = decodeURIComponent(location.replace("/writing/", ""));
  const result = trpc.content.getPublishedBySlug.useQuery({ slug });
  const fallback = initialArticles.find(article => article.slug === slug);
  const article = result.data
    ? { title: { en: result.data.titleEn, zh: result.data.titleZh }, category: { en: result.data.categoryEn || "Notes", zh: result.data.categoryZh || "筆記" }, body: { en: [result.data.bodyEn || result.data.excerptEn || ""], zh: [result.data.bodyZh || result.data.excerptZh || ""] }, image: result.data.imageUrl || fallback?.image || initialArticles[0].image }
    : fallback;
  usePageMetadata(article ? t(article.title, locale) : (locale === "en" ? "Writing" : "文字"), article ? `${t(article.category, locale)} — Denise Ho` : "Denise Ho", locale);

  if (!article) return <PageFrame><section className="page-section access-page"><p className="eyebrow"><span />Writing</p><h1>{locale === "en" ? "This note is not available." : "找不到這篇筆記。"}</h1><Link href="/writing" className="button-primary">{locale === "en" ? "Return to writing" : "返回文字頁"}</Link></section></PageFrame>;
  return <PageFrame><article className="article-detail"><div className="article-detail-head"><Link href="/writing" className="text-link"><ArrowLeft size={14} />{locale === "en" ? "All writing" : "所有文字"}</Link><p className="content-label">{t(article.category, locale)}</p><h1>{t(article.title, locale)}</h1></div><img className="article-detail-image" src={article.image} alt={t(article.title, locale)} /><div className="article-body">{article.body[locale].map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="article-end"><span /><p>{locale === "en" ? "A note from the studio" : "一則工作室筆記"}</p></div></div><div className="article-detail-foot"><Link href="/writing" className="text-link"><ArrowLeft size={14} />{locale === "en" ? "Back to notes" : "返回筆記"}</Link><Link href="/contact" className="text-link">{locale === "en" ? "Begin a conversation" : "開始對話"}<ArrowRight size={14} /></Link></div></article></PageFrame>;
}
