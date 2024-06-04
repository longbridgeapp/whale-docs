---
title: 系統介紹
slug: RetvwXjhyi4FLLkq9Qmc2n4wn9e
sidebar_position: 1
---


# 系統介紹

活動系統是 Whale OPA 運營系統所提供營銷活動管理核心，方便劵商租戶來管理各種市場營銷活動，提供各種營銷活動的配置管理，系統目前提供下列活動類型組：

透過方便的營銷活動模板，來管理各種營銷活動。

<img src="/assets/X73CbSkaIo7tLSxomLrcalD3ngc.png" src-width="1276" src-height="920" align="center"/>

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
<tr><td><p>非標準活動管理</p></td><td><p>主要用於進行非標準活動，如線下活動發獎，等類型的線上管理與歸檔</p></td></tr>
<tr><td><p>邀請關係管理</p></td><td><p>主要對於活動相關的邀請綁定關係進行管理。可對用戶的邀請關係信息查詢、更改、綁定</p></td></tr>
</tbody>
</table>

### 活動系統架構

<img src="/assets/YMfdb8VTfo2ahgxnDFKcaV4FnUf.png" src-width="806" src-height="492" align="center"/>

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
<tr><td><p>淨轉入</p></td><td rowspan="3"><p>活动期间内，账户内資金是否達到設定閾值</p></td><td><p>入金 + 轉入 - 出金 - 出倉的累計金額</p></td></tr>
<tr><td><p>淨入金</p></td><td><p>入金 - 出金 - 出倉的累計金額</p></td></tr>
<tr><td><p>淨轉倉</p></td><td><p>转入+min(0，净入金金额) 的累计金额</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/轉倉金額達到設定閾值</p></td><td><p>首次入金總金額</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次轉倉總金額</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>完成設置的指定企業認證，或者只完成企業認證動作</p></td><td></td></tr>
</tbody>
</table>

### 活動配置流程

適用：運營人員

## 
## 標準活動管理

執行菜單：運營系統&gt; 活動系統&gt;標準活動管理

- 本作業可以維護管理標準活動

上層：可選擇活動模版進行創建

下層：可對已創建好的活動紀錄進行查詢和管理

<img src="/assets/Uq5SbZ3mTooSBIxJeYDciG66nYc.png" src-width="3766" src-height="1562" align="center"/>

活動管理列表字段說明

<table>
<colgroup>
<col width="111"/>
<col width="771"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr><td><p>序號</p></td><td><p>創建活動後程序自動賦的序號</p></td></tr>
<tr><td><p>活動代碼</p></td><td><p>創建活動後程序自動給該活動賦的代碼，該代碼與活動為一對一的關係，可用於後續的查詢，補發獎勵等各種操作</p></td></tr>
<tr><td><p>活動名稱</p></td><td><p>填寫的名稱將最終展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr><td><p>類型</p></td><td><p>在創建活動時選擇的活動類型，即模版中的類型</p></td></tr>
<tr><td rowspan="2"><p>屬性</p></td><td rowspan="2"><p>和活動類型聯動，不同活動類型會有以下屬性：<br/>邀請活動</p>
<ul>
<li>常規活動：活動數據為累計相加的數據，計入最終給用戶的邀請獲得獎勵總數據中展示。同一時間段內一個用戶只可參加一個常規活動，獲得一個活動獎品</li>
<li>營銷活動：不限制用戶參與次數且不計入用戶基礎邀請活動所得獎勵總數中，比如：用戶助力活動等等短期邀請活動<br/>基礎活動</li>
<li>新用戶：新用戶活動（僅基礎活動）</li>
<li>老用戶：老用戶活動（僅基礎活動）</li>
</ul></td></tr>
<tr></tr>
<tr><td><p>狀態</p></td><td><p>當前活動狀態：</p>
<ul>
<li>草稿（已創建活動但還未點擊發佈之前）：查看詳情、編輯、關閉、發佈</li>
<li>運行中（活動已發佈且未到結束時間）：查看詳情、編輯、關閉</li>
<li>已結束（已過活動結束時間）：查看詳情</li>
</ul></td></tr>
<tr><td><p>分群延時時間</p></td><td><p>創建活動時支持選擇用戶分群，限定用戶參與活動。對於分群，我們提供兩種延時時間：</p>
<ul>
<li>五分鐘：即每五分鐘重跑一次分群，一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：即每一天重跑一次分群，對於有入資、轉倉等用戶任務列表的活動，設置一天延時<br/>在活動管理列表中，此處顯示每個活動所選擇的分群延時時間</li>
</ul></td></tr>
<tr><td><p>活動時間</p></td><td><p>顯示開始時間 - 結束時間；</p></td></tr>
<tr><td><p>創建時間</p></td><td><p>活動創建時間</p></td></tr>
<tr><td><p>操作</p></td><td><p>在上面狀態欄，列出了不同狀態的活動可以執行的操作</p></td></tr>
</tbody>
</table>

### 邀請活動

#### 邀請活動業務實現邏輯說明

任意活動頁面只要配置了分享功能，則該頁面通過用戶分享傳播後完成新用戶註冊，均會進行邀請關係綁定。

邀請活動通過綁定關係進行發獎。

#### 邀請活動配置

運營系統＞活動系統＞標準活動

若要新增一個邀請活動，可以點擊邀請活動模塊下的新建按鈕

<img src="/assets/JmakbYX41oBZJHxwwhScg2DVnhd.png" src-width="2334" src-height="516" align="center"/>

新建邀請如下頁面

<img src="/assets/Dg0vbXSaso8i8cxGNrdcmK63nEb.png" src-width="2108" src-height="1941" align="center"/>

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
<tr><td><p>分群延時時間</p></td><td><p>創建活動時支持選擇用戶分群，限定用戶參與活動。對於分群，我們提供兩種延時時間：</p>
<ul>
<li>五分鐘：即每五分鐘重跑一次分群，一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：即每一天重跑一次分群，對於有入資、轉倉等用戶任務列表的活動，設置一天延時<br/>在活動管理列表中，此處顯示每個活動所選擇的分群延時時間</li>
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
</tbody>
</table>

點擊新增獎勵規則，不同獎勵類型和活動屬性填寫字段不同

固定獎勵

<img src="/assets/T433bvYTgonf6yxtfWocGZkCnFc.png" src-width="2316" src-height="1498"/>

階梯獎勵

<img src="/assets/BBYEbJf3mowD2zxPfSzcCLfWnXc.png" src-width="1370" src-height="1502"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>填写完成后不可随意切换活动类型和奖励类型，不然会导致列表清空</p>
</div>

點擊新建獎品規則，該區域出現配置項：

可在此處限定獎勵規則中添加的獎品，每位用戶最多可獲得多少次

<img src="/assets/TzYsbeR8noYcW8xL3HwcJzuHnSc.png" src-width="2040" src-height="386" align="center"/>

活動獎勵數據查詢（只有當活動運行中進行發獎時才有數據顯示）

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“獲獎名單”tab，進入以下頁面

<img src="/assets/NUnrbOdUfo8ATMxTOEic4XWfnHf.png" src-width="3280" src-height="852" align="center"/>

數據統計

待提交：未提交發放請求的獎勵記錄

發放中：發放中的獎勵記錄

已發放：已發放成功的獎勵記錄

失敗：發放失敗的獎勵記錄數

取消發放：點擊取消發放的獎勵記錄數

鎖倉中：若活動達標任務設置了鎖倉，則此處為正在鎖倉中的獎勵記錄數

全部：所有該活動獎勵記錄數

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr><td><p>用戶編號</p></td><td><p>獎勵具體發放給的用戶 id</p></td></tr>
<tr><td><p>邀請人/被邀請人編號</p></td><td><p>該獎勵用戶編號所對應的邀請或者被邀請人的用戶編號</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr><td><p>達標任務</p></td><td><p>用戶獲得該獎勵所完成的任務名稱</p></td></tr>
<tr><td><p>達標時間</p></td><td><p>用戶任務完成時間（基本獎勵發放時間）</p></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr><td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr><td><p>發放賬戶</p></td><td><p>發放到用戶的具體賬戶（無多賬戶情況可忽略）</p></td></tr>
<tr><td><p>操作</p></td><td><p>只有當前活動的創建人本人可操作<br/>提交請求：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消發放：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

### 
### 基礎活動

#### 2.2.1 基礎活動業務實現邏輯說明

<img src="/assets/S2dCbbeR9oPAuYxOnM0c1miLnne.jpeg" src-width="1394" src-height="494" align="center"/>

#### 2.2.2 基礎活動配置

運營系統＞活動系統＞標準活動

點擊邀請活動模塊下的新建按鈕

<img src="/assets/Qlnwb3EjroFk1IxAIO7czVbcnPe.png" src-width="3140" src-height="448" align="center"/>

打開如下頁面

<img src="/assets/Viekbh7vtonooRxtudHcpSoSnbg.png" src-width="2058" src-height="1480" align="center"/>

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
<tr><td><p>費用類型</p></td><td></td></tr>
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

（截圖）

<img src="/assets/JO0kbHDPAohKaExmgM5cgaLKn4f.png" src-width="1350" src-height="1722"/>

不同獎勵生成時間規則下，獎勵的計算邏輯會有部分差別

<table>
<colgroup>
<col width="117"/>
<col width="265"/>
<col width="240"/>
</colgroup>
<tbody>
<tr><td><p>達標任務類型</p></td><td><p>實時生成</p></td><td><p>結束統一生成</p></td></tr>
<tr><td><p>註冊</p></td><td><p>完成註冊時生成獎勵發放請求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>開戶</p></td><td><p>完成開戶任務時生成獎勵發放請求</p></td><td><p>活动结束 T+1 日后生成奖励发放请求</p></td></tr>
<tr><td><p>淨轉入</p></td><td><p>每天跑腳本計算前一天數據是否達標，並生成獎勵發放請求，當存在不同檔位金額轉入時，達到一檔則生成一筆獎勵記錄，多檔時會依據不同檔生成多檔獎勵，獎勵疊加發放</p></td><td><p>活動結束 T+1 日後按照活動時間內用戶發生的所有淨轉入動作總和，判斷處於哪一檔淨轉入獎勵，生成一筆最高對應檔位的獎勵</p></td></tr>
<tr><td><p>淨入金</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>淨轉倉</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr><td><p>首次入金</p></td><td><p>判斷活動期間內第一次入金當天累計是否達標，達標則生成獎勵發放請求</p></td><td><p>判斷活動期間內第一次入金當天累計是否達標，達標則活動結束 T+1 日後生成獎勵發放請求</p></td></tr>
<tr><td><p>首次轉倉</p></td><td><p>判斷活動期間內第一次轉倉當天累計是否達標，達標則生成獎勵發放請求</p></td><td><p>判斷活動期間內第一次轉倉當天累計是否達標，達標則活動結束 T+1 日後生成獎勵發放請求</p></td></tr>
</tbody>
</table>

獎勵記錄查看

活動獎勵數據查詢（只有當活動運行中進行發獎時才有數據顯示）

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“獲獎名單”tab，進入以下頁面

<img src="/assets/B2UWbHgGNoqQ0kxNEpQc3k9GnIQ.png" src-width="3258" src-height="1242" align="center"/>

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
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
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

<img src="/assets/AguQb4BkIoIIRCx93fvcSiZCnKd.jpeg" src-width="2274" src-height="434" align="center"/>

#### 組隊活動配置

運營系統＞活動系統＞標準活動

點擊組隊活動模塊下的新建按鈕

<img src="/assets/JAafbuL3dowXLzxcxqbcv7JMn2b.png" src-width="3258" src-height="416" align="center"/>

打開如下頁面

截图

<img src="/assets/AEkXbkYF6o7aDwxv5iFcq1XDn4c.png" src-width="2640" src-height="1758" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>目前「活動屬性」中僅“助力得獎”活動形式可用，“基礎組隊得獎”和“組隊瓜分”兩種活動形式暫未上線</p>
</div>

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
<tr><td><p>活動屬性</p></td><td><p>目前可選擇“助力得獎”</p></td></tr>
<tr><td><p>助力人數</p></td><td><p>可填寫 2-10 內整數，助力人數達到此值後，發起人可得規定獎勵</p></td></tr>
<tr><td><p>發起次數</p></td><td><p>若不限製，則在活動時間內，當發起人獲得規定人數助力並獲得相應獎勵後，可繼續發起下一次助力活動；<br/>若此處限制次數，則在活動時間內，發起人僅可最多發起該限定次數</p></td></tr>
<tr><td><p>助力次數</p></td><td><p>若不限製，每個助力人可進行不限次數的助力；<br/>若此處限制次數，怎助力人僅可最多進行該限定次數助力</p></td></tr>
<tr><td><p>助力獎勵</p></td><td></td></tr>
<tr><td><p>發起人可得</p></td><td><p>當助力人數得到設定值時，發起人可獲得的獎勵</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
</tbody>
</table>

獎勵記錄查看

活動獎勵數據查詢（只有當活動運行中進行發獎時才有數據顯示）

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“獲獎名單”tab，進入以下頁面

（截圖）

<img src="/assets/XSuwb8PCro1oSax7e7bc6dZgnZe.png" src-width="3452" src-height="1624" align="center"/>

數據統計

待提交：未提交進行發放的獎勵記錄

發放中：發放中的獎勵記錄

已發放：已發放成功的獎勵記錄

失敗：發放失敗的獎勵記錄數

取消發放：點擊取消的獎勵記錄數

鎖倉中：鎖倉中的獎勵記錄數

全部：所有該活動獎勵記錄數

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr><td><p>用戶編號</p></td><td><p>具體發放給的用戶編號</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr><td><p>達標任務</p></td><td></td></tr>
<tr><td><p>達標時間</p></td><td></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr><td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr><td><p>發放賬戶</p></td><td></td></tr>
<tr><td><p>是否鎖倉</p></td><td><p>是否需要滿足鎖倉需求</p></td></tr>
<tr><td><p>是否鎖倉達標後發放</p></td><td></td></tr>
<tr><td><p>鎖倉金額</p></td><td><p>獲得該獎勵後需要鎖倉的金額</p></td></tr>
<tr><td><p>貨幣</p></td><td><p>獲得該獎勵後需要鎖倉的金額對應幣種</p></td></tr>
<tr><td><p>鎖倉到期時間</p></td><td><p>獎勵到賬時間 + 鎖倉期限=鎖倉時間：獲得該獎勵後需要</p></td></tr>
<tr><td><p>操作</p></td><td><p>只有當前活動的創建人本人可操作<br/>提交請求：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消發放：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

組隊信息查看

活動組隊信息查詢（只有當活動運行中進行發獎時才有數據顯示）

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“組隊信息”tab，進入以下頁面

（截圖）

<img src="/assets/Hqn0bWPBzo0MZXx6lwgc9KY7nFh.png" src-width="3448" src-height="1624" align="center"/>

數據統計

進行中：發起過助力活動且

組隊成功：發放中的獎勵記錄

組隊失敗：已發放成功的獎勵記錄

失敗：發放失敗的獎勵記錄數

取消發放：點擊取消的獎勵記錄數

鎖倉中：鎖倉中的獎勵記錄數

全部：所有該活動獎勵記錄數

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名稱</p></td><td><p>字段說明</p></td></tr>
<tr><td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr><td><p>用戶編號</p></td><td><p>具體發放給的用戶編號</p></td></tr>
<tr><td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr><td><p>達標任務</p></td><td></td></tr>
<tr><td><p>達標時間</p></td><td></td></tr>
<tr><td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr><td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr><td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr><td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr><td><p>發放賬戶</p></td><td></td></tr>
<tr><td><p>是否鎖倉</p></td><td><p>是否需要滿足鎖倉需求</p></td></tr>
<tr><td><p>是否鎖倉達標後發放</p></td><td></td></tr>
<tr><td><p>鎖倉金額</p></td><td><p>獲得該獎勵後需要鎖倉的金額</p></td></tr>
<tr><td><p>貨幣</p></td><td><p>獲得該獎勵後需要鎖倉的金額對應幣種</p></td></tr>
<tr><td><p>鎖倉到期時間</p></td><td><p>獎勵到賬時間 + 鎖倉期限=鎖倉時間：獲得該獎勵後需要</p></td></tr>
<tr><td><p>操作</p></td><td><p>只有當前活動的創建人本人可操作<br/>提交請求：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消發放：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

## 
## 非標準活動管理

使用人員：運營

使用場景：線下活動發獎，例如：大客戶回饋之類的無具體活動規則，只是為了單純給用戶發放獎勵的活動

主要功能：可在此創建活動並獲得活動程式碼，之後在權益係統 - 獎勵中心關聯活動程式碼，發放獎勵。

點擊頁面上方新建按鈕，打開如下頁面

（截圖）

<img src="/assets/MGdcbtRbyoqWNMxI12Lc2ywCnfe.png" src-width="3354" src-height="1454" align="center"/>

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

## 
## 邀請關係管理

如圖：一個用戶在一個 App 下會生成當前 App 唯一邀請碼，用戶將自己邀請碼分享給好友，好友即可填寫綁定。綁定後會更新在邀請關係清單中

執行菜單：運營系統&gt; 活動系統&gt;邀請關係管理

<img src="/assets/R44rbAhcOoVd41xLE0Bcn3ZRnYd.png" src-width="2338" src-height="1328" align="center"/>

主要功能：

査詢：輸入客戶編號可以査詢對應客戶的邀請綁定關係記錄

新增：可以直接在後臺操作給用戶進行邀請關係綁定

詳情：可查看綁定關係的具體用戶資訊以及綁定管道、綁定時間、以及可以變更綁定關係。

（對於已完成的動作則不可綁定對應節點的邀請人了，未完成動作節點邀請人可以綁定和變更）

# 運營活動常見問題查詢

## 用戶咨詢未收到獎勵，運營如何查詢？

執行菜單：運營系統&gt; 活動系統&gt;標準活動管理

先查活動配置是否正確，點擊對應活動後方詳情進入查看活動規則配置，確認配置的對應規則和獎勵是否正確

<img src="/assets/U7GBbBuBHoaEJRxMuydcDW8pn1f.png" src-width="3796" src-height="1848" align="center"/>

<img src="/assets/EGO6bDqCfo4tquxulWjcKxkxn0J.png" src-width="3288" src-height="1574"/>

若正確，則正確進入獲獎名單查詢是否生成以及獎勵記錄狀態

<img src="/assets/LoiAbpfnCoNufQxTQMTc8z58nMe.png" src-width="3316" src-height="1400" align="center"/>

若 發放中則說明系統還在發放中，若待提交則需要運營同學點擊提交進行發放

## 如何查詢用戶是否綁定成功邀請關係？

執行菜單：運營系統&gt; 活動系統&gt;邀請關係管理

<img src="/assets/KMBWbh2Y4oKUm6xcDx4c3XxNnrd.png" src-width="3778" src-height="1698" align="center"/>

如圖，搜索後列表會展示所有該用戶綁定的邀請關係，點擊後方詳情可查看具體綁定的用戶信息

<img src="/assets/V1hDb0WQBoHYGvxpkZFcbVrYnbd.png" src-width="3240" src-height="1792" align="center"/>

<img src="/assets/GBnYbNhRso2atSx3WFqc93BLnHg.png" src-width="3244" src-height="1866" align="center"/>

