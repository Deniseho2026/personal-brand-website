import { PageFrame } from "@/components/SiteChrome";
import ExpressiveArtsProfile from "@/components/ExpressiveArtsProfile";
import { artInCommunityCopy } from "@/content/artInCommunity";
import { artLandingCopy, getArtDoorway, watercolourArtworks } from "@/content/artDoorways";
import { expressiveArtsProfileSlides } from "@/content/expressiveArtsProfile";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

function WatercolourGallery({ locale }: { locale: "en" | "zh" }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const artwork = watercolourArtworks[current];
  const move = (direction: 1 | -1) => setCurrent(index => (index + direction + watercolourArtworks.length) % watercolourArtworks.length);
  const titleLabel = locale === "en" ? "Watercolour artworks" : "水彩作品";

  return <section className="watercolour-art-gallery" aria-label={titleLabel}>
    <div className="watercolour-gallery-desktop">
      {watercolourArtworks.map((item, index) => <figure className={`watercolour-artwork watercolour-artwork-${(index % 5) + 1}`} key={item.title}>
        <img src={item.image} alt={item.title} loading={index > 2 ? "lazy" : "eager"} width={item.width} height={item.height} />
        <figcaption>{item.title}</figcaption>
      </figure>)}
    </div>
    <div className="watercolour-gallery-mobile">
      <div className="watercolour-swipe-stage" onTouchStart={event => setTouchStart(event.touches[0].clientX)} onTouchEnd={event => { if (touchStart === null) return; const distance = event.changedTouches[0].clientX - touchStart; if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1); setTouchStart(null); }}>
        <img src={artwork.image} alt={artwork.title} width={artwork.width} height={artwork.height} />
        <div className="watercolour-swipe-caption"><strong>{artwork.title}</strong><span>{current + 1} / {watercolourArtworks.length}</span></div>
      </div>
      <div className="watercolour-swipe-controls"><button type="button" onClick={() => move(-1)} aria-label={locale === "en" ? "Previous artwork" : "上一幅作品"}><ArrowLeft size={16} /></button><span>{locale === "en" ? "Swipe to browse" : "左右滑動瀏覽"}</span><button type="button" onClick={() => move(1)} aria-label={locale === "en" ? "Next artwork" : "下一幅作品"}><ArrowRight size={16} /></button></div>
    </div>
  </section>;
}

function ArtInCommunityContent({ locale }: { locale: "en" | "zh" }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const photo = artInCommunityCopy.photos[current];
  const move = (direction: 1 | -1) => setCurrent(index => (index + direction + artInCommunityCopy.photos.length) % artInCommunityCopy.photos.length);

  return <div className="art-community-content">
    <div className="art-community-copy">
      {artInCommunityCopy.paragraphs[locale].map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <section className="art-community-gallery" aria-label={locale === "en" ? "Pinner Sketch Club photographs" : "Pinner Sketch Club照片"}>
      <div className="art-community-gallery-desktop">
        {artInCommunityCopy.photos.map((item, index) => <figure className={`art-community-photo art-community-photo-${(index % 5) + 1}`} key={item.src}>
          <img src={item.src} alt="" loading={index > 2 ? "lazy" : "eager"} width={item.width} height={item.height} />
        </figure>)}
      </div>
      <div className="art-community-gallery-mobile">
        <div className="art-community-swipe-stage" onTouchStart={event => setTouchStart(event.touches[0].clientX)} onTouchEnd={event => { if (touchStart === null) return; const distance = event.changedTouches[0].clientX - touchStart; if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1); setTouchStart(null); }}>
          <img src={photo.src} alt="" width={photo.width} height={photo.height} />
          <div className="art-community-swipe-counter">{current + 1} / {artInCommunityCopy.photos.length}</div>
        </div>
        <div className="art-community-swipe-controls"><button type="button" onClick={() => move(-1)} aria-label={locale === "en" ? "Previous photograph" : "上一張照片"}><ArrowLeft size={16} /></button><span>{locale === "en" ? "Swipe to browse" : "左右滑動瀏覽"}</span><button type="button" onClick={() => move(1)} aria-label={locale === "en" ? "Next photograph" : "下一張照片"}><ArrowRight size={16} /></button></div>
      </div>
    </section>
  </div>;
}

export default function ArtDoorwayDetail() {
  const { locale } = useLanguage();
  const [location] = useLocation();
  const slug = decodeURIComponent(location.replace("/art/", ""));
  const doorway = getArtDoorway(slug);
  const title = doorway ? doorway.title[locale] : locale === "en" ? "Art" : "藝術";
  usePageMetadata(title, locale === "en" ? "Art by Denise Ho." : "何穎文的藝術。", locale);

  if (!doorway) {
    return <PageFrame><section className="page-section access-page"><p className="eyebrow"><span />{artLandingCopy.eyebrow[locale]}</p><h1>{locale === "en" ? "This page is not available." : "找不到這個頁面。"}</h1><Link href="/art" className="button-primary">{locale === "en" ? "Return to art" : "返回藝術頁"}</Link></section></PageFrame>;
  }

  return <PageFrame>
    <article className="art-doorway-detail page-section">
      <Link href="/art" className="text-link"><ArrowLeft size={14} />{locale === "en" ? "Back to art" : "返回藝術頁"}</Link>
      <div className="art-doorway-detail-head">
        <p className="eyebrow"><span />{doorway.number} · {doorway.title[locale]}</p>
        <h1>{doorway.title[locale]}</h1>
        <p>{doorway.subtitle[locale]}</p>
      </div>
      {doorway.slug === "watercolour" ? <WatercolourGallery locale={locale} /> : doorway.slug === "expressive-arts" ? <ExpressiveArtsProfile slides={expressiveArtsProfileSlides} locale={locale} /> : doorway.slug === "art-in-community" ? <ArtInCommunityContent locale={locale} /> : <>
        <img className="art-doorway-detail-image" src={doorway.image} alt={doorway.alt[locale]} />
        <div className="art-doorway-future-note">
          <p className="content-label">{locale === "en" ? "Content to be added" : "稍後加入內容"}</p>
          <p>{locale === "en" ? "This page will hold the works and related material for this part of my artistic life." : "這個頁面稍後會放上這部分藝術生活的作品及相關內容。"}</p>
        </div>
      </>}
    </article>
  </PageFrame>;
}
