---
title: 快速上手
slug: Tn3iwKPmLi3Xgnk2IsScxDG8nCb
sidebar_position: 0
---


# 快速上手

本使用手冊適用於 Longbridge Whale-活動系統，運營系統管理員和使用成員使用。閱讀此手冊，你將瞭解 Whale-活動系統作業功能操作

# 一。活動系統

## 功能介紹

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>功能目錄</p></td><td><p>目錄說明</p></td></tr>
<tr><td><p>標準活動管理</p></td><td><p>具有標準活動模版，可選中對應活動模版創建活動，並進行規則配置與活動數據的管理</p>
<ul>
<li>邀請活動模版：通過用戶邀請好友完成任務獲得獎品（常用的裂變活動模式）</li>
<li>基礎活動模版：用戶本人完成對應活動獲得獎品（每月新用戶活動更新、老用戶回饋活動。）</li>
<li>組隊活動模版：多人一起參與活動，達到指定人數要求且隊員都完成對應任務即可獲得獎品。</li>
</ul></td></tr>
<tr><td><p>非標準活動管理</p></td><td><p>主要用於進行非標準活動參數的配置與管理</p></td></tr>
<tr><td><p>邀請關係管理</p></td><td><p>主要對於活動相關的邀請綁定關係進行管理。可對用戶的邀請關係信息查詢、更改、綁定</p></td></tr>
</tbody>
</table>

### 活動系統架構

<img src="/assets/YpXFbRGU5omddKxhyN2cJFXmnGd.png" src-width="806" src-height="492" align="center"/>

### 活動達標任務類型及說明

<table>
<colgroup>
<col width="100"/>
<col width="352"/>
<col width="260"/>
</colgroup>
<tbody>
<tr><td><p><strong>任務类型</strong></p></td><td><p><strong>任務说明</strong></p></td><td><p><strong>计算公式</strong></p></td></tr>
<tr><td><p>註冊</p></td><td><p>完成註冊動作</p></td><td></td></tr>
<tr><td><p>下載</p></td><td><p>完成註冊並且下載登錄 App 端內（會判斷是否新設備登錄，若不是新設備登錄 App 則會判定為不符合要求）</p></td><td></td></tr>
<tr><td><p>開戶</p></td><td><p>完成開戶動作且開戶審批通過，開戶成功</p></td><td></td></tr>
<tr><td><p>淨轉入</p></td><td rowspan="3"><p>活动期间内，账户内資金是否達到設定閾值</p></td><td><p>入金 + 转入 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>淨入金</p></td><td><p>入金 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>淨轉倉</p></td><td><p>转入+min(0，净入金金额) 的累计金额</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/轉倉金額達到設定閾值</p></td><td><p>首次入金总金额</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次转仓总金额</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>完成設置的指定企業認證，或者只完成企業認證動作</p></td><td></td></tr>
</tbody>
</table>

### 活動配置流程

適用：運營人員，活動系統涉及到下列幾個主體：

## 標準活動管理

執行菜單：運營系統&gt; 活動系統&gt;標準活動管理

- 本作業可以維護管理標準活動

上層：可選擇活動模版進行創建

下層：可對已創建好的活動紀錄進行查詢

<img src="/assets/OuoyboGBfoNWCHxAuUNcVWSan9b.png" src-width="3766" src-height="1562" align="center"/>

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

### 邀請活動

#### 邀請活動業務實現邏輯說明

任意活動頁面只要配置了分享功能，則該頁面通過用戶分享傳播後完成新用戶註冊，均會進行邀請關係綁定。

邀請活動通過綁定關係進行發獎。

#### 邀請活動配置

運營系統＞活動系統＞標準活動

若要新增一個邀請活動，可以點擊邀請活動模塊下的新建按鈕

<img src="/assets/SU8jbakBMoLydJxFmvBcjLFjnvb.png" src-width="2334" src-height="516" align="center"/>

新建邀請如下頁面

<img src="/assets/IdEkb0WHsof06PxeqqjcXcy6njG.png" src-width="2376" src-height="2531" align="center"/>

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
</tbody>
</table>

點擊新增獎勵規則，不同獎勵類型和活動屬性填寫字段不同

固定獎勵

<img src="/assets/WY1Cb1n9lo0POZxGsr9cpWGlnwb.png" src-width="2316" src-height="1498"/>

階梯獎勵

<img src="/assets/H5jkbmoUqopoYnxLtuDcdla2nIb.png" src-width="1370" src-height="1502"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>填写完成后不可随意切换活动类型和奖励类型，不然会导致列表清空</p>
</div>

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

### 組隊活動

#### 組隊活動業務流程

#### 組隊活動配置

運營系統＞活動系統＞標準活動

點擊組隊活動模塊下的新建按鈕

<img src="/assets/LykMbKR4so2XHNx9qy6c9b2knGh.png" src-width="3258" src-height="416" align="center"/>

打開如下頁面

活動模版字段按如下規則進行配置：

<img src="/assets/M2wnb1ZFLoMnsWxtNKXcPgplnud.png" src-width="1954" src-height="1814" align="center"/>

活動數據查詢同上

## 非標準活動管理

使用人員：運營

使用場景：線下活動發獎，例如：大客戶回饋之類的無具體活動規則，只是為了單純給用戶發放獎勵的活動

主要功能：創建/管理活動程式碼

點擊頁面上方新建按鈕，打開如下頁面

## 邀請關係管理

如圖：一個用戶在一個 App 下會生成當前 App 唯一邀請碼，用戶將自己邀請碼分享給好友，好友即可填寫綁定。綁定後會更新在邀請關係清單中

執行菜單：運營系統&gt; 活動系統&gt;邀請關係管理

<img src="/assets/FLT9b9CzposKdIxFctQcAiMpnNb.png" src-width="2338" src-height="1328" align="center"/>

主要功能：

査詢：輸入客戶編號可以査詢對應客戶的邀請綁定關係記錄

新增：可以直接在後臺操作給用戶進行邀請關係綁定

詳情：可查看綁定關係的具體用戶資訊以及綁定管道、綁定時間、以及可以變更綁定關係。

（對於已完成的動作則不可綁定對應節點的邀請人了，未完成動作節點邀請人可以綁定和變更）

# 二。運營活動常見問題查詢

## 用戶咨詢未收到獎勵，運營如何查詢？

執行菜單：運營系統&gt; 活動系統&gt;標準活動管理

先查活動配置是否正確，點擊對應活動後方詳情進入查看活動規則配置，確認配置的對應規則和獎勵是否正確

<img src="/assets/OwIVbvjGnoBqs2x9snmcpEgrnqg.png" src-width="3796" src-height="1848" align="center"/>

<img src="/assets/UPWdbUzwko3dYfxSA76cO7yKn5d.png" src-width="3288" src-height="1574"/>

若正確，則正確進入獲獎名單查詢是否生成以及獎勵記錄狀態

<img src="/assets/WJVRb5a35ogwZ1xoxLbcNUWenWh.png" src-width="3316" src-height="1400" align="center"/>

若 發放中則說明系統還在發放中，若待提交則需要運營同學點擊提交進行發放

## 如何查詢用戶是否綁定成功邀請關係？

執行菜單：運營系統&gt; 活動系統&gt;邀請關係管理

<img src="/assets/Rv6XbEPheoyp8Ix0y4YcrP9UnQd.png" src-width="3778" src-height="1698" align="center"/>

如圖，搜索後列表會展示所有該用戶綁定的邀請關係，點擊後方詳情可查看具體綁定的用戶信息

<img src="/assets/Fm4vbfZRnoH32hx2UkmcVyjlnDe.png" src-width="3240" src-height="1792" align="center"/>

<img src="/assets/IpzRb0NplocQaNxHOkCcomeSnXJ.png" src-width="3244" src-height="1866" align="center"/>

