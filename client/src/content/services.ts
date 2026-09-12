export const workAreas = [
  { key: "psychology", index: "01", title: { en: "Psychology & counselling", zh: "心理學與心理輔導" }, description: { en: "Making room to explore emotion, life transitions, grief, anxiety, and the questions beneath what we experience.", zh: "為情緒、人生轉折、哀傷、焦慮，以及經驗背後的疑問留下一個可以探索的位置。" }, href: "/services" },
  { key: "expressive", index: "02", title: { en: "Expressive arts", zh: "表達藝術" }, description: { en: "Creative processes such as drawing, painting, imagery, writing, and movement in support of reflection and self-exploration.", zh: "透過繪畫、圖像、文字、動作等創作過程，支持反思與自我探索。" }, href: "/services" },
  { key: "watercolour", index: "03", title: { en: "Watercolour", zh: "水彩" }, description: { en: "Teaching watercolour as an artistic practice and a gentle way of slowing down, observing, and connecting.", zh: "把水彩作為一種藝術實踐，也作為放慢腳步、觀察與連結自己的溫柔方式。" }, href: "/services" },
  { key: "writing", index: "04", title: { en: "Writing", zh: "文字" }, description: { en: "Notes on Jungian ideas, creativity, life transitions, and the texture of human experience.", zh: "書寫榮格心理學、創意、人生轉折，以及人類經驗的細緻紋理。" }, href: "/writing" },
];

export const services = [
  {
    id: "watercolour",
    index: "01",
    title: { en: "Watercolour Lessons", zh: "水彩課程" },
    audience: { en: "For beginners", zh: "適合初學者、成人、社區團體與機構" },
    description: { en: "I offer beginner-friendly watercolour lessons for individuals and small groups in the Pinner and Harrow area.\n\nLessons take place at the student’s home.", zh: "一種輕鬆而專注的學習方式。我們從觀察、顏色、基本技巧，以及水彩不可預測的特質出發。你不需要先「很會畫畫」才可以開始。" },
    lessonDetails: {
      introduction: "I offer beginner-friendly watercolour lessons for individuals and small groups in the Pinner and Harrow area.",
      location: "Lessons take place at the student’s home.",
      offerHeading: "What I offer",
      options: [
        { title: "One-to-one lessons", price: "£25 per 1.5-hour session" },
        { title: "Small-group lessons", price: "From £15 per person per 1.5-hour session", note: "Maximum 6 people" },
      ],
      materials: "Basic materials are provided.",
    },
    images: [
      { src: "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_3977_49a05af2.jpg", alt: "A watercolour class in progress with students painting together" },
      { src: "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_40722_28b2dade.jpg", alt: "Watercolour paintings made during a class" },
      { src: "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_40742_ad591658.jpg", alt: "A table of watercolour paintings from a class" },
    ],
  },
  { id: "expressive", index: "02", title: { en: "Expressive arts groups", zh: "表達藝術小組" }, audience: { en: "Hong Kong only", zh: "只限香港" }, description: { en: "A creative process involving art-making, reflection, and personal exploration. Possible media include drawing, painting, image, writing, movement, and other creative forms. Groups are offered with care and appropriate professional boundaries.", zh: "以創作、反思與個人探索為核心的過程。可以運用繪畫、圖像、文字、動作及其他創意媒介。小組以關懷和恰當的專業界線來進行。" }, hkOnly: true },
  { id: "talks", index: "03", title: { en: "Talks & workshops", zh: "講座與工作坊" }, audience: { en: "For universities, community organisations, churches, art groups, adult education, and professional groups", zh: "適合大學、社區機構、教會、藝術團體、成人教育與專業團體" }, description: { en: "Thoughtful, accessible learning experiences on Jungian psychology, shadow, midlife transition, loss and mourning, creativity, expressive arts, and art as a path for self-exploration.", zh: "以容易理解而具深度的方式，分享榮格心理學、陰影、中年轉折、失落與哀傷、創造力、表達藝術，以及藝術如何成為自我探索的路徑。" } },
  { id: "counselling", index: "04", title: { en: "Individual counselling", zh: "個人心理輔導" }, audience: { en: "Hong Kong only", zh: "只限香港" }, description: { en: "A professional, warm space to explore anxiety, low mood, grief, transition, relationship difficulties, emotional distress, and questions of self-understanding. Please get in touch to discuss whether this support is appropriate for your circumstances.", zh: "一個專業而溫暖的空間，讓你探索焦慮、情緒低落、哀傷、人生轉折、關係困難、情緒困擾，以及如何理解自己。歡迎先聯絡我，一起了解這項支援是否適合你的情況。" }, hkOnly: true },
  { id: "companionship", index: "05", title: { en: "Creative companionship for older adults", zh: "長者創意陪伴" }, audience: { en: "For home, community, care settings, and small groups", zh: "可於家居、社區、照顧環境及小組中進行" }, description: { en: "A gentle creative experience using watercolour as a way to slow down, connect, express, and enjoy the present moment. The emphasis is on art, companionship, conversation, and meaningful engagement rather than achievement.", zh: "以水彩作為媒介，讓長者放慢下來、連結、表達，並享受當下。重點不在成就，而在藝術、陪伴、對話和有意義的參與。" } },
];
