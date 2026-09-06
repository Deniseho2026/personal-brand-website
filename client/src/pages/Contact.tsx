import { PageFrame } from "@/components/SiteChrome";
import { buildContactPayload } from "@/contactForm";
import { contactDetails } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { CheckCircle2, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

const enquiryTypes = ["counselling", "expressive-arts", "watercolour", "talks-workshops", "older-adult-companionship", "general"] as const;
type EnquiryType = (typeof enquiryTypes)[number];

type FormState = { name: string; email: string; phone: string; enquiryType: EnquiryType; message: string; consent: boolean };
const emptyForm: FormState = { name: "", email: "", phone: "", enquiryType: "general", message: "", consent: false };
const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const labels: Record<EnquiryType, { en: string; zh: string }> = {
  counselling: { en: "Counselling", zh: "心理輔導" },
  "expressive-arts": { en: "Expressive Arts", zh: "表達藝術" },
  watercolour: { en: "Watercolour", zh: "水彩" },
  "talks-workshops": { en: "Talks / Workshops", zh: "講座／工作坊" },
  "older-adult-companionship": { en: "Older Adult Creative Companionship", zh: "長者創意陪伴" },
  general: { en: "General enquiry", zh: "一般查詢" },
};

export default function Contact() {
  const { locale } = useLanguage();
  usePageMetadata(locale === "en" ? "Contact" : "聯絡我", locale === "en" ? "Get in touch with Denise Ho about counselling, expressive arts, watercolour, talks, and workshops." : "歡迎就心理輔導、表達藝術、水彩、講座及工作坊聯絡何穎文。", locale);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const input = (name: keyof FormState, value: string | boolean) => setForm(current => ({ ...current, [name]: value }));
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.consent) return;
    if (!formEndpoint) {
      setError(locale === "en" ? "The contact form is not configured yet. Please email Denise directly." : "聯絡表格尚未完成設定，請直接以電郵聯絡 Denise。 ");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(formEndpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(buildContactPayload(form, locale)) });
      if (!response.ok) throw new Error("form submission failed");
      setForm(emptyForm);
      setStatus("success");
    } catch {
      setError(locale === "en" ? "The message could not be sent. Please email Denise directly instead." : "訊息未能發送，請改為直接以電郵聯絡 Denise。 ");
      setStatus("error");
    }
  };

  return <PageFrame>
    <section className="page-section contact-layout">
      <div className="contact-copy"><p className="eyebrow"><span />{locale === "en" ? "Contact" : "聯絡我"}</p><h1>{locale === "en" ? "Begin with a conversation." : "由一次對話開始。"}</h1><p>{locale === "en" ? "If you would like to ask about a service, workshop, talk, watercolour class, or a possible collaboration, you are welcome to write. Please share only what feels appropriate for an initial enquiry." : "如你想查詢服務、工作坊、講座、水彩課程，或討論合作的可能，歡迎寫信給我。初次查詢時，請只分享你覺得合適的資料。"}</p><div className="contact-details"><a href={`mailto:${contactDetails.email}`}><Mail size={19} /><span><small>{locale === "en" ? "Email" : "電郵"}</small>{contactDetails.email}</span></a><a href={contactDetails.phoneHref}><Phone size={19} /><span><small>{locale === "en" ? "Phone" : "電話"}</small>{contactDetails.phone}</span></a></div><div className="contact-social"><a href={contactDetails.facebook} target="_blank" rel="noreferrer"><Facebook size={17} /> 深度心理學筆記</a><a href={contactDetails.instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> @denise.wmho</a></div></div>
      <div className="contact-form-wrap">{status === "success" ? <div className="form-success"><CheckCircle2 size={36} /><h2>{locale === "en" ? "Thank you for writing." : "感謝你的來信。"}</h2><p>{locale === "en" ? "Your enquiry has been sent to Denise by email. She will respond as soon as possible." : "你的查詢已經透過電郵發送給 Denise。她會在可行的情況下盡快回覆。"}</p><button className="button-secondary" type="button" onClick={() => setStatus("idle")}>{locale === "en" ? "Send another enquiry" : "再發送一個查詢"}</button></div> : <form onSubmit={onSubmit} className="contact-form"><div className="form-topline"><span>{locale === "en" ? "Enquiry form" : "查詢表格"}</span><small>{locale === "en" ? "Fields marked * are required" : "* 為必填項目"}</small></div><label>{locale === "en" ? "Name" : "姓名"} *<input required value={form.name} onChange={event => input("name", event.target.value)} /></label><label>{locale === "en" ? "Email" : "電郵"} *<input required type="email" value={form.email} onChange={event => input("email", event.target.value)} /></label><label>{locale === "en" ? "Phone" : "電話"}<input type="tel" value={form.phone} onChange={event => input("phone", event.target.value)} /></label><label>{locale === "en" ? "Enquiry type" : "查詢類別"} *<select value={form.enquiryType} onChange={event => input("enquiryType", event.target.value)}>{enquiryTypes.map(type => <option key={type} value={type}>{labels[type][locale]}</option>)}</select></label><label>{locale === "en" ? "Message" : "訊息"} *<textarea required minLength={10} rows={6} value={form.message} onChange={event => input("message", event.target.value)} /></label><label className="consent-row"><input required type="checkbox" checked={form.consent} onChange={event => input("consent", event.target.checked)} /><span>{locale === "en" ? "I consent to my information being used only to respond to this enquiry." : "我同意所提交的資料只會用於回覆這次查詢。"}</span></label>{status === "error" ? <p className="form-error">{error}</p> : null}<button className="button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? (locale === "en" ? "Sending…" : "正在發送…") : (locale === "en" ? "Send enquiry" : "發送查詢")}</button><p className="privacy-note">{locale === "en" ? "Privacy note: this form sends your message to Denise’s email through a third-party form service. Please do not include urgent, medical, or highly sensitive information." : "私隱說明：此表格會透過第三方表格服務把訊息發送到 Denise 的電郵。請不要在表格中提供緊急、醫療或高度敏感的資料。"}</p></form>}</div>
    </section>
  </PageFrame>;
}
