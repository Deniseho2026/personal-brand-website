import type { Locale } from "@/contexts/LanguageContext";

export type ExpressiveArtsProfileSlide =
  | {
      id: "journey";
      kind: "journey";
      text: Record<Locale, string>;
      image: string;
      alt: Record<Locale, string>;
    }
  | {
      id: "peanut-bricks";
      kind: "peanut-bricks";
      left: string[];
      right: string[];
      image: string;
      alt: Record<Locale, string>;
    }
  | {
      id: "poem";
      kind: "poem";
      title: Record<Locale, string>;
      text: Record<Locale, string>;
      image: string;
      alt: Record<Locale, string>;
    }
  | {
      id: "life-everywhere";
      kind: "life-everywhere";
      title: Record<Locale, string>;
      labels: Record<Locale, string[]>;
      images: string[];
      alt: Record<Locale, string>[];
    }
  | {
      id: "shaman";
      kind: "shaman";
      text: Record<Locale, string>;
      images: string[];
      alt: Record<Locale, string>[];
    }
  | {
      id: "integrate-opposites";
      kind: "integrate-opposites";
      left: string[];
      right: string[];
      image: string;
      alt: Record<Locale, string>;
    }
  | {
      id: "growth";
      kind: "growth";
      text: Record<Locale, string>;
      images: string[];
      alt: Record<Locale, string>[];
    };

const storageBase = "https://personalbrnd-eozfgujc.manus.space/manus-storage";

export const expressiveArtsProfileSlides: ExpressiveArtsProfileSlide[] = [
  {
    id: "journey",
    kind: "journey",
    text: {
      zh: "原來要展開新的旅程了！看你迷惘又疑惑的眼神，似乎還未預備好⋯⋯\n\n你說你是奇異大笨象，需要許多空間，充滿好奇心，想去玩，要往下走到最深處，不用太多語言，靜靜的 聽 和 看 就好了。\n盡量吧！你知道的，我喜歡寫。\n\n「澆灌 就能生長。」\n\n好的，我聽到了，會記住。",
      en: "So, a new journey is about to begin! Looking at your lost and puzzled expression, it seems you are not ready yet…\n\nYou say you are a strange, silly elephant who needs plenty of space, full of curiosity, wanting to play, wanting to go down to the deepest place. Without too many words, just quietly listen and look.\nTry your best! You know, I like writing.\n\n“Watering makes things grow.”\n\nOkay, I heard you. I will remember.",
    },
    image: `${storageBase}/slide1-elephant_eb59b61e.jpg`,
    alt: { zh: "以蠟筆畫成的奇異大笨象", en: "A childlike crayon drawing of a strange elephant" },
  },
  {
    id: "peanut-bricks",
    kind: "peanut-bricks",
    left: ["I am a peanut.", "I feel mature.", "I believe I’m satisfy and rich.", "I want becoming more & more."],
    right: ["We are bricks.", "We feel strong but flexible.", "We believe in faith.", "We want to built."],
    image: `${storageBase}/peanut-bricks-composite_7135db53.jpg`,
    alt: { zh: "花生與磚頭的混合媒材創作", en: "A mixed-media work of peanuts and bricks" },
  },
  {
    id: "poem",
    kind: "poem",
    title: { zh: "《花生與磚頭》", en: "Peanuts and Bricks" },
    text: {
      zh: "你捲起衣袖勤懇懇在搬磚頭\n我挨在牆後兩袖清風揮揮手\n\n我問：你是想要些成就？\n你說：吃著花生又何必多口？\n\n我見你汗直流\n喂喂！問你還要辛苦到什麼時候？\n手翹手在等候\n還是沒有抬頭\n\n忽然\n心頭一緊 眉頭一皺\n放下花生 向你走\n捲起衣袖 搬磚頭\n\n我告訴你\n疲倦的時候也要唞唞\n你問我\n我們會否就這樣建起一個宇宙？",
      en: "You roll up your sleeves, diligently carrying bricks\nI lean behind the wall, waving with empty sleeves\n\nI ask: Are you hoping for some achievement?\nYou say: If we are eating peanuts, why say more?\n\nI see sweat running down your face\nHey, hey! How much longer will you work so hard?\nHands raised, waiting\nStill, you do not look up\n\nSuddenly\nMy heart tightens, my brow furrows\nI put down the peanuts and walk towards you\nRoll up my sleeves and carry bricks\n\nI tell you\nWhen you are tired, you must rest too\nYou ask me\nWill we build a universe like this?",
    },
    image: `${storageBase}/peanut-bricks-composite_7135db53.jpg`,
    alt: { zh: "花生與磚頭混合媒材作品", en: "A mixed-media artwork of peanuts and bricks" },
  },
  {
    id: "life-everywhere",
    kind: "life-everywhere",
    title: { zh: "Life everywhere", en: "Life everywhere" },
    labels: { zh: ["腐爛的", "狹縫的", "依附的", "隨眾的"], en: ["Rotten", "In the crevice", "Attached", "Following the crowd"] },
    images: [
      `${storageBase}/slide4-rotten_fc855105.jpg`,
      `${storageBase}/slide4-narrow_96ed5c96.jpg`,
      `${storageBase}/slide4-attached_9dc65a5d.jpg`,
      `${storageBase}/slide4-following_c90f134b.jpg`,
    ],
    alt: [
      { zh: "樹根與腐爛的樹幹", en: "Tree roots and a rotting trunk" },
      { zh: "牆壁狹縫中的植物", en: "A plant growing in a wall crevice" },
      { zh: "依附在樹上的植物", en: "A plant attached to a tree" },
      { zh: "隨眾生長的花叢", en: "A mass of flowers growing together" },
    ],
  },
  {
    id: "shaman",
    kind: "shaman",
    text: { zh: "不要介意自己成為一位\n薩滿。", en: "Do not mind becoming a\nshaman." },
    images: [
      `${storageBase}/slide5-shaman-person_4ee527f9.jpg`,
      `${storageBase}/slide5-shaman-seedpods_f6ec00f4.jpg`,
      `${storageBase}/slide5-shaman-object_f41f5319.jpg`,
    ],
    alt: [
      { zh: "閱讀中的人物黑白照片", en: "A black-and-white photograph of a person reading" },
      { zh: "繩結與種莢的照片", en: "A photograph of tied seed pods" },
      { zh: "藍色布料上的物件", en: "An object on blue fabric" },
    ],
  },
  {
    id: "integrate-opposites",
    kind: "integrate-opposites",
    left: ["Integrate", "Shadow", "Mystical", "Concieve", "Inner"],
    right: ["Opposite", "Divide", "Concrete", "Mature", "Outer"],
    image: `${storageBase}/slide6-integrate-grey_d0d9f66c.jpg`,
    alt: { zh: "灰色與彩色流動顏料的作品", en: "Grey and brightly coloured flowing paint works" },
  },
  {
    id: "growth",
    kind: "growth",
    text: {
      zh: "你的生長環境似乎很狹窄？\n\n不是。那裡有更大的天地，只是你還沒有看到，我正生長得很健康，雖然你看到有枯葉 🍂，但它們都是好的，當回到土地又會和我融在一起。",
      en: "Does your growing environment seem very narrow?\n\nNo. There is a much larger world there; you just have not seen it yet. I am growing healthily. Although you see fallen leaves 🍂, they are good too. When they return to the earth, they will become one with me again.",
    },
    images: [
      `${storageBase}/slide7-growth-left_2a44138f.jpg`,
      `${storageBase}/slide7-growth-right_5603b06a.jpg`,
    ],
    alt: [
      { zh: "色彩斑斕的抽象生長作品", en: "A colourful abstract work about growth" },
      { zh: "另一幅色彩斑斕的抽象生長作品", en: "A second colourful abstract work about growth" },
    ],
  },
];
