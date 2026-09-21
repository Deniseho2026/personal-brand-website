# Writing／Notes「譯者序」連接修復工作報告

**日期：** 2026-09-20  
**項目：** Denise Ho personal brand website  
**Checkpoint：** `17c9939b`  
**狀態：** 已完成驗證；未發布或部署。

## 一、修復目標

本次工作的目標，是修復 Writing／Notes section 與第一篇真實文章「譯者序」之間的連接，同時保留原本已驗證的 Writing visual doorway 結構。

重要的資訊架構如下：

```text
Writing／Notes on Psychology & Life
        ↓
原有 Picture 01 doorway
        ↓
category + 原有短介紹 + READ NOTE
        ↓
/writing/translator-preface
        ↓
譯者序文章 detail page
        ↓
文章專用書封圖片 + 完整繁體中文原文
```

## 二、修復原則

本次只進行 structural/content-connection repair，沒有重新設計網站。

已遵守以下原則：

- 保留原有 Picture 01。
- 不用書封圖片取代 Picture 01。
- 不把文章 title 或正文放入 Picture 01 doorway。
- 不把 Picture 01 變成文章本身。
- 保留原本 Writing heading、introduction、category、短介紹、layout 及 READ NOTE 形式。
- 「譯者序」繼續使用既有 static article content structure。
- 不建立 CMS 或 database。
- 不新增另一套 route system。
- 不產生或虛構英文翻譯。
- Home page 完全沒有修改。

## 三、修改的檔案

### 1. `client/src/content/articles.ts`

恢復原本已驗證的 Picture 01 article data entry：

```text
slug: notes-on-transition
image: assetUrls.writing
availableLanguages: ["en", "zh"]
listingCopy: false
```

這筆資料重新提供原本 Picture 01 所需的：

- 原有 Picture 01 圖片。
- English／Traditional Chinese category。
- 原有雙語 short introductory text。
- 原有 Writing doorway content structure。

同時保留獨立的「譯者序」article entry：

```text
slug: translator-preface
title: 譯者序
availableLanguages: ["zh"]
```

「譯者序」的 article entry 仍包含：

- 完整 Traditional Chinese body。
- 原有 category。
- 提供的書封圖片。
- `availableLanguages: ["zh"]`。
- 沒有新增英文翻譯。

### 2. `client/src/pages/Writing.tsx`

Writing 頁恢復只顯示原有 Picture 01 doorway，而不是把「譯者序」article card 直接當作 Writing doorway。

READ NOTE link 已連接至：

```text
/writing/translator-preface
```

因此 Writing page 的 visual/content doorway 與 article detail page 已重新分成兩個 layer：

```text
Layer 1: Picture 01 + category + short introduction + READ NOTE
Layer 2: 譯者序 + book-cover image + complete manuscript
```

## 四、沒有修改的部分

以下內容均沒有修改：

- `client/src/pages/Home.tsx`
- Home text。
- Home image。
- Home layout。
- Home featured content。
- About page。
- Services。
- Counselling。
- Expressive Arts Therapy。
- Talks & Workshops。
- Contact。
- Navigation。
- Global visual design。
- Typography。
- Other images。
- Deployment configuration。
- Existing route architecture。

既有 route architecture 仍然是：

```text
/writing
/writing/:slug
```

## 五、驗證結果

### TypeScript

```text
pnpm exec tsc --noEmit
```

結果：**通過**。

### Automated tests

```text
pnpm test -- --run
```

結果：**14/14 tests 通過**。

### Production build

```text
pnpm build
```

結果：**通過**。

Build 產出成功，只有既有的 bundle size warning，沒有 build error。

### Writing page

已確認 Writing／Notes page：

- heading 保留。
- introduction 保留。
- 原有 Picture 01 圖片保留。
- category 保留。
- 原有短介紹保留。
- 只顯示原有 Picture 01 doorway。
- READ NOTE link 存在。

### READ NOTE navigation

已從 Writing page 點擊 READ NOTE，成功進入：

```text
/writing/translator-preface
```

### Article detail page

已確認 detail page 顯示：

- title：**譯者序**。
- category：心理學與日常生活。
- 提供的書封圖片。
- 完整繁體中文 manuscript。
- 文章正文沒有被摘要、改寫、翻譯或刪除。

### Direct navigation and refresh

已直接開啟並 refresh：

```text
/writing/translator-preface
```

結果：**正常載入**。

### Language behaviour

已確認：

- Traditional Chinese view 可以正常閱讀「譯者序」文章。
- `availableLanguages` 保持為 `["zh"]`。
- 沒有建立虛構 English article。
- English view 不會顯示假的英文文章內容。

### Scope check

本次網站程式修改只涉及：

```text
client/src/content/articles.ts
client/src/pages/Writing.tsx
```

Home 及其他 sections 沒有修改。

## 六、Checkpoint

本次已建立 checkpoint：

```text
17c9939b
```

Checkpoint 保存的內容是：

- 原有 Picture 01 doorway 的恢復。
- READ NOTE 連接到「譯者序」detail route。
- 「譯者序」的完整繁體中文文章及專用書封圖片。
- Home 及其他網站 sections 保持不變。

## 七、目前狀態

修復及驗證已完成，但本次沒有發布或部署到 production。

網站目前已具備以下正確流程：

```text
Writing／Notes
→ 原有 Picture 01
→ READ NOTE
→ 譯者序 detail page
→ 書封圖片
→ 完整繁體中文文章
```
