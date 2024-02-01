---
title: 公司行动使用指南
slug: BEWZwntMZiUcvKkTozWc5aannWc
sidebar_position: 4
---


# 公司行动使用指南

# 一、系統介紹

公司行动系统是清算系统的重要组成部分，用于处理公司股权变动相关业务，包括分红、拆合股、换股等。目前，公司行动系统已支持牛熊证回收、拆合股、分红、供股、邀约、ADR 等多类型。

根据客户是否参与公司行动，公司行动可分为强制型和自愿类（可选择）两种类型。强制型公司行动是指客户无需采取任何操作即可参与的行动，例如普通分红。自愿类公司行动是指客户需要采取一定的操作才能参与的行动，例如供股、选股选息。两种类型公司行动的流程略有差异

公司行动系统架构如下：

# 二、系統設定

在 使用 IPO 模組前，首先需要進入“**渠道管理與費率管理**”作業，進行一次融資渠道初始化配置 (Whale 團隊首次交付會進行一次初始配置),日後劵商若無其他新增融資渠道發生，不需要再額外操作此作業。

## 1. 渠道管理

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 業務參數配置 &gt; 新股配置 &gt; 渠道管理</p>
</div>

渠道配置主要是用來管理：劵商提供客戶認購新股的融資來源 (渠道)

1. IPO 的資金來源是哪裡：例如是券商自有資金，或是某銀行提供融資資金；
2. 這個渠道可以進行什麼類型的認購：例如只能現金認購、或只能進行 0 本金認購。

分配使用不同渠道，更方便券商後續的融資成本管理及 IPO 數據的統計。

**步驟一：查看新股列表**

點選右上角：新建，設定對應數據。

<img src="/assets/FvHJbidULohL4jxJlUycEIc8nRh.png" src-width="3770" src-height="1694" align="center"/>

<img src="/assets/PzqhbZF47oYLPExi1I6clzKXnkd.png" src-width="3788" src-height="1734" align="center"/>

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="569"/>
</colgroup>
<thead>
<tr>
<th><p><strong>字段</strong></p></th><th><p><strong>必填</strong></p></th><th><p><strong>填寫說明</strong></p></th></tr>
</thead>
<tbody>
<tr>
<td><p>渠道名稱</p></td><td><p>是</p></td><td><p>自定義渠道名稱，建議小于 10 個字符，不能有空格<br/>在配置融資池時，會根據名稱選擇。</p></td></tr>
<tr>
<td><p>支持類型</p></td><td><p>是</p></td><td><p>該渠道都支援什麼樣的認購類型，可多選。</p></td></tr>
<tr>
<td><p>是否同步至港交所</p></td><td><p>是</p></td><td><p>對應通路的訂單是否需要同步到港交所。</p>
<ul>
<li>是 - 開啟了 FINI 後，會透過 API 自動把該通路訂單同步給港交所</li>
<li>否 - 不同步<br/>例如：透過上手/銀行做的新股認購，不直接提交到港交所，則選擇<strong>否</strong>；</li>
</ul></td></tr>
<tr>
<td><p>備註</p></td><td><p>否</p></td><td><p>自主備註，方便查看這個管道的用途、定義</p></td></tr>
</tbody>
</table>

## 2.费率管理

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 業務參數配置 &gt; 新股配置 &gt; 費率管理</p>
</div>

IPO 的費率是以**計費套餐**的方式進行配置，可多個新股複用，在配置新股認購信息時，選擇一個預設好的計費套餐即可，主要包括：

<table header_column="1">
<colgroup>
<col width="100"/>
<col width="720"/>
</colgroup>
<tbody>
<tr>
<td><p>認購手續費</p></td><td><p>對申購的有效訂單，收取的固定手續費，與申購金額無關</p></td></tr>
<tr>
<td><p>融資年利率</p></td><td><p>收取客戶的利息 = 融資金額 * 融資年利率/365 * 計息天數</p></td></tr>
<tr>
<td><p>中籤費用</p></td><td><p>此設置為比例，按照最終中籤金額 × 對應的比例</p></td></tr>
</tbody>
</table>

在系統上線前，會根據港交所要求，系統默認設置好中籤費率，券商可點選右上角：**默認中籤費率**，修改或設定設定對應信息。

- 費率名稱盡可能設置為容易識別的信息，如：90% 融資費率、現金費率；
- 中籤費率在 0 本金認購的場景下，若不做任何收取，可在設置時，修改為 0。

<div class="callout callout-bg-3 callout-border-3">
<p>💡 中籤費率為交易所收取，一般情況下不會變化，因此只需要設置默認值，在設置計費套餐時會默認引用默認值，無需每次填寫。</p>
</div>

**步驟一：默認中籤費率設置**

點選右上角：默認中籤費率，設定對應信息，填寫信息後，確認即可。

<img src="/assets/JKZlbQhZvosa5QxVoeKcS8hJnsh.png" src-width="1280" src-height="615" align="center"/>

**步驟二：默認中籤費率設置**

點選右上角：新建，進行計費套餐設置，填寫信息後，確認即可。

<img src="/assets/JRryb3PcLoF2q0xdpyIcIw3Xnhb.png" src-width="3288" src-height="1826" align="center"/>

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="65"/>
<col width="604"/>
</colgroup>
<thead>
<tr>
<th><p><strong>字段</strong></p></th><th><p><strong>必填</strong></p></th><th><p><strong>填寫說明</strong></p></th></tr>
</thead>
<tbody>
<tr>
<td><p>證監會交易徵費</p></td><td><p>是</p></td><td><p>對應港交所 SFC Transaction Levy 的費用類型</p></td></tr>
<tr>
<td><p>聯交所交易徵費</p></td><td><p>是</p></td><td><p>對應港交所 Transaction Fee 的費用類型</p></td></tr>
<tr>
<td><p>財匯局交易徵費</p></td><td><p>是</p></td><td><p>對應港交所 Transaction Levy 的費用類型</p></td></tr>
<tr>
<td><p>經紀人佣金</p></td><td><p>是</p></td><td><p>給經紀人的佣金（具體使用待確認）</p></td></tr>
<tr>
<td><p>費率名稱</p></td><td><p>是</p></td><td><p>券商自定義的費率名稱，再配置 IPO 費用時，選擇使用，如下圖：<br/><img src="/assets/NKwQb6RphoYlU3xBOBQcAe6Cnee.png" src-width="1162" src-height="472" align="center"/></p></td></tr>
<tr>
<td><p>計費幣種</p></td><td><p>是</p></td><td><p>港股 IPO 默認以港幣計費</p></td></tr>
<tr>
<td><p>客戶融資年利率</p></td><td><p>是</p></td><td><p>為客戶提供融資認購，收取客戶的融資利息年利率，可以為 0</p></td></tr>
<tr>
<td><p>認購手續費</p></td><td><p>是</p></td><td><p>IPO 認購時，券商收取客戶的認購手續費，為一次性收費，與認購金額無關，可以為 0</p></td></tr>
</tbody>
</table>

# 三、港股新股操作

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股認購 &gt; 新股認購 &gt; 港股認購 &gt; 基本信息</p>
</div>

新股認購，是券商日常管理**可認購新股**的模塊，包括開啟認購、認購方式及時間設置、扣款操作、中籤操作等。

## 1. 認購配置

### 1.1 開啟認購

若券商打算對某一個 IPO 開啟客戶申購，那麼需要手動開啟，並進行一些基礎的費率、時間設置。

**步驟一：查看新股列表**

對於未開啟認購的新股，點擊『詳情』，進行新股配置。

❤ Tips: 

當有新股公告時，系統會透過行情自動同步數據，會默認記錄在『未開啟認購』列表中，方便券商查看與配置。

<img src="/assets/Mw8bbxUVUoFmbkxExXFcxNyFnJc.png" src-width="3804" src-height="1832" align="center"/>

**步驟二：開啟認購**

1. 點擊新股列表的『詳情』，則進入配置頁面，進入頁面後，默認為“不可認購”，如下圖。
2. 單選，選擇『是』，再進行保存，則開啟認購，開啟後默認只能現金認購。

<img src="/assets/KgeNbW8ehoiFmQxzn8VcHn6Lnrc.png" src-width="3770" src-height="1774" align="center"/>

<img src="/assets/SipAbareCoAKJSxvGP3cdQiFn9e.png" src-width="3782" src-height="1764" align="center"/>

<table>
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="589"/>
</colgroup>
<tbody>
<tr>
<td><p><strong>字段</strong></p></td><td><p><strong>是否必填</strong></p></td><td><p><strong>填寫說明</strong></p></td></tr>
<tr>
<td><p>認購開始時間</p></td><td><p>Y</p></td><td><p>認購開始時間默認為交易所可認購時間，券商可自行修改</p></td></tr>
<tr>
<td><p>現金認購 - 結束時間</p></td><td><p>Y</p></td><td><p>現金認購結束時間，默認為交易所結束時間，券商可自行修改</p></td></tr>
<tr>
<td><p>費率</p></td><td><p>Y</p></td><td><p>現金費率為默認費率，券商可自行修改為任意費率套餐</p></td></tr>
<tr>
<td><p>渠道</p></td><td><p>Y</p></td><td><p>現金認購的渠道為默認現金渠道，券商可自行修改為其他現金渠道</p></td></tr>
</tbody>
</table>

### 1.2 融資認購設置

若券商對该新股需要開啟『融資認購』，那麼需要設定融資池，若不開啟，則無需此設置。

**步驟一：新建融資池**

-**基礎信息**

點選『融資認購』右上角：‘新建’，設定對應融資池信息，點擊後彈出設置信息。

<img src="/assets/LYeKbJcnzoSqHzx3yDhcjAR4nOc.png" src-width="3776" src-height="1816" align="center"/>

填寫基礎數據後，若無需關注更多配置，那麼點擊『提交審批』即可。

<img src="/assets/CbyjbLFKTofQmOxpgu9cGvW8njz.png" src-width="3296" src-height="1802" align="center"/>

**-更多配置**

點擊『更多配置』，則可進行個性化設置。

❤ Tips: 

1. 『更多配置』中的配置數據，一般為須特別控制的信息，非必填。
2. 可見用戶群體：默認為全部客戶，若券商有運營系統的用戶分群功能，那麼可以指定這個融資只給部分客戶開放。
3. 上下限股數用於控制客戶的可認購股數範圍。

<img src="/assets/BBB4b0ZzHoLfmTxZ5QLckGKEnph.png" src-width="3288" src-height="1808" align="center"/>

**-客戶分群配置**

融資池可設置多個分群規則，配合運營要求，例如：

1. A 客戶群體只能最多申購 10000 股；
2. B 客戶群體最多可以申購 100000 股。

<img src="/assets/F8mNbeKfboR5bUxlXBCcNX8MnD2.png" src-width="3766" src-height="1834" align="center"/>

**步驟二：融資池審批**

提交審批後，融資池為默認『待審批』狀態，審批成功後，才會生效。

❤ Tips: 

融資池審批有兩個審批入口：

1. 融資池列表
2. 融資池審批頁面

<img src="/assets/Nwy6bBpglo7Tk9xYjoqc9Lryn8b.png" src-width="2050" src-height="466" align="center"/>

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股認購 &gt; 新股認購 &gt; 融資池審批</p>
</div>

<img src="/assets/UaWbbmjGUoZWzvxYFhOc2Ki2nUc.png" src-width="3744" src-height="1290" align="center"/>

點擊『審批』按鈕，查看工單詳情，審批通過後，融資池生效。

<img src="/assets/WL2Gb1oMIoOyTqxqJZDchGAXnjA.png" src-width="3274" src-height="1824" align="center"/>

<table header_column="1" header_row="1">
<colgroup>
<col width="151"/>
<col width="100"/>
<col width="589"/>
</colgroup>
<thead>
<tr>
<th><p><strong>字段</strong></p></th><th><p><strong>是否必填</strong></p></th><th><p><strong>填寫說明</strong></p></th></tr>
</thead>
<tbody>
<tr>
<td><p>融資總金額</p></td><td><p>是</p></td><td><blockquote>
<p>用於限制所有客戶可使用融資的最大總金額<br/>例如設置融資總金額設定為 500,000 HKD，融資比例為 90%。</p>
</blockquote>
<ol>
<li>客戶 A 使用了 200,000 HKD 融資</li>
<li>客戶 B 使用了 210,000 HKD 融資<br/>那麼此時融資池只剩下 90,000 HKD 額度，客戶使用 90% 的融資進行申購，最多只能申購 90,000 /90% =100,000 HKD 的金額，申購完畢後，融資池已用額度 500,000 HKD，其他客戶將不可用再使用該融資申購，除非券商將融資額度調高。</li>
</ol></td></tr>
<tr>
<td><p>渠道</p></td><td><p>是</p></td><td><p>可選擇任意支持『融資』類型的渠道，建議券商根據實際情況進行選擇</p></td></tr>
<tr>
<td><p>融資比例</p></td><td><p>是</p></td><td><blockquote>
<p>代表提供給客戶的融資比例<br/>例如融資比例為 90%，那麼客戶 IPO 認購金額為 20,000 HKD 時，會用到 18,000 HKD 的 IPO 融資。</p>
</blockquote>
<ol>
<li>支持融資比例選擇</li>
<li>可自定義融資比例，設置好系統自動提醒槓桿倍數<img src="/assets/RJQtb4jl4o4DGlxoXYecnydBnGh.png" src-width="1156" src-height="200"/></li>
</ol></td></tr>
<tr>
<td><p>費率</p></td><td><p>是</p></td><td><blockquote>
<p>代表客戶選擇此方式認購時，所匹配的費率套餐<br/>所選費率只能為<a href="https://longbridge.feishu.cn/wiki/NCxvwUuDfiJJ66kgmcrcCUVunYg">費率管理</a>預設好的費率</p>
</blockquote></td></tr>
<tr>
<td><p>認購時間</p></td><td><p>是</p></td><td><blockquote>
<p>代表此認購方式的可認購時間<br/>券商可以靈活使用這個時間，做好 IPO 運營管理，例如可以配置為：</p>
</blockquote>
<ol>
<li>1 月 3 日支持 20 倍打新（2024-01-03 00:00:00  ～  2024-01-04 00:00:00）</li>
<li>1 月 4 日支持 10 倍打新（2024-01-04 00:00:00  ～  2024-01-05 00:00:00）</li>
</ol></td></tr>
<tr>
<td><p>預警金額</p></td><td><p>否</p></td><td><blockquote>
<p>當融資池剩餘金額小於設定值後，會有相關的預警通知，CS 會對券商做好友好提醒<br/>例如設置融資總金額設定為 500,000 HKD，若預警金額設置為 100,000 HKD，那麼當融資池剩餘額度低於設定值時，系統會進行相關通知</p>
</blockquote></td></tr>
<tr>
<td><p>最低本金要求</p></td><td><p>否</p></td><td><blockquote>
<p>一般情況下不設定，代表客戶使用此融資方式認購時，需要至少付出的本金<br/>例如：認購 A 股票 1 手為 5,000 HKD，融資池給的融資額度為 90%，若不設定此值時，客戶認購 1 手，只需要付出 500 HKD 本金，但當次值設置為 1,000 HKD 時，說明客戶至少要付出 1,000 HKD 本金。當客戶申購 3 手時，需要付出 1,500 HKD 本金，此時已經 &gt; 1,000 HKD，才能使用滿 90% 融資。</p>
</blockquote></td></tr>
<tr>
<td><p>渠道融資比例</p></td><td><p>否</p></td><td><blockquote>
<p>僅作為記錄使用，代表上手或銀行提供了多少融資比例。<br/>例如上手只給了 80% 的融資比例，但券商想給客戶提供 90% 融資，那麼可設置為：</p>
</blockquote>
<ol>
<li>融資比例 = 90%</li>
<li>渠道融資比例 = 80%<br/>系統在統計時，能更方便的計算出券商自己墊付了 10% 的融資</li>
</ol></td></tr>
<tr>
<td><p>可見客戶群體<br/>-客戶分群</p></td><td><p>是</p></td><td><p>系統默認對全部客戶開放，若券商有『Whale - 運營系統』，才會有用戶分群功能<br/>不在對應分群內的客戶，則在 IPO 申購時，看不到此認購方式</p></td></tr>
<tr>
<td><p>可見客戶群體<br/>-上限股數</p></td><td><p>是</p></td><td><p>系統默認填充，交易所允許的最大申購股數，券商可根據運營需要做相關修改</p></td></tr>
<tr>
<td><p>可見客戶群體<br/>-下限股數</p></td><td><p>是</p></td><td><p>系統默認填充，交易所的 1 手股數，券商可根據運營需要做相關修改</p></td></tr>
</tbody>
</table>

### 1.3 0 本金認購設置

若券商對该新股需要開啟『0 本金認購』，那麼需要設定 0 本金認購的融資池，若不開啟，則無需此設置。

0 本金認購為一種比較特殊的認購方式，提供給客戶的融資比例只能為 100%，即客戶不需要任何本金，就可以認購 IPO。

**步驟一：新建融資池**

-**基礎信息**

點選『0 本金認購』右上角：‘新建’，設定對應融資池信息，點擊後彈出設置信息。

<img src="/assets/LtDibY9oHoaHsoxjjAxcqFE9nfb.png" src-width="3056" src-height="1840" align="center"/>

填寫基礎數據後，若無需關注更多配置，那麼點擊『提交審批』即可。

❤ Tips: 

此處設置，與融資認購設置相似，只是**不需要填選融資比例**，固定為 100%，更詳細操作參考

[融資認購設置](./CfQ1wR31ViDOdJkaiB0cs1ipnJf)。

<img src="/assets/XYbjbfFfKo0lqHxfZ6ic5c86nxg.png" src-width="3258" src-height="1814" align="center"/>

### 1.4 融資池信息修改

**上下架**

1. 若當前融資池為『上架』狀態，希望這個融資池立刻失效，不對客戶展示時，可手動操作 **下架**
2. 若目前融資池為『下架』狀態，希望把這個融資池重新開放給客戶，可手動操作 **上架**

<img src="/assets/OxXIbQ5VKoivLExKOfFcTAdJnUh.png" src-width="2064" src-height="480" align="center"/>

**融资池修改**

若融資池已生效，但券商希望調整**融資總金額、融資池可用時間**等信息，那麼可以點擊『編輯』進行融資池相關數據修改，僅下圖部分信息可修改，修改後需要正常提交審批，審批後才生效。

<img src="/assets/NBstbkNCXoVzmyx2P27c4pDhnqb.png" src-width="3232" src-height="1822" align="center"/>

**融资池修改記錄**

融資池修改提交審批後，會展示出歷史修改記錄，點擊『審批』，在工單系統審批後，則修改結果生效。

例如：融資總金額，從 500,000 HKD 修改為 800,000 HKD

<img src="/assets/EM9FbFQy9ojCDzxwsp9c84Pnnzc.png" src-width="2072" src-height="834" align="center"/>

<img src="/assets/O6RobUhGcoQMkZxmpmic2RkMnrd.png" src-width="2058" src-height="824" align="center"/>

## 2. 扣款操作

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股認購 &gt; 新股認購 &gt; 港股認購</p>
</div>

當 IPO 認購截止後，券商需要把確認好的 IPO 訂單資料交給港交所或其他上手，此時對客戶的有效認購訂單進行扣款認購金額及認購手續費的操作，並發放一定的融資金额。

扣款操作有兩個入口：

1. 認購處理中列表頁面：會根據訂單狀態，動態展示快捷操作入口
2. IPO 詳情，認購記錄頁面：會根據訂單狀態，動態展示快捷操作入口

<img src="/assets/NNYrbcKjMoFgt2xMyidcQaqonAb.png" src-width="3280" src-height="860" align="center"/>

<img src="/assets/AZiybrTquoemTMxIECOcuttJnAe.png" src-width="3286" src-height="1574" align="center"/>

**步驟一：點擊扣款，確認訂單範圍**

點擊扣款後，會展示待扣款的訂單範圍，確認並選擇訂單範圍，再進行下一步操作。

<img src="/assets/VX3Jbw2OPoHqMpx8j1tcl59Zncf.png" src-width="3304" src-height="1820" align="center"/>

**步驟二：核對扣款訂單明細**

系統會自動根據認購訂單、費用、融資比例等計算出預覽數據，如下圖，操作人員需要核對相關的數據，並提交審核。

<img src="/assets/XfQQbZFSuozCiPxYayycElqenPf.png" src-width="3298" src-height="1836" align="center"/>

**步驟三：扣款審批**

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股認購 &gt; 新股認購 &gt; 扣款審批</p>
</div>

扣款審批有兩個入口：

1. 專門的扣款審批頁面：可查看歷史的扣款申請、審批記錄。
2. 工單記錄：有審批權限的人，直接可在**待辦工單**中操作審批。

點擊『審批』，則可查看工單，審批通過即可

<img src="/assets/Tl4vbt738otXQWx2JGNcpD9Onsg.png" src-width="3294" src-height="976" align="center"/>

<img src="/assets/RLA3bqC4XobDWAxYJUfcYNPVnkc.png" src-width="3302" src-height="1844" align="center"/>

## 3. 文件導出

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股認購 &gt; 新股認購 &gt; 港股認購 &gt; 文件生成</p>
</div>

對於已經確認扣款成功的 IPO 認購訂單，券商需要把訂單提交給上手或港交所，一般來講，通過港交所做的 IPO 為 CCASS 文件，通過其他上手做的 IPO 一般需要線下 Excel 或 CSV 進行文件傳輸。

若券商已配置採用新的** FINI 平台**，Whale 系統將直接以 API 的方式將**IPO 訂單直接同步給港交所**，則無需此操作。

**步驟一：選擇訂單類型**

根據渠道或融資比例，選擇指定的訂單類型，点击『生成文件』按鈕。

這裡建議相同上手的數據，生成同一份文件。

例如：

1. 融資是通過某一銀行做的，不直接通過港交所，那麼單獨選擇，生成 CSV 文件。
2. 現金、0 成本打新是通過港交所做的，那麼一起選擇，生成 CCASS 文件。

<img src="/assets/XLWdbjmgPonHb7xCaEHcabdrnsh.png" src-width="3288" src-height="1318" align="center"/>

**步驟二：生成指定文件**

彈出側拉彈窗後，選擇**文件格式**，並自定義**文件名**，點擊『生成並下載』即可。

<img src="/assets/ANc3b87EcoEli6xvcjDc9SLHnae.png" src-width="3302" src-height="1844" align="center"/>

## 4. 公佈中籤

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股認購 &gt; 新股認購 &gt; 港股認購</p>
</div>

一般在上市前一個交易日，會完成中籤結果公佈，系統需要對客戶完成中籤結果操作，中簽股票需要在當日到帳。

中籤操作有兩個入口：

1. 認購處理中列表頁面：會根據訂單狀態，動態展示快捷操作入口
2. IPO 詳情，認購記錄頁面：會根據訂單狀態，動態展示快捷操作入口

<img src="/assets/IoRabHesloW0TRxLGyKclrZZngG.png" src-width="3282" src-height="720" align="center"/>

<img src="/assets/SsJlb6ce2oNpPVxbFF1czbBznlh.png" src-width="3284" src-height="1590" align="center"/>

**步驟一：點擊公佈中籤，核對數據**

點擊公佈中籤後，首先需要券商確認好以下數據，若信息無誤，則直接點擊『下一步』即可。

1. IPO 價格：一般情況系統會自動獲取，券商二次確認即可，若 IPO 價格系統自動獲取是異常的，操作人也可以人工填寫
2. 客戶的計息天數：默認計息天數為中籤日 - 認購截止日的差值（與港交所時間一致），操作者亦可自行修改。

<img src="/assets/GLuvb0jA7o6eGOxlB9BcilxbnuE.png" src-width="3306" src-height="1820" align="center"/>

**步驟二：選擇中籤方式**

IPO 系統提供多種中籤方式，券商可根據實際情況選擇不同的中籤方式。

<table header_row="1">
<colgroup>
<col width="189"/>
<col width="522"/>
</colgroup>
<thead>
<tr>
<th><p><strong>中籤方式</strong></p></th><th><p><strong>中籤方式說明</strong></p></th></tr>
</thead>
<tbody>
<tr>
<td><p>港交所 CCASS 中籤結果</p></td><td><p><strong>通過港交所做的 IPO</strong><br/>CCASS 的中籤結果，下載下來，直接上傳 CCASS 結果即可。</p></td></tr>
<tr>
<td><p>自定義 CSV 文件</p></td><td><p><strong>不是通過港交所做的 IPO，而是通過銀行或其他上手做的</strong><br/>一般情況上手把中籤結果給一份 CSV 或 Excel 文件，需要操作人把對應結果文件轉化為系統可識別的字段，再進行上傳。</p></td></tr>
<tr>
<td><p>FINI 中籤結果</p></td><td><p><strong>通過港交所做的 IPO</strong><br/>FINI 平台的中籤結果，下載下來，直接上傳即可。</p></td></tr>
<tr>
<td><p>自動獲取上手中籤結果</p></td><td><p><strong>以長橋香港為上手做的 IPO，可以系統化自動獲取</strong><br/>選擇後，直接點擊『下一步』，那麼系統將自動拉取結果。</p></td></tr>
<tr>
<td><p>自動獲取 FINI 中籤結果</p></td><td><p><strong>通過港交所 FINI - API 自動做的 IPO 訂單</strong><br/>選擇後，直接點擊『下一步』，那麼系統將自動拉取結果。</p></td></tr>
</tbody>
</table>

**-上傳自定義 CSV 文件**

1. 下載示例模板，模板如下：
    1. Order：代表 IPO 系统的订单号
    2. APPLY：代表该订单客户申请了多少股
    3. SUCCESS：代表客户中签了多少股

<img src="/assets/UWaAbZB8dobUTXxPxUOcnlltnFb.png" src-width="1004" src-height="258" align="center"/>

1. 填寫中籤數據，並上傳文件

<img src="/assets/Cr1bbAU3yoJecFxEqxicq37SnWE.png" src-width="3286" src-height="1822" align="center"/>

**步驟三：核對中籤結果**

系統會根據操作人所選的中籤方式及中籤文件，自動解析中籤結果，生成匯總及明細數據。

匯總數據：用於跟上手核對總數量、總中籤數量，便於快捷發現中籤數量問題。

明細數據：用於預覽中籤數據及扣費數據。

若數據無誤，點擊『確定』，則提交審核。

<img src="/assets/DS5PbGOs5oEbNpx3ICgcrWc4nRd.png" src-width="3294" src-height="1832" align="center"/>

**步驟四：中籤結果審核**

<div class="callout callout-bg-6 callout-border-6">
<p>⚓ 新股認購 &gt; 新股認購 &gt; 中籤審批</p>
</div>

中籤審批有兩個入口：

1. 專門的中籤審批頁面：可查看歷史的中籤申請、審批記錄。
2. 工單記錄：有審批權限的人，直接可在**待辦工單**中操作審批。

點擊『審批』，則可查看工單，審批通過即可。

<img src="/assets/QSVSbMtURouqhtxfdm7cw2H8nXc.png" src-width="3272" src-height="954" align="center"/>

<img src="/assets/XXRYbxHYNowZ4txUNvqcH2Xhn0b.png" src-width="3286" src-height="1820" align="center"/>

# 四、常見問題

## 渠道管理問題

### 問：為什麼要分不同渠道？

答：分不同渠道更容易進行 IPO 認購訂單的融資管理及統計，例如，分別設置如下渠道：

1. 自有資金渠道
2. A 上手融資渠道
3. B 上手融資渠道

在訂單的匯總中，通過不同渠道匯總認購金額，融資使用情況，更便於系統自動化統計不同渠道的訂單、融資情況，如下圖：

<img src="/assets/PGMVbelNVoGfUzxgbgtcixLRnHe.png" src-width="3612" src-height="592" align="center"/>

### 問：渠道配置有什麼建議？

建議不同的資金來源、不同的認購方式，設置為不同的渠道進行配置。

## 費率配置問題

### 問：如何給不同股票配置不同費率？

答：在 IPO 開啟認購時，可靈活選擇不同的費率套餐，在費率配置時，多配置幾個不同費率，在 IPO 認購方式配置時，制定不同的費率即可。

### 問：是否支持階梯收費？

答：目前系統暫不支持按照不同的認購股數進行階梯收費，如有需求，可咨詢對應 PM 或 CS 提出需求。

## 融資池配置問題

### 問：限制客戶融資認購數量範圍，如何操作？

答：在設置融資池時，點擊『更多配置』，調整**上下限股數**即可。

### 問：限制融資池的可用時間範圍，如何操作？

答：在設置融資池時，設置好融資池**的開始時間、結束時間**即可。

### 問：0 本金認購只想開放給部分客戶，如何操作？

答：首先需要券商有運營系統，同時在運營系統內設定好用戶分群，在設置融資池時候，點擊『更多配置』，可見用戶群體選擇**部分客戶**即可，同時選擇對應用戶分群。

## 扣款問題

### 問：什麼時候操作扣款

答：扣款操作一般發生在 IPO 認購截止後的時間，扣款後，相當於訂單已確認，訂單不可以撤銷

### 問：是否可以分批扣款

答：可以。

例如融資認購先截止，那麼可以截止後，只選擇融資認購的訂單進行扣款。待現金認購截止後，再選擇現金認購的訂單進行扣款即可。

## 中籤問題

### 問：不通過港交所做的 IPO 如何公佈中籤

答：待上手把中籤結果返回後，需要先把中籤結果，轉化為 Whale 系統自定義中籤的格式，導入系統操作即可，詳情請參考：[公佈中籤操作](./CfQ1wR31ViDOdJkaiB0cs1ipnJf)

### 問：對接了 FINI 平台的 API，如何操作中籤

答：若券商對接了 FINI - API 做自動化 IPO，那麼直接在中籤時，選擇：**自動獲取 FINI 中籤結果**

再點擊下一步則可以預覽中籤結果，無需上傳文件

