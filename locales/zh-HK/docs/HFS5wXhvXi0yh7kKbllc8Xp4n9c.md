---
title: 投放系统
slug: HFS5wXhvXi0yh7kKbllc8Xp4n9c
sidebar_position: 0
---


# 投放系统

投放系統是以用戶全生命週期運營爲核心策略導向的數字化運營作業設計，可以在用戶生命週期的不同階段，實現客戶人群的精准觸達，提升關鍵節點核心指標和劵商企業行銷效率

主要是透過下面兩種維度面向來達成：

通過選取合適的觸達內容、合理的觸達時機、符合運營策略的目標人羣，組合 App Push、App Banner、App Popup、SMS、Email 等多種觸達技術通道，精準的觸達客戶

每一個投放運營計畫都是在：觸發條件/受眾用戶/觸達配置/目標設置 的維度下作運營計畫項目的管理

<img src="/assets/QiXsb2jkmo5RChxhXVTctMNNn2O.jpeg" src-width="1286" src-height="454" align="center"/>

## 前置條件

您需要獲取以下授權後方可正常使用系統功能

<table header_column="1" header_row="1">
<colgroup>
<col width="293"/>
<col width="392"/>
</colgroup>
<thead>
<tr><th><p><strong>權限名稱</strong></p></th><th><p><strong>權限說明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>使用运营计划、人群画像、触达通道的权限<br/>DeliverySystemReadOnly</p></td><td><p>增刪改查個人名下運營計劃；創建、管理、查看用戶分群；增刪改查 Banner、彈窗、Push、SMS、Email</p></td></tr>
</tbody>
</table>

- 您需要接入 Whale 櫃檯後方可使用人群畫像中的規則創建用戶分群
- 您需要使用 Whale 的白標 App 產品並完成交付配置後，方可使用 Banner、彈窗、Push 通道觸達用戶
- 您需要完成消息服務的交付配置後，方可使用 SMS、Email 通道觸達用戶

## 基本概念

### 名詞解釋

<table header_column="1" header_row="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<thead>
<tr><th><p><strong>名詞</strong></p></th><th><p><strong>解釋</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p><strong>運營計劃</strong></p></td><td><p>運營計劃是投放系統的基礎模塊，幫助運營人員快速創建計劃，以某種觸達方式（短信、郵件、APP Banner、App 推送、APP 彈窗等）對滿足一定條件的目標受衆進行觸達。如，新用戶的任務觸達、開戶未入金用戶的專題活動觸達等。</p></td></tr>
<tr><td><p><strong>定時型 - 單次</strong></p></td><td><p>運營計劃的一種，主要用於創建單次執行的計劃，固定時間發送。如，活動預熱的推送提醒。</p></td></tr>
<tr><td><p><strong>定時型 - 重複</strong></p></td><td><p>運營計劃的一種，主要用於創建重複執行的計劃，每個週期固定的一個或多個時間發送。如，新用戶首個週期內的新人任務禮包領取提醒。</p></td></tr>
<tr><td><p><strong>獲取型-API</strong></p></td><td><p>運營計劃的一種，主要用於創建被動請求型計劃，當用戶啓動 APP 後進行觸達，包含 APP Banner 和 APP 彈窗。如，新股認購的彈窗和 Banner 提醒。</p></td></tr>
<tr><td><p><strong>觸發型 - 完成 A</strong></p></td><td><p>運營計劃的一種，主要用於創建觸發型計劃，當用戶完成某個行爲後發送。如用戶啓動 APP 後開戶活動提醒。</p></td></tr>
<tr><td><p><strong>觸發條件</strong></p></td><td><p>運營計劃的觸發時機，運營人員通過選擇不同的計劃類型，設置不同的觸發時間點或觸發時機，從而決定該投放計劃在什麼條件下被執行。</p></td></tr>
<tr><td><p><strong>觸發時間</strong></p></td><td><p>運營計劃的觸發時間點，運營人員按照實際業務需求和用戶習慣設置計劃在何時投放給用戶</p></td></tr>
<tr><td><p><strong>起止時間</strong></p></td><td><p>運營計劃生效的時間窗口，有起止時間的計劃，在窗口期內可被正常執行，不在窗口期之內時，則該計劃變更爲停止運行狀態。</p></td></tr>
<tr><td><p><strong>參與限制</strong></p></td><td><p>對於定時型－重複計劃、觸發型－完成 A 這 2 種多次觸發的計劃，可以允許用戶在一定時間段內多次參與當前計劃，且可以限制次數，該限制僅對當前計劃生效。默認是不允許用戶在活動期間內多次參與的。</p></td></tr>
<tr><td><p><strong>觸達通道</strong></p></td><td><p>投放系統提供了 5 種觸達用戶的通道，在 APP 上觸達：彈窗、推送、Banner，在 APP 外觸達：短信、郵件。</p></td></tr>
<tr><td><p><strong>勿擾模式</strong></p></td><td><p>設置用戶勿擾時段以及勿擾時段內的推送策略，該設置僅對當前計劃生效，僅對郵件，短信，Push 通道生效。</p></td></tr>
<tr><td><p><strong>實驗組</strong></p></td><td><p>AB 實驗的固有組別，與對照組相對。運營人員可圈選一定比例的用戶進入實驗組。</p></td></tr>
<tr><td><p><strong>對照組</strong></p></td><td><p>AB 實驗的固有組別，運營人員可圈選一定比例的用戶進入該組。對照組支持不做任何的觸達。</p></td></tr>
<tr><td><p><strong>首要目標</strong></p></td><td><p>用來衡量運營計劃的效果，用戶被觸達後，在自定義的時間段內完成轉化事件，則認爲完成目標。首要目標與次要目標的追蹤是相互獨立的，是爲了多維度去評估活動效果。數據詳情默認顯示的轉化圖表、轉化率指標都是首要目標的。</p></td></tr>
<tr><td><p><strong>次要目標</strong></p></td><td><p>用來衡量運營計劃的效果，用戶被觸達後，在自定義的時間段內完成轉化事件，則認爲完成目標。次要目標與首要目標的追蹤是相互獨立的，是爲了多維度去評估活動效果。數據詳情默認顯示的轉化圖片、轉化率指標都是首要目標的，不是次要目標的。</p></td></tr>
<tr><td><p><strong>用戶分羣</strong></p></td><td><p>用戶分羣是投放系統的重要模塊，幫助運營人員通過用戶屬性或用戶行爲快速將目標受衆創建爲一個集合。如，賬戶總資產大於 10000USD 且 註冊日期大於 2022 年 1 月 1 日</p></td></tr>
<tr><td><p><strong>用戶屬性</strong></p></td><td><p>用戶屬性是用戶分羣規則創建的核心數據來源，本質是用戶標籤的列表，支持不同用戶標籤通過且或關係的雙層組合篩選目標受衆。用戶屬性的數據來源是用戶標籤，需要根據不同業務場景的需求進行定義，數據聚合加工後支持。系統默認提供了 8 個預置用戶標籤。</p></td></tr>
<tr><td><p><strong>用戶行爲</strong></p></td><td><p>用戶行爲是用戶分羣規則創建的輔助數據來源，本質是用戶行爲事件的列表，支持通過且或關係的雙層組合，限定事件的屬性來篩選目標受衆。用戶行爲的數據來源是數據採集，需要根據不同場景的需求進行採集加工後支持。系統默認提供了 APP 啓動的行爲事件。</p></td></tr>
<tr><td><p><strong>用戶標籤</strong></p></td><td><p>是通過對用戶屬性信息、行爲信息、業務信息進行加工後所產生的特徵標記，它的值具有高度概括、相互獨立及可枚舉窮盡的特點。標籤在數據結構中包含：標籤名稱及其值。</p></td></tr>
<tr><td><p><strong>受衆預估</strong></p></td><td><p>無論哪種計劃類型，受衆預估結果只和分羣的配置規則有關<br/>受衆預估的數值爲截止操作時間，符合當前規則配置條件的目標用戶去重 member_id 的數量</p></td></tr>
<tr><td><p><strong>目標完成率</strong></p></td><td><p>目標完成率=目標完成人數/計劃觸達人數*100%</p></td></tr>
<tr><td><p><strong>目標完成</strong></p></td><td><p>表示目標完成人數，如：一個計劃的首要目標爲觸達後 2 小時內完成 APP 啓動，則目標完成人數爲（計劃觸達時間起的 2 小時內，有發生 APP 啓動行爲的去重用戶 member_id 數量）</p></td></tr>
<tr><td><p><strong>計劃觸達</strong></p></td><td><p>表示計劃觸達人數，如：一個計劃的目標受衆用戶爲 10000，實際計劃執行成功後觸達的用戶爲 9999，則計劃觸達人數爲 9999</p></td></tr>
</tbody>
</table>

### 指標解釋

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p><strong>指標</strong></p></td><td><p><strong>解釋</strong></p></td></tr>
<tr><td><p><strong>曝光人數</strong></p></td><td><p>以 Banner 為例，去重計算 ID 為 1 的 Banner 被看到的用戶數量，記為曝光人數</p></td></tr>
<tr><td><p><strong>曝光次數</strong></p></td><td><p>以 Banner 為例，計算 ID 為 1 的 Banner 被看到的次數，記為曝光次數</p></td></tr>
<tr><td><p><strong>點擊人數</strong></p></td><td><p>以 Banner 為例，去重計算 ID 為 1 的 Banner 被點擊的用戶數量，記為點擊人數</p></td></tr>
<tr><td><p><strong>點擊次數</strong></p></td><td><p>以 Banner 為例，計算 ID 為 1 的 Banner 被點擊的次數，記為點擊次數</p></td></tr>
<tr><td><p><strong>點擊轉化率</strong></p></td><td><p>以 Banner 為例，點擊人數/曝光人數*100% 的結果為點擊轉化率</p></td></tr>
<tr><td><p><strong>點擊曝光率</strong></p></td><td><p>以 Banner 為例，點擊次數/曝光次數*100% 的結果為點擊曝光率</p></td></tr>
</tbody>
</table>

## 運營計劃

### 操作说明

每一個運營計畫都是依下列順序來操作：

1. 第一步：選擇創建計劃
2. 第二步：設置觸發條件
3. 第三步：選擇受衆用戶
4. 第四步：配置觸達規則
5. 第五步：設置觸達目標

以下分別 整理幾個常見運營計畫，逐步導引來建立計畫

### 如何創建一個定時型 - 單次計劃？

#### 適用場景

- 場景描述**：**定向召回流失交易用戶
- 目標受衆**：**假設帳戶資產＜200，歷史交易過 5 次以上的用戶
- 運營策略：給目標受衆發放任務幣，配置專屬兌換活動，併發郵件通知
- 效果評估：計劃上線後，追蹤目標受衆的 APP 啓動情況、兌換情況、入金交易情况

#### 使用說明

**第一步：选择創建計劃**

菜單入口：投放系統&gt;運營計畫

點擊右上角‘創建計劃’，設置計劃名稱（例：12 月迴歸獎勵活動）

<img src="/assets/FHZBbZzIyovYRdxo2tjcPGCFnyd.png" src-width="3174" src-height="1576" align="center"/>

**第二步：设置觸發條件**

配置條件參考如下：選擇計劃類型爲定時型 - 單次，2022-12-29 的 14:00 觸發計劃，對受衆用戶進行觸達

<img src="/assets/PNnjbX7hAoWuv0xTBp2c0o3NnMh.png" src-width="2534" src-height="964" align="center"/>

**第三步：选择受衆用戶**

賬戶總資產小於 200 美金 且 累計交易次數大於 5 次

<img src="/assets/E1bMb5mC7o9rPRxB5i5cwn1onZg.png" src-width="2830" src-height="1576" align="center"/>

**第四步：配置觸達規則**

以郵件的方式給用戶發送 APP 新版本升級介紹

<img src="/assets/MQZkboyFpo0VXTxWFohc9qrcnZa.png" src-width="2218" src-height="1220" align="center"/>

**第五步：設置觸達目標**

用戶收到郵件後，1 天內完成 APP 啓動

<img src="/assets/MHYnbIPiqoZ7rlxPQw0cV2t5n5c.png" src-width="2158" src-height="1060" align="center"/>

### 如何創建一個 定時型 - 重複 計劃？

#### 適用場景

場景描述：定期向開戶用戶推送邀請活動

目標受衆：開戶且活躍用戶

運營策略：通過邀請活動 offer 作爲利益點，加深開戶用戶邀請認知，邀請身邊朋友開戶即可領取活動獎勵

效果評估：邀請活動 H5 的瀏覽量、目標受衆邀請開戶情況

#### 使用說明

**第一步：選擇創建計劃**

菜單入口：投放系統&gt;運營計畫

點擊右上角‘創建計劃’，設置計劃名稱（例：定期邀請開戶活動）

<img src="/assets/FYPibMysgo4dMOxcqBLc7KhZnBC.png" src-width="3174" src-height="1576" align="center"/>

**第二步：設置觸發條件**

配置條件參考如下：選擇計劃類型爲定時型 - 重複，設置起止時間爲 2023-01-01 至 202-01-31，設置觸達時間爲每週一和每週五的 12:30，設置觸達次數限制爲同一個用戶 5 天內最多收到 1 次邀請活動

<img src="/assets/VaUwbZCDAoDUpgxMrnvcvijNnMe.png" src-width="2638" src-height="1170" align="center"/>

**第三步：選擇受衆用戶**

配置條件如下：已開戶用戶 且 最近 APP 啓動時間在 2022-12-01 至 2023-01-31

<img src="/assets/COVlbwKMoogGl1xPQHncXUWenth.png" src-width="2836" src-height="1588" align="center"/>

**第四步：配置觸達規則**

以短信的方式給用戶發送邀請活動

<img src="/assets/TGVcbhSPToCsiGxTOyzcOoZWnjg.png" src-width="1814" src-height="1024" align="center"/>

**第五步：設置觸達目標**

用戶收到郵件後，4 小時內完成邀請活動頁面的瀏覽

<img src="/assets/ImTNbJyoQo3Fbpxx7HycJtqWnCb.png" src-width="2546" src-height="1122" align="center"/>

### 如何創建一個 獲取型-API 計劃？

#### 適用場景

場景描述：首發認購預熱

目標受衆：全部用戶

運營策略：通過 APP 彈窗的強提醒方式，引導用戶參與認購

效果評估：計劃上線後，追蹤目標受衆的 APP 彈窗打開率

#### 使用說明

**第一步：选择創建計劃**

菜單入口：投放系統&gt;運營計畫

點擊右上角‘創建計劃’，設置計劃名稱（例：越南概念 ETF 認購預熱）

<img src="/assets/RXGnb5tN6o2NJex1665cj03inyg.png" src-width="3174" src-height="1576" align="center"/>

**第二步：设置觸發條件**

配置條件參考如下：選擇計劃類型爲獲取型-API

<img src="/assets/FvY4bmlpeohQ5YxRNMmccdddn6B.png" src-width="2470" src-height="790" align="center"/>

**第三步：选择受衆用戶**

配置條件如下：全部用戶

<img src="/assets/TYHGbBb0Bok0bzxFclncIqMFn3c.png" src-width="2824" src-height="1586" align="center"/>

**第四步：配置觸達規則**

通過彈窗觸達用戶

<img src="/assets/KMuCb3qfmoG6hgxyHeRcI7Ainuc.png" src-width="1788" src-height="1022" align="center"/>

<img src="/assets/OzrTbBeSToJRChxYmHNcNc54nBe.jpeg" src-width="1080" src-height="2234" align="center"/>

**第五步：設置觸達目標**

用戶收到彈窗後，5 分鐘內，打開彈窗且彈窗名稱爲南方東英越南 30

<img src="/assets/FwfabbeQKoLfcTxzbjtcqivJnMb.png" src-width="2208" src-height="1070" align="center"/>

### 如何創建一個 觸發型 - 完成 A 計劃？

#### 適用場景

場景描述：新用戶註冊 12 天內，進行持續的內容觸達或引導

目標受衆：新註冊用戶

運營策略：通過多種觸達方式組合，在用戶註冊完成後的不同時間點，向用戶觸達不同類型的內容

效果評估：追蹤目標受衆的轉化情況、留存情況

#### 使用說明

從新用戶註冊 1 小時到 12 天，配置多個觸發型計劃，對用戶進行內容投放

<img src="/assets/JptvbbpjXo8hjKxlMRhcysz4nAf.png" src-width="3454" src-height="1574" align="center"/>

以註冊 4 天關注股票引導爲例進行說明

**第一步：选择創建計劃**

菜單入口：投放系統&gt;運營計畫

點擊右上角‘創建計劃’，設置計劃名稱（例：註冊 4 天關注股票引導）

<img src="/assets/AEEkbpeYBod3edxuqeHc8bzlnSg.png" src-width="3174" src-height="1576" align="center"/>

**第二步：设置觸發條件**

配置條件參考如下：選擇計劃類型爲 觸發型 - 完成 A，設置觸發事件爲註冊成功，設置延遲 4 天后對用戶觸達，設置起止時間爲 2023-01-01 至 2023-06-30，設置參與次數爲 1 次

<img src="/assets/HznSbp37qof4BWx8iAkcFgVsnfc.png" src-width="2854" src-height="1478" align="center"/>

**第三步：选择受衆用戶**

2023-01-01 至 2023-06-30 期間新註冊的用戶

<img src="/assets/Y1Z8by1YDotim8x8tVJcd8k8n8I.png" src-width="2858" src-height="1582" align="center"/>

**第四步：配置觸達規則**

通過 Push 觸達用戶

<img src="/assets/M5H3bY6yBoORxJxtPz4c7RcNnQd.png" src-width="2206" src-height="1178" align="center"/>

<img src="/assets/E2GqbIYQPoo3YlxV0FmcqCGKnFc.png" src-width="1284" src-height="771" align="center"/>

**第五步：設置觸達目標**

用戶收到 Push 後，5 分鐘內，完成 Push 點擊，點擊 push 的標題爲：順藤摸瓜，選到更多好股票

<img src="/assets/CrwRbE4dUopwVbxxLZScmqRtnZk.png" src-width="2200" src-height="1188" align="center"/>

### 管理運營計劃

菜單入口：投放系統&gt;運營計畫

當完成運營計畫後，就可以管理運營計畫

系統支持以‘看板模式’與‘列表模式’來切換管理 所配置的運營計畫

<img src="/assets/KPJvb0bK6o3Kyhx0DwJc8JBtn1d.png" src-width="3074" src-height="1584" align="center"/>

運營計劃列表支持以下查詢：

支持根據計劃的名稱、ID、計劃類型、計劃狀態、審覈狀態、創建人進行查詢

運營計劃列表右側紀錄區支持以下操作：

- 計劃啓停：控制已審核通過的計劃的啓用和停用狀態
- 計劃詳情：查看計劃的配置規則
- 計劃編輯：修改計劃的配置規則，進行重新審核執行
- 計劃刪除：刪除已經創建的計劃

## 人群畫像

### 怎樣創建用戶分羣？

投放系統支持通過 2 種方式創建用戶分羣，分別是規則創建和導入創建，您可以根據自己的需求選擇

<img src="/assets/B2Hib6DhgosUGOx9pPRcY52Fnk5.png" src-width="582" src-height="366" align="center"/>

#### 規則創建用戶分羣

基於用戶屬性和用戶行爲，設置規則創建分羣，您可以根據自己的需求選擇：

1. 僅使用用戶屬性，2。僅使用用戶行爲，3。同時使用用戶屬性和用戶行爲

**結果更新說明：**已經創建並保存成功的分羣，在每次被請求時，均會使用分羣規則去重新計算，從而獲取最新的數據結果

<img src="/assets/EAP1buHXjoM2VqxFJbic9aOdnpg.png" src-width="3068" src-height="1704" align="center"/>

#### 導入創建用戶分羣

通過導入指定 id 的名單來創建分羣，系統會將導入的 id 進行匹配，匹配成功的 id 則保存到分羣的結果中，導入 id 需爲用戶的唯一標識：member_id

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[52%]" width-ratio="52">
<img src="/assets/X5bCbzB5moUmiuxnw6acNP5snkd.png" src-width="1542" src-height="1546"/>
</div>
<div class="w-[47%]" width-ratio="47">
<img src="/assets/KI1Ubf71aoYZfbxN6DDcnDD8nCf.png" src-width="1536" src-height="1684" align="center"/>
</div>
</div>

## 觸達通道

通道管理是針對與  APP 常見交互方式，例：Banner 橫條、App 彈窗、App Push、郵件、短信等通道內容管理。

其中橫幅廣告（Banner），是個呈現一個廣告推廣內容的圖片，放置在 App 等互聯網頁面上，是互聯網廣告中最基本的廣告形式，一般是使用 GIF 格式的圖像檔，可以使用靜態圖形，或新興的 Rich Media Banner（豐富媒體 Banner）能賦予橫幅更強的表現力和交互內容。

### 如何創建一個 App Banner？

以下是創建 App Banner 的步驟順序：

- 選擇 Banner 類型：如 - 需要創建一個在市場首頁位置的 Banner
- 設置 Banner 順序：同一個位置的 Banner 有多個配置上時，按照數字從小到大的順序進行輪播
- 設置 Banner 名稱：用於區分 Banner，作爲業務標識
- 設置 Banner 圖片：有裁剪和普通上傳 2 種方式，按需選擇
- 設置 Banner 跳轉鏈接：一般使用 Pagehub 生成 H5 鏈接後進行配置，也可使用 App 內的 H5 頁面鏈接
- 設置 Banner 運行週期：Banner 生效的週期，在設置週期內，Banner 生效，過期後則不再展示
- 設置 Banner 可見範圍：全部用戶可見 - 則 App 所有用戶可以看到 Banner，投放系統可見 - 則僅計劃配置中的目標受衆可見

<img src="/assets/PNvdbv5HlohO9pxdvdLcg6iznFd.png" src-width="1972" src-height="1640" align="center"/>

### 如何創建一個 App 彈窗？

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

<img src="/assets/D2n9bTSzgoRNaCxTah8cb8QGnOh.png" src-width="1924" src-height="1644" align="center"/>

### 如何創建一個 APP Push 消息？

投放系統的觸發配置提供了 Push 的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建 App Push  的步驟順序：

- 選擇通道爲 Push
- 設置標題、內容、上傳封面圖片
- 選擇通知行爲：常用的爲打開某個活動鏈接或跳轉到新股認購的頁面，具體可按需選擇

<img src="/assets/Ekz0baHkXodDxFx9DVGcEdPYnIh.png" src-width="2132" src-height="1526" align="center"/>

### 如何創建一個 郵件消息？

投放系統的觸發配置提供了郵件的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建郵件消息的步驟順序：

- 選擇通道爲郵件
- 設置發件人名稱、郵件標題
- 通過富文本編輯器編輯郵件正文
- 添加郵件附件、設置郵件發件郵箱

<img src="/assets/R16kbc1ekoY2sMxEQnkcCr6pnYg.png" src-width="1694" src-height="1362" align="center"/>

### 如何創建一個 短信消息？

投放系統的觸發配置提供了短信的自定義模板功能，可以在配置計劃時直接配置內容

以下是創建短信消息的步驟順序：

- 選擇通道爲短信
- 選擇短信發送地區
- 選擇短信類型：投放系統一般使用營銷活動
- 設置短信內容

<img src="/assets/YnwRbuqtqoaAZUxjwdccI4apnOh.png" src-width="2226" src-height="1530" align="center"/>

### 使用消息模板

投放系统的消息觸達（Push、SMS、Email）同时提供了消息模板功能，可以創建日常通用消息模板，同時消息模板也接入了工單審批流程。

菜單入口：投放系统&gt;消息模板

選擇要創建的消息模板（Push、SMS、Email）；

特别說明：郵件模板只需配置郵件正文内容，郵件頭尾同其他系统郵件配置，無需租户配置

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<img src="/assets/RKVYbZK6poE2hYx8syic6pEjn8b.png" src-width="1276" src-height="1928" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/BB0EbtNuuoA5QExyEq0cLbGcnId.png" src-width="1274" src-height="1914" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/RM3FbYML1oVRhxxhLltcPqh7nGg.png" src-width="1270" src-height="1916" align="center"/>
</div>
</div>

提交審核，審批流程需要進行配置；

審核通過，可在創建 Push、郵件、短信时，選擇消息模板進行發送，無需编辑内容。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[30%]" width-ratio="30">
<img src="/assets/I5C4bgGxpoBgOrxvAdvcEPIlnqf.png" src-width="1346" src-height="518" align="center"/>
</div>
<div class="w-[40%]" width-ratio="40">
<img src="/assets/EORcbF1froikh8x1fTMc8sNvnjd.png" src-width="1130" src-height="322" align="center"/>
</div>
<div class="w-[29%]" width-ratio="29">
<img src="/assets/TxvWbTO8So59RyxUr3Lc5bxpnsc.png" src-width="756" src-height="302" align="center"/>
</div>
</div>

