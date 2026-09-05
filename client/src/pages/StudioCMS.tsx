import DashboardLayout from "@/components/DashboardLayout";
import { PageFrame } from "@/components/SiteChrome";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";
import { AlertCircle, CheckCircle2, FileImage, FilePlus2, Inbox, Loader2, MapPin, Save, Upload } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { CoreContentEditor } from "@/components/CoreContentEditor";

type ItemForm = {
  id?: number;
  kind: "article" | "artwork" | "project" | "collection" | "journey" | "work-record";
  slug: string;
  titleEn: string;
  titleZh: string;
  excerptEn: string;
  excerptZh: string;
  bodyEn: string;
  bodyZh: string;
  categoryEn: string;
  categoryZh: string;
  tags: string;
  imageUrl: string;
  linkUrl: string;
  year: string;
  mediumEn: string;
  mediumZh: string;
  featured: boolean;
  status: "draft" | "published";
  sortOrder: number;
};

type Feedback = { kind: "success" | "error"; text: string };

const blankItem: ItemForm = { kind: "article", slug: "", titleEn: "", titleZh: "", excerptEn: "", excerptZh: "", bodyEn: "", bodyZh: "", categoryEn: "", categoryZh: "", tags: "", imageUrl: "", linkUrl: "", year: "", mediumEn: "", mediumZh: "", featured: false, status: "draft", sortOrder: 0 };

const kindGuidance: Record<ItemForm["kind"], { label: string; destination: string; description: string }> = {
  article: { label: "Writing article / 文字文章", destination: "Writing → article list + /writing/{slug}", description: "Choose this for a complete article. Published content appears in Writing and opens at its own URL." },
  artwork: { label: "Artwork / 藝術作品", destination: "Art → gallery", description: "Choose this for one artwork. Its image, title, year, medium, and description appear in the Art gallery." },
  project: { label: "Project / 項目", destination: "Art → Projects & collections", description: "Choose this for an exhibition, workshop, teaching programme, or community project." },
  collection: { label: "Collection / 作品系列", destination: "Art → Projects & collections", description: "Choose this for a group of artwork or writing gathered around a shared theme." },
  journey: { label: "Connected journey story / 連結旅程", destination: "Home → A connected journey", description: "Choose this for your writing, counselling path, expressive arts practice, or painting story. This creates a new homepage journey card." },
  "work-record": { label: "Ways of working record / 工作方式", destination: "Home → Ways of working", description: "Choose this for a record of how you work with people, groups, organisations, or communities." },
};

const mappingCards: Array<{ label: string; destination: string; detail: string; kind?: ItemForm["kind"] }> = [
  { label: "Core page copy / 核心文字", destination: "About + Services / 關於我與服務", detail: "Use the Core page copy panel for the biography introduction, four biography sections, and five service descriptions." },
  { label: "Writing article / 文字文章", destination: "Writing / 文字", detail: "A complete article with its own URL. Its image appears in the Writing card and article detail page." },
  { label: "Artwork / 藝術作品", destination: "Art gallery / 藝術畫廊", detail: "One artwork with image, title, year, medium, and description." },
  { label: "Project or Collection / 項目或系列", destination: "Art → Projects & collections", detail: "An exhibition, workshop, project, or themed body of work." },
  { label: "Connected journey story / 連結旅程", destination: "Home → A connected journey", detail: "A new homepage card about your writing, counselling, expressive arts practice, or painting. Its short introduction is the visible card text.", kind: "journey" },
  { label: "Ways of working record / 工作方式", destination: "Home → Ways of working", detail: "A homepage card about work with people, groups, organisations, or communities. It can include an image and optional link.", kind: "work-record" },
  { label: "Contact enquiries / 聯絡查詢", destination: "Recent enquiries / 最新查詢", detail: "Messages submitted through Contact appear in the read-only enquiry panel for the owner." },
];

export default function StudioCMS() {
  const { locale } = useLanguage();
  const { user, loading } = useAuth();
  usePageMetadata(locale === "en" ? "Content Studio" : "內容工作室", "Owner-managed content workspace", locale);
  const [form, setForm] = useState<ItemForm>(blankItem);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [uploadError, setUploadError] = useState("");
  const items = trpc.content.listAll.useQuery(undefined, { enabled: user?.role === "admin" });
  const enquiries = trpc.enquiries.listAll.useQuery(undefined, { enabled: user?.role === "admin" });
  const utils = trpc.useUtils();
  const save = trpc.content.save.useMutation({
    onSuccess: async () => {
      await utils.content.listAll.invalidate();
      setForm(blankItem);
      setFeedback({ kind: "success", text: form.status === "published" ? `Published successfully → ${publishedDestination}.` : "Draft saved successfully. It is private until you choose Published." });
    },
    onError: error => setFeedback({ kind: "error", text: error.message }),
  });
  const upload = trpc.media.uploadImage.useMutation({
    onSuccess: file => {
      setForm(current => ({ ...current, imageUrl: file.url }));
      setUploadError("");
      setFeedback({ kind: "success", text: "Image uploaded. Save the item to attach it to this content." });
    },
    onError: error => setUploadError(error.message),
  });
  const update = (name: keyof ItemForm, value: string | boolean | number) => setForm(current => ({ ...current, [name]: value }));
  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setUploadError("Please choose a JPG, PNG, or WebP image.");
      return;
    }
    if (file.size > 5_000_000) {
      setUploadError("This image is larger than 5 MB. Please choose a smaller file.");
      return;
    }
    setUploadError("");
    setFeedback(null);
    const reader = new FileReader();
    reader.onload = () => upload.mutate({ fileName: file.name, contentType: file.type as "image/jpeg" | "image/png" | "image/webp", base64: String(reader.result).split(",")[1] || "" });
    reader.onerror = () => setUploadError("The image could not be read. Please try again.");
    reader.readAsDataURL(file);
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    save.mutate({ ...form, excerptEn: form.excerptEn || null, excerptZh: form.excerptZh || null, bodyEn: form.bodyEn || null, bodyZh: form.bodyZh || null, categoryEn: form.categoryEn || null, categoryZh: form.categoryZh || null, tags: form.tags || null, imageUrl: form.imageUrl || null, linkUrl: form.linkUrl || null, year: form.year || null, mediumEn: form.mediumEn || null, mediumZh: form.mediumZh || null });
  };

  if (loading) return <div className="loading-screen"><Loader2 className="spin" /></div>;
  if (!user) return <PageFrame><section className="page-section access-page"><p className="eyebrow"><span />Owner access</p><h1>Content Studio</h1><p>Please sign in to access Denise’s content workspace.</p><button className="button-primary" type="button" onClick={() => startLogin()}>Sign in</button></section></PageFrame>;
  if (user.role !== "admin") return <PageFrame><section className="page-section access-page"><p className="eyebrow"><span />Owner access</p><h1>Access is limited.</h1><p>This workspace is available to the site owner only.</p></section></PageFrame>;

  const activeGuidance = kindGuidance[form.kind];
  const publishedDestination = form.kind === "article" ? `/writing/${form.slug || "{slug}"}` : form.kind === "journey" ? "Home → A connected journey" : form.kind === "work-record" ? "Home → Ways of working" : form.kind === "artwork" ? "Art → gallery" : "Art → Projects & collections";

  return <DashboardLayout><div className="studio-page"><header className="studio-heading"><div><p className="eyebrow"><span />Content Studio</p><h1>Keep the site alive.</h1><p>Choose the public destination first, then add bilingual content. Upload an image, wait for its preview, and publish only after the destination and fields are correct. Drafts stay private.</p><p className="studio-auth-note">Signed in as <strong>{user.email || user.name || "site owner"}</strong>. This workspace uses your existing site sign-in; there is no separate Studio password.</p></div><div className="studio-counts"><span><FileImage size={16} />{items.data?.length || 0} items</span><span><Inbox size={16} />{enquiries.data?.length || 0} enquiries</span></div></header>
    <section className="studio-map"><div className="studio-section-head"><div><MapPin size={18} /><h2>Where content appears</h2></div></div><p className="studio-map-intro">Every item below has one public destination. Select the destination in the editor, then use the matching short introduction, image, body, and display-order fields. Starter content remains visible only when that destination has no published database items.</p><div className="studio-map-grid">{mappingCards.map(card => <article key={card.label}><p className="content-label">{card.label}</p><h3>{card.destination}</h3><p>{card.detail}</p>{card.kind ? <button type="button" className="studio-map-action" onClick={() => { setForm({ ...blankItem, kind: card.kind! }); setFeedback(null); document.querySelector(".studio-editor")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>Add this content / 新增內容</button> : null}</article>)}</div></section>
    <div className="studio-grid"><section className="studio-editor"><div className="studio-section-head"><div><FilePlus2 size={18} /><h2>{form.id ? "Edit item" : "Add new item"}</h2></div>{form.id ? <button className="reset-link" type="button" onClick={() => { setForm(blankItem); setFeedback(null); }}>Start a new item</button> : null}</div><div className="studio-destination"><strong>{activeGuidance.label} → {activeGuidance.destination}</strong><span>{activeGuidance.description}</span></div><form onSubmit={submit} className="studio-form"><p className="form-guidance"><strong>Before saving:</strong> confirm the public destination shown above. Add a unique lowercase slug and both English and Traditional Chinese titles. For a Writing article, add both short introductions and both full article bodies. For a homepage card, the short introductions become the visible card text.</p><div className="field-row"><label>Public destination / 公開位置<select value={form.kind} onChange={event => update("kind", event.target.value)}><option value="article">Writing article / 文字文章</option><option value="artwork">Art gallery / 藝術畫廊</option><option value="project">Project / 項目</option><option value="collection">Collection / 作品系列</option><option value="journey">Connected journey / 連結旅程</option><option value="work-record">Ways of working / 工作方式</option></select></label><label>Publishing status<select value={form.status} onChange={event => update("status", event.target.value)}><option value="draft">Draft</option><option value="published">Published</option></select></label></div><label>{form.kind === "article" ? "Article URL slug / 文章網址" : "Content identifier / 內容識別名稱"}<input required pattern="[a-z0-9-]+" placeholder={form.kind === "article" ? "example-article-title" : "my-journey-story"} value={form.slug} onChange={event => update("slug", event.target.value)} /><small className="field-hint">Use lowercase letters, numbers, and hyphens only. For articles this becomes /writing/{"{slug}"}; for homepage content it keeps each item unique.</small></label><div className="field-row"><label>English title<input required value={form.titleEn} onChange={event => update("titleEn", event.target.value)} /></label><label>Traditional Chinese title<input required value={form.titleZh} onChange={event => update("titleZh", event.target.value)} /></label></div><div className="field-row"><label>English category<textarea rows={2} value={form.categoryEn} onChange={event => update("categoryEn", event.target.value)} /></label><label>Traditional Chinese category<textarea rows={2} value={form.categoryZh} onChange={event => update("categoryZh", event.target.value)} /></label></div><div className="field-row"><label>English short introduction<textarea rows={4} value={form.excerptEn} onChange={event => update("excerptEn", event.target.value)} /></label><label>Traditional Chinese short introduction<textarea rows={4} value={form.excerptZh} onChange={event => update("excerptZh", event.target.value)} /></label></div><div className="field-row"><label>English content<textarea rows={7} value={form.bodyEn} onChange={event => update("bodyEn", event.target.value)} /></label><label>Traditional Chinese content<textarea rows={7} value={form.bodyZh} onChange={event => update("bodyZh", event.target.value)} /></label></div><label>Tags, separated by commas<input value={form.tags} onChange={event => update("tags", event.target.value)} /></label><div className="field-row"><label>Year<input value={form.year} onChange={event => update("year", event.target.value)} /></label><label>English medium<input value={form.mediumEn} onChange={event => update("mediumEn", event.target.value)} /></label></div><label>Traditional Chinese medium<input value={form.mediumZh} onChange={event => update("mediumZh", event.target.value)} /></label>{form.kind === "work-record" ? <label>Optional link / 可選連結<input type="text" inputMode="url" placeholder="/work or https://example.com" value={form.linkUrl} onChange={event => update("linkUrl", event.target.value)} /><small className="field-hint">Optional. Use a site path such as /work or an http(s) URL. External links open in a new tab.</small></label> : null}<label>Display order<input type="number" min="0" step="1" value={form.sortOrder} onChange={event => update("sortOrder", Number(event.target.value) || 0)} /><small className="field-hint">Lower numbers appear first in the homepage section.</small></label><div className="upload-field"><input id="image-upload" type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} /><label htmlFor="image-upload"><Upload size={16} />{upload.isPending ? "Uploading…" : "Upload image"}</label><small>JPG, PNG or WebP; maximum 5 MB. Upload first, then save the item.</small></div>{uploadError ? <p className="form-error"><AlertCircle size={14} />{uploadError}</p> : null}{form.imageUrl ? <div className="image-preview"><img src={form.imageUrl} alt="Content preview" /><button type="button" onClick={() => update("imageUrl", "")}>Remove image</button></div> : null}<label className="feature-toggle"><input type="checkbox" checked={form.featured} onChange={event => update("featured", event.target.checked)} />Feature this item on the site</label>{feedback ? <p className={feedback.kind === "error" ? "form-error" : "form-success"}>{feedback.kind === "error" ? <AlertCircle size={14} /> : <CheckCircle2 size={14} />}{feedback.text}</p> : null}<button className="button-primary" type="submit" disabled={save.isPending || upload.isPending}><Save size={15} />{save.isPending ? "Saving…" : form.status === "published" ? "Publish item" : "Save draft"}</button></form></section><aside className="studio-sidebar"><CoreContentEditor /><section><div className="studio-section-head"><div><FileImage size={18} /><h2>Content library</h2></div></div><div className="content-library">{items.isLoading ? <p className="empty-note">Loading database content…</p> : items.data?.length ? items.data.map(item => <button type="button" key={item.id} onClick={() => { setFeedback(null); setForm({ id: item.id, kind: item.kind, slug: item.slug, titleEn: item.titleEn, titleZh: item.titleZh, excerptEn: item.excerptEn || "", excerptZh: item.excerptZh || "", bodyEn: item.bodyEn || "", bodyZh: item.bodyZh || "", categoryEn: item.categoryEn || "", categoryZh: item.categoryZh || "", tags: item.tags || "", imageUrl: item.imageUrl || "", year: item.year || "", mediumEn: item.mediumEn || "", mediumZh: item.mediumZh || "", linkUrl: item.linkUrl || "", featured: item.featured, status: item.status, sortOrder: item.sortOrder }); }}><span>{item.status}</span><strong>{item.titleEn}</strong><small>{kindGuidance[item.kind]?.label || item.kind} · {item.slug}</small></button>) : <p className="empty-note">The database library is currently empty. Starter content on the public site is separate. Add an item on the left, upload its image if needed, and save it as a draft first so you can confirm it appears here.</p>}</div></section><section className="enquiry-panel"><div className="studio-section-head"><div><Inbox size={18} /><h2>Recent enquiries</h2></div></div>{enquiries.data?.length ? enquiries.data.slice(0, 5).map(enquiry => <article key={enquiry.id}><strong>{enquiry.name}</strong><span>{enquiry.enquiryType}</span><p>{enquiry.email}</p></article>) : <p className="empty-note">New contact-form enquiries will appear here.</p>}</section></aside></div></div></DashboardLayout>;
}
