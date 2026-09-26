import type { ExpressiveArtsProfileSlide } from "@/content/expressiveArtsProfile";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

type Locale = "en" | "zh";

function ProfileText({ text }: { text: string }) {
  return <div className="expressive-profile-text">{text}</div>;
}

function RenderSlide({ slide, locale }: { slide: ExpressiveArtsProfileSlide; locale: Locale }) {
  if (slide.kind === "journey") return <section className="expressive-profile-slide expressive-profile-journey" key={slide.id}>
    <ProfileText text={slide.text[locale]} />
    <figure className="expressive-profile-framed expressive-profile-journey-image"><img src={slide.image} alt={slide.alt[locale]} /></figure>
  </section>;

  if (slide.kind === "peanut-bricks") return <section className="expressive-profile-slide expressive-profile-peanut-bricks" key={slide.id}>
    <div className="expressive-profile-lines">{slide.left.map(line => <p key={line}>{line}</p>)}</div>
    <div className="expressive-profile-double-image"><img src={slide.image} alt={slide.alt[locale]} /><img src={slide.image} alt="" /></div>
    <div className="expressive-profile-lines">{slide.right.map(line => <p key={line}>{line}</p>)}</div>
  </section>;

  if (slide.kind === "poem") return <section className="expressive-profile-slide expressive-profile-poem" key={slide.id}>
    <div><h3>{slide.title[locale]}</h3><ProfileText text={slide.text[locale]} /></div>
    <figure className="expressive-profile-framed"><img src={slide.image} alt={slide.alt[locale]} /></figure>
  </section>;

  if (slide.kind === "life-everywhere") return <section className="expressive-profile-slide expressive-profile-life" key={slide.id}>
    <h3>{slide.title[locale]}</h3>
    <div className="expressive-profile-life-grid">{slide.images.map((image, imageIndex) => <figure key={image} className={`expressive-profile-life-item expressive-profile-life-item-${imageIndex + 1}`}><img src={image} alt={slide.alt[imageIndex][locale]} /><figcaption>{slide.labels[locale][imageIndex]}</figcaption></figure>)}</div>
  </section>;

  if (slide.kind === "shaman") return <section className="expressive-profile-slide expressive-profile-shaman" key={slide.id}>
    <ProfileText text={slide.text[locale]} />
    <div className="expressive-profile-framed expressive-profile-triptych">{slide.images.map((image, imageIndex) => <img key={image} src={image} alt={slide.alt[imageIndex][locale]} />)}</div>
  </section>;

  if (slide.kind === "integrate-opposites") return <section className="expressive-profile-slide expressive-profile-integrate" key={slide.id}>
    <figure className="expressive-profile-framed"><img src={slide.image} alt={slide.alt[locale]} /></figure>
    <div className="expressive-profile-word-pairs"><div>{slide.left.map(word => <span key={word}>{word}</span>)}</div><div>{slide.right.map(word => <span key={word}>{word}</span>)}</div></div>
  </section>;

  return <section className="expressive-profile-slide expressive-profile-growth" key={slide.id}>
    <div className="expressive-profile-growth-images">{slide.images.map((image, imageIndex) => <img key={image} src={image} alt={slide.alt[imageIndex][locale]} />)}</div>
    <ProfileText text={slide.text[locale]} />
  </section>;
}

export default function ExpressiveArtsProfile({ slides, locale }: { slides: ExpressiveArtsProfileSlide[]; locale: Locale }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const move = (direction: 1 | -1) => setCurrent(index => (index + direction + slides.length) % slides.length);
  const titleLabel = locale === "en" ? "Expressive Arts works" : "表達藝術作品";
  const currentSlide = slides[current];

  return <div className="expressive-profile" aria-label={titleLabel}>
    <div className="expressive-profile-desktop">{slides.map(slide => <RenderSlide key={slide.id} slide={slide} locale={locale} />)}</div>
    <div className="expressive-profile-mobile">
      <div className="expressive-profile-mobile-stage" onTouchStart={event => setTouchStart(event.touches[0].clientX)} onTouchEnd={event => { if (touchStart === null) return; const distance = event.changedTouches[0].clientX - touchStart; if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1); setTouchStart(null); }}>
        <RenderSlide slide={currentSlide} locale={locale} />
        <div className="expressive-profile-mobile-caption"><span>{current + 1} / {slides.length}</span></div>
      </div>
      <div className="expressive-profile-mobile-controls"><button type="button" onClick={() => move(-1)} aria-label={locale === "en" ? "Previous work" : "上一件作品"}><ArrowLeft size={16} /></button><span>{locale === "en" ? "Swipe to browse" : "左右滑動瀏覽"}</span><button type="button" onClick={() => move(1)} aria-label={locale === "en" ? "Next work" : "下一件作品"}><ArrowRight size={16} /></button></div>
    </div>
  </div>;
}
