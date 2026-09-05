import DashboardLayout from "@/components/DashboardLayout";
import { PageFrame } from "@/components/SiteChrome";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";
import { FileImage, FilePlus2, Inbox, Loader2, Save, Upload } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { CoreContentEditor } from "@/components/CoreContentEditor";

type ItemForm = {
  id?: number;
  kind: "article" | "artwork" | "project" | "collection";
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
  year: string;
  mediumEn: string;
  mediumZh: string;
  featured: boolean;
  status: "draft" | "published";
  sortOrder: number;
};

const blankItem: ItemForm = { kind: "article", slug: "", titleEn: "", titleZh: "", excerptEn: "", excerptZh: "", bodyEn: "", bodyZh: "", categoryEn: "", categoryZh: "", tags: "", imageUrl: "", year: "", mediumEn: "", mediumZh: "", featured: false, status: "draft", sortOrder: 0 };

export default function StudioCMS() {
  const { locale } = useLanguage();
  const { user, loading } = useAuth();
  usePageMetadata(locale === "en" ? "Content Studio" : "內容工作室", "Owner-managed content workspace", locale);
  const [form, setForm] = useState<ItemForm>(blankItem);
  const items = trpc.content.listAll.useQuery(undefined, { enabled: user?.role === "admin" });
  const enquiries = trpc.enquiries.listAll.useQuery(undefined, { enabled: user?.role === "admin" });
  const utils = trpc.useUtils();
  const save = trpc.content.save.useMutation({ onSuccess: async () => { await utils.content.listAll.invalidate(); setForm(blankItem); } });
  const upload = trpc.media.uploadImage.useMutation({ onSuccess: file => setForm(current => ({ ...current, imageUrl: file.url })) });
  const update = (name: keyof ItemForm, value: string | boolean | number) => setForm(current => ({ ...current, [name]: value }));
  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 5_000_000) return;
    const reader = new FileReader();
    reader.onload = () => upload.mutate({ fileName: file.name, contentType: file.type as "image/jpeg" | "image/png" | "image/webp", base64: String(reader.result).split(",")[1] || "" });
    reader.readAsDataURL(file);
  };
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); save.mutate({ ...form, excerptEn: form.excerptEn || null, excerptZh: form.excerptZh || null, bodyEn: form.bodyEn || null, bodyZh: form.bodyZh || null, categoryEn: form.categoryEn || null, categoryZh: form.categoryZh || null, tags: form.tags || null, imageUrl: form.imageUrl || null, year: form.year || null, mediumEn: form.mediumEn || null, mediumZh: form.mediumZh || null }); };

  if (loading) return <div className="loading-screen"><Loader2 className="spin" /></div>;
  if (!user) return <PageFrame><section className="page-section access-page"><p className="eyebrow"><span />Owner access</p><h1>Content Studio</h1><p>Please sign in to access Denise’s content workspace.</p><button className="button-primary" type="button" onClick={() => startLogin()}>Sign in</button></section></PageFrame>;
  if (user.role !== "admin") return <PageFrame><section className="page-section access-page"><p className="eyebrow"><span />Owner access</p><h1>Access is limited.</h1><p>This workspace is available to the site owner only.</p></section></PageFrame>;

  return <DashboardLayout><div className="studio-page"><header className="studio-heading"><div><p className="eyebrow"><span />Content Studio</p><h1>Keep the site alive.</h1><p>Add bilingual articles, artworks, projects, and collections. Content is saved as a draft until you choose to publish it.</p><p className="studio-auth-note">Signed in as <strong>{user.email || user.name || "site owner"}</strong>. This workspace uses your existing site sign-in; there is no separate Studio password.</p></div><div className="studio-counts"><span><FileImage size={16} />{items.data?.length || 0} items</span><span><Inbox size={16} />{enquiries.data?.length || 0} enquiries</span></div></header><div className="studio-grid"><section className="studio-editor"><div className="studio-section-head"><div><FilePlus2 size={18} /><h2>{form.id ? "Edit item" : "Add new item"}</h2></div>{form.id ? <button className="reset-link" type="button" onClick={() => setForm(blankItem)}>Start a new item</button> : null}</div><form onSubmit={submit} className="studio-form"><div className="field-row"><label>Type<select value={form.kind} onChange={event => update("kind", event.target.value)}><option value="article">Article</option><option value="artwork">Artwork</option><option value="project">Project</option><option value="collection">Collection</option></select></label><label>Publishing status<select value={form.status} onChange={event => update("status", event.target.value)}><option value="draft">Draft</option><option value="published">Published</option></select></label></div><label>Clean URL slug<input required pattern="[a-z0-9-]+" placeholder="example-article-title" value={form.slug} onChange={event => update("slug", event.target.value)} /></label><div className="field-row"><label>English title<input required value={form.titleEn} onChange={event => update("titleEn", event.target.value)} /></label><label>Traditional Chinese title<input required value={form.titleZh} onChange={event => update("titleZh", event.target.value)} /></label></div><div className="field-row"><label>English category<textarea rows={2} value={form.categoryEn} onChange={event => update("categoryEn", event.target.value)} /></label><label>Traditional Chinese category<textarea rows={2} value={form.categoryZh} onChange={event => update("categoryZh", event.target.value)} /></label></div><div className="field-row"><label>English short introduction<textarea rows={4} value={form.excerptEn} onChange={event => update("excerptEn", event.target.value)} /></label><label>Traditional Chinese short introduction<textarea rows={4} value={form.excerptZh} onChange={event => update("excerptZh", event.target.value)} /></label></div><div className="field-row"><label>English content<textarea rows={7} value={form.bodyEn} onChange={event => update("bodyEn", event.target.value)} /></label><label>Traditional Chinese content<textarea rows={7} value={form.bodyZh} onChange={event => update("bodyZh", event.target.value)} /></label></div><label>Tags, separated by commas<input value={form.tags} onChange={event => update("tags", event.target.value)} /></label><div className="field-row"><label>Year<input value={form.year} onChange={event => update("year", event.target.value)} /></label><label>English medium<input value={form.mediumEn} onChange={event => update("mediumEn", event.target.value)} /></label></div><label>Traditional Chinese medium<input value={form.mediumZh} onChange={event => update("mediumZh", event.target.value)} /></label><div className="upload-field"><input id="image-upload" type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} /><label htmlFor="image-upload"><Upload size={16} />{upload.isPending ? "Uploading…" : "Upload image"}</label><small>JPG, PNG or WebP; maximum 5 MB.</small></div>{form.imageUrl ? <div className="image-preview"><img src={form.imageUrl} alt="Content preview" /><button type="button" onClick={() => update("imageUrl", "")}>Remove image</button></div> : null}<label className="feature-toggle"><input type="checkbox" checked={form.featured} onChange={event => update("featured", event.target.checked)} />Feature this item on the site</label>{save.isError ? <p className="form-error">{save.error.message}</p> : null}<button className="button-primary" type="submit" disabled={save.isPending}><Save size={15} />{save.isPending ? "Saving…" : form.status === "published" ? "Publish item" : "Save draft"}</button></form></section><aside className="studio-sidebar"><CoreContentEditor /><section><div className="studio-section-head"><div><FileImage size={18} /><h2>Content library</h2></div></div><div className="content-library">{items.data?.length ? items.data.map(item => <button type="button" key={item.id} onClick={() => setForm({ id: item.id, kind: item.kind, slug: item.slug, titleEn: item.titleEn, titleZh: item.titleZh, excerptEn: item.excerptEn || "", excerptZh: item.excerptZh || "", bodyEn: item.bodyEn || "", bodyZh: item.bodyZh || "", categoryEn: item.categoryEn || "", categoryZh: item.categoryZh || "", tags: item.tags || "", imageUrl: item.imageUrl || "", year: item.year || "", mediumEn: item.mediumEn || "", mediumZh: item.mediumZh || "", featured: item.featured, status: item.status, sortOrder: item.sortOrder })}><span>{item.status}</span><strong>{item.titleEn}</strong><small>{item.kind} · {item.slug}</small></button>) : <p className="empty-note">The database library is currently empty. The public site is showing its starter content; add and publish a database item here when you are ready to replace or extend it.</p>}</div></section><section className="enquiry-panel"><div className="studio-section-head"><div><Inbox size={18} /><h2>Recent enquiries</h2></div></div>{enquiries.data?.length ? enquiries.data.slice(0, 5).map(enquiry => <article key={enquiry.id}><strong>{enquiry.name}</strong><span>{enquiry.enquiryType}</span><p>{enquiry.email}</p></article>) : <p className="empty-note">New contact-form enquiries will appear here.</p>}</section></aside></div></div></DashboardLayout>;
}
