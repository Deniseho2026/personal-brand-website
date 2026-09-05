import { PageFrame, SectionHeading } from "@/components/SiteChrome";
import { biography, siteCopy, t, values } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";

export default function About() {
  const { locale } = useLanguage();
  const settings = trpc.settings.list.useQuery();
  const setting = (key: string, fallback: string) => settings.data?.find(item => item.settingKey === key)?.[locale === "en" ? "valueEn" : "valueZh"] || fallback;
  const lead = setting("about-lead", t(biography.lead, locale));
  usePageMetadata(t(biography.title, locale), lead, locale);
  return <PageFrame>
    <section className="page-section page-intro"><p className="eyebrow"><span />{locale === "en" ? "About me" : "關於我"}</p><h1>{t(biography.title, locale)}</h1><p>{lead}</p></section>
    <section className="page-section bio-section">
      <div className="bio-aside"><span>01</span><p>{locale === "en" ? "A life made of more than one chapter." : "生命從來不只由一個篇章構成。"}</p></div>
      <div className="bio-copy">{biography.sections.map((section, index) => <section key={index}><h2>{t(section.heading, locale)}</h2><p>{setting(`about-story-${index + 1}`, t(section.body, locale))}</p></section>)}</div>
    </section>
    <section className="page-section is-paper values-section"><SectionHeading eyebrow={locale === "en" ? "What guides me" : "我所珍視的"} title={locale === "en" ? "A grounded way of meeting the deeper self." : "以踏實的方式，與更深的自己相遇。"} body={locale === "en" ? "Beneath the roles we play and the identities we carry, there is a deeper dimension of who we are. Psychology, creativity, and relationship can offer different ways of approaching it — with respect for each person’s unique journey." : "在我們所扮演的角色與所承載的身份底下，每個人都有更深的一個面向。心理學、創意與關係可以提供不同的途徑，讓我們以尊重的態度接近它，同時珍視每個人獨特的旅程。"} />
      <div className="values-list">{values.map((value, index) => <div key={value.en}><span>{String(index + 1).padStart(2, "0")}</span><strong>{t(value, locale)}</strong></div>)}</div>
    </section>
    <section className="mini-cta"><p>{locale === "en" ? "Curious about a particular way of working?" : "想了解某一種工作方式嗎？"}</p><Link href="/work" className="text-link">{locale === "en" ? "Explore my work" : "探索我的工作"} <ArrowRight size={14} /></Link></section>
  </PageFrame>;
}
