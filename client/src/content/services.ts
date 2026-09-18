import { expressiveArtsPhotos, talksWorkshopImages } from "./media";

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
  { id: "expressive", index: "02", title: { en: "Expressive Arts Therapy", zh: "表達藝術小組" }, audience: { en: "Hong Kong only", zh: "只限香港" }, description: { en: "A creative group experience combining art-making, reflection, and personal exploration. Through images, colour, writing, movement, and other creative forms, participants are invited to explore their inner experience and discover what may emerge. No artistic experience is required.", zh: "以創作、反思與個人探索為核心的過程。可以運用繪畫、圖像、文字、動作及其他創意媒介。小組以關懷和恰當的專業界線來進行。" }, hkOnly: true, gallery: expressiveArtsPhotos },
  { id: "talks", index: "03", title: { en: "Talks & workshops", zh: "講座與工作坊" }, audience: { en: "For universities, community organisations, churches, art groups, adult education, and professional groups", zh: "適合大學、社區機構、教會、藝術團體、成人教育與專業團體" }, description: { en: "Thoughtful, accessible learning experiences on Jungian psychology, shadow, midlife transition, loss and mourning, creativity, expressive arts, and art as a path for self-exploration.", zh: "以容易理解而具深度的方式，分享榮格心理學、陰影、中年轉折、失落與哀傷、創造力、表達藝術，以及藝術如何成為自我探索的路徑。" }, supportingLine: { en: "Jungian psychology workshops / talks", zh: "榮格心理學工作坊／講座" }, talksImages: talksWorkshopImages },
  {
    id: "counselling",
    index: "04",
    title: { en: "Counselling", zh: "心理輔導" },
    audience: { en: "Hong Kong only", zh: "只限香港" },
    description: { en: "A professional, warm space to explore anxiety, low mood, grief, transition, relationship difficulties, emotional distress, and questions of self-understanding. Please get in touch to discuss whether this support is appropriate for your circumstances.", zh: "一個專業而溫暖的空間，讓你探索焦慮、情緒低落、哀傷、人生轉折、關係困難、情緒困擾，以及如何理解自己。歡迎先聯絡我，一起了解這項支援是否適合你的情況。" },
    hkOnly: true,
    counsellingImage: "https://personalbrnd-eozfgujc.manus.space/manus-storage/counselling-room-b_6366c77c.jpg",
    counsellingDetails: {
      en: [
        "I have been working as a counsellor for over 12 years, supporting people through periods of emotional difficulty, loss, anxiety, life transitions, and personal change.",
        "My approach is grounded in the belief that counselling is not simply about reducing symptoms or finding quick solutions. It is also an opportunity to slow down, listen more deeply, and develop a fuller understanding of ourselves — including those parts of our experience that may not yet be fully conscious.",
        "I draw particularly on Jungian psychology, which invites us to explore the unconscious, our inner images, and the shadow — the aspects of ourselves that we may have learned to hide, reject, or overlook. Rather than simply trying to get rid of what is troubling us, I am interested in what our difficulties may be telling us, and how a deeper relationship with ourselves can open possibilities for growth and transformation.",
        "I also incorporate expressive arts and different creative modalities when appropriate. Images, colour, writing, movement, and other forms of expression can sometimes reach places that words alone cannot. There is no need to be artistic or experienced in art; the focus is on discovering and giving form to what is emerging within.",
        "Alongside this, I pay attention to the body and its sensations. By gently reconnecting with bodily experience, we may become more aware of emotions, needs, boundaries, and ways of being that are not always immediately accessible through thinking.",
        "For me, counselling is a space where we can pause, listen, and become more curious about our inner life. It is not about becoming someone else, but about developing a deeper relationship with who we are and finding a more authentic way of living.",
      ],
      zh: [
        "我從事心理輔導工作超過十二年，曾陪伴不同的人走過情緒困擾、失落、焦慮、人生轉變，以及尋求個人成長的階段。",
        "我相信，心理輔導不只是減輕症狀或尋找快速的解決方法，也是一個讓人慢下來、深入聆聽自己，並逐漸理解內在世界的空間——包括一些我們尚未完全意識到的部分。",
        "我的取向尤其受到榮格心理學的影響。我重視對無意識、內在意象，以及「陰影」的探索——那些我們可能曾經隱藏、否定或忽略的自己。與其單純地把困擾我們的部分消除，我更關心這些經驗想向我們傳達甚麼，以及當我們願意與自己更深地相遇時，生命如何可能展開新的成長與轉化。",
        "在合適的情況下，我亦會運用表達藝術及不同的創作媒介，包括意象、色彩、書寫、身體動作等。有時候，一幅畫、一種顏色或一個身體動作，可以接觸到一些單靠語言難以表達的內在經驗。這並不需要任何藝術經驗，重點並不在於創作得好不好，而是在創作的過程中，讓內在正在發生的事情有機會被看見。",
        "我亦重視身體所傳遞的訊息，並會邀請來訪者在合適的情況下重新連結自己的身體感受。透過留意身體，我們有時能更深地接觸自己的情緒、需要、界線，以及一些未必能單靠思考察覺的內在經驗。",
        "對我而言，心理輔導是一個可以停下來、聆聽自己，並對內在生命保持好奇的空間，逐漸與自己建立更深的關係，並尋找一種更真實、更貼近自己的生活方式。",
      ],
    },
  },
  {
    id: "companionship",
    index: "05",
    title: { en: "Creative Companionship for Older Adults", zh: "長者創意陪伴" },
    audience: { en: "", zh: "" },
    description: { en: "", zh: "" },
    companionshipImage: "https://personalbrnd-eozfgujc.manus.space/manus-storage/companionship-watercolour-b_a7d85154.jpg",
    companionshipDetails: {
      en: {
        paragraphs: [
          "A one-to-one creative companionship service for older adults, offering meaningful connection, creative activity, and time spent together at an individual pace.",
          "For some older adults, particularly those living with dementia, creative activities can offer another way of communicating and connecting. Through activities such as watercolour, drawing, looking at images, and sharing stories and memories, the focus is on experiencing a meaningful moment together through the creative process.",
          "Creative activity can also bring a quiet and genuine sense of achievement. At a stage of life when opportunities to learn, create, or complete something may become less frequent, creating something of one’s own can still bring a sense of satisfaction and accomplishment.",
          "Working creatively with an older person living with dementia requires attentiveness to their pace, responses, and needs, as well as respect for their individuality and dignity. Sometimes a person may need more time, a different approach, or simply someone who is willing to stay alongside them without rushing or expecting them to finish.",
          "I aim to provide a calm and supportive space where each person can participate in their own way — whether through painting, choosing colours, sharing a memory, trying something new, or simply enjoying the experience of creating together.",
        ],
        formatHeading: "Format & Fee",
        feeLines: [
          "One-to-one sessions",
          "Duration: Minimum 1.5 hours",
          "Fee: £55 for the initial 1.5-hour session",
          "Sessions can be extended in 30-minute increments where appropriate. Additional time is charged pro rata.",
          "Basic creative materials can be provided where appropriate.",
        ],
        disclaimer: "This is a creative companionship and activity service, not counselling, psychotherapy, or medical care. It does not aim to diagnose, treat, or manage dementia or other medical conditions.",
      },
      zh: {
        paragraphs: [
          "這是一項以一對一形式提供的創意陪伴服務，讓長者在自己的步調下，享受有意義的連結、創作活動，以及有人相伴的時光。",
          "對於一些長者，尤其是患有認知障礙症（dementia）的長者而言，創作活動可以提供另一種交流和連結的方式。透過水彩、繪畫、欣賞圖像，以及分享故事和生活回憶等活動，在創作的過程中，一起經歷一段有意義的時光。",
          "創作亦可以帶來一份安靜而真實的成就感。在人生某個階段，學習、創作或完成一件事情或許已不像以往一樣多，而親手完成一幅屬於自己的作品，仍然可以帶來一份滿足。",
          "與患有認知障礙症的長者一起進行創作，過程需要留意長者當下的步伐、反應和需要，亦要尊重每一個人的獨特性和尊嚴。有時候，一個人需要多一點時間、一種不同的方法，又或者只是需要有人願意陪在身邊，不催促、不急於完成。",
          "我希望提供一個平靜而有支持性的空間，讓每位長者都可以用自己的方式參與——可以是畫畫、選擇顏色、分享一段回憶、嘗試一件新事物，又或者只是享受一起創作的過程。",
        ],
        formatHeading: "形式及收費",
        feeLines: [
          "一對一服務",
          "每節時間： 最少 1.5 小時",
          "收費： 1.5 小時 £55",
          "如有需要，可按每半小時延長服務；額外時間按比例（pro rata）計算。",
          "如有需要，可提供基本創作材料。",
        ],
        disclaimer: "這是一項以創意陪伴及活動為主的服務，並非心理輔導、心理治療或醫療服務，亦不旨在診斷、治療或管理認知障礙症或其他醫療狀況。",
      },
    },
  },
];
