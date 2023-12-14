---
title: 基礎活動
slug: activities-basis
sidebar_position: 1
---


# 基礎活動

## 適用場景

想要創建用戶本人完成任務後進行發獎的活動，可選擇這個活動模版進行創建。

## 前置條件

劵商租戶採購了 OPA 營銷系統旗艦版本，同時購買了 whale 標準化解決方案的券商才提供此項服務。

## 操作說明

菜單入口：運營系統＞活動系統＞標準活動

點擊邀請活動模塊下的新建按鈕

<img src="/assets/X9DAbOVaXoVUXTxtsYxccvxHnqf.png" src-width="3218" src-height="438" align="center"/>

打開如下頁面：

<img src="/assets/QewybY9SMoLtWbx192Fc04sonqe.png" src-width="2486" src-height="1626" align="center"/>

活動模版字段按如下規則進行配置：

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr>
<td><p>字段名稱</p></td><td><p>配置說明</p></td></tr>
<tr>
<td><p>活動名稱</p></td><td><p>填寫的名稱將最終展示在用戶的獎勵資訊中，需要謹慎填寫。可配置多語言，支持中文簡體、中文繁體、英語三種語言標題配置，配置好後將更具用戶手機系統語言默認展示對應語言。若無需多語言展示則三個語言標題都配置統一語言標題即可。</p></td></tr>
<tr>
<td><p>活動時間</p></td><td><p>活動有效時間，即用戶必須在活動時間內完成對應任務才可獲得獎勵</p></td></tr>
<tr>
<td><p>目標用戶</p></td><td><p>關聯對應的用戶分群，設置目標用戶後則僅該用戶範圍內的用戶才可參與活動。</p></td></tr>
<tr>
<td><p>分群延時時間</p></td><td><p>活動發獎任務時效時間。由於活動任務需要用戶分群給出準確數據，因此會有些許延時。</p>
<ul>
<li>五分鐘：一般對於只是開戶註冊活動任務的活動設置 5 分鐘延時即可</li>
<li>一天：對於有入資、轉倉等用戶任務列表的活動，設置一天延時</li>
</ul></td></tr>
<tr>
<td><p>活動屬性</p></td><td><p>按照不同類型進行選擇</p>
<ul>
<li>不限制：不限制新老用戶均可參與</li>
<li>新用戶：歷史上從未獲得過新用戶獎勵的人才能參與活動獎品</li>
<li>老用戶：只有已獲得過新用戶獎勵的人才能參與獲得獎品</li>
</ul></td></tr>
<tr>
<td><p>獎勵規則</p></td><td><p>配置活動任務規則與對應的獎勵</p></td></tr>
</tbody>
</table>

新建獎勵規則：

<img src="/assets/QCqWbC8iloJQXExLuN1c2xGunFe.png" src-width="2382" src-height="1632" align="center"/>

不同獎勵生成时间则獎勵的計算逻辑会有部分差别

<table>
<colgroup>
<col width="117"/>
<col width="265"/>
<col width="401"/>
</colgroup>
<tbody>
<tr>
<td><p>達標任務類型</p></td><td><p>實時生成</p></td><td><p>結束統一生成</p></td></tr>
<tr>
<td><p>註冊</p></td><td><p>完成註冊時生成獎勵發放請求</p></td><td><p>活動結束 T+1 日後生成獎勵發放請求</p></td></tr>
<tr>
<td><p>開戶</p></td><td><p>完成開戶任務時生成獎勵發放請求</p></td><td><p>活動結束 T+1 日後生成獎勵發放請求</p></td></tr>
<tr>
<td><p>淨轉入</p></td><td><p>每天跑腳本計算前一天數據是否達標，並生成獎勵發放請求，當存在不同檔位金轉入時，達到一檔則生成一筆獎勵記錄，多檔時會依據不同檔生成多檔獎勵，獎勵疊加發放</p></td><td><p>活動結束 T+1 日後按照活動時間內用戶發生的所有淨轉入動作總和，判斷處於哪一檔淨轉入獎勵，生成一筆最高對應檔位的獎勵</p></td></tr>
<tr>
<td><p>淨入金</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr>
<td><p>淨轉倉</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
<tr>
<td><p>首次入金</p></td><td><p>判斷活動期間內第一步整數當天累計是否達標，達標則生成獎勵記錄</p></td><td><p>判斷活動期間內第一步整數當天累計是否達標，達標則活動結束 T+1 日後生成獎勵發放請求</p></td></tr>
<tr>
<td><p>首次轉倉</p></td><td><p>同上</p></td><td><p>同上</p></td></tr>
</tbody>
</table>

獎勵記錄查看

<img src="/assets/Y9uTbmh2coLljgxj4KacMi6vnRC.png" src-width="3258" src-height="1242" align="center"/>

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr>
<td><p>列表字段</p></td><td><p>字段說明</p></td></tr>
<tr>
<td><p>編號</p></td><td><p>獎勵記錄編號</p></td></tr>
<tr>
<td><p>用戶編號</p></td><td><p>具體發放給的用戶編號</p></td></tr>
<tr>
<td><p>企業認證</p></td><td><p>用戶所對應認證了企業的企業名稱（若有）</p></td></tr>
<tr>
<td><p>達標任務</p></td><td><p>用戶獲得該獎勵所完成的任務名稱</p></td></tr>
<tr>
<td><p>達標時間</p></td><td><p>用戶任務完成時間（基本獎勵發放時間）</p></td></tr>
<tr>
<td><p>獎品名稱</p></td><td><p>所獲得的獎勵的名稱</p></td></tr>
<tr>
<td><p>發放形式</p></td><td><p>自動、手動</p></td></tr>
<tr>
<td><p>發放狀態</p></td><td><p>待提交、發放中、已發放、失敗、取消發放</p></td></tr>
<tr>
<td><p>發放時間</p></td><td><p>獎勵發放到用戶賬上的時間</p></td></tr>
<tr>
<td><p>發放賬戶</p></td><td><p>發放到用戶的具體賬戶</p></td></tr>
<tr>
<td><p>是否鎖倉</p></td><td><p>是否需要滿足鎖倉需求</p></td></tr>
<tr>
<td><p>鎖倉金額</p></td><td><p>獲得該獎勵後需要鎖倉的金額</p></td></tr>
<tr>
<td><p>鎖倉時間</p></td><td><p>獎勵到賬時間 + 鎖倉期限=鎖倉時間：獲得該獎勵後需要</p></td></tr>
<tr>
<td><p>操作</p></td><td><p>只有當前活動的創建人本人可操作<br/>提交：提交獎勵進行發獎（當獎勵為手動發放時才有）<br/>取消：取消獎勵發放，獎勵記錄將不會提交發獎且獎勵狀態變更為取消發獎</p></td></tr>
</tbody>
</table>

