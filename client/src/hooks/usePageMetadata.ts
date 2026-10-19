import { useEffect } from "react";
import type { Locale } from "@/contexts/LanguageContext";

const SITE_ORIGIN = "https://deniseho.space";

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export function usePageMetadata(title: string, description: string, locale: Locale) {
  useEffect(() => {
    const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
    const canonicalUrl = `${SITE_ORIGIN}${pathname}`;
    const pageTitle = `${title} | Denise Ho`;
    document.title = `${title} | Denise Ho`;
    document.documentElement.lang = locale === "zh" ? "zh-Hant-HK" : "en";
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);
    upsertMeta('meta[name="robots"]', "name", "robots", "index,follow");
    upsertMeta('meta[property="og:title"]', "property", "og:title", pageTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertCanonical(canonicalUrl);
  }, [title, description, locale]);
}
