import { trpc } from "@/lib/trpc";
import { BookMarked, Save } from "lucide-react";
import { useEffect, useState } from "react";

const controls = [
  { key: "about-lead", label: "About page introduction", note: "The opening paragraph on the About page." },
  { key: "about-story-1", label: "About story — Where I began", note: "The first biographical section." },
  { key: "about-story-2", label: "About story — A gradual turning", note: "The second biographical section." },
  { key: "about-story-3", label: "About story — Making room for images", note: "The third biographical section." },
  { key: "about-story-4", label: "About story — Continuing the conversation", note: "The final biographical section." },
  { key: "service-watercolour", label: "Watercolour classes", note: "Service description." },
  { key: "service-expressive", label: "Expressive arts groups", note: "Service description." },
  { key: "service-talks", label: "Talks & workshops", note: "Service description." },
  { key: "service-counselling", label: "Individual counselling", note: "Service description." },
  { key: "service-companionship", label: "Creative companionship for older adults", note: "Service description." },
] as const;

export function CoreContentEditor() {
  const settings = trpc.settings.list.useQuery();
  const utils = trpc.useUtils();
  const [key, setKey] = useState<(typeof controls)[number]["key"]>("about-lead");
  const current = settings.data?.find(item => item.settingKey === key);
  const savedEnglish = current?.valueEn || "";
  const savedChinese = current?.valueZh || "";
  const [english, setEnglish] = useState(savedEnglish);
  const [chinese, setChinese] = useState(savedChinese);
  const save = trpc.settings.save.useMutation({ onSuccess: () => utils.settings.list.invalidate() });

  useEffect(() => {
    setEnglish(savedEnglish);
    setChinese(savedChinese);
  }, [key, savedEnglish, savedChinese]);

  const activeControl = controls.find(control => control.key === key)!;

  return <section className="core-editor"><div className="studio-section-head"><div><BookMarked size={18} /><h2>Core page copy</h2></div></div><div className="core-editor-inner"><p className="core-editor-note">Use this panel for the central biography and service copy. Save both languages together so the language switch stays complete.</p><label>Page section<select value={key} onChange={event => setKey(event.target.value as typeof key)}>{controls.map(control => <option key={control.key} value={control.key}>{control.label}</option>)}</select></label><p className="field-hint">{activeControl.note}</p><div className="field-row"><label>English text<textarea rows={8} value={english} onChange={event => setEnglish(event.target.value)} /></label><label>Traditional Chinese text<textarea rows={8} value={chinese} onChange={event => setChinese(event.target.value)} /></label></div>{save.isError ? <p className="form-error">{save.error.message}</p> : null}<button className="button-primary" type="button" disabled={save.isPending || !english.trim() || !chinese.trim()} onClick={() => save.mutate({ settingKey: key, valueEn: english, valueZh: chinese })}><Save size={15} />{save.isPending ? "Saving…" : "Save core copy"}</button></div></section>;
}
