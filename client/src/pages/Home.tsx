import { PageFrame, SectionHeading } from "@/components/SiteChrome";
import { useLanguage } from "@/contexts/LanguageContext";
import { assetUrls, articleText, initialArticles, siteCopy, t } from "@/content/siteContent";
import { watercolourArtworks } from "@/content/artDoorways";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const homeWorkItems = [
  {
    key: "counselling",
    index: "01",
    title: { en: "Psychology & Counselling", zh: "心理學與心理輔導" },
    description: { en: "Making room to explore emotion, life transitions, grief, anxiety, and the questions beneath what we experience.", zh: "為我們的情緒、人生轉折、哀傷、焦慮，以及經驗背後的疑問，留下一個可以探索的位置。" },
    href: "/services/counselling",
  },
  {
    key: "expressive",
    index: "02",
    title: { en: "Expressive Art", zh: "表達藝術" },
    description: { en: "Through images, colour, words, movement and the creative process, I create a personal space for self-exploration and reflection.", zh: "透過影像、顏色、文字、動作及創作過程，建構一個自我探索與反思的個人空間。" },
    href: "/art/expressive-arts",
  },
  {
    key: "watercolour",
    index: "03",
    title: { en: "Watercolour", zh: "水彩" },
    description: { en: "For me, watercolour is a way of slowing down, observing, feeling and reconnecting.", zh: "一種讓我放慢腳步、觀察與溫柔地連結自己的藝術實踐。" },
    href: "/art/watercolour",
  },
  {
    key: "writing",
    index: "04",
    title: { en: "Writing", zh: "文字" },
    description: { en: "Notes on Jungian ideas, creativity, life transitions, and the texture of human experience.", zh: "書寫榮格心理學、創意、人生轉折，以及人類經驗的細緻紋理。" },
    href: "/writing",
  },
];

export default function Home() {
  const { locale } = useLanguage();
  usePageMetadata(locale === "en" ? "Psychology, Art & Words" : "心理學、藝術與文字", t(siteCopy.hero, locale), locale);

  const translatorPreface = initialArticles.find(article => article.slug === "translator-preface");
  const featuredArticle = locale === "zh" && translatorPreface ? translatorPreface : initialArticles[0];
  const featuredArticleHref = locale === "zh" && translatorPreface ? "/writing/translator-preface" : "/writing";
  const featuredArtwork = watercolourArtworks[0];

  return (
    <PageFrame>
      <section className="hero-section">
        <div className="hero-copy">
          <h1>Denise<br /><em>Ho</em></h1>
          <p className="hero-statement">{t(siteCopy.hero, locale)}</p>
          <p className="hero-note">{t(siteCopy.heroNote, locale)}</p>
          <div className="hero-journey">
            <SectionHeading eyebrow={locale === "en" ? "A connected journey" : "不同的經驗，源自同一條線⋯⋯"} title={locale === "en" ? "There is a thread running through the work" : "不同的經驗，源自同一條線⋯⋯"} />
            <Link href="/about" className="hero-journey-link">
              <span>{locale === "en" ? "My professional journey began in banking. After 16 years in the field, I found myself drawn towards a different kind of work — understanding people, exploring the inner life, and finding ways to express what words alone cannot always say..." : "我的職涯從銀行業開始。在這個領域工作了16年後，我逐漸走向另一種工作——理解人、探索內在世界，以及尋找一些方法，讓未能言說的部分可以表達⋯⋯"}</span>
              <ArrowRight className="hero-journey-cue" size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-actions">
            <Link href="/work" className="button-primary">{t(siteCopy.explore, locale)} <ArrowRight size={15} /></Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={assetUrls.hero} alt={locale === "en" ? "Watercolour practice in a quiet studio" : "在安靜工作室中進行水彩創作"} /></div>
          <div className="hero-image-caption"><span>01</span><p>{t(siteCopy.studioLabel, locale)}</p><ArrowDownRight size={18} /></div>
        </div>
      </section>

      <section className="page-section is-paper door-section">
        <SectionHeading eyebrow={locale === "en" ? "Ways of seeing" : "觀看的方式"} title={locale === "en" ? "Four doors into the same larger world" : "四扇門通向一個更大的領域"} body={locale === "en" ? "Different ways of exploring my inner world." : "以不同的方式探索我的內心世界。"} />
        <div className="door-grid">
          {homeWorkItems.map(area => (
            <Link key={area.key} href={area.href} className="door-card">
              <span>{area.index}</span><h3>{t(area.title, locale)}</h3><p>{t(area.description, locale)}</p><ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="page-section studio-highlights">
        <div className="highlight-head"><SectionHeading eyebrow={locale === "en" ? "From the studio" : "來自工作室"} title={locale === "en" ? "Notes, images and ongoing work" : "文字、圖像和進行中的工作"} /></div>
        <div className="editorial-grid">
          <article className="writing-feature"><img src={featuredArticle.image} alt={articleText(featuredArticle.title, locale)} /><div><p className="content-label">{articleText(featuredArticle.category, locale)}</p><h3>{articleText(featuredArticle.title, locale)}</h3>{articleText(featuredArticle.excerpt, locale) ? <p>{articleText(featuredArticle.excerpt, locale)}</p> : null}<Link href={featuredArticleHref} className="text-link">{t(siteCopy.readMore, locale)} <ArrowRight size={14} /></Link></div></article>
          <article className="art-feature"><img src={featuredArtwork.image} alt={featuredArtwork.title} /><div><p className="content-label">{featuredArtwork.title}</p><Link href="/art" className="text-link">{locale === "en" ? "Explore art" : "探索藝術"} <ArrowRight size={14} /></Link></div></article>
        </div>
      </section>

      <section className="closing-section"><p className="eyebrow"><span />{locale === "en" ? "A quiet invitation" : "一個安靜的邀請"}</p><h2 className="closing-copy" style={{ fontSize: "25px", fontWeight: 300, textAlign: "left" }}>{t(siteCopy.closing, locale)}</h2><Link href="/contact" className="button-primary">{t(siteCopy.contact, locale)} <ArrowRight size={15} /></Link></section>
    </PageFrame>
  );
}
