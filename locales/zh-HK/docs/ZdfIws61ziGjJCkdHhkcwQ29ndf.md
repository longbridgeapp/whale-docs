---
title: 2. 出入金問題
slug: ZdfIws61ziGjJCkdHhkcwQ29ndf
sidebar_position: 1
---


# 2. 出入金問題

## 2A 問：出金／入金申請在後台已點擊提交，想拒絕申請如何處理？

<b>答：</b>已作提交申請的，需要在工單中作拒絕（見 2A 圖一）。加款狀態更新為已駁回（見 2A 圖二），如有需要可再操作一筆出／入金申請。

<img src="/assets/U6mgbVQJMoPq4hxt7PccOUQFnie.png" src-width="2150" src-height="1368" align="center"/>

<em>2A 圖一</em>

<img src="/assets/DaUNb7Wl0ogp4DxL0DFcLegPnhf.png" src-width="2606" src-height="404" align="center"/>

<em>2A 圖二</em>

## 2B 問：完成日終後，需要補回入金／出金流水如何處理？

<b>答：</b>完成日終需要先作清算撤銷（見 2B 圖一、二），不能跳過賬務日，需一天一天撤回。 
補回流水後，在流水管理編輯日期，改回相應的流水日期（見 2B 圖三），之後繼續完成日終操作。

<img src="/assets/X4rNbbODZoe8J2xZnyYcBQQhnEb.png" src-width="2858" src-height="1418" align="center"/>

<em>2B 圖一</em>

<img src="/assets/NmRob8vlcoKJAYxPXtZcEXBXniy.png" src-width="2390" src-height="1420" align="center"/>

<em>2B 圖二</em>

<em>如不用重新計算利息／交收數據，資產類回撤可選不操作</em>

<img src="/assets/DSvWbZY21oVMelxWNRScazVsnFe.png" src-width="2392" src-height="972" align="center"/>

<em>2B 圖三</em>

<em>選擇「持倉流水／資金流水」頁面，選擇相應流水點擊「編輯日期」</em>

## 2C 問：出金申請已作審批，如何駁回客户的出入／入金申請？

<b>答：</b>出金申請已作提交確認，在「打包待處理」頁面未作審批的能操作拒絕。如已作審批的，點擊「查看并更新結果」修改狀態為失敗，再操作一筆出金。

<img src="/assets/K0cHbz2OqoRvBxxQ8Hgc2XTunFd.png" src-width="2490" src-height="1194" align="center"/>

<img src="/assets/AzkMbURoko3BhJxhyhwcmvOwnSb.png" src-width="2166" src-height="1240" align="center"/>

## 2D 問：實際到賬的入金金額跟客户輸入的金額不同，如何處理？

<b>答：</b>在入金申請可以點擊「直接入賬」修正 "實收金額"。

<img src="/assets/Fo3xbY2TXo5M9BxLF1Tchr5OnVd.png" src-width="2380" src-height="696" align="center"/>

<img src="/assets/PoPMbzTqiojHP5xxIrZcX8NvnSf.png" src-width="2380" src-height="1426" align="center"/>

## 2E 問：主子賬户間的資金可以互相調動？

<b>答：</b>客户在 App 可以操作資金劃轉（見 2E 圖一至三）。
後台可在「資產賬户 &gt; 賬户間轉賬」操作（見 2E 圖四），但不同客户的賬户不能作調撥。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[35%]" width-ratio="35">
<img src="/assets/DgkkbrbodoJkVBxx9kPcFVjznbB.png" src-width="650" src-height="1250" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/D4JbbiYVjoYVXuxgwldcrB25nig.png" src-width="644" src-height="1336" align="center"/>
</div>
<div class="w-[30%]" width-ratio="30">
<img src="/assets/SPfQbxLmjoqe1LxtMBKcXselnNc.png" src-width="602" src-height="1340" align="center"/>
</div>
</div>

<em> 2E 圖一                                                         2E 圖二                                                   2E 圖三</em>

<img src="/assets/IjdsbtsZcoyJ0uxVT2jcwigJnNb.png" src-width="2602" src-height="804" align="center"/>

<em>2E 圖四</em>

## 2F 問：出入金、換滙能有通知嗎？

<b>答：</b>在「消息設置 &gt; 訂閱管理」頁面（見 2F 圖一、圖二）點擊「新建」，可選換滙、出入金需審核電郵通知（見 2F 圖二）。剔選郵件方式通知并添加需要通知的人員／角色（見 2F 圖三）。如客户透過 App 提交換滙的沒有電郵提醒。

<img src="/assets/Rbu5b5MenoPc9MxctebcZbJYnxh.png" src-width="2386" src-height="374" align="center"/>

<em>2F 圖一</em>

<img src="/assets/KnysbQGiboT6LexJWY7cb4BLnqb.png" src-width="2371" src-height="1098" align="center"/>

<em>2F 圖二</em>

<img src="/assets/SmFtbTzmGo7XxjxEyFGcWzuKntd.png" src-width="2021" src-height="966" align="center"/>

<em>2F 圖三</em>

<em>Webhook 為內部飛書通知沒對外開放</em>

## 2G 問：為什麼出金申請沒作提交，會自動去到了"提現處理"？

<b>答：</b>客户透過 App 申請出金，而同一個銀行卡有成功出金的記錄，會去到 "提現處理" 的"待處理" 頁面可直接操作直接出賬（見 2G 圖一）。
如 App 需要出金審批在「業務參數設置 &gt; 風控 &gt; 出金額規則」頁面點擊「新增」設置。（見 2G 圖二至四）

<img src="/assets/QQUGbVKIhoEl18xWWoSctnhAnKs.png" src-width="2760" src-height="750" align="center"/>

<em>2G 圖一</em>

<img src="/assets/UC21bq2uVorNlZxGmNVcMMOZntc.png" src-width="2760" src-height="1368" align="center"/>

<em>2G 圖二</em>

<img src="/assets/Bb89bPm9DoeC5IxJfBWcD8B6nj3.png" src-width="2386" src-height="1352" align="center"/>

<em>2G 圖三</em>

<img src="/assets/MpXUbQZBsoipcYxMfRmcULyen3d.png" src-width="2364" src-height="540" align="center"/>

<em>2G 圖四</em>

## 2H 問：入金能做到入賬後修改／撤銷？

<b>答：</b>開通相關權限 key 後能操作，請見以下步驟。

> <b>入金流水修改審批</b>`atm.deposit_jour_update_approval`；<b>入金流水修改</b>`atm.deposit_jour_update_ticket`
<b>入金流水刪除審批</b>`atm.deposit_jour_delete_approval`；<b>入金流水刪除 </b>`atm.deposit_jour_delete_ticket`


已完成的入金可在當天作修改／刪除（見 2H 圖一），操作修改／刪除後需要作審批（見 2H 圖二、圖三），入金記錄會顯示到相關流水（見 2H 圖四）。

<img src="/assets/NfrDbOevGoxGOHxcOLNcuXuinVe.png" src-width="2866" src-height="524" align="center"/>

<em>2H 圖一</em>

<img src="/assets/I8ZSb1EEvoeC1mxSZxcccRtNnYb.png" src-width="2518" src-height="418" align="center"/>

<em>2H 圖二</em>

<img src="/assets/Q7cjbJbJeoPTARxKk4ucMuQHn0b.png" src-width="2516" src-height="984" align="center"/>

<em>2H 圖三</em>

<img src="/assets/BFl7b77zxo9pzCx4CnIcFq0Snwe.png" src-width="2606" src-height="336" align="center"/>

<em>2H 圖四</em>

## 2I 問：資產賬户中現金明細的“待結算現金”T2 數值是如何計算？什麼是 TN？

<b>答：</b>現金明細中資金的 T 是按照帳務日來計算；
如今天是星期五，下星期一港股是休市，而美股有交易交收。這裏的港股 T2 便是指今天、下星期一和下星期二。
持倉明細中的 T 是按照交易日來計算。
TN 是：

1. Total（總計）是一個實時的數值，交易時段有交易而引致待交收金額的話，便會實時更新。

2. T0，T1，T2 是取昨天清算文件的待交收金額，不會隨著當天交易而更新。

3. 如果當天有交易的話，Total（總計）便會更新。而 T0，T1，T2 不會更新，便會出現 T0＋T1＋T2 不等於 Total（總計）的情況，因此系統會有 TN 用來計算當中的差額。

4. 而當天完成 dayend 後，T0 數據便會處理沒有了，當天的交易引致的待交收金額便會變成 T2。
所以 TN 是用於系統邏輯計算，用來展示 T0 和 Total（總計）的差額，當天完成日終後便沒有了 TN。

<img src="/assets/GLiKbhDKWofh5oxSG9Acoecqnff.png" src-width="1166" src-height="1238" align="center"/>

<em>2I 圖一</em>

## 2J 問：賬戶有美元結欠，但港幣有餘額，能否提取港幣？

<b>答：</b>在「業務參數配置&gt;風控&gt;出金參數」中“係數 X 配置”點擊「編輯」。把係數修改為 1，賬户有美元結欠，且有購買力時﹐可以提取港幣餘額。

<img src="/assets/K5VqbXPJ7o0rCrxP2ylc8aO7nbf.png" src-width="2826" src-height="1438" align="center"/>

<img src="/assets/Z1yxbmDsDo3meqxPpmAcWTAnnFc.png" src-width="2206" src-height="1160" align="center"/>

## 2K 問：如何提早發放利息給客戶？

<b>答：</b>「清算管理&gt;融資管理」選「存款利息 / 融資利息」，點擊「提前結算」可以提早發放利息 / 收取融資利息結欠。

<img src="/assets/TfAwb55EdoSzjaxQikucRvT6nOe.png" src-width="2682" src-height="1412" align="center"/>

## 2L 問：如何修改結單上「其他資金出入明細」類型的名稱？

答：在「資產賬户&gt;業務碼查詢」選擇相關業務類型點擊「編輯」修改業務名稱。

<img src="/assets/U6NybOIPQoVHjix7D90cMG15nef.png" src-width="1412" src-height="504" align="center"/>

<img src="/assets/YAwwbxqhKowyg4x4DN3cp72QnHc.png" src-width="2696" src-height="1156" align="center"/>

