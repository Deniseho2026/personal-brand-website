# Writing／Notes 文章連接問題診斷筆記

**日期：** 2026-09-19  
**項目：** Denise Ho personal brand website  
**範圍：** 只作診斷及記錄；沒有修改網站程式、沒有建立 checkpoint、沒有發布或部署。

## 一、目前報告的問題

加入第一篇真實文章「譯者序」後，預覽出現以下情況：

1. 原本已建立及驗證的 Writing／Notes on Psychology & Life 結構看起來消失或改變。
2. 提供的書封圖片出現在 Home，但沒有出現在 Writing／Notes section。
3. 點擊 Writing article link 後顯示：

   > This note is not available.

4. 文章「譯者序」因此不能從 Writing／Notes section 正常進入。

## 二、診斷結論

根本原因不是新建了 CMS、資料庫或另一套 route system，而是最新文章更新時，原本的 `initialArticles` 資料被整個替換成只有「譯者序」的一筆資料。

換句話說，最新 implementation 沒有在原本的 article list 中保留已驗證的文章資料，而是直接重寫了 article data source。這造成原本的 Writing item 不再存在，並令 Home 和 Writing page 對第一筆 article 的解讀出現差異。

## 三、原本已驗證的 Writing 結構

上一個已驗證 checkpoint 是：

```text
73da2b03
```

當時 `client/src/content/articles.ts` 的第一筆資料是：

```text
slug: notes-on-transition
image: assetUrls.writing
availableLanguages: ["en", "zh"]
listingCopy: false
```

Writing page 會把這筆資料顯示在既有 article card 位置，並提供：

```text
/writing/notes-on-transition
```

的 detail route。

上一個 verified Writing list 保留：

- Writing／Notes on Psychology & Life heading。
- 原有 introduction。
- Picture 01 的位置及 layout。
- category label。
- 可點擊的 READ NOTE link。
- `/writing/:slug` detail route。
- English／Traditional Chinese language handling。

## 四、目前「譯者序」儲存的位置

目前文章存在於：

```text
client/src/content/articles.ts
```

目前資料包含：

```text
slug: "translator-preface"
title: { zh: "譯者序" }
category: { zh: "心理學與日常生活" }
availableLanguages: ["zh"]
```

正文亦存放在同一個 article object 的：

```text
body.zh
```

書封圖片使用：

```text
https://personalbrnd-eozfgujc.manus.space/manus-storage/translator-preface-book-cover_0eb5f401.jpeg
```

因此，文章並不是存放在另一個 CMS 或資料庫。它仍然是 static content module 中的 article data。

## 五、為什麼圖片出現在 Home

`client/src/pages/Home.tsx` 目前直接把第一筆 article 當作 featured article：

```tsx
const featuredArticle = {
  image: initialArticles[0].image,
  category: initialArticles[0].category,
  title: initialArticles[0].title,
  excerpt: initialArticles[0].excerpt,
  href: `/writing/${initialArticles[0].slug}`,
};
```

由於目前 `initialArticles[0]` 就是「譯者序」，Home 會自動使用其書封圖片。

這是圖片出現在 Home 的直接原因。

Home 並沒有根據 article 所屬 section 或 article status 作更細緻判斷；它只取 `initialArticles[0]`。

## 六、為什麼 Writing section 看不到圖片

`client/src/pages/Writing.tsx` 目前使用語言篩選：

```tsx
initialArticles
  .filter(article => article.availableLanguages.includes(locale))
```

「譯者序」設定為：

```ts
availableLanguages: ["zh"]
```

所以：

- 在繁體中文 Writing view，文章應該符合篩選條件。
- 在 English Writing view，文章不符合篩選條件，因此不會顯示。

如果目前預覽使用 English locale，Writing page 會只顯示 heading、introduction 及 Recent notes heading，沒有 article card。這會造成書封只在 Home 出現的表面現象。

## 七、為什麼 detail route 顯示 “This note is not available.”

`client/src/pages/ArticleDetail.tsx` 目前同時檢查 slug 和語言：

```tsx
const article = initialArticles.find(item => item.slug === slug);
const availableArticle =
  article?.availableLanguages.includes(locale) ? article : undefined;
```

如果目前 locale 是 English：

```text
locale = en
availableLanguages = [zh]
```

`availableArticle` 就會變成 `undefined`，所以頁面顯示：

```text
This note is not available.
```

這代表目前語言沒有該文章版本，不一定代表文章資料不存在。

另外，舊的 verified article route 是：

```text
/writing/notes-on-transition
```

最新「譯者序」使用的是：

```text
/writing/translator-preface
```

如果瀏覽器仍然使用舊 link 或舊 URL，現有資料也找不到 `notes-on-transition`，因為它已被從 `initialArticles` 移除。

## 八、目前負責 Writing article 的檔案

| 功能 | 檔案 |
|---|---|
| Writing list UI | `client/src/pages/Writing.tsx` |
| Article data source | `client/src/content/articles.ts` |
| Article detail UI | `client/src/pages/ArticleDetail.tsx` |
| Route registration | `client/src/App.tsx` |
| Home featured article | `client/src/pages/Home.tsx` |
| Public content export | `client/src/content/siteContent.ts` → `client/src/content/index.ts` |

`client/src/App.tsx` 的 route 本身仍然是正確的：

```tsx
<Route path={"/writing/:slug"} component={ArticleDetail} />
<Route path={"/writing"} component={Writing} />
```

所以主要問題在 article data 被替換及 language filter 行為，不是 route registration 被刪除。

## 九、是否建立了另一個不兼容的結構？

**沒有建立完全獨立的 CMS、資料庫或另一套 route system。**

「譯者序」仍然使用原本的：

```text
initialArticles
Writing.tsx
ArticleDetail.tsx
/writing/:slug
```

但是最新 implementation 有資料整合問題：

> 它把原本的 article entry 替換掉了，而不是保留原有 Writing 結構，再將新文章正確接入。

此外，Home 仍假設 `initialArticles[0]` 永遠是適合作為 featured article 的資料，因此中文-only article 被自動取到 Home。

## 十、建議的最小修復方案

目前尚未執行以下修復。這只是供審閱的 repair plan。

### A. 修正 `client/src/content/articles.ts`

保留原本已驗證的 Writing article data，並把「譯者序」放入同一個 `initialArticles` 結構中，而不是用它取代原本資料。

最小方式是：

1. 保留原有 Writing data structure。
2. 把「譯者序」接到原本 Picture 01 的 listing position，或在明確需要時追加為另一筆 article。
3. 確保 title、category、image、slug、body.zh 和 `availableLanguages: ["zh"]` 互相一致。
4. 不建立 English placeholder。

### B. 修正 `client/src/pages/Writing.tsx`

保留原本的：

- Writing heading。
- Introduction。
- article-list layout。
- Picture 01 position。
- category label。
- READ NOTE link。

只把 listing card 正確連到：

```text
/writing/translator-preface
```

繁體中文 view 應顯示「譯者序」；英文 view 不應產生假的英文文章。

### C. 修正 `client/src/pages/ArticleDetail.tsx`

保留現有 route：

```text
/writing/:slug
```

確認繁體中文版本：

```text
/writing/translator-preface
```

可以顯示：

- title：譯者序
- category
- provided book-cover image
- complete Traditional Chinese manuscript

英文 view 對於 Chinese-only article 應維持清楚的 unavailable state，而不是顯示虛構英文內容。

### D. 檢查 `client/src/pages/Home.tsx`

這一項未必需要修改。

如果需要避免 Chinese-only article 被 Home 英文 featured card 自動讀取，才作最小條件判斷。否則應保留 Home 原有 layout 和 content。

## 十一、建議的驗證順序

在執行修復後，應重新確認：

1. TypeScript check。
2. Existing automated tests。
3. Static production build。
4. Traditional Chinese Writing page 顯示「譯者序」card 及圖片。
5. READ NOTE link 指向 `/writing/translator-preface`。
6. Traditional Chinese detail page 顯示完整正文。
7. 直接開啟 detail URL 正常。
8. detail URL refresh 後仍然正常。
9. English view 不顯示虛構英文版本。
10. Home、Services、About 及其他既有 sections 沒有被改動。
11. 沒有建立新的 CMS、database、route architecture 或 deployment change。

## 十二、目前狀態

目前只有診斷完成：

- 已確認原本 article data 被替換。
- 已確認「譯者序」儲存在 `client/src/content/articles.ts`。
- 已確認 Home 取用 `initialArticles[0]`，因此顯示新書封。
- 已確認 Writing 及 detail page 使用 `availableLanguages` 篩選。
- 已確認 route registration 仍然存在。
- 已提出最小 repair plan。

目前沒有：

- 修改任何網站檔案。
- 建立新 checkpoint。
- 發布或部署。
- 移除或覆蓋目前「譯者序」文章。
- 修改 Writing structure。

## 參考版本

[1]: manus-webdev://73da2b03 "Previously verified Writing and article-detail structure checkpoint"
[2]: manus-webdev://1d30f524 "Latest checkpoint containing the Translator Preface article"
