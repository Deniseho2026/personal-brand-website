import { PageFrame, SectionHeading } from "@/components/SiteChrome";
import { services, siteCopy, t } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const { locale } = useLanguage();
  usePageMetadata(locale === "en" ? "Services" : "服務", locale === "en" ? "Watercolour classes, expressive arts groups, talks, workshops, individual counselling, and creative companionship." : "水彩課程、表達藝術小組、講座、工作坊、個人心理輔導及長者創意陪伴。", locale);
  return <PageFrame>
    <section className="page-section page-intro services-intro"><p className="eyebrow"><span />{locale === "en" ? "Services" : "服務"}</p><h1>{locale === "en" ? "Ways we might work together." : "不同的合作方式。"}</h1><p>{locale === "en" ? "Each offering is shaped by its particular context and by the people involved. The starting point is not a promise of transformation, but a thoughtful space for learning, exploration, expression, or conversation." : "每一種服務都會按其情境和參與的人而調整。出發點不是承諾改變，而是提供一個可以學習、探索、表達或對話的細緻空間。"}</p></section>
    <section className="page-section is-paper services-list"><SectionHeading eyebrow={locale === "en" ? "Offerings" : "服務內容"} title={locale === "en" ? "Carefully held, context-aware work." : "細緻看待情境，認真安放每一次相遇。"} />
      <div className="services-stack">{services.map(service => <article className="service-card" key={service.id}><div className="service-number">{service.index}</div><div className="service-main"><h2>{t(service.title, locale)}</h2><p className="service-audience">{t(service.audience, locale)}</p>{locale === "en" && service.lessonDetails ? <div className="watercolour-lesson-copy"><p>{service.lessonDetails.introduction}</p><p>{service.lessonDetails.location}</p><h3>{service.lessonDetails.offerHeading}</h3><div className="watercolour-offers">{service.lessonDetails.options.map(option => <div className="watercolour-offer" key={option.title}><strong>{option.title}</strong><span>{option.price}</span>{option.note ? <small>{option.note}</small> : null}</div>)}</div><p>{service.lessonDetails.materials}</p></div> : <p>{t(service.description, locale)}</p>}{service.images ? <div className="watercolour-gallery" aria-label={locale === "en" ? "Watercolour class photographs" : "水彩課堂照片"}>{service.images.map(image => <img key={image.src} src={image.src} alt={image.alt} />)}</div> : null}</div><div className="service-cta">{service.hkOnly ? <span><MapPin size={13} />{t(siteCopy.hongKongOnly, locale)}</span> : null}<Link href="/contact" aria-label={`${locale === "en" ? "Enquire about" : "查詢"} ${t(service.title, locale)}`}><ArrowRight size={20} /></Link></div></article>)}</div>
    </section>
    <section className="professional-note"><p className="eyebrow"><span />{locale === "en" ? "A note on location" : "服務地點說明"}</p><p>{locale === "en" ? "Individual counselling and expressive arts services are currently available in Hong Kong only. Denise is based in the UK, and this website does not imply UK statutory registration as a counsellor, psychotherapist, or art psychotherapist." : "個人心理輔導及表達藝術服務現時只於香港提供。Denise 現居英國；本網站並不表示她已在英國以輔導員、心理治療師或藝術心理治療師的法定身份註冊。"}</p></section>
  </PageFrame>;
}
