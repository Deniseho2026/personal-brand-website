import { PageFrame, SectionHeading } from "@/components/SiteChrome";
import { useLanguage } from "@/contexts/LanguageContext";
import { assetUrls, initialArticles, initialArtworks, journey, projects, siteCopy, t, workAreas } from "@/content/siteContent";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { locale } = useLanguage();
  usePageMetadata(locale === "en" ? "Psychology, Art & Words" : "心理學、藝術與文字", t(siteCopy.hero, locale), locale);

  return (
    <PageFrame>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span />{t(siteCopy.eyebrow, locale)}</p>
          <h1>Denise<br /><em>Ho</em></h1>
          <p className="hero-statement">{t(siteCopy.hero, locale)}</p>
          <p className="hero-note">{t(siteCopy.heroNote, locale)}</p>
          <div className="hero-actions">
            <Link href="/work" className="button-primary">{t(siteCopy.explore, locale)} <ArrowRight size={15} /></Link>
            <Link href="/contact" className="button-secondary">{t(siteCopy.contact, locale)}</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={assetUrls.hero} alt={locale === "en" ? "Watercolour practice in a quiet studio" : "在安靜工作室中進行水彩創作"} /></div>
          <div className="hero-image-caption"><span>01</span><p>{t(siteCopy.studioLabel, locale)}</p><ArrowDownRight size={18} /></div>
        </div>
      </section>

      <section className="page-section journey-section">
        <div className="journey-intro"><SectionHeading eyebrow={locale === "en" ? "A connected journey" : "一段相連的旅程"} title={locale === "en" ? "There is a thread running through the work." : "不同的經驗，原來有一條共同的線。"} /></div>
        <p className="journey-lead">{locale === "en" ? "My professional journey began in banking. After 16 years in the field, I found myself drawn towards a different kind of work — understanding people, exploring the inner life, and finding ways to express what words alone cannot always say." : "我的職涯從銀行業開始；在這個領域工作了16年後，我逐漸走向另一種工作：理解人、探索內在世界，以及尋找一些方法，讓未必能以言語說清的感受有所表達。"}</p>
        <div className="journey-list">
          {journey.map(item => <article className="journey-item" key={item.year}><span>{item.year}</span><h3>{t(item.title, locale)}</h3><p>{t(item.body, locale)}</p></article>)}
        </div>
      </section>

      <section className="page-section is-paper door-section">
        <SectionHeading eyebrow={locale === "en" ? "Ways of working" : "工作方式"} title={locale === "en" ? "Four doors into the same larger world." : "四扇門，通向同一個更大的世界。"} body={locale === "en" ? "These are not separate businesses. They are different expressions of the same underlying interest: understanding human experience and creating places to explore, express, and connect." : "這些並不是互不相關的工作，而是同一個關懷的不同表達：理解人的經驗，並創造可以探索、表達與連結的空間。"} />
        <div className="door-grid">
          {workAreas.map(area => <Link key={area.key} href={area.href} className="door-card"><span>{area.index}</span><h3>{t(area.title, locale)}</h3><p>{t(area.description, locale)}</p><ArrowRight size={18} /></Link>)}
        </div>
      </section>

      <section className="page-section studio-highlights">
        <div className="highlight-head"><SectionHeading eyebrow={locale === "en" ? "From the studio" : "來自工作室"} title={locale === "en" ? "Notes, images, and ongoing work." : "文字、圖像，以及仍在進行的工作。"} /><Link href="/writing" className="text-link">{t(siteCopy.viewAll, locale)} <ArrowRight size={14} /></Link></div>
        <div className="editorial-grid">
          <article className="writing-feature"><img src={initialArticles[0].image} alt={locale === "en" ? "An open notebook in a quiet studio" : "安靜工作室裡的打開筆記本"} /><div><p className="content-label">{t(initialArticles[0].category, locale)}</p><h3>{t(initialArticles[0].title, locale)}</h3><p>{t(initialArticles[0].excerpt, locale)}</p><Link href="/writing" className="text-link">{t(siteCopy.readMore, locale)} <ArrowRight size={14} /></Link></div></article>
          <article className="art-feature"><img src={initialArtworks[0].image} alt={locale === "en" ? "Watercolour landscape study" : "水彩風景習作"} /><div><p className="content-label">{t(initialArtworks[0].medium, locale)}{locale === "en" ? ` · ${initialArtworks[0].year}` : ""}</p><h3>{t(initialArtworks[0].title, locale)}</h3><Link href="/art" className="text-link">{locale === "en" ? "Visit the gallery" : "前往作品集"} <ArrowRight size={14} /></Link></div></article>
        </div>
        <Link href="/art" className="home-project-preview"><p className="content-label">{t(projects[0].type, locale)} · 01</p><div><h3>{t(projects[0].title, locale)}</h3><p>{t(projects[0].description, locale)}</p></div><span>{locale === "en" ? "Projects & collections" : "項目與作品系列"}<ArrowRight size={16} /></span></Link>
      </section>

      <section className="closing-section"><p className="eyebrow"><span />{locale === "en" ? "A quiet invitation" : "一個安靜的邀請"}</p><h2>{t(siteCopy.closing, locale)}</h2><Link href="/contact" className="button-primary">{t(siteCopy.contact, locale)} <ArrowRight size={15} /></Link></section>
    </PageFrame>
  );
}
