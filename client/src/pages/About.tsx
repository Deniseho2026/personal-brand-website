import { PageFrame } from "@/components/SiteChrome";
import { biography, t } from "@/content/siteContent";
import { assetUrls } from "@/content/media";
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
      <div className="about-me-layout">
        <div className="about-me-copy">
          <p>{lead}</p>
          {biography.sections.map((section, index) => <p key={index}>{t(section.body, locale)}</p>)}
        </div>
        <div className="about-photo-composition" aria-label={locale === "en" ? "Personal memories and places" : "個人記憶與地方印象"}>
          <img className="about-photo about-photo-portrait" src={assetUrls.aboutChildhoodPortrait} alt={locale === "en" ? "Pencil portrait based on a childhood photograph" : "根據童年照片繪畫的鉛筆肖像"} />
          <img className="about-photo about-photo-old" src={assetUrls.aboutTuenMunOld} alt={locale === "en" ? "Quiet older neighbourhood waterfront" : "寧靜的舊區海旁景象"} />
          <img className="about-photo about-photo-transitional" src={assetUrls.aboutTuenMunTransitional} alt={locale === "en" ? "Everyday railway and pedestrian bridge scene" : "日常鐵路與行人天橋景象"} />
          <img className="about-photo about-photo-present" src={assetUrls.aboutTuenMunPresent} alt={locale === "en" ? "Contemporary neighbourhood footbridge" : "當代社區行人天橋景象"} />
        </div>
      </div>
    </section>
    <section className="mini-cta"><p>{locale === "en" ? "Curious about a particular way of working?" : "想了解某一種工作方式嗎？"}</p><Link href="/work" className="text-link">{locale === "en" ? "Explore my work" : "探索我的工作"} <ArrowRight size={14} /></Link></section>
  </PageFrame>;
}
