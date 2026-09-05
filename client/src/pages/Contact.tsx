import { PageFrame } from "@/components/SiteChrome";
import { contactDetails } from "@/content/siteContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { trpc } from "@/lib/trpc";
import { CheckCircle2, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

const enquiryTypes = ["counselling", "expressive-arts", "watercolour", "talks-workshops", "older-adult-companionship", "general"] as const;
type EnquiryType = (typeof enquiryTypes)[number];

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
  const [form, setForm] = useState({ name: "", email: "", phone: "", enquiryType: "general" as EnquiryType, message: "", consent: false });
  const submit = trpc.enquiries.submit.useMutation({ onSuccess: () => setForm({ name: "", email: "", phone: "", enquiryType: "general", message: "", consent: false }) });
  const input = (name: keyof typeof form, value: string | boolean) => setForm(current => ({ ...current, [name]: value }));
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.consent) return;
    submit.mutate({ name: form.name, email: form.email, phone: form.phone || undefined, enquiryType: form.enquiryType, message: form.message, locale, consent: true });
  };

  return <PageFrame>
    <section className="page-section contact-layout">
      <div className="contact-copy"><p className="eyebrow"><span />{locale === "en" ? "Contact" : "聯絡我"}</p><h1>{locale === "en" ? "Begin with a conversation." : "由一次對話開始。"}</h1><p>{locale === "en" ? "If you would like to ask about a service, workshop, talk, watercolour class, or a possible collaboration, you are welcome to write. Please share only what feels appropriate for an initial enquiry." : "如你想查詢服務、工作坊、講座、水彩課程，或討論合作的可能，歡迎寫信給我。初次查詢時，請只分享你覺得合適的資料。"}</p><div className="contact-details"><a href={`mailto:${contactDetails.email}`}><Mail size={19} /><span><small>{locale === "en" ? "Email" : "電郵"}</small>{contactDetails.email}</span></a><a href={contactDetails.phoneHref}><Phone size={19} /><span><small>{locale === "en" ? "Phone" : "電話"}</small>{contactDetails.phone}</span></a></div><div className="contact-social"><a href={contactDetails.facebook} target="_blank" rel="noreferrer"><Facebook size={17} /> 深度心理學筆記</a><a href={contactDetails.instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> @denise.wmho</a></div></div>
      <div className="contact-form-wrap">{submit.isSuccess ? <div className="form-success"><CheckCircle2 size={36} /><h2>{locale === "en" ? "Thank you for writing." : "感謝你的來信。"}</h2><p>{locale === "en" ? "Your enquiry has been received. Denise will respond as soon as possible." : "你的查詢已經收到。Denise 會在可行的情況下盡快回覆。"}</p><button className="button-secondary" type="button" onClick={() => submit.reset()}>{locale === "en" ? "Send another enquiry" : "再發送一個查詢"}</button></div> : <form onSubmit={onSubmit} className="contact-form"><div className="form-topline"><span>{locale === "en" ? "Enquiry form" : "查詢表格"}</span><small>{locale === "en" ? "Fields marked * are required" : "* 為必填項目"}</small></div><label>{locale === "en" ? "Name" : "姓名"} *<input required value={form.name} onChange={event => input("name", event.target.value)} /></label><label>{locale === "en" ? "Email" : "電郵"} *<input required type="email" value={form.email} onChange={event => input("email", event.target.value)} /></label><label>{locale === "en" ? "Phone" : "電話"}<input type="tel" value={form.phone} onChange={event => input("phone", event.target.value)} /></label><label>{locale === "en" ? "Enquiry type" : "查詢類別"} *<select value={form.enquiryType} onChange={event => input("enquiryType", event.target.value)}>{enquiryTypes.map(type => <option key={type} value={type}>{labels[type][locale]}</option>)}</select></label><label>{locale === "en" ? "Message" : "訊息"} *<textarea required minLength={10} rows={6} value={form.message} onChange={event => input("message", event.target.value)} /></label><label className="consent-row"><input required type="checkbox" checked={form.consent} onChange={event => input("consent", event.target.checked)} /><span>{locale === "en" ? "I consent to my information being used only to respond to this enquiry." : "我同意所提交的資料只會用於回覆這次查詢。"}</span></label>{submit.isError ? <p className="form-error">{submit.error.message}</p> : null}<button className="button-primary" type="submit" disabled={submit.isPending}>{submit.isPending ? (locale === "en" ? "Sending…" : "正在發送…") : (locale === "en" ? "Send enquiry" : "發送查詢")}</button><p className="privacy-note">{locale === "en" ? "Privacy note: information submitted through this form is used only to respond to your enquiry. Please do not include urgent, medical, or highly sensitive information in this form." : "私隱說明：表格中提交的資料只會用於回覆你的查詢。請不要在表格中提供緊急、醫療或高度敏感的資料。"}</p></form>}</div>
    </section>
  </PageFrame>;
}
