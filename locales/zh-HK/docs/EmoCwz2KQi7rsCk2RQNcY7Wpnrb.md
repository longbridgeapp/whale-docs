---
title: 系統介紹
slug: EmoCwz2KQi7rsCk2RQNcY7Wpnrb
sidebar_position: 1
---


# 系統介紹

本使用手冊適用於 Longbridge Whale-權益平台，運營系統管理員和使用成員使用。閱讀此手冊，你將瞭解 Whale-權益平台作業功能操作

# 權益系統

## 功能介紹

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>功能目錄</p></td><td><p>目錄說明</p></td></tr>
<tr><td><p>權益</p></td><td><p>Whale 權益系統體系中，權益主要包括卡券福利、獎勵中心、權益中心三大塊功能。</p></td></tr>
<tr><td><p>卡券福利</p></td><td><p>主要分卡券和福利，具備卡券的創建、管理、結算功能；實物獎勵模版創建、實物獎勵管理功能</p></td></tr>
<tr><td><p>獎勵中心</p></td><td><p>即創建好卡券福利後後台發獎功能，可查詢所有的獎勵記錄並給主動給用戶發卡券、實物獎勵</p></td></tr>
<tr><td><p>權益中心</p></td><td><p>主要用與查詢 APP 內的權益訂單數據</p></td></tr>
</tbody>
</table>

### 1.1 權益使用流程

適用：運營人員，權益系統涉及到下列幾個主體：
權益系統：運營人員負責配置管理權益項目 (卡劵福利/獎勵中心/權益中心)
APP  端：客戶與各種權益做交互行為互動
結算系統：當客戶與權益項目作交互時所產生的相關帳務處理
數據服務系統：這部份是指一些權益項目與行情服務開通有關 (若有）
交易系統：這部份是指一些權益項目與交易服務使用有關 (若有）

## 卡券福利

### 功能菜單目錄

<img src="/assets/KJE4b19TwolIOvxpsOCcVWi0n3b.png" src-width="472" src-height="624"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>菜單名稱</p></td><td><p>功能說明</p></td></tr>
<tr><td><p>卡券配置</p></td><td><p>主要功能為卡券模版的查詢以及卡券模版配置功能</p></td></tr>
<tr><td><p>卡券管理</p></td><td><p>主要對已發放出去的所有卡券進行管理，可查詢到卡券具體發給誰，以及卡券當前狀態與使用情況。</p></td></tr>
<tr><td><p>卡券結算</p></td><td><p>主要為所有已經結算完成且進行金額返還的卡券結算流水表單，如先收後返的平台費、免傭卡等卡券使用所產生需要返還現金的流水，而自動抵扣的免傭卡不生成流水則不會提現在表單中</p></td></tr>
<tr><td><p>實物獎品</p></td><td><p>主要用戶實物獎勵模版查看與實物獎勵模版配置功能</p></td></tr>
<tr><td><p>實物發放管理</p></td><td><p>對已發放的實物獎勵可導出地址進行發貨，填寫物流單號供用戶查看。</p></td></tr>
</tbody>
</table>

### 卡券模版配置

菜單入口：運營系統&gt;權益系統&gt;卡劵福利&gt;卡劵配置

<img src="/assets/UAlpb1VmYo7Dplxe1x0ck7Bvnvg.png" src-width="3812" src-height="1974" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>列表功能操作</p>
<ul>
<li><p>查詢：可通過卡券模版標題、模版代碼、有效時間等篩選查詢卡券模版</p>
</li>
<li><p>查看：點擊查看則可見當前卡券模版所有配置字段信息</p>
</li>
<li><p>編輯：點擊編輯則可編輯當前卡券字段與規則。</p>
</li>
</ul>
<p>（謹慎使用，修改保存之後的字段會影響到當前線上已發放的卡券信息）</p>
<ul>
<li>複製：當想要快速創建相似卡券模版時，點擊複製可直接複製當前卡券模版信息進行部分字段修改即可快速創建新的模版。</li>
</ul>
</div>

點擊右上角“新建”按鈕後打開如下頁面

<img src="/assets/HlwYbgeyaoMHjqxZ0mmcjvvPn7b.png" src-width="2880" src-height="2218" align="center"/>

#### 卡券基礎信息配置

選擇對應要創建的卡券類型，在卡券預覽中可見當前選中的卡券類型的樣式預覽圖，填寫好卡券標題、卡券有效期、卡券價值、卡券使用說明、規則配置等必填字段。具體字段規則如下：

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>卡券類型</p></td><td><p>按照所購買的產品不同將展示不同卡券種類。</p></td></tr>
<tr><td><p>卡券標題</p></td><td><p>可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>卡券有效期</p></td><td><p>分為固定有效期和領取後有效期兩種模式。</p>
<ul>
<li>設置固定有效期為卡券在固定時間段內有效，例如 2023 年 1 月 1 日至 2023 年 1 月 31 日有效期卡券，不管在何時發放何時領取，用戶收到後使用日期都不變；</li>
<li>設置領取後 XX 天後有效則按照領取時間起開始算有效時間，例如設置卡券領取 7 天後有效，則用戶在 2023 年 1 月 1 日領取卡券，卡券有效期則 Wie2023 年 1 月 1 日至 2023 年 1 月 8 日。</li>
</ul></td></tr>
<tr><td><p>卡券價值</p></td><td><p>配置當前卡券幣種以及對應價值/價值上限。設置後用戶可見當前卡券的價值。<br/>部分價值等於實際結算價值如：現金卡、股票現金卡、平台費抵扣卡、全額免傭卡等</p></td></tr>
<tr><td><p>卡券使用說明</p></td><td><p>卡券使用說明，填寫後將在卡券中心，以及卡券選擇頁面中展示。<br/>可以在交易環節使用的卡券類型（如平台費抵扣卡、股票現金卡、免傭卡）該字段最好為必填</p></td></tr>
</tbody>
</table>

#### 卡券規則配置

<table>
<colgroup>
<col width="111"/>
<col width="127"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>卡券類型</p></td><td><p>規則字段</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>行情/基本面卡</p></td><td><p>數據權益標籤</p></td><td><p>必填項，用戶獲得該卡後對應可獲得的數據權益服務包</p></td></tr>
<tr><td rowspan="3"><p>免傭卡</p></td><td><p>適用市場</p></td><td><p>必填項，可多選。即可使用該卡進行免傭的市場有哪些，可配置單市場也可配置多市場</p></td></tr>
<tr><td><p>適用標的類型</p></td><td><p>必填項，可多選。免傭標的類型配置，當前僅支持正股交易免傭配置，後續再拓展其他場景</p></td></tr>
<tr><td><p>免傭模式</p></td><td><p>必填項，單選，免傭模式支持可配置全額免傭、終身免傭、按比例免傭</p>
<ul>
<li>全額：即支持按照當前卡券價值全額免傭，直到扣完全部額度為止。</li>
<li>終身：即免除該用戶在平台內當前市場交易的產生的所有佣金，有效期為終身。（用戶註銷後重新註冊的除外）</li>
<li>按比率：即按照配置比例進行佣金優惠。例如配置 80%，則收取 80% 佣金。免除 20%。</li>
</ul></td></tr>
<tr><td><p>打新特權卡</p></td><td><p>指定 IPO 可用</p></td><td><p>非必填，單選。可選擇指定打新股票可用。</p></td></tr>
<tr><td rowspan="3"><p>打新手續費卡</p></td><td><p>指定 IPO 可用</p></td><td><p>非必填，單選。可選擇指定打新股票可用。</p></td></tr>
<tr><td><p>打新方式</p></td><td><p>必填項，單選。可選擇融資打新、現金打新是可用</p></td></tr>
<tr><td><p>融資額度門檻</p></td><td><p>當選擇融資打新時可選填，設置後則只有在大於該融資額度打新時才可使用。</p></td></tr>
<tr><td rowspan="2"><p>股票卡</p></td><td><p>指定股票</p></td><td><p>必填項，單選。兌換後可獲得對應股票代碼股票</p></td></tr>
<tr><td><p>可兌換股票股數</p></td><td><p>必填項，填寫單張可兌換的股票的股數</p></td></tr>
<tr><td rowspan="3"><p>股票現金卡</p></td><td><p>指定股票</p></td><td><p>非必填，單選。不選則可通用。選擇後則只有對應股票交易或兌換可使用。</p></td></tr>
<tr><td><p>適用市場</p></td><td><p>必填項，可多選。即可使用該卡進行交易的股票市場有哪些，可配置單市場也可配置多市場</p></td></tr>
<tr><td><p>適用標的類型</p></td><td><p>必填項，單選。當支持正股交易、期權交易兩種類型現金卡配置。</p></td></tr>
<tr><td><p>平台費抵扣卡</p></td><td><p>可使用次數</p></td><td><p>必填項，即當前卡券可抵扣多少次平台費。如卡券價值為 30 港幣，抵扣次數為 3，則單次可抵扣上限 10 港幣。</p></td></tr>
<tr><td rowspan="2"><p>融資利息券</p></td><td><p>優惠方式</p></td><td><p>必填項，單選。支持免息、折扣兩種優惠模式選擇</p>
<ul>
<li>免息：則有效期內所產生融資利息直接免除</li>
<li>折扣：則有效期內所產生融資利息直接打折收取。</li>
</ul></td></tr>
<tr><td><p>折扣率</p></td><td><p>選擇折扣優惠時，必填字段。設置折扣為當前收取折扣。例如 80%，則直接收取 80% 利息，優惠 20%。</p></td></tr>
</tbody>
</table>

點擊確定，則生成對應卡券模版以及模版代碼。

#### 卡券使用/結算數據查詢

菜單入口：運營系統&gt;權益系統&gt;卡劵福利&gt;卡劵管理

- 本作業提供卡券使用數據查看

<img src="/assets/TWVvbIrrLo0pUpxOt3NcWWiSn0d.png" src-width="2880" src-height="1800" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>卡券有效期</p></td><td><p>显示用户实际收到卡券之后的具体开始时间和结束时间。若由于用户未开户导致没有开始时间显示的则显示卡券设置的时间</p></td></tr>
<tr><td><p>狀態</p></td><td><ul>
<li>未使用：卡券还未开始使用</li>
<li>使用中：只有卡类型有使用中状态，即卡券当前已使用了部分。例如：50 次卡，当前已使用 3 次则状态为使用中</li>
<li>已使用：全部价值均使用完毕。例如：50 次卡，当前已使用 50 次则状态为已使用</li>
<li>已过期：卡券未使用或未全部使用完直接过期的都叫已过期。例如：50 次卡，当前已使用 3 次但是有效期已过则显示已过期。或者单次卡还未使用，有效期已过也显示已过期</li>
<li>已锁定：未使用完单当前已绑定不可使用了。例如：50 次卡，当前使用了 49 次，再次下单使用第 50 次时当订单还未下单成功前都为已锁定状态；30 元股票现金卡，下单时已绑定了该张卡，则该卡当前则为已锁定状态。后续下单时则不可选中绑定了。</li>
</ul></td></tr>
<tr><td><p>總價值</p></td><td><p>卡券价值</p></td></tr>
<tr><td><p>已用價值</p></td><td><p>当前已结算的实际优惠金额的总和。</p></td></tr>
<tr><td><p>到賬時間</p></td><td><p>发放到用户的时间</p></td></tr>
<tr><td><p>來源</p></td><td><ul>
<li>活动：通过活动进行发奖 </li>
<li>奖励：通过奖励中心后台发奖</li>
<li>任务：通过用户完成任务进行发奖</li>
</ul></td></tr>
</tbody>
</table>

- 卡券結算數據查看/導出

菜單入口：運營系統&gt;權益系統&gt;卡劵福利&gt;卡劵結算

<img src="/assets/EIErbFYNuoAEInx20HDcnumPnp5.png" src-width="2880" src-height="1800" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>核销场景</p></td><td><ul>
<li>交易：交易後結算，如免傭卡、股票現金卡、平台費抵扣卡</li>
<li>打新：打新後結算，如打新面手續費</li>
<li>兌換：兌換後結算，如股票卡</li>
<li>現金：直接現金領取，如現金卡</li>
</ul></td></tr>
<tr><td><p>關聯流水號</p></td><td><ul>
<li>交易则显示对应的交易流水号</li>
<li>打新则显示对应的打新交易流水号</li>
<li>兑换则显示兑换的资产流水号</li>
<li>现金则显示资产流水号</li>
</ul></td></tr>
<tr><td><p>卡券價值</p></td><td><p>該卡券實際價值</p></td></tr>
<tr><td><p>實際結算成本</p></td><td><p>當前流水實際抵扣或者優惠的金額</p></td></tr>
<tr><td><p>核銷日期</p></td><td><p>用戶結算/返還的時間</p></td></tr>
</tbody>
</table>

### 實物獎勵模版配置/查看

<img src="/assets/Z7nVbKkYsoVd7qxzVDxc01SNnSe.png" src-width="2880" src-height="1800" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>列表功能操作</p>
<ul>
<li><p>查詢：可通過獎品類型、獎品標題、創建時間、業務類型進行列表篩選</p>
</li>
<li><p>查看：點擊查看則可見當前獎品模版所有配置字段信息</p>
</li>
<li><p>編輯：點擊編輯則可編輯當前獎品字段與規則。</p>
</li>
</ul>
<p>（謹慎使用，修改保存之後的字段會影響到當前線上已發放的卡券信息）</p>
<ul>
<li>下架：該獎勵下架，所有已發放獎勵過期</li>
</ul>
</div>

#### 創建實物獎勵模版

點擊頁面右上角“新建模版”按鈕，將打開以下頁面

<img src="/assets/TCYSbFyjkogIi1xexUccE36NnEb.png" src-width="2852" src-height="1432" align="center"/>

配置面板進行如下字段配置

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>獎品類型</p></td><td><p>當前僅支持實物獎勵一種獎品類型，後續拓展其他類型</p></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>獎品有效期</p></td><td><p>分為固定有效期和領取後有效期兩種模式。</p>
<ul>
<li>設置固定有效期為獎品在固定時間段內可領取，例如 2023 年 1 月 1 日至 2023 年 1 月 31 日有效期卡券，不管在何時發放何時領取，用戶收到後均需要在該時間端內領取並填寫地址才有效，否則獎勵將直接過期。</li>
<li>設置領取後 XX 天後有效則按照領取時間起開始算領取有效時間，例如設置卡券領取 7 天後有效，則用戶在 2023 年 1 月 1 日領取卡券，則用戶需要在 2023 年 1 月 1 日至 2023 年 1 月 8 日前領取，否則獎勵將直接過期。</li>
</ul></td></tr>
<tr><td><p>獎品價值</p></td><td><p>配置當前卡券幣種以及對應價值</p></td></tr>
<tr><td><p>獎品概述</p></td><td><p>配置後，將展示在用戶領取獎勵頁面下方</p></td></tr>
<tr><td><p>獎品圖片</p></td><td><p>上傳獎品圖片，建議上傳圖片大小為（100*100）像素，jpg、png 圖像格式的文件，大小不</p></td></tr>
</tbody>
</table>

填寫好以上信息都，點擊確定則創建成功，系統自動生成對應模版代碼（用於獎勵關聯）。

#### 實物獎勵發放管理流程

- 發獎後，查看用戶填寫的地址信息導出地址與發貨信息進行線下發貨

<img src="/assets/ZqhMb6In3o0hc2xYVMzcR7zUnmU.png" src-width="2834" src-height="1320" align="center"/>

<img src="/assets/XgdHblGwWo4nh6xbE2Zcs29Gnbe.png" src-width="2854" src-height="1442" align="center"/>

<img src="/assets/LOYnbmhj4oTB5VxsZYJc3rm0nfe.png" src-width="2854" src-height="1340" align="center"/>

- 發貨後將已發貨的物流單號信息填寫到系統中或批量導入到系統中，以便用戶進行查看

點擊“發貨”按鈕，彈框可填寫物流單號

<img src="/assets/YP3xbUqETofrcoxg2xXcA6dgn4c.png" src-width="2350" src-height="1294" align="center"/>

填寫好物流單號後點擊確認即可

若操作量多時，可點擊頁面右上角“批量導入物流單號”可選中文件可批量導入物流單號，更高效！

<img src="/assets/PypFbLlRyoQ4ORxQCVLcXCIonvp.png" src-width="2376" src-height="1344" align="center"/>

## 獎勵中心

#### 給指定用戶發獎

菜單入口：運營系統&gt;權益系統&gt;獎勵中心&gt;獎勵紀錄

<img src="/assets/HlQYbnblWoBPFMxeyBjcO5KInud.png" src-width="2354" src-height="1322" align="center"/>

<img src="/assets/Q4fybiZ2zoGlIExWJrscWCm7nkh.png" src-width="2852" src-height="1424" align="center"/>

#### 給批量用戶發獎

菜單入口：運營系統&gt;權益系統&gt;獎勵中心&gt;獎勵紀錄

- 批量發放現金 - 點擊批量發放現金獎勵按鈕

<img src="/assets/ErOObK5EaotksaxSBnKcflo9nid.png" src-width="2368" src-height="1414" align="center"/>

- 批量發放實物 - 點擊批量發放實物獎勵按鈕

略。同上

- 批量發放卡券 - 點擊批量發放卡券獎勵按鈕

略。同上

## 權益中心

菜單入口：運營系統&gt;權益系統&gt;權益中心&gt;獎勵紀錄

  主要用於運營可查看、導出當前 app 內權益商店成交的訂單情況

  

<img src="/assets/JFCwbke7FoY24rxQu8Ycg5v4nHf.png" src-width="2340" src-height="1358" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>訂單號</p></td><td><p>用戶購買訂單流水號</p></td></tr>
<tr><td><p>產品名稱</p></td><td><p>用戶所購買的產品名稱</p></td></tr>
<tr><td><p>付款人</p></td><td><p>付款用戶 ID</p></td></tr>
<tr><td><p>賬戶</p></td><td><p>用戶付款賬戶</p></td></tr>
<tr><td><p>支付流水號</p></td><td><p>用戶付款流水號</p></td></tr>
<tr><td><p>貨幣類型</p></td><td><p>付款貨幣類型</p></td></tr>
<tr><td><p>產品成本</p></td><td><p>產品實際成本價格</p></td></tr>
<tr><td><p>支付額度</p></td><td><p>用戶付款金額</p></td></tr>
<tr><td><p>支付時間</p></td><td><p>用戶支付完成時間</p></td></tr>
<tr><td><p>下單時間</p></td><td><p>用戶下單時間</p></td></tr>
<tr><td><p>支付狀態</p></td><td><p>用戶當前支付狀態</p></td></tr>
<tr><td><p>創建時間</p></td><td><p>訂單創建時間</p></td></tr>
</tbody>
</table>

# 二。App 端用戶功能

以下展示前端  APP 有關的配置呈現效果：

## 卡券

<div class="flex gap-3 columns-4" column-size="4">
<div class="w-[25%]" width-ratio="25">
<p><b>App 入口</b></p>
<img src="/assets/MscXb8U7KodWEIx6wRzcPdchnug.png" src-width="628" src-height="1352" align="center"/>

<p>我的 - 我的卡券</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>我的卡券</b></p>
<img src="/assets/EDeEbd2wdoZRuwxAD5oc2IYZnBd.png" src-width="624" src-height="1360" align="center"/>

<p>用戶可自行查看當前已有卡券以及卡券狀態</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>交易使用卡券</b></p>
<img src="/assets/OjY3b3jRSoyDDcxCf7scavNJnrf.png" src-width="674" src-height="1366" align="center"/>

<img src="/assets/Nt8WbSAo0oOqf2xUtHZcWlUonSd.png" src-width="750" src-height="1624" align="center"/>

</div>
<div class="w-[25%]" width-ratio="25">
<p><b>打新使用卡券</b></p>
<img src="/assets/J9z1byDzsoTwWyx2Qhzciofentd.jpeg" src-width="724" src-height="1610" align="center"/>

</div>
</div>

## 獎勵

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<p><b>App 入口</b></p>
<img src="/assets/UBDzbE9wno8h8IxE3tBcg1bbnLf.png" src-width="620" src-height="1366" align="center"/>

<p>我的 - 獎勵記錄</p>
<img src="/assets/BDomb6mPOoVCzmxT9nJcpDBJntb.png" src-width="626" src-height="1360" align="center"/>

<p>我的 - 活動中心 - 獎勵</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p><b>獎勵記錄</b></p>
<img src="/assets/HyG4b1X2aop949xSQR1cf9JhnH7.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>展示所有歷史記錄</p>
<img src="/assets/SBx1bmkw6oUof2xDIAUcltmxnPd.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>可篩選類別進行查看</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p><b>實物獎勵領取</b></p>
<img src="/assets/QoVCbrFw5oUkeuxHErUchiB7nsg.png" src-width="750" src-height="1624" align="center"/>

<p>輸入地址與電話</p>
<img src="/assets/GLyzbBtx9og5fqx6HYTcqMdYnFe.png" src-width="750" src-height="1626" align="center"/>

<p>確認郵寄信息</p>
<img src="/assets/QjHpb2ZCkowquYx7bqpcCE0PnNb.png" src-width="750" src-height="1296" align="center"/>

<p>查看物流單號</p>
</div>
</div>

## 權益商店

<div class="flex gap-3 columns-4" column-size="4">
<div class="w-[25%]" width-ratio="25">
<p><b>商店入口</b></p>
<img src="/assets/O9QQbQtl7ojLErxqqzVc8YrVnz3.png" src-width="614" src-height="1366" align="center"/>

<img src="/assets/Ave1bImSpoMlwextaaFc7K4tn3g.png" src-width="626" src-height="1374" align="center"/>

<p>我的 - 我的行情 - 行情商店</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>行情商店</b></p>
<img src="/assets/LaYibIKfaou2tUxSmYIcOfpSn6g.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>展示所有產品，可分 tab 切換不同市場行情產品列表</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>購買產品</b></p>
<img src="/assets/LsPBbeU5sowKT1xw8zIcFXTqnMe.jpeg" src-width="1080" src-height="2374" align="center"/>

<p>選擇對應產品、對應套餐支付購買</p>
</div>
<div class="w-[25%]" width-ratio="25">
<p><b>購買記錄查看</b></p>
<img src="/assets/K18MbF2VVojVvZxWRJCc0QVanBd.png" src-width="628" src-height="1330" align="center"/>

<img src="/assets/HUembGSCioUNOcxKOhecJIuXnjf.jpeg" src-width="1080" src-height="2338" align="center"/>

</div>
</div>

