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
  article: { label: "Article", destination: "Writing page and /writing/{slug}", description: "Published articles appear in Writing and open as their own long-form reading page." },
  artwork: { label: "Artwork", destination: "Art gallery", description: "Published artwork appears in the Art gallery with its image, title, year, medium, and description." },
  project: { label: "Project", destination: "Art page → Projects & collections", description: "Use for an exhibition, workshop, teaching programme, or community project." },
  collection: { label: "Collection", destination: "Art page → Projects & collections", description: "Use for a group of artwork or writing gathered around a shared theme." },
  journey: { label: "Journey story", destination: "Home → A connected journey", description: "Use for your writing, counselling path, expressive arts practice, or painting story." },
  "work-record": { label: "Work record", destination: "Home → Ways of working", description: "Use for a record of how you work with people, groups, organisations, or communities." },
};

const mappingCards = [
  { label: "Core page copy", destination: "About and Services", detail: "Use the Core page copy panel for the biography introduction, four biography sections, and five service descriptions." },
  { label: "Article", destination: "Writing", detail: "Requires a unique clean URL slug and both language titles. Publish it to replace the starter Writing list." },
  { label: "Artwork", destination: "Art gallery", detail: "Add an image, title, year, and medium. The image is stored in managed storage, not inside the project files." },
  { label: "Project / Collection", destination: "Art → Projects & collections", detail: "These appear in the lower project-and-collection section of the Art page after publishing." },
  { label: "Journey story", destination: "Home → A connected journey", detail: "Use for your writing, counselling path, expressive arts practice, or painting story. The short introduction becomes the card text." },
  { label: "Work record", destination: "Home → Ways of working", detail: "Use for a record of working with people or groups. The short introduction becomes the card text and an optional image appears on the card." },
  { label: "Contact enquiries", destination: "Recent enquiries", detail: "Messages submitted through Contact appear in the read-only enquiry panel for the owner." },
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
      setFeedback({ kind: "success", text: "Saved successfully. A draft stays private; a published item now appears on its mapped public page." });
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

  return <DashboardLayout><div className="studio-page"><header className="studio-heading"><div><p className="eyebrow"><span />Content Studio</p><h1>Keep the site alive.</h1><p>Add bilingual articles, artworks, projects, collections, journey stories, and work records. Content is saved as a draft until you choose to publish it.</p><p className="studio-auth-note">Signed in as <strong>{user.email || user.name || "site owner"}</strong>. This workspace uses your existing site sign-in; there is no separate Studio password.</p></div><div className="studio-counts"><span><FileImage size={16} />{items.data?.length || 0} items</span><span><Inbox size={16} />{enquiries.data?.length || 0} enquiries</span></div></header>
    <section className="studio-map"><div className="studio-section-head"><div><MapPin size={18} /><h2>Where content appears</h2></div></div><p className="studio-map-intro">The public website still contains starter content until you publish a database item of the matching type. Core page copy is edited separately below.</p><div className="studio-map-grid">{mappingCards.map(card => <article key={card.label}><p className="content-label">{card.label}</p><h3>{card.destination}</h3><p>{card.detail}</p></article>)}</div></section>
    <div className="studio-grid"><section className="studio-editor"><div className="studio-section-head"><div><FilePlus2 size={18} /><h2>{form.id ? "Edit item" : "Add new item"}</h2></div>{form.id ? <button className="reset-link" type="button" onClick={() => { setForm(blankItem); setFeedback(null); }}>Start a new item</button> : null}</div><div className="studio-destination"><strong>{activeGuidance.label} → {activeGuidance.destination}</strong><span>{activeGuidance.description}</span></div><form onSubmit={submit} className="studio-form"><p className="form-guidance"><strong>Required:</strong> a unique lowercase slug and both English and Traditional Chinese titles. For an article, add the short introduction and full content in both languages before publishing.</p><div className="field-row"><label>Type<select value={form.kind} onChange={event => update("kind", event.target.value)}><option value="article">Article</option><option value="artwork">Artwork</option><option value="project">Project</option><option value="collection">Collection</option><option value="journey">Journey story</option><option value="work-record">Work record</option></select></label><label>Publishing status<select value={form.status} onChange={event => update("status", event.target.value)}><option value="draft">Draft</option><option value="published">Published</option></select></label></div><label>Clean URL slug<input required pattern="[a-z0-9-]+" placeholder="example-article-title" value={form.slug} onChange={event => update("slug", event.target.value)} /><small className="field-hint">Use lowercase letters, numbers, and hyphens only. The slug must be unique.</small></label><div className="field-row"><label>English title<input required value={form.titleEn} onChange={event => update("titleEn", event.target.value)} /></label><label>Traditional Chinese title<input required value={form.titleZh} onChange={event => update("titleZh", event.target.value)} /></label></div><div className="field-row"><label>English category<textarea rows={2} value={form.categoryEn} onChange={event => update("categoryEn", event.target.value)} /></label><label>Traditional Chinese category<textarea rows={2} value={form.categoryZh} onChange={event => update("categoryZh", event.target.value)} /></label></div><div className="field-row"><label>English short introduction<textarea rows={4} value={form.excerptEn} onChange={event => update("excerptEn", event.target.value)} /></label><label>Traditional Chinese short introduction<textarea rows={4} value={form.excerptZh} onChange={event => update("excerptZh", event.target.value)} /></label></div><div className="field-row"><label>English content<textarea rows={7} value={form.bodyEn} onChange={event => update("bodyEn", event.target.value)} /></label><label>Traditional Chinese content<textarea rows={7} value={form.bodyZh} onChange={event => update("bodyZh", event.target.value)} /></label></div><label>Tags, separated by commas<input value={form.tags} onChange={event => update("tags", event.target.value)} /></label><div className="field-row"><label>Year<input value={form.year} onChange={event => update("year", event.target.value)} /></label><label>English medium<input value={form.mediumEn} onChange={event => update("mediumEn", event.target.value)} /></label></div><label>Traditional Chinese medium<input value={form.mediumZh} onChange={event => update("mediumZh", event.target.value)} /></label><label>Optional link<input type="text" inputMode="url" placeholder="/work or https://example.com" value={form.linkUrl} onChange={event => update("linkUrl", event.target.value)} /><small className="field-hint">Optional. Use a site path such as /work or an http(s) URL.</small></label><label>Display order<input type="number" min="0" step="1" value={form.sortOrder} onChange={event => update("sortOrder", Number(event.target.value) || 0)} /><small className="field-hint">Lower numbers appear first in the homepage section.</small></label><div className="upload-field"><input id="image-upload" type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} /><label htmlFor="image-upload"><Upload size={16} />{upload.isPending ? "Uploading…" : "Upload image"}</label><small>JPG, PNG or WebP; maximum 5 MB. Upload first, then save the item.</small></div>{uploadError ? <p className="form-error"><AlertCircle size={14} />{uploadError}</p> : null}{form.imageUrl ? <div className="image-preview"><img src={form.imageUrl} alt="Content preview" /><button type="button" onClick={() => update("imageUrl", "")}>Remove image</button></div> : null}<label className="feature-toggle"><input type="checkbox" checked={form.featured} onChange={event => update("featured", event.target.checked)} />Feature this item on the site</label>{feedback ? <p className={feedback.kind === "error" ? "form-error" : "form-success"}>{feedback.kind === "error" ? <AlertCircle size={14} /> : <CheckCircle2 size={14} />}{feedback.text}</p> : null}<button className="button-primary" type="submit" disabled={save.isPending || upload.isPending}><Save size={15} />{save.isPending ? "Saving…" : form.status === "published" ? "Publish item" : "Save draft"}</button></form></section><aside className="studio-sidebar"><CoreContentEditor /><section><div className="studio-section-head"><div><FileImage size={18} /><h2>Content library</h2></div></div><div className="content-library">{items.isLoading ? <p className="empty-note">Loading database content…</p> : items.data?.length ? items.data.map(item => <button type="button" key={item.id} onClick={() => { setFeedback(null); setForm({ id: item.id, kind: item.kind, slug: item.slug, titleEn: item.titleEn, titleZh: item.titleZh, excerptEn: item.excerptEn || "", excerptZh: item.excerptZh || "", bodyEn: item.bodyEn || "", bodyZh: item.bodyZh || "", categoryEn: item.categoryEn || "", categoryZh: item.categoryZh || "", tags: item.tags || "", imageUrl: item.imageUrl || "", year: item.year || "", mediumEn: item.mediumEn || "", mediumZh: item.mediumZh || "", linkUrl: item.linkUrl || "", featured: item.featured, status: item.status, sortOrder: item.sortOrder }); }}><span>{item.status}</span><strong>{item.titleEn}</strong><small>{kindGuidance[item.kind]?.label || item.kind} · {item.slug}</small></button>) : <p className="empty-note">The database library is currently empty. Starter content on the public site is separate. Add an item on the left, upload its image if needed, and save it as a draft first so you can confirm it appears here.</p>}</div></section><section className="enquiry-panel"><div className="studio-section-head"><div><Inbox size={18} /><h2>Recent enquiries</h2></div></div>{enquiries.data?.length ? enquiries.data.slice(0, 5).map(enquiry => <article key={enquiry.id}><strong>{enquiry.name}</strong><span>{enquiry.enquiryType}</span><p>{enquiry.email}</p></article>) : <p className="empty-note">New contact-form enquiries will appear here.</p>}</section></aside></div></div></DashboardLayout>;
}
