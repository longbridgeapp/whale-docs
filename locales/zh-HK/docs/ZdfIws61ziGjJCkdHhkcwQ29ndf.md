---
title: 2. 出入金問題
slug: ZdfIws61ziGjJCkdHhkcwQ29ndf
sidebar_position: 1
---


# 2. 出入金問題

## 2A 問：出金／入金申請在後台已點擊提交，想拒絕申請如何處理？

<b>答：</b>已作提交申請的，需要在工單中作拒絕（見 2A 圖一）。加款狀態更新為已駁回（見 2A 圖二），如有需要可再操作一筆出／入金申請。

<img src="/assets/U6mgbVQJMoPq4hxt7PccOUQFnie.png" src-width="2150" src-height="1368" align="center"/>

2A 圖一

<img src="/assets/DaUNb7Wl0ogp4DxL0DFcLegPnhf.png" src-width="2606" src-height="404" align="center"/>

2A 圖二

## 2B 問：完成日終後，需要補回入金／出金流水如何處理？

<b>答：</b>完成日終需要先作清算撤銷（見 2B 圖一、二），不能跳過賬務日，需一天一天撤回。 
補回流水後，在流水管理編輯日期，改回相應的流水日期（見 2B 圖三），之後繼續完成日終操作。

<img src="/assets/X4rNbbODZoe8J2xZnyYcBQQhnEb.png" src-width="2858" src-height="1418" align="center"/>

2B 圖一

<img src="/assets/NmRob8vlcoKJAYxPXtZcEXBXniy.png" src-width="2390" src-height="1420" align="center"/>

2B 圖二

如不用重新計算利息／交收數據，資產類回撤可選不操作

<img src="/assets/DSvWbZY21oVMelxWNRScazVsnFe.png" src-width="2392" src-height="972" align="center"/>

2B 圖三

選擇「持倉流水／資金流水」頁面，選擇相應流水點擊「編輯日期」

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

                           2E 圖一                                                         2E 圖二                                                   2E 圖三

<img src="/assets/IjdsbtsZcoyJ0uxVT2jcwigJnNb.png" src-width="2602" src-height="804" align="center"/>

2E 圖四

## 2F 問：出入金、換滙能有通知嗎？

<b>答：</b>在「消息設置 &gt; 訂閱管理」頁面（見 2F 圖一、圖二）點擊「新建」，可選換滙、出入金需審核電郵通知（見 2F 圖二）。剔選郵件方式通知并添加需要通知的人員／角色（見 2F 圖三）。如客户透過 App 提交換滙的沒有電郵提醒。

<img src="/assets/Rbu5b5MenoPc9MxctebcZbJYnxh.png" src-width="2386" src-height="374" align="center"/>

2F 圖一

<img src="/assets/KnysbQGiboT6LexJWY7cb4BLnqb.png" src-width="2371" src-height="1098" align="center"/>

2F 圖二

<img src="/assets/SmFtbTzmGo7XxjxEyFGcWzuKntd.png" src-width="2021" src-height="966" align="center"/>

2F 圖三

Webhook 為內部飛書通知沒對外開放

## 2G 問：為什麼出金申請沒作提交，會自動去到了"提現處理"？

<b>答：</b>客户透過 App 申請出金，而同一個銀行卡有成功出金的記錄，會去到 "提現處理" 的"待處理" 頁面可直接操作直接出賬（見 2G 圖一）。
如 App 需要出金審批在「業務參數設置 &gt; 風控 &gt; 出金額規則」頁面點擊「新增」設置。（見 2G 圖二至四）

<img src="/assets/QQUGbVKIhoEl18xWWoSctnhAnKs.png" src-width="2760" src-height="750" align="center"/>

2G 圖一

<img src="/assets/UC21bq2uVorNlZxGmNVcMMOZntc.png" src-width="2760" src-height="1368" align="center"/>

2G 圖二

<img src="/assets/Bb89bPm9DoeC5IxJfBWcD8B6nj3.png" src-width="2386" src-height="1352" align="center"/>

2G 圖三

<img src="/assets/MpXUbQZBsoipcYxMfRmcULyen3d.png" src-width="2364" src-height="540" align="center"/>

2G 圖四

## 2H 問：入金能做到入賬後修改／撤銷？

<b>答：</b>開通相關權限 key 後能操作，請見以下步驟。

> <b>入金流水修改審批</b>`atm.deposit_jour_update_approval`；<b>入金流水修改</b>`atm.deposit_jour_update_ticket`
<b>入金流水刪除審批</b>`atm.deposit_jour_delete_approval`；<b>入金流水刪除 </b>`atm.deposit_jour_delete_ticket`


已完成的入金可在當天作修改／刪除（見 2H 圖一），操作修改／刪除後需要作審批（見 2H 圖二、圖三），入金記錄會顯示到相關流水（見 2H 圖四）。

<img src="/assets/NfrDbOevGoxGOHxcOLNcuXuinVe.png" src-width="2866" src-height="524" align="center"/>

2H 圖一

<img src="/assets/I8ZSb1EEvoeC1mxSZxcccRtNnYb.png" src-width="2518" src-height="418" align="center"/>

2H 圖二

<img src="/assets/Q7cjbJbJeoPTARxKk4ucMuQHn0b.png" src-width="2516" src-height="984" align="center"/>

2H 圖三

<img src="/assets/BFl7b77zxo9pzCx4CnIcFq0Snwe.png" src-width="2606" src-height="336" align="center"/>

2H 圖四

