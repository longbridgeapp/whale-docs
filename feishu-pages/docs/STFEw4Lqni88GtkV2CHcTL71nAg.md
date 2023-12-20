---
title: 通道管理
slug: xxx
sidebar_position: 3
---


# 通道管理

## 通道管理

通道管理是針對與  APP 常見交互方式， 例：Banner 橫條、App 彈窗、App Push、郵件、短信等通道內容管理。

其中橫幅廣告（Banner），是個呈現一個廣告推廣內容的圖片，放置在 App 等互聯網頁面上，是互聯網廣告中最基本的廣告形式，一般是使用 GIF 格式的圖像檔，可以使用靜態圖形，或新興的 Rich Media Banner（豐富媒體 Banner）能賦予橫幅更強的表現力和交互內容。

## 適用場景

如何創建一個 App Banner？

如何創建一個 App 彈窗？

如何創建一個 APP Push 消息？

如何創建一個 郵件消息？

如何創建一個 短信消息？

以下分別 整理幾個常見通道管理內容， 逐步導引來建立：

## 操作說明

### 如何創建一個 App Banner

以下是創建 App Banner 的步驟順序：

- 選擇 Banner 類型：如-需要創建一個在市場首頁位置的 Banner
- 設置 Banner 順序：同一個位置的 Banner 有多個配置上時，按照數字從小到大的順序進行輪播
- 設置 Banner 名稱：用於區分 Banner，作爲業務標識
- 設置 Banner 圖片：有裁剪和普通上傳 2 種方式，按需選擇
- 設置 Banner 跳轉鏈接：一般使用 Pagehub 生成 H5 鏈接後進行配置，也可使用 App 內的 H5 頁面鏈接
- 設置 Banner 運行週期：Banner 生效的週期，在設置週期內，Banner 生效，過期後則不再展示
- 設置 Banner 可見範圍：全部用戶可見-則 App 所有用戶可以看到 Banner，投放系統可見-則僅計劃配置中的目標受衆可見

<img src="/assets/HT3DbhTFPosKlnx8BQVciwPrnWf.png" src-width="1972" src-height="1640" align="center"/>

### 如何創建一個 App 彈窗

以下是創建 App 彈窗 的步驟順序：

- 彈窗名稱：彈窗標識名稱
- 彈窗類型：頭圖或全圖，頭圖代表彈窗的標題描述確認按鈕等都將使用編輯的信息，全圖則代表完全使用背景圖作爲彈窗的展示信息
- 彈窗標題：展示在 App 的標題
- 彈窗描述：展示在 App 的描述信息
- 背景圖片：彈窗展示時的背景圖
- 確認按鈕：彈窗點擊跳轉的按鈕所對應的文案提示
- 確認按鈕 URL：點擊確認按鈕後，期望跳轉的地址
- 頻次限制：同一個用戶收到同一個彈窗的次數
- 活動時間：彈窗生效的時間週期
- 展示時間：在每天的 0 點到 24 點之間，希望彈窗在什麼時間段展示
- 彈窗平臺：可以選擇是在 2 個端顯示還是隻在某個單一的端進行顯示
- 可見狀態：選擇投放系統可見則代表僅計劃配置中的目標受衆可見，全部用戶可見則整個 App 用戶可見彈窗

<img src="/assets/HL6Kb3dnioWPFGxL2qPcYuzjnwd.png" src-width="1924" src-height="1644" align="center"/>

### 如何創建一個 APP Push 消息

投放系統的觸發配置提供了 Push 的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建 App Push  的步驟順序：

- 選擇通道爲 Push
- 設置標題、內容、上傳封面圖片
- 選擇通知行爲：常用的爲打開某個活動鏈接或跳轉到新股認購的頁面，具體可按需選擇

<img src="/assets/RLTnbiHHHotpZZxxOtlckJR4n0X.png" src-width="2132" src-height="1526" align="center"/>

### 如何創建一個 郵件消息

投放系統的觸發配置提供了郵件的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建郵件消息的步驟順序：

- 選擇通道爲郵件
- 設置發件人名稱、郵件標題
- 通過富文本編輯器編輯郵件正文
- 添加郵件附件、設置郵件發件郵箱

<img src="/assets/HttRb5uhko6XWKxcMNXceePynhe.png" src-width="1694" src-height="1362" align="center"/>

### 如何創建一個 短信消息

投放系統的觸發配置提供了短信的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建短信消息的步驟順序：

- 選擇通道爲短信
- 選擇短信發送地區
- 選擇短信類型：投放系統一般使用營銷活動
- 設置短信內容

<img src="/assets/FYtmb2DCRohOwXxFbHscpVXAnFb.png" src-width="2226" src-height="1530" align="center"/>

#### 消息模板說明

投放系统的消息觸達（Push、SMS、Email）同时提供了消息模板功能，可以創建日常通用消息模板，同時消息模板也接入了工單審批流程。

菜單入口：投放系统&gt;消息模板

選擇要創建的消息模板（Push、SMS、Email）；

特别說明：郵件模板只需配置郵件正文内容，郵件頭尾同其他系统郵件配置，無需租户配置

<div class="grid gap-3 grid-cols-3">
<div>
<img src="/assets/WTCZbtAjjorFVFx7ouqcOXbmnLf.png" src-width="1276" src-height="1928" align="center"/>
</div>
<div>
<img src="/assets/CHHTbjP9PodPxAxIQh2chehRnVg.png" src-width="1274" src-height="1914" align="center"/>
</div>
<div>
<img src="/assets/R4aQbUt8OoYh05x137mcGDfcn5d.png" src-width="1270" src-height="1916" align="center"/>
</div>
</div>

提交審核，審批流程需要進行配置；

審核通過，可在創建 Push、郵件、短信时，選擇消息模板進行發送，無需编辑内容。

<div class="grid gap-3 grid-cols-3">
<div>
<img src="/assets/UF2LbF8VSoCaP7xIKGVc0eC8nDe.png" src-width="1346" src-height="518" align="center"/>
</div>
<div>
<img src="/assets/UPozbaGKiobj8jxOCxjcmpGrnRe.png" src-width="1130" src-height="322" align="center"/>
</div>
<div>
<img src="/assets/C5w2bW1a7oZL4Sxp0n1clMDhnWf.png" src-width="756" src-height="302" align="center"/>
</div>
</div>

