---
title: 系統介紹
slug: VWyawtnPoizaJvkLjGIcgA5hngb
sidebar_position: 2
---


# 系統介紹

# 概述

風控管理主要用於處理證券業務下的保證金配置、額度管理、Margin Call 等相關功能。所涉相關模組主要如下：

# 業務操作管理

## 授信額度

目前系統可提供的額度類型分融資額度和交易額度，其中交易額度是授於合作比較好的機構客戶或現金賬戶，在購買力不足時，可使用交易額度進行交易；融資額度是針對 margin 賬戶，根據客戶的資產信息等綜合評估給用戶的額度，客戶可在該額度範圍內使用額度。

### 融資授信

**關於自動授信**：

客戶若開通 margin 賬戶，後面客戶操作了轉倉/入金，則系統自動會給客戶授信一定的額度，客戶可以進行保證金交易，系統支持自動授信機制（轉倉到賬/入金到賬），整理自動授信流程如下：

<img src="/assets/BPYrbPRX7oEOn9xtqxKc6bpPnzb.png" src-width="953" src-height="733" align="center"/>

#### 客戶額度

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理  &gt; 授信額度 &gt; 融資授信 &gt; 客戶額度</p>
</div>

**菜單功能介紹**：該菜單主要用於查詢所有授信客戶額度情況，同時若有客戶需求，也可支持人工給客戶授信及調整額度。​

主要操作場景如下：

**調整客戶額度**

1. 列表為所有融資授信客戶，打開列表頁的調整彈窗為已授信客戶調整額度

<img src="/assets/GAHxb4K9QomHCAxWJtLcretjntg.png" src-width="3702" src-height="1456" align="center"/>

<img src="/assets/CtWwb9ZhGo2giVxCaUTckYAgnZe.png" src-width="2166" src-height="1348" align="center"/>

- 頁面字段說明

<table header_row="1">
<colgroup>
<col width="132"/>
<col width="375"/>
</colgroup>
<thead>
<tr><th><p><strong>字段</strong></p></th><th><p><strong>說明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>融資額度</p></td><td><p>客戶當前的融資額度</p></td></tr>
<tr><td><p>已用融資額度</p></td><td><p>客戶當前已經使用的融資額度</p></td></tr>
<tr><td><p>剩餘融資額度</p></td><td><p>客戶剩餘還可以使用的額度，剩餘融資額度=融資額度 - 已用融資額度</p></td></tr>
<tr><td><p>實時計算額度</p></td><td><p>同“自動授信”計算邏輯</p></td></tr>
<tr><td><p>調整後額度</p></td><td><p>由人工填入</p></td></tr>
<tr><td><p>調整額度</p></td><td><p>根據人工填入的調整後額度自動計算，調整額度=調整後額度 - 融資額度</p></td></tr>
<tr><td><p>備註</p></td><td><p>由人工填入，若填入則會在「額度審批」頁面的列表“備註”列展示</p></td></tr>
</tbody>
</table>

1. 確定【調整後額度】，提交則需要進入額度審批頁面的對應記錄進行額度審批；见「[额度审批](./VWyawtnPoizaJvkLjGIcgA5hngb)」

<img src="/assets/HvREbEXKFoMelIxT5XMc2dWrn0f.png" src-width="876" src-height="202" align="center"/>

**新建授信客戶**

1. 若客戶未有資產入賬，需要給未授信的客戶授予額度，可以在列表頁【新建授信客戶】可以單個新增授信客戶

<img src="/assets/G87Bbnr2do29d3xc3fycwWWun1e.png" src-width="3260" src-height="334" align="center"/>

1. 彈窗頁填寫相關信息（若客戶已在授信列表，提交時會提示，可以在主列表查看客戶額度）

<img src="/assets/CO4Qb71BBoKxrMxgpK1cVtiznVd.png" src-width="3254" src-height="1308" align="center"/>

1. 若需一次性給多個客戶授信，可以在列表右上方的【批量新增】操作

<img src="/assets/Pb1Zb5SfuoKgezxuTUIcTpiJnac.png" src-width="3246" src-height="1274" align="center"/>

1. 無論是單個還是批量新增，提交後都需在工單系統審批。審批通過後方可對客戶額度生效

**刪除已註銷客戶授信額度**

業務中可能存在有些客戶賬戶已經註銷，但仍會計算在公司總批核額度中，可以人工刪除該部分客戶額度。

1. 篩選註銷狀態的授信客戶

<img src="/assets/NQbnbrDDvoOkyYxYDlfcMx7InJh.png" src-width="3268" src-height="338" align="center"/>

1. 選擇並刪除已註銷的授信客戶

<img src="/assets/Zvhkbdy9BooZOwxSNjdc1P7nnLf.png" src-width="3170" src-height="730" align="center"/>

**設置公司額度**

1. 根據客戶整體額度匯總情況，若需同步調整公司額度進行額度管控，可以在頁面列表上方【設置公司額度】進入相關頁面操作

<img src="/assets/Ne9ob0KPRoIWo6xonbbc4LPlnpg.png" src-width="3178" src-height="1442" align="center"/>

1. 公司額度設置：租戶上線時，系統會默認初始化額度，後租戶可根據業務需求進行自定義修改；修改各維度額度，可通過頁面【編輯】操作。修改後，需要走工單審批通過即可完成修改

<img src="/assets/VbZSbz9N1oAmd0xj4gbc4IKSnvb.png" src-width="3270" src-height="1060" align="center"/>

公司額度設置頁面

- 頁面字段說明

<table header_column="1" header_row="1">
<colgroup>
<col width="144"/>
<col width="160"/>
<col width="416"/>
</colgroup>
<thead>
<tr><th><p><strong>類別</strong></p></th><th><p><strong>字段</strong></p></th><th><p><strong>說明</strong></p></th></tr>
</thead>
<tbody>
<tr><td rowspan="3"><p>融資額度（HKD）​<br/>*幣種由主幣種決定</p></td><td><p>總融資額度</p></td><td><p>人工設定的公司層面可以授予的保證金融資授信總額度，所有客戶累加額度不可超過該數值</p>
<blockquote>
<p>對應「客戶額度」頁面總融資圖表的“總額度”</p>
</blockquote></td></tr>
<tr><td><p>已批融資額度</p></td><td><p>系統計算的已經批給客戶的總額度</p></td></tr>
<tr><td><p>已批融資額度預警閾值</p></td><td><p>人工設定的批核額度閾值</p></td></tr>
<tr><td rowspan="4"><p>融資額度​<br/>*分幣種 HKD&amp;USD</p></td><td><p>最大融資額度</p></td><td><p>人工設定的公司層面最大可融資額度</p></td></tr>
<tr><td><p>已用融資額度</p></td><td><p>系統計算的客戶已經使用的融資額度</p></td></tr>
<tr><td><p>墊資預警閾值</p></td><td><p>人工設定的墊資額度閾值</p></td></tr>
<tr><td><p>已墊資金額</p></td><td><p>系統計算的公司已墊資金額</p></td></tr>
</tbody>
</table>

#### 額度審批

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理  &gt; 授信額度 &gt; 融資授信 &gt; 額度審批</p>
</div>

**菜單功能介紹**：該菜單主要用於審批授信額度，包含後台及客戶發起的調整額度申請。

1. 在列表頁的操作【提交審批】打開彈窗頁面

<img src="/assets/VzuKblIFGohXstxAbe3cBEChndo.png" src-width="3686" src-height="1038" align="center"/>

1. 提交審批彈窗頁面確認額度並進行額度批注

<img src="/assets/ACswbkSOMoX581xYo3CcJz8jnNc.png" src-width="3286" src-height="1628" align="center"/>

額度審批核對頁面

- 頁面字段說明

<table header_row="1">
<colgroup>
<col width="132"/>
<col width="375"/>
</colgroup>
<thead>
<tr><th><p><strong>字段</strong></p></th><th><p><strong>說明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>公司總額度</p></td><td><p>對應「公司額度設置頁面」的總融資額度</p></td></tr>
<tr><td><p>公司剩餘額度</p></td><td><p>剩餘可以授信的額度，對應「公司額度設置頁面」的總融資額度減去已批融資額度的差值</p></td></tr>
<tr><td><p>調整前額度</p></td><td><p>客戶當前的融資額度</p></td></tr>
<tr><td><p>調整前關聯賬戶總額度</p></td><td><p>=if(授信组总融资额度&lt;&gt;&#39;&#39;,  授信组总融资额度，member 总融资额度）</p></td></tr>
<tr><td><p>調整後額度</p></td><td><p>本次調整後的額度</p></td></tr>
<tr><td><p>系統計算授信額度</p></td><td><p>系統根據當前客戶資產根據自動授信計算邏輯計算的額度</p></td></tr>
</tbody>
</table>

1. 確認信息後，提交審批，需在工單系統進行審批，審批完成後額度調整方可生效

❤️Tips：

提交工單審批可以根據額度區間條件設置審批流程，對應審批流程“BSS-風控管理 - 授信額度 - 額度審核 - 提交審核”

#### 客户 FPS

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理  &gt; 授信額度 &gt; 融資授信 &gt; 客戶 FPS</p>
</div>

**菜單功能介紹**：該菜單主要用於查詢客戶保證金融資授信的 FPS 值（FPS 初始配置可在「客戶參數」查看）及配置自定義 FPS 規則（可在全局 FPS 初始值上按定義維度配置值進行增減計算）。

**配置 FPS 規則**

1. 頁面點擊【規則配置】打開規則頁面

<img src="/assets/RMpob3eDWoJZU0x0mfCc5VREncd.png" src-width="3762" src-height="820" align="center"/>

1. 規則配置：可以根據客戶各方面維度設定閾值配置增減閾值，確定後生效規則

<img src="/assets/BSIKb8upsoHhEpxumtjcz3rknWh.png" src-width="3302" src-height="1620" align="center"/>

#### 授信組

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理  &gt; 授信額度 &gt; 融資授信 &gt; 授信組</p>
</div>

**菜單功能介紹**：該菜單用於設置授信組及管理授信組額度，組內客戶額度使用不可超過組額度。如需將同一客戶多個賬戶分組，或者將關聯賬戶（如夫妻賬戶）分組等場景均可使用該功能。

**主列表頁說明**

列表页可查看所有授信组及总授信额度；每個組的額度使用情況也會顯示。如下圖：

1. 總授信額度：當前所有授信組的組額度總和
2. 授信組信息：支持編輯組信息及給授信組添加新賬戶；授信額度會展示組額度及額度使用情況，若組內使用額度超過組額度，則進度條會紅色提示
3. 組內賬戶信息：展示組內賬戶融資額度及使用情況，支持調整組內賬戶額度及將對應賬戶從授信組刪除

<img src="/assets/Jfgdb8wm2oiUWkxXR0gcdHL8ned.png" src-width="3814" src-height="1614" align="center"/>

**創建授信組**

1. 新建授信組：如圖操作

<img src="/assets/PFXdbZeTYoLotLxqjcbcnkgMnvg.png" src-width="3296" src-height="634" align="center"/>

1. 填寫授信組信息：授信組賬戶在創建授信組時非必填，可在創建組後再分步通過【新增組內賬戶】實現；信息填寫完成後提交即可成功創建組

<img src="/assets/UlLDbD0SAoxQcoxRCjAcU8ZJnQg.png" src-width="3252" src-height="1410" align="center"/>

1. 若添加的組內賬戶已有額度，則會自動帶入其現額度，同時也可以修改額度

<img src="/assets/JdoGb4QGdof9obx3ZQKc8157n5d.png" src-width="3276" src-height="1424" align="center"/>

1. 授信組創建後，均可進一步修改組信息、新增/删除組內賬戶或調整組內賬戶額度

<img src="/assets/DYJRbYqXAovEQYxxEUKchfRinNh.png" src-width="3110" src-height="554" align="center"/>

#### 授信快照

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理  &gt; 授信額度 &gt; 融資授信 &gt; 授信快照</p>
</div>

**菜單功能介紹**：該菜單主要用於查詢所有客戶的歷史每一次的授信記錄，若需具體定位額度變更情況可以使用該功能。

<img src="/assets/Z8zibSmsAobzduxg5r9cZIOvn1g.png" src-width="3825" src-height="1473" align="center"/>

#### 批量變更

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理  &gt; 授信額度 &gt; 融資授信 &gt; 批量變更</p>
</div>

**菜單功能介紹**：該菜單主要用於批量變更客戶的保證金融資額度，主要使用場景為風控的定期額度巡檢。進行批量變更的客戶必須為「授信額度」頁面的已授信客戶。

**操作流程如下**：

1. 頁面右上角可以操作【導入授信】

<img src="/assets/RgX4bxlKioVLHlxPQWjce5kOnEg.png" src-width="3722" src-height="1016" align="center"/>

1. 操作導入：根據下載的模版按模版字段要求填寫；填寫完成後上傳檔；【確定】後則會在列表頁生成一個“待確認”狀態的任務

<img src="/assets/BcrYbbTALocyJ9xnSI0cmoernKc.png" src-width="3218" src-height="1172" align="center"/>

1. 在列表任務的【詳情】進入批量變更客戶額度二次確認頁面

<img src="/assets/Pjx5bbxPao04ObxtBOwcD9W6nzh.png" src-width="3282" src-height="522" align="center"/>

1. 【詳情】列表會展示本次提交確認的所有授信記錄，若需要再次修改部分客戶的額度可以在操作的【編輯】操作；也可以【刪除】無需變更的客戶記錄

<img src="/assets/Qthnb997GoCnqHxovhScWWqNnod.png" src-width="3246" src-height="758" align="center"/>

1. 核對確認無誤後，可以點擊頁面的右上角【批量調整】即可完成該批次調整

<img src="/assets/VYoxbvl1BoZGj0x1RU2citLmngh.png" src-width="3352" src-height="774" align="center"/>

### 客戶融資

#### 已用明細

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 授信額度 &gt; 客戶融資 &gt; 已用明細</p>
</div>

**菜單功能介紹**：該菜單分幣種展示所有客戶融資明細，供查詢使用。

<img src="/assets/B2aQbzTucoUzuJxnEvUc1nbknZc.png" src-width="3174" src-height="1136" align="center"/>

#### 超額明細

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 授信額度 &gt; 客戶融資 &gt; 超額明細</p>
</div>

**菜單功能介紹**：該菜單展示所有超額融資客戶的明細數據，供查詢使用。

<img src="/assets/Ih6Jbx3gvoltxtx0J3CcE1vBnzb.png" src-width="3174" src-height="1256" align="center"/>

### 交易額度

#### 客戶交易額度

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 授信額度 &gt; 交易額度 &gt; 客戶交易額度</p>
</div>

**菜單功能介紹**：該菜單用於查詢所有給過交易額度的客戶，並支持新增、修改和生效/失效額度。

**操作流程如下**：

1. 頁面可通過【設置】設置 margin call 時是否自動失效交易額度，默認開啓自動失效，可以進行修改，詳細可見設置頁面提示；修改需工單審批後方可生效

<img src="/assets/LWNbb6XVioIP0zxICR7cl8zqnwc.png" src-width="3296" src-height="1104" align="center"/>

1. 頁面可以通過【新建】【批量新建】來給客戶添加交易額度

<img src="/assets/AryobHCidopcelxYkVWcJM8AnGb.png" src-width="3346" src-height="694" align="center"/>

1. 配置客戶交易額度，按頁面要求填寫後提交審批，提交信息可在「變更記錄」查看；在工單系統審批通過後，方可在「客戶交易額度」列表展示​
注：​
    1. 一個客戶僅可存在一個交易額度類型
    2. 若客戶已有同類型交易額度，系統則會默認以本次新增額度進行覆蓋

<img src="/assets/EzqgbOplqoFzL8x5TNTcToi9nge.png" src-width="3346" src-height="1724" align="center"/>

1. 批量創建交易額度：下載文件模板並根據模板說明按要求填寫文件後再上傳，頁面會展示文件解析結果；提交在工單系統審批通過後，方可在「客戶交易額度」列表展示

<img src="/assets/JUUQbCFL5om1APxUwPwcHGLlnte.png" src-width="3298" src-height="1652" align="center"/>

1. 在列表頁操作項【編輯】可修改客戶交易額度，按頁面配置修改後提交即可；操作方式同【新建】

<img src="/assets/IIl0bWmZ8ouBqLxUEW7cv62cnMc.png" src-width="3254" src-height="1624" align="center"/>

1. 狀態已失效的客戶可以通過【編輯】修改失效日期來生效客戶交易額度；若需要對已生效的客戶進行失效額度，則可通過操作列表的【置為失效】操作完成

<img src="/assets/ZBQEbmWg2oP2jzxKrLocnjfln1q.png" src-width="3268" src-height="305" align="center"/>

#### 變更記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 授信額度 &gt; 交易額度 &gt; 變更紀錄</p>
</div>

**菜單功能介紹**：該菜單用戶查看客戶交易額度的所有變更記錄。

**操作流程如下**：

1. 「客戶交易額度」創建/編輯後會進入「變更記錄」頁面；列表操作的【工单详情】可以查看该交易额度记录的审批详情

<img src="/assets/RWIKbywciog61uxUc8CcT7n5ntb.png" src-width="3254" src-height="608" align="center"/>

### 借幣提醒

一般劵商的客戶賬戶都是採用綜合購買力換算機制，能方便客戶以非當地幣別去交易當地幣別股票（例：以港元交易美金股票），當客戶成交後，就會涉及到客戶賬戶的借幣（劵商先提供自有外幣給外國劵商作交易）後續客戶就需要進行換匯操作，因此可以配置事先的借幣換匯提醒，將客戶換匯提醒事項列入風控管理維度。

**業務流程**

#### 提醒查詢

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 授信額度 &gt; 借幣提醒 &gt; 提醒查詢</p>
</div>

**菜單功能介紹**：該菜單可以查詢所有提醒客戶，支持配置借幣提醒規則和人工兌換操作。

**操作流程如下**：

1. 點擊列表右上角的【換匯規則】配置借幣提醒規則

<img src="/assets/CWYGb5PVro5XRUxJDIBcwmyxnph.png" src-width="3389" src-height="1286" align="center"/>

1. 規則配置：單幣種規則為非必配項，其他為必配項；規則僅在開啓時運行
    1. 必配項的欠款金額和其他幣種可提金額默認為主幣種，所有幣種轉化為主幣種計算
    2. 單幣種規則和必配項規則只要有其一滿足規則，即會提醒
    3. 單幣種規則可以設置不同幣種規則，支持添加和刪除

<img src="/assets/DdqjbOJ3eovrKBxqkkSc9Jsxnf4.png" src-width="3356" src-height="1720" align="center"/>

1. 規則配置後，選擇開啓並保存規則。系統則會運行規則，撈取符合規則的客戶，結果在「提醒查詢」列表展示。此外，交易日均會定期執行規則並給符合規則的客戶發送借幣提醒消息，通知客戶主動換匯。頁面操作【換匯用戶撈取】可刷新列表，過濾不再滿足規則的客戶

<img src="/assets/Spdybd0dnotrSixrMJbcmYWMnIg.png" src-width="3218" src-height="1070" align="center"/>

1. 同時，開啓規則後，客戶在 App 上可以對應查看【自動還款】功能，可以自主選擇開啓該功能。若客戶打開自動還款，當命中規則時，系統將進行自動換匯或後台操作人工兌換
    1. App 端「自動還款」
    <img src="/assets/T6iNbFRaBokTo0x0kQPcHPlznuX.png" src-width="1170" src-height="2532" align="center"/>
    1. App 若開啓「自動還款」，頁面「自動換匯」則為「開啓」，支持操作【兌換】
    <img src="/assets/BFmWbrCjIoiyV1xTGJBcz7hDnIg.png" src-width="3216" src-height="682" align="center"/>

2. 兌換：開啓自動還款的客戶會默認系統自動兌換；在系統自動兌換之前，頁面可支持人工兌換。列表操作【詳情】支持查看客戶實時數據、消息記錄和兌換記錄；人工兌換彈窗頁面也可查看當前客戶現金情況，配置兌入/兌出金額和幣種確認兌換即可
    <img src="/assets/S4kJbnbZgoQyjAxUlbVcRPUpn69.png" src-width="3274" src-height="1640" align="center"/>
    <img src="/assets/Dxo0bPGLkoBbDRxAOlvcd48unih.png" src-width="3222" src-height="1220" align="center"/>

3. 兌換結果查看：人工/自動兌換完成後，若剩餘資產仍命中規則，則仍會在提醒查詢列表；若不再命中規則則會進入歷史記錄，可在「[歷史記錄](./VWyawtnPoizaJvkLjGIcgA5hngb)」查看相關詳情

#### 歷史記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 授信額度 &gt; 借幣提醒 &gt; 歷史紀錄</p>
</div>

**菜單功能介紹**：該菜單主要用於查詢歷史所有的提醒客戶及相關提醒兌換詳情。

<img src="/assets/GixebJJjMoXwxFxNY9PcBNmcnug.png" src-width="3198" src-height="1070" align="center"/>

## Margin Call

當客戶的資產淨值，因市場波動而下跌至低於維持保證金水平時，系統會向客戶發出 Margin Call 通知，客戶必須在 3 個交易日補充資金或平倉，否則業務上有權替客戶進行平倉，而無須事先通知。

**業務流程**：

### 風險預警

#### 實時預警

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 風險預警 &gt; 實時預警</p>
</div>

**菜單功能介紹**：該菜單支持實時的保證金預警監控。

1. 列表展示所有當前預警客戶記錄，在左側區會有 綠色文字實時相關更新提示（實時更新最新計算結果）；同時在上方區域會加總目前 預警紀錄的追保金額與 長期未結清追保金額的 匯總額

<img src="/assets/Eb9zbk0ugo94NAxSElBcJSZjnyd.png" src-width="3262" src-height="796" align="center"/>

1. 同時對於列入監控預警的客戶，可以點選記錄後，可以進行後續操作：發送消息//平倉操作/設置自動平倉

<img src="/assets/TryhbDzfronQenxyUUCcYrk7nlc.png" src-width="3230" src-height="1145" align="center"/>

1. 如果操作平倉動作時，可以選擇是否平倉特定股票平倉

<img src="/assets/Hsk9b9caxo3LW6xIHx4cGnSSn8c.png" src-width="3248" src-height="1294" align="center"/>

1. 設置自動平倉：可以自定義設置自動平倉時間

<img src="/assets/W54lbRGVlox4KYxSG9Jc7oPDncf.png" src-width="3222" src-height="1306" align="center"/>

1. 也可以對列入監控預警的客戶，在記錄區右側點選【詳情】，提供該客戶的資金摘要與持倉資料與正在平倉的股票清單；支持在詳情頁操作【平倉】或者【發送消息】

<img src="/assets/ZO5Rbam1AoOxCWx3xI1cZUjTnvb.png" src-width="3158" src-height="506" align="center"/>

<img src="/assets/SnTybAHepoqhFkxnQaAcgFVEnvd.png" src-width="3252" src-height="1632" align="center"/>

1. 對當前預警記錄進行編輯備注，便於後續處理或給其他人參考​；同時，若標注為異常單，也可在列表頁面的【異常單】查看記錄

<img src="/assets/WwyrbvZ3so10mQx2YVwcJUzunXg.png" src-width="3150" src-height="466" align="center"/>

<img src="/assets/Vqb4b0ou9oijgYxEyNvc0etznbc.png" src-width="3156" src-height="1140" align="center"/>

#### 日內融實時預警

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 風險預警 &gt; 日內融實時預警</p>
</div>

**菜單功能介紹**：該菜單功能及操作邏輯同「實時預警」，針對客戶對象僅爲日內融賬戶。

<img src="/assets/PdLrbubJuoKOmbxq336cRytPnvb.png" src-width="3212" src-height="700" align="center"/>

#### 歷史記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 風險預警 &gt; 歷史記錄</p>
</div>

**菜單功能介紹**：margin call 結束後會進入歷史記錄頁面，該菜單下可以查看歷史 margin call 訂單的詳細信息。

1. 點擊列表頁的【詳情】可以查看 margin call 觸發前後的詳細數據

<img src="/assets/D269bVtCYosDvmx8TNecJkRcngb.png" src-width="3300" src-height="736" align="center"/>

#### 快照

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 風險預警 &gt; 快照</p>
</div>

**菜單功能介紹**：當客戶觸發 margin call 後，需要保留當時客戶觸發 margin call 時的歷史數據記錄是可追溯，日後可以作為 RO 或相關合規的參考，附為上報給監管的依據，因此 margin call 歷史記錄需要在部分場景下記錄快照數據。

場景如下：觸發 margin call  /觸發 force call / 觸發通知/每日定時記錄 /結束 margin call

<img src="/assets/P5zBbu3xJoG7PHxcgeFcd0gqnMh.png" src-width="3296" src-height="786" align="center"/>

#### 融券持倉概覽

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 風險預警 &gt; 融券持倉概覽</p>
</div>

**菜單功能介紹**：當 IB 不可融資時，會進行提前通知做股票召回或者強制平倉，對應我們也要通知用戶做強制平倉。該菜單支持查看整體融券的使用情況並操作平倉。

1. 列表頁查看整體融券信息

<img src="/assets/ERGqbwB5comLkixYwjVcCMXynid.png" src-width="3220" src-height="786" align="center"/>

1. 點擊【詳情】，可查看該空頭股票對應客戶詳情

<img src="/assets/RapDb10RwoPCBixBU1PcuwkXnlc.png" src-width="3084" src-height="522" align="center"/>

1. 詳情頁面可以操作平倉或發送 margin call 消息，操作方式同「實時預警」

<img src="/assets/UFPKbvIlYo7RaLxAfIecyQiwntf.png" src-width="3030" src-height="522" align="center"/>

#### 不良信貸處理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 風險預警 &gt; 不良信貸處理</p>
</div>

**菜單功能介紹**：該菜單主要用於查詢不良信貸客戶數據。

<img src="/assets/FXkQb6ptroSilexXrZIcMPl2nXT.png" src-width="3270" src-height="1624" align="center"/>

### 股票追收

#### 期權備兌追收

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 股票追收 &gt; 期權備兌追收</p>
</div>

**菜單功能介紹**：該菜單展示期權備兌正股不足，需要追收股票的記錄。

1. 列表展示所有追收記錄

<img src="/assets/EKk4bdpShoFmnCxQJ8WcdMkCnPd.png" src-width="3216" src-height="576" align="center"/>

1. 點擊【詳情】可以進一步查看客戶 margin call 詳情，並支持對期權操作【平倉】

<img src="/assets/GFq5bIiORoJcCQxKx7UcjY3zn7f.png" src-width="3262" src-height="1626" align="center"/>

#### 空頭股票追收

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 股票追收 &gt; 空頭股票追收</p>
</div>

**菜單功能介紹**：該菜單展示需要追收的空頭股票記錄（非實时更新）。

1. 列表展示所有追收記錄

<img src="/assets/O6e9bPgVJoZyIvx0Senca3AFnSc.png" src-width="3234" src-height="720" align="center"/>

1. 點擊【詳情】可以進一步查看客戶 margin call 詳情，並支持對空頭股票操作【平倉】

<img src="/assets/TKyfb5oBzo0CxjxWkgycu3MmnJf.png" src-width="3252" src-height="1608" align="center"/>

### 平倉訂單

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; Margin Call  &gt; 平倉訂單</p>
</div>

**菜單功能介紹**：該菜單用於查看所有平倉記錄，以及若出現平倉操作錯誤，可以進行撤單。

<img src="/assets/Acc5blIXIo6IuwxnsrTcy11Nnwe.png" src-width="3242" src-height="1096" align="center"/>

## 保證金

股票的保證金作為港美股券商風控的邏輯之一，用於計算購買力、margin call 等場景，一般來講可保證金交易的股票是風險偏低的股票。該菜單主要提供保證金設置功能。

### 股票保證金

#### 多頭股票保證金

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 保證金  &gt; 股票保證金 &gt; 多頭股票保證金</p>
</div>

**菜單功能介紹**：該菜單主要用於設置多頭股票保證金比例。

1. 列表展示所有股票保證金設置現狀

<img src="/assets/UEzUb5TGNowNgBxfNUecJIg3ncd.png" src-width="3262" src-height="836" align="center"/>

多頭股票保證金列表頁

1. 可以在【新建】按鈕，新增單個股票保證金比例（注：若該股票已存在，數據會覆蓋，以本次設置為準）

<img src="/assets/ThhabRRdBoGlvBx2siFc2O5vnQ2.png" src-width="3252" src-height="560" align="center"/>

<img src="/assets/N6nJb2KWhoys7ix5cRXcAIGEnkb.png" src-width="2238" src-height="1014" align="center"/>

1. 批量設置保證金比例：下載模板後根據模板字段說明填寫並上傳文件

<img src="/assets/Dfewbq5Vfol5hRx7S3AcuRAXnDt.png" src-width="3200" src-height="1012" align="center"/>

1. 無論是單個新建還是批量上傳，都會在「設置記錄」生成記錄，操作見「[設置紀錄](./VWyawtnPoizaJvkLjGIcgA5hngb)」菜單
2. 若股票保證金設置已存在，需要修改比例，則可以在列表操作【編輯】，編輯操作流程同新增；如需刪除某只股票的保證集比例設置，可以操作【刪除】

<img src="/assets/VGsNbHo1FoCnKoxq0PvcnS2InPc.png" src-width="3058" src-height="428" align="center"/>

1. 股票狀態可能變更，可以通過列表右上角的【拉取個股狀態】刷新最新狀態

<img src="/assets/FySubnmqpomqjTxgu8DcpjslnXg.png" src-width="3246" src-height="640" align="center"/>

#### 日內交易實時保證金

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 保證金  &gt; 股票保證金 &gt; 日內交易實時保證金</p>
</div>

**菜單功能介紹**：針對日內融業務，可以單獨設置支持日內交易的股票保證金比例。

1. 列表展示所有支持日內交易的股票保證金比例記錄；系統會自動根據交易時段變更保證金狀態，相關規則可參看列表保證金狀態字段的幫助提示

<img src="/assets/NLwjb7uqXovzvfxrUGlc7Hk1n3c.png" src-width="3296" src-height="1084" align="center"/>

日內融股票保證金列表

1. 頁面的【新增】和【批量上傳】可以單個新增或批量新增日內交易股票的保證金比例設置；操作流程同「股票保證金」

<img src="/assets/Qsx5bEMDSoeyBSx3tp1cFnUpnbc.png" src-width="3298" src-height="954" align="center"/>

1. 在紀錄右側操作區，進行【編輯】或【刪除】

<img src="/assets/KeSxb0C88oOj0zxhLnjcPstYnYc.png" src-width="3288" src-height="550" align="center"/>

<img src="/assets/OyK3bJRLoom6dfx7yAccvvzxnLe.png" src-width="3338" src-height="1598" align="center"/>

注意：若其中若狀態為失效，則說明保證金比例默認為 100%

#### 設置記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 保證金  &gt; 股票保證金 &gt; 設置記錄</p>
</div>

**菜單功能介紹**：該菜單用來查看股票保證金/日內交易實時保證金比例的設置記錄以及進行人工同步/取消同步操作。

1. 「股票保證金」「日內交易實時保證金」新增或編輯提交後會在比率設置記錄中会生成未觸發的該保證金設置記錄，也可以點擊【取消同步】則取消設置，不作記錄，此時點擊【同步】，該記錄狀態變更為已觸發，同時在主頁生成一條股票保證金記錄（若新增的為已存在的股票則更新原記錄）；點擊【取消同步】，則記錄狀態變更為已撤銷，該設置不生效；若不操作人工同步，系統將在設定的有效期生效對應設置

<img src="/assets/JdukbF4g7oL8ebxvK3BcdmWjnFd.png" src-width="3246" src-height="576" align="center"/>

#### 空頭保證金

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 保證金  &gt; 股票保證金 &gt; 空頭保證金</p>
</div>

**菜單功能介紹**：針對空頭業務，可以單獨設置支持空頭股票保證金比例。

1. 列表展示所有支持空頭股票保證金比例記錄

<img src="/assets/WAaqbZamDoXHNxxtMrfcKmv9nCd.png" src-width="3282" src-height="986" align="center"/>

空頭保證金列表頁面

1. 支持批量上傳：下載模板文件根據文件要求填寫後上傳

<img src="/assets/RVOWbBklxohO32xfme9cEGpWnBd.png" src-width="3268" src-height="1122" align="center"/>

1. 也可點擊紀錄區【編輯】修改紀錄

<img src="/assets/MFLZbjGkEo1InSxnzBccbyiMn4v.png" src-width="3302" src-height="1428" align="center"/>

#### 空頭保證金記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 保證金  &gt; 股票保證金 &gt; 空頭保證金記錄</p>
</div>

**菜單功能介紹**：該菜單展示空頭股票保證金比例的變更記錄。

<img src="/assets/AsWxbKzDMoM1MjxmD1IcSGwAndd.png" src-width="3280" src-height="810" align="center"/>

### 客戶保證金

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 保證金  &gt; 客戶保證金</p>
</div>

**菜單功能介紹**：該菜單可以設置客戶個性化股票保證金比例，在保證金計算時會優先取客戶保證金比例。

1. 列表展示所有客戶保證金設置

<img src="/assets/S5LjbBEXHoi0OvxSIRVck25GnRW.png" src-width="3256" src-height="846" align="center"/>

1. 可以通過【導入保證金數據】來新增客戶保證金；進入彈窗下載模版根據模版填寫後上傳

<img src="/assets/TjQYbH0kboEjx9xrmu5c16uBnne.png" src-width="3168" src-height="1116" align="center"/>

1. 文件上傳【確認】後，在客戶保證金列表中生成狀態為生效中的記錄；如需修改保證金比例，可以通過操作的【編輯】修改；也可以通過【置為失效】來失效客戶保證金比例設置

<img src="/assets/FIEbbOOvmop6Nixv7kKcGuEvnpc.png" src-width="3244" src-height="1424" align="center"/>

## 期權

### 期權行權

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 期權 &gt; 期權行權</p>
</div>

**菜單功能介紹**：該菜單主要用於查看各行權日期權相關數據概覽，並支持查看具體期權及操作行權。

1. 列表展示行權日期權整體數據總覽

<img src="/assets/PdFSbguYLohXPFxZrCTcdZwLn6g.png" src-width="3210" src-height="952" align="center"/>

1. 操作【詳情】可以查看所有期權的行權情況

<img src="/assets/Q2TEb5ktMo4EV1xq4jzcXcDEnsh.png" src-width="3208" src-height="610" align="center"/>

<img src="/assets/LfQubs4cdov4GmxEIQKcLsIJnWd.png" src-width="3220" src-height="772" align="center"/>

1. 如需變更期權類型，可在不同 tab 的【編輯】彈窗進行操作

<img src="/assets/V6VrbAXqbofqDKxndXXcaD05nIf.png" src-width="3246" src-height="1082" align="center"/>

1. 若需對某只期權行權（針對所有客戶），可在列表的【行權】操作

<img src="/assets/EKNAbsaDeoWQ1zxlDNKcxIo7njh.png" src-width="3156" src-height="384" align="center"/>

1. 如需查看某只期權下對應的所有客戶，針對具體客戶操作行權，可在【查看明細】頁面進行操作

<img src="/assets/HK3KbN9VDoVesjxmPMCcvxzNnnd.png" src-width="3295" src-height="594" align="center"/>

<img src="/assets/JuQ4bclOgofN2nxc2e9cYnyNnwb.png" src-width="3194" src-height="1152" align="center"/>

### 行權記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 期權 &gt; 行權記錄</p>
</div>

**菜單功能介紹**：該頁面主要用於查看期權到期放棄行權或到期行權操作後的記錄明細。

<img src="/assets/GgLSbayxmoyIpMxDlwRcKKl3nm9.png" src-width="3218" src-height="1088" align="center"/>

### 末日期權

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 期權 &gt; 末日期權</p>
</div>

**菜單功能介紹**：該頁面主要用於查看到期期權用户的持倉列表明細。

<img src="/assets/SYjCbBFoRoO1ELxeT46cXzponoa.png" src-width="3158" src-height="1324" align="center"/>

## 交易限額

該菜單提供一個完整維度來管理交易限額，其維度包含：

公司层面、客户层面、证券层面、交易员层面的交易限额控制

- 可限制公司整體的單日限額、所有客戶的單日限額、所有證券的每日交易限額
- 可設定單個或批量客戶的交易限額 
- 可設定單個或批量證券的交易限額 
- 可對交易員進行提示、批核、拒絕的限額設定
- 优先级：客户限額/證券限额/交易员限額/客戶類別限額/多維度限額&gt;全局限額。

### 全局限額

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 交易限額 &gt; 全局限額</p>
</div>

**菜單功能介紹**：該菜單展示所有的限額代碼，若需新建限額代碼（現有代碼不支持規則），需聯繫長橋處理。

1. 通過列表操作項的【開啓】和【關閉】可以生效/失效對應限額

<img src="/assets/A96kbT7QZoCUCTx33LIc4xpWnyb.png" src-width="3266" src-height="853" align="center"/>

1. 也可以編輯限額規則：

<img src="/assets/MSH4bQrLMofwD1xgseYcBDfQnbf.png" src-width="3276" src-height="1638" align="center"/>

重點字段說明如下：

<table header_column="1" header_row="1">
<colgroup>
<col width="172"/>
<col width="612"/>
</colgroup>
<thead>
<tr><th><p>字段名稱</p></th><th><p>說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>限額幣種</p></td><td><p>無：則為純數量的判斷，與金額無關<br/>HKD：則全部轉化為 HKD 計算限額<br/>USD：則全部轉化為 USD 計算限額 </p></td></tr>
<tr><td><p>限制的條件類型</p></td><td><p>可選項為：&gt;=， &gt;， =&lt;， &lt;，無限，限制<br/>無限類型無需填閾值，其他均需填入閾值，僅限數字格式</p></td></tr>
</tbody>
</table>

規則修改後需要工單審批方可生效

### 客戶限額

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 交易限額 &gt; 客戶限額</p>
</div>

**菜單功能介紹**：客戶限額僅支持全局限額中限額類型為「客戶」的限額代碼；支持單個/批量新增客戶限額規則。

1. 新增客戶限額規則

<img src="/assets/OBtBbM8lVoDRTjx7bcVchGksnUg.png" src-width="3238" src-height="690" align="center"/>

1. 客戶限額規則配置：支持單個客戶錄入和批量上傳創建；此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/WvtEbOr7bopN2zxj2cccUHqcn80.png" src-width="3252" src-height="1636" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

1. 如需修改客戶限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

<img src="/assets/PrdQb98onoqbJjxmEZtcmF9gnyq.png" src-width="3327" src-height="735" align="center"/>

### 證券限額

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 交易限額 &gt; 證券限額</p>
</div>

**菜單功能介紹**：證券限額僅支持全局限額中限額類型為「證券」的限額代碼；支持單個/批量新增證券限額規則

1. 新增證券限額規則

<img src="/assets/YOP7b9M50owNr2xHDO4cgmLBnTg.png" src-width="3220" src-height="698" align="center"/>

1. 證券限額規則配置：支持單個證券代碼錄入和批量上傳創建；此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/FQ8TbYv32otNW3xktu0cifj7nd4.png" src-width="3262" src-height="1628" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

1. 如需修改證券限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

### 交易員限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 交易限額 &gt; 交易員限額</p>
</div>

**菜單功能介紹**：交易員限額僅支持全局限額中限額類型為「交易員」的限額代碼。

1. 新增交易員限額規則

<img src="/assets/YtXCb9aEfow7gCxHuP7cjgcsndg.png" src-width="3244" src-height="710" align="center"/>

1. 交易員限額規則配置：此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/ITuYbhyfUo5estxVnZocbcFlngb.png" src-width="3298" src-height="1640" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

1. 如需修改交易員限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

### 客戶類別限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 交易限額 &gt; 客戶類別限額</p>
</div>

**菜單功能介紹**：客戶類別限額僅支持全局限額中限額類型為「客戶」的限額代碼。

1. 新增客戶類別限額規則

<img src="/assets/R8CpbAPiAoHvH4xBGtPcV8tLnHh.png" src-width="3248" src-height="836" align="center"/>

1. 客戶類別限額規則配置：此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/TLuQbSxbeoaoA3ximNlcahZxnoe.png" src-width="3274" src-height="1604" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

1. 如需修改客戶類別限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

### 多維度限额

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 交易限額 &gt; 多維度交易限額</p>
</div>

**菜單功能介紹**：多維度限額僅支持全局限額中限額類型為「多維度」的限額代碼。

1. 新增多維度限額規則

<img src="/assets/GqkSbQTWio9ScaxHekhcD0VenHc.png" src-width="3224" src-height="558" align="center"/>

1. 多維度限額規則配置：此處的限額名稱支持自定義，即本次限額規則的名稱；规则配置完成后需要工單審批方可生效

<img src="/assets/VJwjbwxF0oDP3Yx0pKCcYPm9nqc.png" src-width="3254" src-height="1628" align="center"/>

注：選擇限額代碼後會展示限額代碼啓用標識，標識狀態即全局限額下的代碼狀態，若修改此處標識可一並更改全局限額下的代碼狀態

1. 如需修改多維度限額規則或更改規則狀態，可在列表操作項的【編輯】【設為生效】【設為失效】操作；編輯完成後需要工單審批方可生效

## 名單管理

### 黑名单

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 名單管理 &gt; 黑名單</p>
</div>

**菜單功能介紹**：該菜單列表頁展示當前所有黑名單，當前黑名單使用業務場景有授信和資產調撥。業務標籤為“授信”的名單用戶不會進行自動授信，且用戶申請調額均會進入人工審核；業務標籤為“資產調撥”的名單用戶不支持使用購買力劃轉。

1. 列表頁面

<img src="/assets/XUsEbZsdLoFYxCxj354cTQicnDf.png" src-width="2784" src-height="1400" align="center"/>

1. 可以點擊【新建】按钮，新增一個黑名單客戶。
    1. 名單維度：支持證券賬號和客戶編號，若選擇證券賬號僅對指定賬號生效；若為客戶編號，即針對該客戶下的所有賬戶
    2. 業務標籤：支持配置不同業務標籤黑名單，系統支持授信、資產調撥兩種業務黑名單標籤控制。可以同時選擇兩個業務標籤，生成記錄會根據業務標籤分別生成兩條記錄

<img src="/assets/ViUtb4jZpoAzhVxDmnCcn7xzn0g.png" src-width="3246" src-height="1228" align="center"/>

1. 若黑名單量較大，可選擇批量上傳，實現批量新增黑名單，填寫說明可參考模板說明提示

<img src="/assets/O6b0bFHnaoOKdhx7bP4cdX4fnZf.png" src-width="2818" src-height="1190" align="center"/>

## 壓力測試

基於 SFC 保證金指引的壓力測試與股票、客戶相關的監控。

### Margin Call 壓力測試

#### 測試明細

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 壓力測試 &gt; Margin Call 壓力測試 &gt; 測試明細</p>
</div>

**菜單功能介紹**：該菜單可以支持新設不同的條件來計算 Margin Call 預警/非速凍資金盈餘，每次新設都是分配一個任務 ID，當預計完成後，可以查詢任務 ID 的執行狀態與計算內容詳情。

1. 新建模擬計算：系統支持股票組/股票市場/單一股票 三種模式的預計算，同時也支持是否將某種豁免規則配置在壓力測試某個批次上​；按需選擇模擬計算類型及計算內容後，提交即可開始模擬計算

<img src="/assets/GMSKb80HyoRHpSxSwRNcAYJsnmc.png" src-width="3180" src-height="1246" align="center"/>

注：相關豁免規則配置 請在執行菜單：「系統設置」&gt;「風控」&gt;「風控參數」菜單內配置

1. 當計算完畢，可以在記錄右側操作區，點選【詳情】查看計算的結果

<img src="/assets/Fs1IbVDahowbphxHLNOcgzuxnPs.png" src-width="3184" src-height="1260" align="center"/>

1. 【詳情】頁面展示的列表數據可以用來評估模擬計算結果是否符合預期；如同時模擬計算 margin call 和非速凍資金盈餘則會分開兩個列表展示

<img src="/assets/OVFCbnXe4o7iJUx11GKcciVunDb.png" src-width="3238" src-height="1592" align="center"/>

#### 自定義數據

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 壓力測試 &gt; Margin Call 壓力測試 &gt; 自定義數據</p>
</div>

**菜單功能介紹**：該菜單可以維護股票保證金比例，將保證金比例的文檔批次導入。

1. 按模版要求導入保證金比例，導入成功後則會在列表頁展示

<img src="/assets/LTWtbr7PYoCl3ZxDQt5cCgPLnyc.png" src-width="2914" src-height="1272" align="center"/>

### 指數管理

#### 指數級別

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 壓力測試 &gt; 指數管理 &gt; 指數級別</p>
</div>

**菜單功能介紹**：該菜單用來維護劵商保證金指引內所提及的指數級別。

1. 在頁面點擊【新建】可以新建指數級別

<img src="/assets/CO3db629cotANBxpQRccpGBfnph.png" src-width="3182" src-height="908" align="center"/>

1. 若需修改指數級別配置，可以在列表頁的操作【編輯】；如配置無效或不再使用也可操作【刪除】

<img src="/assets/NPRubxcCSoCnr6xxTPmcwod0nZg.png" src-width="3166" src-height="696" align="center"/>

1. 若需要初始化數據，可以點選左側區點選【初始化數據】，會將系統預設指數數據作初始化配置（會將 9 個 SFC 保證金指引要求的指數及級別初始化），但操作初始化不會影響用戶自行添加的指數數據

#### 股票指數

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 壓力測試 &gt; 指數管理 &gt; 股票指數</p>
</div>

**菜單功能介紹**：該菜單用來維護劵商保證金指引內所提及的股票指數。

1. 頁面提供與行情數據同步功能【拉取基本數據】功能，點選後可以自動同步基本數據（此數據是提供給 Whale 產品始用的行情數據源）

<img src="/assets/YxV9bqTfUoIdgoxyFizc19xingh.png" src-width="3192" src-height="890" align="center"/>

1. 如果劵商若有更好的行情數據源，則可以自主批量導入，頁面也有提供【批量導入】功能，提供導入模板下載，可先在模版上編輯後，再將資料導入

<img src="/assets/TJMhb1KqQoJOgfx895OcizrJnPd.png" src-width="3196" src-height="866" align="center"/>

1. 若需修改股票指數代碼，可以在列表頁的操作【編輯】；如配置無效或不再使用也可操作【刪除】

<img src="/assets/Gx06boCT0ok4A6xasgTcDthGnUc.png" src-width="3246" src-height="578" align="center"/>

#### 股票級別佔比

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 壓力測試 &gt; 指數管理 &gt; 股票級別佔比</p>
</div>

**菜單功能介紹**：該菜單展示股票級別佔比，並支持模擬 margin call 計算。

1. 股票級別佔比列表

<img src="/assets/HUCebCFyTow5l0x2YI6crguBnRb.png" src-width="2856" src-height="784" align="center"/>

1. 默認三个指數跌幅为頁面計算好的跌幅，也可通過頁面的【模擬 Margin Call】功能進行人工修改並觸發模擬計算

<img src="/assets/BN3tbbUyCoojqhxwVdrcKHlhnnq.png" src-width="2856" src-height="1032" align="center"/>

### Haircut 管理

根據 FRR 報表等相關的財務報表要求，需要計算抵押品的折扣價值。

<table header_column="1" header_row="1">
<colgroup>
<col width="144"/>
<col width="719"/>
</colgroup>
<thead>
<tr><th><p><strong>術語 / 縮略詞</strong></p></th><th><p><strong>說明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>Haircut</p></td><td><p>在金融學里，<strong>估值折扣</strong>或<strong>剃頭</strong>是指從作為擔保或抵押品的資產市場價值中扣除的百分比。估值折扣的數量反襯出投資者持有資產的風險。但是，貸款人擁有整個資產的擔保物權。​<br/>比如，在投資者看來風險度很低的美國國庫券可能有 1% 的估值折扣，而投資者認為風險度高的股票期權的估值折扣可能高達 30%。換句話說，1000 美元的國庫券可被接納為 990 美元貸款的擔保，而 1000 美元的股票期權僅可作為 700 美元貸款的擔保。</p></td></tr>
</tbody>
</table>

#### 股票 Haircut 管理

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 壓力測試 &gt; Haircut 管理 &gt; 股票 Haircut 管理</p>
</div>

**菜單功能介紹**：該菜單主要用於管理股票 Haircut。

1. 列表展示所有已設置 Haircut 的股票列表

<img src="/assets/B5N0bo8BuoNhnCxOYY5cGbmJnEd.png" src-width="3162" src-height="1132" align="center"/>

1. 可以點選左上角【添加股票 Haircut】添加股票 haircut 紀錄

<img src="/assets/UUIebBYbmonorrxG3qecCxmpnyc.png" src-width="3166" src-height="664" align="center"/>

1. 也可以在記錄右側操作區點選【編輯】修改股票 haircut 數值

<img src="/assets/HwpYb7X9QoiAmjx5d9mcLqY2n9c.png" src-width="3182" src-height="690" align="center"/>

1. 頁面也支持批量導入 Haitcut，可以點選左上角【批量導入】 ，可以下載導入模板按照其格式輸入後，進行批量導入操作

<img src="/assets/I67QbZKm3oydy2x6ytkcqpyBnjg.png" src-width="3178" src-height="588" align="center"/>

#### 指數 Haircut

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 壓力測試 &gt; Haircut 管理 &gt; 指數 Haircut</p>
</div>

**菜單功能介紹**：該菜單主要用於管理指數 Haircut。

1. 指數部分與前述股票 Haircut 操作功能相同，但不支持批量導入

<img src="/assets/Z94SbwxGHob58FxVNkGcRF8unMb.png" src-width="3196" src-height="704" align="center"/>

#### Haircut 修改記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>風控管理 &gt; 壓力測試 &gt; Haircut 管理 &gt; Haircut 修改記錄</p>
</div>

**菜單功能介紹**：該菜單用於查詢所有 Haircut 修改記錄。

<img src="/assets/WceRbCzaQoaSbXxlBqecAS7ynVc.png" src-width="3158" src-height="974" align="center"/>

Haircut 修改記錄列表頁面

