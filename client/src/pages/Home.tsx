import { PageFrame, SectionHeading } from "@/components/SiteChrome";
import { useLanguage } from "@/contexts/LanguageContext";
import { assetUrls, articleText, initialArticles, initialArtworks, siteCopy, t } from "@/content/siteContent";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const homeWorkItems = [
  {
    key: "counselling",
    index: "01",
    title: { en: "Psychology & Counselling", zh: "心理學與心理輔導" },
    description: { en: "Making room to explore emotion, life transitions, grief, anxiety, and the questions beneath what we experience.", zh: "為情緒、人生轉折、哀傷、焦慮，以及經驗背後的疑問留下一個可以探索的位置。" },
    href: "/services/counselling",
  },
  {
    key: "expressive",
    index: "02",
    title: { en: "Expressive art", zh: "表達藝術" },
    description: { en: "Creative processes such as drawing, painting, imagery, writing, and movement in support of reflection and self-exploration.", zh: "透過繪畫、圖像、文字、動作等創作過程，支持反思與自我探索。" },
    href: "/services/expressive",
  },
  {
    key: "watercolour",
    index: "03",
    title: { en: "Watercolour", zh: "水彩" },
    description: { en: "Teaching watercolour as an artistic practice and a gentle way of slowing down, observing, and connecting.", zh: "把水彩作為一種藝術實踐，也作為放慢腳步、觀察與連結自己的溫柔方式。" },
    href: "/services/watercolour",
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
  const featuredArtwork = { image: initialArtworks[0].image, medium: initialArtworks[0].medium, title: initialArtworks[0].title, year: initialArtworks[0].year, href: "/art/watercolour" };

  return (
    <PageFrame>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span />{t(siteCopy.eyebrow, locale)}</p>
          <h1>Denise<br /><em>Ho</em></h1>
          <p className="hero-statement">{t(siteCopy.hero, locale)}</p>
          <p className="hero-note">{t(siteCopy.heroNote, locale)}</p>
          <div className="hero-journey">
            <SectionHeading eyebrow={locale === "en" ? "A connected journey" : "一段相連的旅程"} title={locale === "en" ? "There is a thread running through the work" : "不同的經驗，原來有一條共同的線"} />
            <Link href="/about" className="hero-journey-link">
              <span>{locale === "en" ? "My professional journey began in banking. After 16 years in the field, I found myself drawn towards a different kind of work — understanding people, exploring the inner life, and finding ways to express what words alone cannot always say." : "我的職涯從銀行業開始；在這個領域工作了16年後，我逐漸走向另一種工作：理解人、探索內在世界，以及尋找一些方法，讓未必能以言語說清的感受有所表達。"}</span>
              <ArrowRight className="hero-journey-cue" size={17} aria-hidden="true" />
            </Link>
          </div>
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

      <section className="page-section is-paper door-section">
        <SectionHeading eyebrow={locale === "en" ? "Ways of working" : "工作方式"} title={locale === "en" ? "Four doors into the same larger world" : "四扇門，通向同一個更大的世界"} body={locale === "en" ? "Not separate businesses. They are different expressions of the same underlying interest: understanding human experience and creating a place to explore, express and connect." : "這些並不是互不相關的工作，而是同一個關懷的不同表達：理解人的經驗，並創造可以探索、表達與連結的空間。"} />
        <div className="door-grid">
          {homeWorkItems.map(area => (
            <Link key={area.key} href={area.href} className="door-card">
              <span>{area.index}</span><h3>{t(area.title, locale)}</h3><p>{t(area.description, locale)}</p><ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="page-section studio-highlights">
        <div className="highlight-head"><SectionHeading eyebrow={locale === "en" ? "From the studio" : "來自工作室"} title={locale === "en" ? "Notes, images and ongoing work" : "文字、圖像，以及仍在進行的工作"} body={locale === "en" ? "A place to pause before the next situation" : "在下一個處境來臨前，先停一停"} /><Link href="/writing" className="text-link">{t(siteCopy.viewAll, locale)} <ArrowRight size={14} /></Link></div>
        <div className="editorial-grid">
          <article className="writing-feature"><img src={featuredArticle.image} alt={articleText(featuredArticle.title, locale)} /><div><p className="content-label">{articleText(featuredArticle.category, locale)}</p><h3>{articleText(featuredArticle.title, locale)}</h3>{articleText(featuredArticle.excerpt, locale) ? <p>{articleText(featuredArticle.excerpt, locale)}</p> : null}<Link href={featuredArticleHref} className="text-link">{t(siteCopy.readMore, locale)} <ArrowRight size={14} /></Link></div></article>
          <article className="art-feature"><img src={featuredArtwork.image} alt={t(featuredArtwork.title, locale)} /><div><p className="content-label">{t(featuredArtwork.medium, locale)}{locale === "en" && featuredArtwork.year ? ` · ${featuredArtwork.year}` : ""}</p><h3>{t(featuredArtwork.title, locale)}</h3><Link href={featuredArtwork.href} className="text-link">{locale === "en" ? "Visit the watercolour gallery" : "前往水彩作品集"} <ArrowRight size={14} /></Link></div></article>
        </div>
      </section>

      <section className="closing-section"><p className="eyebrow"><span />{locale === "en" ? "A quiet invitation" : "一個安靜的邀請"}</p><h2 style={{ fontSize: "25px", fontWeight: 300, textAlign: "left" }}>{t(siteCopy.closing, locale)}</h2><Link href="/contact" className="button-primary">{t(siteCopy.contact, locale)} <ArrowRight size={15} /></Link></section>
    </PageFrame>
  );
}
