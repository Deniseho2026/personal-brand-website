# 預覽錯誤調查及目前狀態筆記

**日期：** 2026-09-18  
**項目：** Denise Ho personal brand website  
**目的：** 記錄預覽出現「1 Error」及 `SyntaxError: Unexpected token '<'` 後，已完成的調查、修改、檢查，以及目前尚未完成的部分，供交由 ChatGPT 審閱。

## 一、使用者報告的問題

目前網站預覽顯示：

> 1 Error
>
> `SyntaxError: Unexpected token '<'`

使用者要求找出真正原因，不能只隱藏錯誤；只可作最小必要修改；完成後要重新進行 build／check 和預覽確認；暫時不要建立 checkpoint 或發布。

## 二、調查結果

目前網站頁面本身可以正常載入。例如 `/services` 能夠顯示頁面內容、雙語服務內容及圖片。因此，這不是主要 React route 無法載入的錯誤。

檢查了以下項目：

- WebDev dev server 狀態：正在運行。
- TypeScript 狀態：當時的 WebDev diagnostics 顯示沒有 TypeScript errors。
- 預覽頁面：可以正常顯示。
- `client/index.html` 的 module script 路徑：`/src/main.tsx` 可正常回傳 JavaScript。
- `/src/pages/Home.tsx`：可正常回傳 JavaScript。
- `vite.config.ts`：發現開發模式會注入以下 script：

```html
<script src="/__manus__/debug-collector.js" defer></script>
```

接著直接檢查此 URL 的回應，結果如下：

```text
URL: /__manus__/debug-collector.js
Content-Type: text/html; charset=utf-8
Response begins with: <!doctype html>
```

這表示該 JavaScript 檔案不存在，請求被 dev server 的 SPA fallback 當成未知路徑，回傳了 `index.html`。瀏覽器本來要解析 JavaScript，卻收到以 `<` 開頭的 HTML，因此產生：

```text
SyntaxError: Unexpected token '<'
```

## 三、根本原因

根本原因是 **Vite debug collector plugin 注入了一個不存在的 `/__manus__/debug-collector.js` 檔案**。

`vite.config.ts` 已經包含：

- `/__manus__/debug-collector.js` 的注入設定。
- `/__manus__/logs` 的 POST logging endpoint。
- 寫入 `browserConsole.log`、`networkRequests.log` 和 `sessionReplay.log` 的程式。

但是專案當時沒有相應的：

```text
client/public/__manus__/debug-collector.js
```

所以預覽載入時，這個 script request 收到 HTML，而不是 JavaScript。

## 四、已經做的最小修改

已新增以下檔案：

```text
/home/ubuntu/personal-brand-website/client/public/__manus__/debug-collector.js
```

這個檔案的目的只是配合專案現有的 `vitePluginManusDebugCollector()`，並沒有修改網站的公開 UI、內容、路由、圖片或視覺設計。

新增 script 的功能包括：

1. 將 browser console 的 `log`、`info`、`warn`、`error` 和 `debug` 記錄送到既有的 `/__manus__/logs` endpoint。
2. 記錄未處理的 browser error。
3. 記錄 unhandled promise rejection。
4. 在 page hide 時嘗試送出尚未提交的 log。
5. 對 logging request 的失敗保持靜默，避免 debug 工具本身再造成網站錯誤。

這項修改沒有改變網站內容，也沒有刪除或隱藏錯誤提示；它是補回現有 Vite 設定所要求的檔案。

## 五、之前已完成但與本次錯誤無關的檢查

在本次錯誤調查之前，Creative Companionship for Older Adults 的內容更新已完成並建立 checkpoint。該 checkpoint 是：

```text
1bde5a91
```

本次錯誤調查開始時，工作樹的主要內容已經是該 checkpoint 狀態。之前的服務內容更新也已通過：

- TypeScript check。
- 14 個 automated tests。
- Static build。
- Services desktop preview。
- Services mobile preview。
- 英文及繁體中文內容核對。
- 背景圖片 URL 載入檢查。

這些 checks 證明服務內容本身不是本次 `Unexpected token '<'` 的根本原因。

## 六、本次修正後尚未完成的檢查

新增 `debug-collector.js` 後，原本計劃再執行以下驗證：

```bash
pnpm exec tsc --noEmit
pnpm test -- --run
pnpm build
```

並重新檢查：

```text
/__manus__/debug-collector.js
```

應該回傳 JavaScript，而不是 `text/html` 或 `index.html`。之後還需要重新載入預覽，確認：

- 預覽不再顯示「1 Error」。
- Info 面板不再顯示 `SyntaxError: Unexpected token '<'`。
- 網站首頁及受影響頁面仍然正常載入。

**這些修正後的驗證尚未完成。** 因為工具期間觸發了安全警報，系統要求在繼續執行前先取得明確確認；之後使用者改為要求先整理這份筆記，所以目前沒有繼續執行 build、tests 或預覽重測。

## 七、目前工作狀態

目前狀態如下：

- 已定位根本原因。
- 已加入最小必要的 missing debug collector script。
- 尚未確認新檔案在預覽中以 JavaScript MIME type 正常回傳。
- 尚未完成修正後的 build、tests 及瀏覽器重測。
- 沒有建立新的 checkpoint。
- 沒有發布修正。
- 沒有改動網站 layout、styling、content、images、routes、bilingual content 或其他功能。

因此，現在不能聲稱錯誤已經完全修復；只能說 **根因已確認，修正已寫入工作樹，但仍等待修正後驗證**。

## 八、交由 ChatGPT 審閱時可特別確認的事項

請審閱以下幾點：

1. `vite.config.ts` 是否應該注入 `/__manus__/debug-collector.js`。
2. 既然該 plugin 也處理 `/__manus__/logs`，補回 public script 是否是最小及合理的修正。
3. 新增的 script 是否會對網站公開功能造成副作用。
4. 是否應在修正後加入針對這個 endpoint 的 automated regression check。
5. 下一步是否只應執行 TypeScript、tests、build 及 preview verification，而不應改動其他網站內容。

## 參考檔案

[1]: file:///home/ubuntu/personal-brand-website/vite.config.ts "Vite configuration and Manus debug collector plugin"
[2]: file:///home/ubuntu/personal-brand-website/client/index.html "Website HTML entry point"
[3]: file:///home/ubuntu/personal-brand-website/client/public/__manus__/debug-collector.js "Newly added browser debug collector script"
[4]: file:///home/ubuntu/personal-brand-website/client/src/pages/Services.tsx "Services page renderer"
[5]: file:///home/ubuntu/personal-brand-website/client/src/content/services.ts "Modular Services content"
