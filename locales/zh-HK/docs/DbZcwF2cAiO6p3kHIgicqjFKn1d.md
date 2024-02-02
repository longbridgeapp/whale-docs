---
title: 邀請活動
slug: DbZcwF2cAiO6p3kHIgicqjFKn1d
sidebar_position: 0
---


# 邀請活動

## 適用場景

想要創建邀請活動，通過好友完成任務，邀請人可得獎勵的方式幫助券商完成裂變

## 前置條件

劵商租戶採購了 OPA 營銷系統旗艦版本，同時購買了 whale 標準化解決方案的券商才提供此項服務。

### 邀請活動

#### 邀請活動業務實現邏輯說明

任意活動頁面只要配置了分享功能，則該頁面通過用戶分享傳播後完成新用戶註冊，均會進行邀請關係綁定。

邀請活動通過綁定關係進行發獎。

<img src="/assets/VwwXbFQWRomkzwx3Ri3cQ1KCnsd.png" src-width="1474" src-height="494" align="center"/>

#### 邀請活動配置

菜單入口：運營系統＞活動系統＞標準活動

若要新增一個邀請活動，可以點擊邀請活動模塊下的新建按鈕

<img src="/assets/Z3qtbfmCsoxSYdxmbePcBu8snZf.png" src-width="3222" src-height="432"/>

新建邀請如下頁面：

<img src="/assets/ZfCYb3ZKioEJcSx8XdzcnYCsnsc.png" src-width="2606" src-height="1612" align="center"/>

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

<img src="/assets/NGAebX7wQoFWy9xWDWZcBeQkn9b.png" src-width="2444" src-height="1614" align="center"/>

階梯獎勵：

<img src="/assets/CaXobHvMkoaib0xlJljcB0LLnAc.png" src-width="2450" src-height="1616" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<p>💡 填寫完成後不可隨意切換活動類型和獎勵類型，不然會導致列表清空</p>
</div>

活動獎勵數據查詢（只有當活動運行中進行發獎時才有數據顯示）

點擊對應活動後方詳情按鈕，進入活動詳情頁面，點擊“獲獎名單”tab，進入以下頁面

<img src="/assets/FTqKbWI4SoNQPJxO6OGcNRDznff.png" src-width="3248" src-height="1156" align="center"/>

數據統計狀態：

- 待提交：未提交進行發放的獎勵記錄
- 發放中：發放中的獎勵記錄
- 已發放：已發放成功的獎勵記錄
- 失敗：發放失敗的獎勵記錄數
- 取消發放：點擊取消的獎勵記錄數
- 全部：所有該活動獎勵記錄數

