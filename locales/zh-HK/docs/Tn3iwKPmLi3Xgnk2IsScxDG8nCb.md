---
title: 快速上手
slug: Tn3iwKPmLi3Xgnk2IsScxDG8nCb
sidebar_position: 0
---


# 快速上手

## 前置條件

您需要獲取以下授權後方可正常使用活動系統

<table header_row="1">
<colgroup>
<col width="293"/>
<col width="392"/>
</colgroup>
<thead>
<tr><th><p><b>權限名稱</b></p></th><th><p><b>權限說明</b></p></th></tr>
</thead>
<tbody>
<tr><td><p>ActivityCenterFull<br/>管理活動、邀請關係配置的權限</p></td><td><p>增刪改查標準活動，非標准活動，邀請關係</p></td></tr>
</tbody>
</table>

## 活動達標任務類型及說明

<table>
<colgroup>
<col width="100"/>
<col width="352"/>
<col width="260"/>
</colgroup>
<tbody>
<tr><td><p><b>任務类型</b></p></td><td><p><b>任務说明</b></p></td><td><p><b>计算公式</b></p></td></tr>
<tr><td><p>註冊</p></td><td><p>完成註冊動作</p></td><td></td></tr>
<tr><td><p>下載</p></td><td><p>完成註冊並且下載登錄 App 端內（會判斷是否新設備登錄，若不是新設備登錄 App 則會判定為不符合要求）</p></td><td></td></tr>
<tr><td><p>開戶</p></td><td><p>完成開戶動作且開戶審批通過，開戶成功</p></td><td></td></tr>
<tr><td><p>淨轉入</p></td><td rowspan="3"><p>活动期间内，账户内資金是否達到設定閾值</p></td><td><p>入金 + 轉入 - 出金 - 出倉的累計金額</p></td></tr>
<tr><td><p>淨入金</p></td><td><p>入金 - 出金 - 出倉的累計金額</p></td></tr>
<tr><td><p>淨轉倉</p></td><td><p>轉入+min（0，淨入金金額）的累計金額</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/轉倉金額達到設定閾值</p></td><td><p>首次入金總金額</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次轉倉總金額</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>完成設置的指定企業認證，或者只完成企業認證動作</p></td><td></td></tr>
</tbody>
</table>

## 標准活動管理

### 如何創建一個邀請活動？

適用場景：老客戶邀請新客戶活動，雙方獲得獎勵，提升分享邀請轉化率

#### 操作說明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：運營系統＞活動系統＞標準活動管理</p>
</div>

點擊邀請活動模塊下的新建按鈕

<img src="/assets/P394bdohJonAcRx8qL8cVynOngf.png" src-width="1280" src-height="282" align="center"/>

邀請活動新建頁面如下

<img src="/assets/XX7xbxRF6oAMWcx0ZKRcNpzNnsb.png" src-width="1280" src-height="1178" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>填寫的名稱將最終展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>活動時間</p></td><td><p>活動有效時間，即用戶必須在活動時間內完成對應任務才可獲得獎勵</p></td></tr>
<tr><td><p>目標用戶</p></td><td><p>關聯對應的用戶分群，設置目標用戶後則僅該用戶範圍內的用戶才可參與活動。</p></td></tr>
<tr><td><p>分群延時時間</p></td><td><p>創建活動時支持選擇用戶分群，限定用戶參與活動。對於分群，我們提供兩種延時時間：</p>
<ul>
<li>五分鐘：即每五分鐘重跑一次分群，一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：即每一天重跑一次分群，對於有入資、轉倉等用戶任務列表的活動，設置一天延時</li>
</ul></td></tr>
<tr><td><p>活動屬性</p></td><td><ul>
<li>常規活動：活動數據為累計相加的數據，計入最終給用戶的邀請獲得獎勵總數據中展示。同一時間段內一個用戶只可參加一個常規活動，獲得一個活動獎品</li>
<li>營銷活動：不限制用戶參與次數且不計入用戶基礎邀請活動所得獎勵總數中，比如：用戶助力活動等等短期邀請活動</li>
</ul></td></tr>
<tr><td><p>獎勵類型</p></td><td><p>選擇發獎規則類型</p>
<ul>
<li>固定獎勵：邀請一個新用戶完成任務即獲得獎勵</li>
<li>階梯獎勵：邀請多人完成任務解鎖不同階梯獎勵並進行疊加，依數量遞增</li>
</ul></td></tr>
<tr><td><p>獎勵規則</p></td><td><p>配置活動任務規則與對應的獎勵</p></td></tr>
<tr><td><p>獎品設置</p></td><td><p>配置在當前活動中單一用戶可獲得同一獎勵的個數上限</p></td></tr>
<tr><td><p>備註</p></td><td><p>非必填，用作運營人員個人備忘，不會展示給用戶</p></td></tr>
</tbody>
</table>

<b>獎勵規則</b>

點擊新增獎勵規則，不同獎勵類型下獎勵規則需填寫的字段不同：

- 固定獎勵

<img src="/assets/Nq3rbDizBoD2YexjzCCcaT1xnCc.png" src-width="2274" src-height="1742" align="center"/>

- 階梯獎勵

<img src="/assets/CEA9b127yoXfrnxY6JXc6ruzndN.png" src-width="2340" src-height="1752" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>填写完成后不可随意切换活动类型和奖励类型，不然会导致列表清空</p>
</div>

<b>獎品設置</b>

點擊新建獎品設置，該區域出現配置項

可在此處限定獎勵規則中添加的獎品，每位用戶最多可獲得多少次

<img src="/assets/NNttbSpVvom26qxaMDzcRKCinI0.png" src-width="1280" src-height="242" align="center"/>

提交後，邀請活動即可創建完畢

### 如何創建一個基礎活動？

適用場景：通過開戶入金活動，提升關鍵節點轉化率，實現獲客、入金、交易等增長目標

#### 操作說明

### 如何創建一個組隊活動？

適用場景：促進老客戶分享，達到裂變效果

#### 操作說明

## 非標准活動管理

### 如何創建一個非標准活動？

#### 操作說明

## 邀請關係管理

### 如何新增邀請關係？

#### 操作說明

# 
### 
活動管理列表字段說明

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>序號</p></td><td><p>填寫的名稱將最終展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>活動代碼</p></td><td><p>活動有效時間，即用戶必須在活動時間內完成對應任務才可獲得獎勵</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>關聯對應的用戶分群，設置目標用戶後則僅該用戶範圍內的用戶才可參與活動。</p></td></tr>
<tr><td><p>延時時間</p></td><td><p>活動發獎任務時效時間。由於活動任務需要用戶分群給出準確數據，因此會有些許延時。</p>
<ul>
<li>五分鐘：一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：對於有入資、轉倉等用戶任務列表的活動，設置一天延時</li>
</ul></td></tr>
<tr><td><p>活動類型</p></td><td><p>按照不同類型進行選擇</p>
<ul>
<li>常規活動：活動數據為累計相加的數據，計入最終給用戶的邀請獲得獎勵總數據中展示。同一時間段內一個用戶只可參加一個常規活動，獲得一個活動獎品</li>
<li>營銷活動：不限制用戶參與次數且不計入用戶基礎邀請活動所得獎勵總數中，比如：用戶助力活動等等短期邀請活動</li>
</ul></td></tr>
<tr><td><p>屬性</p></td><td><ul>
<li>新用戶：新用戶活動（僅基礎活動）</li>
<li>老用戶：老用戶活動（僅基礎活動）</li>
<li>固定獎勵：邀請一個新用戶完成任務即獲得獎勵（僅邀請活動）</li>
<li>階梯獎勵：邀請多人完成任務解鎖不同階梯獎勵並進行疊加，依數量遞增（僅邀請活動）</li>
</ul></td></tr>
<tr><td><p>活動狀態</p></td><td><p>當前活動狀態：</p>
<ul>
<li>草稿（已創建活動但還未點擊發佈之前）：編輯、删除、發佈</li>
<li>未開始（發佈後活動還未開始）：編輯、關閉</li>
<li>運行中（已過活動開始時間未到結束時間）：編輯、關閉</li>
<li>已結束（已過活動結束時間）：查看</li>
</ul></td></tr>
<tr><td><p>活動時間</p></td><td><p>顯示開始時間 - 結束時間；</p></td></tr>
<tr><td><p>創建時間</p></td><td><p>活動創建時間</p></td></tr>
</tbody>
</table>

### 
活動獎勵數據查詢（只有當活動運行中進行發獎時才有數據顯示）

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“獲獎數據”tab，進入以下頁面

<img src="/assets/SK9Kbr7z1o4fDgxj2ovcfA85npc.png" src-width="3278" src-height="1208" align="center"/>

數據統計

待提交：未提交進行發放的獎勵記錄

發放中：發放中的獎勵記錄

已發放：已發放成功的獎勵記錄

失敗：發放失敗的獎勵記錄數

取消發放：點擊取消的獎勵記錄數

全部：所有該活動獎勵記錄數

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr><td><p>用戶編號</p></td><td><p>具體發放給的用戶編號</p></td></tr>
<tr><td><p>邀請人/被邀請人編號</p></td><td><p>該獎勵用戶編號所對應的邀請或者被邀請人的用戶編號</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr><td><p>達標任務</p></td><td><p>用戶獲得該獎勵所完成的任務名稱</p></td></tr>
<tr><td><p>達標時間</p></td><td><p>用戶任務完成時間（基本獎勵發放時間）</p></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr><td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr><td><p>發放賬戶</p></td><td><p>發放到用戶的具體賬戶</p></td></tr>
<tr><td><p>操作</p></td><td><p>只有當前活動的創建人本人可操作<br/>提交：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

### 基礎活動

運營系統＞活動系統＞標準活動

點擊邀請活動模塊下的新建按鈕

<img src="/assets/H3SGbXj1zooDQmxm9MScTZmZnsd.png" src-width="3140" src-height="448" align="center"/>

打開如下頁面

<img src="/assets/P8D3bnpDroaZRixLuwncmASDnhc.png" src-width="2208" src-height="1826" align="center"/>

活動模版字段按如下規則進行配置：

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>填寫的名稱將最終展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>活動時間</p></td><td><p>活動有效時間，即用戶必須在活動時間內完成對應任務才可獲得獎勵</p></td></tr>
<tr><td><p>目標用戶</p></td><td><p>關聯對應的用戶分群，設置目標用戶後則僅該用戶範圍內的用戶才可參與活動。</p></td></tr>
<tr><td><p>分群延時時間</p></td><td><p>活動發獎任務時效時間。由於活動任務需要用戶分群給出準確數據，因此會有些許延時。</p>
<ul>
<li>五分鐘：一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：對於有入資、轉倉等用戶任務列表的活動，設置一天延時</li>
</ul></td></tr>
<tr><td><p>活動屬性</p></td><td><p>按照不同類型進行選擇</p>
<ul>
<li>不限制：不限制新老用戶均可參與</li>
<li>新用戶：歷史上從未獲得過新用戶獎勵的人才能參與活動獎品</li>
<li>老用戶：只有已獲得過新用戶獎勵的人才能參與獲得獎品</li>
</ul></td></tr>
<tr><td><p>獎勵規則</p></td><td><p>配置活動任務規則與對應的獎勵</p></td></tr>
</tbody>
</table>

新建獎勵規則

<img src="/assets/TQpObphsto4uAMxybagcuEJgnFc.png" src-width="1350" src-height="1722"/>

不同奖励生成时间则奖励的计算逻辑会有部分差别

<table>
<colgroup>
<col width="117"/>
<col width="265"/>
<col width="240"/>
</colgroup>
<tbody>
<tr><td><p>达标任务类型</p></td><td><p>实时生成</p></td><td><p>结束统一生成</p></td></tr>
<tr><td><p>注册</p></td><td><p>完成注册时生成奖励发放请求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>开户</p></td><td><p>完成开户任务时生成奖励发放请求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>净转入</p></td><td><p>每天跑脚本计算前一天数据是否达标，并生成奖励发放请求，当存在不同档位金转入时，达到一档则生成一笔奖励记录，多档时会依据不同档生成多档奖励，奖励叠加发放</p></td><td><p>活动结束 T+1 日后按照活动时间内用户发生的所有净转入动作总和，判断处于哪一档净转入奖励，生成一笔最高对应档位的奖励</p></td></tr>
<tr><td><p>净入金</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>净转仓</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>首次入金</p></td><td><p>判断活动期间内第一步整数当天累计是否达标，达标则生成奖励记录</p></td><td><p>判断活动期间内第一步整数当天累计是否达标，达标则活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
</tbody>
</table>

獎勵記錄查看

<img src="/assets/LoXtbTaLco81iQxo1lWcM2UPnSc.png" src-width="3258" src-height="1242" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>列表字段</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr><td><p>用戶編號</p></td><td><p>具體發放給的用戶編號</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr><td><p>達標任務</p></td><td><p>用戶獲得該獎勵所完成的任務名稱</p></td></tr>
<tr><td><p>達標時間</p></td><td><p>用戶任務完成時間（基本獎勵發放時間）</p></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr><td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr><td><p>發放賬戶</p></td><td><p>發放到用戶的具體賬戶</p></td></tr>
<tr><td><p>是否鎖倉</p></td><td><p>是否需要滿足鎖倉需求</p></td></tr>
<tr><td><p>鎖倉金額</p></td><td><p>獲得該獎勵後需要鎖倉的金額</p></td></tr>
<tr><td><p>鎖倉時間</p></td><td><p>獎勵到賬時間 + 鎖倉期限=鎖倉時間：獲得該獎勵後需要</p></td></tr>
<tr><td><p>操作</p></td><td><p>只有當前活動的創建人本人可操作<br/>提交：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

### 
# 
