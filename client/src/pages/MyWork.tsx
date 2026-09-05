import { PageFrame, SectionHeading } from "@/components/SiteChrome";
import { assetUrls, services, siteCopy, t, workAreas } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function MyWork() {
  const { locale } = useLanguage();
  const title = locale === "en" ? "An integrated practice" : "一種整合的實踐";
  usePageMetadata(title, locale === "en" ? "Psychology, art, writing, teaching and relationship as connected modes of attention." : "心理學、藝術、文字、教學與關係，作為彼此連結的關懷方式。", locale);
  return <PageFrame>
    <section className="page-section page-intro work-intro"><p className="eyebrow"><span />{locale === "en" ? "My work" : "我的工作"}</p><h1>{title}</h1><p>{locale === "en" ? "The work takes different forms, but each begins with the same attention: to the inner life, to creativity, and to the possibility of meaningful human connection." : "我的工作有不同形式，但每一種都從同樣的關注出發：內在世界、創意，以及人與人之間有意義的連結。"}</p></section>
    <section className="page-section work-spectrum"><div className="spectrum-graphic"><img src={assetUrls.art} alt={locale === "en" ? "A watercolour landscape suggesting inner and outer worlds" : "一幅隱喻內在與外在世界的水彩風景"} /><span>{locale === "en" ? "Understanding · Expression · Reflection · Relationship · Creativity" : "理解 · 表達 · 反思 · 關係 · 創意"}</span></div><div className="spectrum-copy"><SectionHeading eyebrow={locale === "en" ? "A shared centre" : "共同的核心"} title={locale === "en" ? "Different expressions of the same question." : "都是同一個提問的不同表達。"} />{workAreas.map(area => <div className="work-line" key={area.key}><span>{area.index}</span><div><h3>{t(area.title, locale)}</h3><p>{t(area.description, locale)}</p></div></div>)}</div></section>
    <section className="page-section is-paper"><SectionHeading eyebrow={locale === "en" ? "Ways to work together" : "合作方式"} title={locale === "en" ? "From a class to a conversation." : "從一堂水彩課，到一次深入對話。"} /><div className="service-snapshot">{services.map(service => <Link href="/services" key={service.id}><span>{service.index}</span><div><h3>{t(service.title, locale)}</h3><p>{t(service.audience, locale)}</p>{service.hkOnly ? <em>{t(siteCopy.hongKongOnly, locale)}</em> : null}</div><ArrowRight size={18} /></Link>)}</div></section>
  </PageFrame>;
}
