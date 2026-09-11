import { PageFrame } from "@/components/SiteChrome";
import { biography, siteCopy, t } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const { locale } = useLanguage();
  const lead = t(biography.lead, locale);
  usePageMetadata(t(biography.title, locale), lead, locale);
  return <PageFrame>
    <section className="page-section page-intro about-intro">
      <p className="eyebrow"><span />{locale === "en" ? "About me" : "關於我"}</p>
      <h1 className="about-name">{t(biography.title, locale)}</h1>
      <div className="about-me-copy">
        <p>{lead}</p>
        {biography.sections.map((section, index) => <p key={index}>{t(section.body, locale)}</p>)}
      </div>
    </section>
    <section className="mini-cta"><p>{locale === "en" ? "Curious about a particular way of working?" : "想了解某一種工作方式嗎？"}</p><Link href="/work" className="text-link">{locale === "en" ? "Explore my work" : "探索我的工作"} <ArrowRight size={14} /></Link></section>
  </PageFrame>;
}
