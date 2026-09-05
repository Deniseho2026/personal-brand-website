import type { Locale } from "@/contexts/LanguageContext";

export type LocalizedText = Record<Locale, string>;

export function t(value: LocalizedText, locale: Locale) {
  return value[locale];
}

export const assetUrls = {
  hero: "/manus-storage/denise-hero-studio_d4e01676.jpg",
  art: "/manus-storage/denise-watercolour-landscape_62e4a954.jpg",
  writing: "/manus-storage/denise-writing-notebook_0c930b40.jpg",
  mark: "/manus-storage/denise-logo-mark_d57eee3a.png",
};

export const navigation = [
  { href: "/", label: { en: "Home", zh: "首頁" } },
  { href: "/about", label: { en: "About Me", zh: "關於我" } },
  { href: "/work", label: { en: "My Work", zh: "我的工作" } },
  { href: "/writing", label: { en: "Writing", zh: "文字" } },
  { href: "/art", label: { en: "Art", zh: "藝術" } },
  { href: "/services", label: { en: "Services", zh: "服務" } },
  { href: "/contact", label: { en: "Contact", zh: "聯絡我" } },
];

export const siteCopy = {
  eyebrow: { en: "Psychology · Creativity · Art · Translation · Meaning", zh: "心理學 · 創意 · 藝術 · 翻譯 · 意義" },
  hero: {
    en: "Exploring the inner life through psychology, art and words.",
    zh: "從心理學、藝術與文字，探索人的內在世界。",
  },
  heroNote: {
    en: "Counsellor · Expressive Arts practitioner · Watercolour teacher · Writer",
    zh: "輔導員 · 表達藝術工作者 · 水彩導師 · 寫作者",
  },
  explore: { en: "Explore my work", zh: "探索我的工作" },
  contact: { en: "Get in touch", zh: "聯絡我" },
  readMore: { en: "Read more", zh: "繼續閱讀" },
  viewAll: { en: "View all", zh: "查看全部" },
  hongKongOnly: { en: "Hong Kong only", zh: "只限香港" },
  studioLabel: { en: "A quiet space for reflection", zh: "一個安靜的空間，讓人反思" },
  closing: {
    en: "There are many ways of coming closer to ourselves — through words, images, creativity, conversation and relationship. I hope this space offers a place to pause, explore and perhaps discover something new.",
    zh: "我們可以透過文字、影像、創作、對話與關係，慢慢走近自己。希望這個空間，能讓你停一停、探索一下，也許發現一些新的可能。",
  },
  disclaimer: {
    en: "This website describes Denise Ho’s background and work accurately. It does not imply UK statutory registration as a counsellor, psychotherapist, or art psychotherapist.",
    zh: "本網站如實介紹何穎文的專業背景和工作範疇，並不表示她已在英國以輔導員、心理治療師或藝術心理治療師的法定身份註冊。",
  },
};

export const journey = [
  { year: "01", title: { en: "Writing", zh: "文字" }, body: { en: "Although a formative early career in banks that taught me about responsibility, people, and the outer structures of life, I encounter an opportunity entering a new world.", zh: "雖然早年的銀行職涯讓我學習責任、人與人之間的相處，以及外在生活的結構，但我也在其中遇見一個踏入新世界的機會。" } },
  { year: "02", title: { en: "Counselling", zh: "心理輔導" }, body: { en: "A gradual turn towards listening more deeply to experience, emotion, and the stories people carry.", zh: "慢慢走向更深入的聆聽：聆聽經驗、情緒，以及每個人心中承載的故事。" } },
  { year: "03", title: { en: "Expressive arts", zh: "表達藝術" }, body: { en: "Finding creative ways to meet what may not yet have language, through image, movement, and making.", zh: "藉著影像、動作與創作，接近那些尚未能以文字表達的內在感受。" } },
  { year: "04", title: { en: "Painting", zh: "繪畫" }, body: { en: "A continuing practice of attention, reflection, and companionship with the inner and outer worlds.", zh: "一種持續的練習：專注、反思，並陪伴內在與外在世界相遇。" } },
];

export const workAreas = [
  { key: "psychology", index: "01", title: { en: "Psychology & counselling", zh: "心理學與心理輔導" }, description: { en: "Making room to explore emotion, life transitions, grief, anxiety, and the questions beneath what we experience.", zh: "為情緒、人生轉折、哀傷、焦慮，以及經驗背後的疑問留下一個可以探索的位置。" }, href: "/services" },
  { key: "expressive", index: "02", title: { en: "Expressive arts", zh: "表達藝術" }, description: { en: "Creative processes such as drawing, painting, imagery, writing, and movement in support of reflection and self-exploration.", zh: "透過繪畫、圖像、文字、動作等創作過程，支持反思與自我探索。" }, href: "/services" },
  { key: "watercolour", index: "03", title: { en: "Watercolour", zh: "水彩" }, description: { en: "Teaching watercolour as an artistic practice and a gentle way of slowing down, observing, and connecting.", zh: "把水彩作為一種藝術實踐，也作為放慢腳步、觀察與連結自己的溫柔方式。" }, href: "/services" },
  { key: "writing", index: "04", title: { en: "Writing", zh: "文字" }, description: { en: "Notes on Jungian ideas, creativity, life transitions, and the texture of human experience.", zh: "書寫榮格心理學、創意、人生轉折，以及人類經驗的細緻紋理。" }, href: "/writing" },
];

export const biography = {
  title: { en: "A journey into the inner life", zh: "走向內在世界的旅程" },
  lead: {
    en: "My path has moved through very different-looking places: the structured world of banking, the attentive work of counselling, the open language of art, and the reflective quiet of writing. Over time, I have come to see these as connected parts of one enduring interest — how we understand, express, and live with our human experience.",
    zh: "我的路徑曾穿過看似很不一樣的地方：結構嚴謹的銀行業、細緻聆聽的心理輔導、開放的藝術語言，以及安靜的寫作反思。隨著時間過去，我漸漸看見它們都是同一個長久關懷的不同面向：我們如何理解、表達，並安頓自己的人生經驗。",
  },
  sections: [
    { heading: { en: "Where I began", zh: "起點" }, body: { en: "I grew up in Hong Kong and spent many years in the banking industry, including around sixteen years with UBS. It was a meaningful period that shaped my understanding of work, responsibility, and the complexity behind the roles we play in adult life. Yet, alongside that life, a quieter question kept returning: what helps a person feel more fully in touch with themselves?", zh: "我在香港成長，曾於銀行業工作多年，其中約十六年任職於瑞銀。這段經歷讓我體會工作的意義、責任，以及成人生活中各種角色背後的複雜性。然而，在忙碌的日常以外，一個安靜的問題一直浮現：甚麼能幫助一個人更真切地與自己連結？" } },
    { heading: { en: "A gradual turning", zh: "慢慢轉向" }, body: { en: "That question gradually led me toward counselling and psychology. I hold a Master’s degree in Counselling and bring more than ten years of counselling experience. My learning has included work with depression, anxiety, panic, grief and loss, life transitions, emotional difficulty, and the patient work of self-exploration. This is not a story of leaving one identity behind for another; it is a story of making a fuller place for what matters.", zh: "這個問題慢慢帶我走向心理輔導與心理學。我持有輔導學碩士學位，並累積了超過十年的輔導經驗。我的工作與學習曾涉及抑鬱、焦慮、驚恐、哀傷與失落、人生轉折、情緒困擾，以及耐心的自我探索。這並不是拋下某一種身份、換上另一種身份的故事，而是一步步為真正重要的事騰出更完整的位置。" } },
    { heading: { en: "Making room for images", zh: "讓圖像有位置" }, body: { en: "Expressive Arts Therapy training opened another way of listening. I became interested in the moments when images, colour, movement, or a few written lines can help us approach something that is still forming. I also began painting watercolour and gradually fell in love with its transparency, movement, and unpredictability — the way an apparent mistake can sometimes become the most alive part of the work.", zh: "表達藝術治療訓練為我打開了另一種聆聽的方式。我開始留意：有時候，一幅圖像、一種顏色、一個動作，或幾行文字，能讓我們靠近一些仍在形成、尚未能說清的感受。我也開始畫水彩，慢慢愛上它的透明、流動與不可預測；有時看似的失誤，反而會成為作品裡最有生命力的部分。" } },
    { heading: { en: "Continuing the conversation", zh: "把對話延續下去" }, body: { en: "Today I am based in the UK, while some professional services continue to be offered in Hong Kong. I remain deeply interested in Jungian psychology — particularly the unconscious, shadow, midlife transition, loss, creativity, individuation, and the relationship between inner and outer life. Through teaching, writing, painting, talks, and companionship, I continue to create spaces where people may reflect, express, and meet their own experience with a little more curiosity.", zh: "現時我居於英國，同時亦為香港提供部分專業服務。我一直深深關注榮格心理學，尤其是無意識、陰影、中年轉化、失落、創意、個體化，以及內在與外在生活的關係。透過教學、寫作、繪畫、講座與陪伴，我持續營造一些空間，讓人可以反思、表達，並以更多好奇心與自己的經驗相遇。" } },
  ],
};

export const values = [
  { en: "Authenticity", zh: "真實" },
  { en: "Compassion", zh: "慈悲與關懷" },
  { en: "Curiosity", zh: "好奇" },
  { en: "Creativity", zh: "創造力" },
  { en: "Human dignity", zh: "人的尊嚴" },
  { en: "Meaning", zh: "意義" },
];

export const services = [
  { id: "watercolour", index: "01", title: { en: "Watercolour classes", zh: "水彩課程" }, audience: { en: "For beginners, adults, community groups, and organisations", zh: "適合初學者、成人、社區團體與機構" }, description: { en: "A relaxed and attentive way to learn. We work with observation, colour, simple technique, and the unpredictable nature of watercolour. There is no need to be “good at art” before you begin.", zh: "一種輕鬆而專注的學習方式。我們從觀察、顏色、基本技巧，以及水彩不可預測的特質出發。你不需要先「很會畫畫」才可以開始。" } },
  { id: "expressive", index: "02", title: { en: "Expressive arts groups", zh: "表達藝術小組" }, audience: { en: "Hong Kong only", zh: "只限香港" }, description: { en: "A creative process involving art-making, reflection, and personal exploration. Possible media include drawing, painting, image, writing, movement, and other creative forms. Groups are offered with care and appropriate professional boundaries.", zh: "以創作、反思與個人探索為核心的過程。可以運用繪畫、圖像、文字、動作及其他創意媒介。小組以關懷和恰當的專業界線來進行。" }, hkOnly: true },
  { id: "talks", index: "03", title: { en: "Talks & workshops", zh: "講座與工作坊" }, audience: { en: "For universities, community organisations, churches, art groups, adult education, and professional groups", zh: "適合大學、社區機構、教會、藝術團體、成人教育與專業團體" }, description: { en: "Thoughtful, accessible learning experiences on Jungian psychology, shadow, midlife transition, loss and mourning, creativity, expressive arts, and art as a path for self-exploration.", zh: "以容易理解而具深度的方式，分享榮格心理學、陰影、中年轉折、失落與哀傷、創造力、表達藝術，以及藝術如何成為自我探索的路徑。" } },
  { id: "counselling", index: "04", title: { en: "Individual counselling", zh: "個人心理輔導" }, audience: { en: "Hong Kong only", zh: "只限香港" }, description: { en: "A professional, warm space to explore anxiety, low mood, grief, transition, relationship difficulties, emotional distress, and questions of self-understanding. Please get in touch to discuss whether this support is appropriate for your circumstances.", zh: "一個專業而溫暖的空間，讓你探索焦慮、情緒低落、哀傷、人生轉折、關係困難、情緒困擾，以及如何理解自己。歡迎先聯絡我，一起了解這項支援是否適合你的情況。" }, hkOnly: true },
  { id: "companionship", index: "05", title: { en: "Creative companionship for older adults", zh: "長者創意陪伴" }, audience: { en: "For home, community, care settings, and small groups", zh: "可於家居、社區、照顧環境及小組中進行" }, description: { en: "A gentle creative experience using watercolour as a way to slow down, connect, express, and enjoy the present moment. The emphasis is on art, companionship, conversation, and meaningful engagement rather than achievement.", zh: "以水彩作為媒介，讓長者放慢下來、連結、表達，並享受當下。重點不在成就，而在藝術、陪伴、對話和有意義的參與。" } },
];

export const initialArticles = [
  { slug: "notes-on-transition", category: { en: "Psychology & everyday life", zh: "心理學與日常生活" }, date: { en: "Notes from the studio", zh: "工作室筆記" }, title: { en: "A place to pause before the next transition", zh: "在人生下一個轉折前，先停一停" }, excerpt: { en: "A space for future reflections on the small inner movements that often precede outer change.", zh: "留給未來的反思：外在改變之前，那些細小而常被忽略的內在流動。" }, body: { en: ["There are times when an outer change begins long before it has a name. A role starts to feel too small, a familiar rhythm becomes less convincing, or a question returns quietly even when there is no immediate answer. These early movements can be easy to dismiss, especially when life is full.", "Pausing does not mean forcing a decision. Sometimes it is simply a way of listening with a little more care: noticing what is asking for attention, what has been carried for a long time, and what new possibility may be trying to find language. A walk, an image, a conversation, or a page of writing can offer a beginning."], zh: ["有些外在的轉變，在我們還未能為它命名之前，已經悄悄開始。一個角色漸漸顯得太小，一個熟悉的生活節奏不再那麼令人信服，或是一個問題反覆回來，即使暫時沒有答案。在忙碌的生活裡，這些細小的內在動靜很容易被忽略。", "停一停，並不代表要逼自己立刻作出決定。有時候，它只是更細心地聆聽：留意甚麼正在尋求關注、甚麼已經承載了很久，以及哪一種新的可能正在嘗試找到自己的語言。一段散步、一個圖像、一場對話，或一頁文字，都可以成為起點。"] }, image: assetUrls.writing },
  { slug: "watercolour-attention", category: { en: "Creativity", zh: "創意" }, date: { en: "Notes from the studio", zh: "工作室筆記" }, title: { en: "What watercolour teaches us about attention", zh: "水彩教會我們甚麼是專注" }, excerpt: { en: "An opening note for future writing on colour, uncertainty, observation, and the practice of staying present.", zh: "為未來書寫預留的一則開場：關於顏色、不確定、觀察，以及留在當下的練習。" }, body: { en: ["Watercolour asks for a kind of attention that cannot be rushed. Water spreads, pigments settle, and paper responds in ways that are not entirely under our control. The work is partly technical, yet it is also a practice of watching what is actually happening rather than what we expected to happen.", "Perhaps that is why the medium can be so companionable. It invites patience with uncertainty. It reminds us that a mark which first feels awkward may become part of the painting’s character, and that learning can include both intention and surprise."], zh: ["水彩要求一種不能催促的專注。水會擴散，顏料會沉澱，紙張也會以我們不能完全掌握的方式回應。繪畫固然有技術的一面，但同時也是一種練習：看見真正正在發生的事情，而不是只看見我們原先預期的結果。", "也許正因如此，水彩可以成為很好的同行者。它邀請我們對不確定保留耐心，也提醒我們：起初覺得笨拙的一筆，後來或會成為畫面的個性；學習也可以同時包含意圖與驚喜。"] }, image: assetUrls.art },
];

export const initialArtworks = [
  { slug: "shoreline-study", title: { en: "Shoreline study", zh: "海岸習作" }, year: "2026", medium: { en: "Watercolour on paper", zh: "紙本水彩" }, description: { en: "A placeholder for a future artwork from Denise’s own practice.", zh: "為何穎文日後的個人作品預留的位置。" }, image: assetUrls.art },
  { slug: "inner-weather", title: { en: "Inner weather", zh: "內在天氣" }, year: "—", medium: { en: "Future collection", zh: "未來系列" }, description: { en: "An invitation to add a painting, sketch, or creative experiment with material notes.", zh: "可在此新增繪畫、速寫或創作實驗，並附上作品資料。" }, image: assetUrls.hero },
];

export const projects = [
  { type: { en: "Project", zh: "項目" }, title: { en: "Art club exhibition", zh: "藝術社展覽" }, description: { en: "A place to document a specific exhibition, workshop, teaching programme, or community project.", zh: "記錄展覽、工作坊、教學計劃或社區項目的位置。" } },
  { type: { en: "Collection", zh: "系列" }, title: { en: "Inner landscapes", zh: "內在風景" }, description: { en: "A way to gather related artwork or writing around a particular image, question, or theme.", zh: "以某個圖像、提問或主題，把相關藝術作品與文字整理在一起。" } },
];

export const contactDetails = {
  phone: "07863 565540",
  phoneHref: "tel:+447863565540",
  email: "skyspacehk@gmail.com",
  facebook: "https://www.facebook.com/p/%E6%B7%B1%E5%BA%A6%E5%BF%83%E7%90%86%E5%AD%B8%E7%AD%86%E8%A8%98-61555389549994/",
  instagram: "https://www.instagram.com/denise.wmho/",
};
