import { PageFrame } from "@/components/SiteChrome";
import { artDoorways, artLandingCopy } from "@/content/artDoorways";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Art() {
  const { locale } = useLanguage();
  usePageMetadata(artLandingCopy.title[locale], locale === "en" ? "Three ways art lives in Denise Ho's life." : "藝術以三種方式存在於何穎文的生命之中。", locale);

  return <PageFrame>
    <section className="page-section art-doorways-intro">
      <div>
        <p className="eyebrow"><span />{artLandingCopy.eyebrow[locale]}</p>
        <h1>{artLandingCopy.title[locale]}</h1>
      </div>
      <p>{artLandingCopy.introduction[locale]}</p>
    </section>
    <section className="page-section art-doorways" aria-label={artLandingCopy.title[locale]}>
      {artDoorways.map((doorway) => <Link href={`/art/${doorway.slug}`} className="art-doorway" key={doorway.slug}>
        <img src={doorway.image} alt={doorway.alt[locale]} />
        <div className="art-doorway-meta">
          <span className="art-doorway-number">{doorway.number}</span>
          <h2>{doorway.title[locale]}</h2>
          <p>{doorway.subtitle[locale]}</p>
          <span className="art-doorway-action">{locale === "en" ? "Explore" : "探索"}<ArrowRight size={15} /></span>
        </div>
      </Link>)}
    </section>
  </PageFrame>;
}
