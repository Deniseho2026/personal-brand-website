import { useLanguage } from "@/contexts/LanguageContext";
import { assetUrls, contactDetails, navigation, siteCopy, t } from "@/content/siteContent";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export function SiteHeader() {
  const { locale, toggleLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-lockup" aria-label="Denise Ho home">
          <img src={assetUrls.mark} alt="Denise Ho studio mark" className="brand-mark" />
          <span className="brand-name">Denise Ho</span>
        </Link>
        <nav className="desktop-nav" aria-label={locale === "en" ? "Main navigation" : "主要導覽"}>
          {navigation.map(item => (
            <Link key={item.href} href={item.href} className={location === item.href ? "nav-link active" : "nav-link"}>
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button type="button" onClick={toggleLocale} className="language-toggle" aria-label={locale === "en" ? "Switch to Traditional Chinese" : "切換至英文"}>
            <span className={locale === "en" ? "is-active" : ""}>EN</span><span className="language-slash">/</span><span className={locale === "zh" ? "is-active zh-ui" : "zh-ui"}>繁中</span>
          </button>
          <button type="button" className="menu-toggle" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={21} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label={locale === "en" ? "Mobile navigation" : "流動裝置導覽"}>
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="mobile-nav-link">
              <span>{String(index + 1).padStart(2, "0")}</span>{t(item.label, locale)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { locale } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand"><img src={assetUrls.mark} alt="" /><span>Denise Ho</span></div>
          <p>{t(siteCopy.studioLabel, locale)}</p>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
        </div>
        <div className="footer-social" aria-label={locale === "en" ? "Social links" : "社交媒體連結"}>
          <a href={contactDetails.facebook} target="_blank" rel="noreferrer" aria-label="Facebook 深度心理學筆記"><Facebook size={17} /></a>
          <a href={contactDetails.instagram} target="_blank" rel="noreferrer" aria-label="Instagram @denise.wmho"><Instagram size={17} /></a>
        </div>
      </div>
      <div className="footer-base">
        <p>{t(siteCopy.disclaimer, locale)}</p>
        <span>© {new Date().getFullYear()} Denise Ho</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <div className="site-shell"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}

export function SectionHeading({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "is-centered" : ""}`}>
    <p className="eyebrow"><span />{eyebrow}</p>
    <h2>{title}</h2>
    {body ? <p className="section-intro">{body}</p> : null}
  </div>;
}
