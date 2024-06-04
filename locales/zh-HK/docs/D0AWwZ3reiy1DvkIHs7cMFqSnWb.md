---
title: 2.2 換滙
slug: D0AWwZ3reiy1DvkIHs7cMFqSnWb
sidebar_position: 1
---


# 2.2 換滙

## 2.2A 問：如何設置換滙操作？

<b>答：</b>確認已配置幣種為可滙兌**、**幣種對、換滙策略、換滙池額度，前期設置請參考以下步驟。
(i). 在「業務參數設置 &gt; 資金參數 &gt; 幣種」的頁面中，操作欄點擊「編輯」把滙兌功能設置為"yes"

<img src="/assets/JUC4bkt5YohctzxrtPec0bpjnhh.png" src-width="2641" src-height="1274" align="center"/>

<img src="/assets/FWRabG84noF9uSxeVVqca7Scnkf.png" src-width="2858" src-height="1635" align="center"/>

(ii). 在「業務參數設置 &gt; 滙兌 &gt; 幣種對」頁面中點擊「新建」添加可兌出及兌入幣種

<img src="/assets/VXIvb4LPdofbnPxzck1cmupmncc.png" src-width="2635" src-height="1203" align="center"/>

<img src="/assets/VlIqbPgsWoc7XMxfyYTcr5GenCe.png" src-width="2383" src-height="941" align="center"/>

(iii). 在「業務參數設置 &gt; 滙兌 &gt; 換滙策略」頁面中點擊「新建」

<img src="/assets/Kj5Jbh3X3ofI1xxXCTEclbWynMb.png" src-width="2627" src-height="1291" align="center"/>

(iv). 在「新建」頁面需添加按兌出及兌入幣種

-默認

-服務策略：滙兌池換滙
-滙兌類型：無

-輸入服務時段

-支持的幣種對，點擊「添加」

<img src="/assets/V65kbY9fGopMqjxAutEcLXzqnFb.png" src-width="2229" src-height="1372" align="center"/>

(v).在「款項管理 &gt; 換滙池 &gt; 額度配置」點擊「新建」

<img src="/assets/Ww9abnkngoPwzwxViGscpscTnae.png" src-width="2856" src-height="1555" align="center"/>

(vi). 在「新建」頁面

-幣種：添加兌出兌入的幣種

-警戒線金額：輸入金額（如到達警戒線會作提醒）

-剩餘額度調整：輸入金額

<img src="/assets/E0nIbROIwo7vrexbezmc5adfnVf.png" src-width="2246" src-height="1370" align="center"/>

- 基礎設置完成後，可以操作換滙。

(i). 在「款項管理 &gt; 換滙 &gt; 客户滙兌」點擊「手工換滙」。

> 手工換滙自定義滙率支持到 4 位小數。如超過 4 位小數，需要先駁回換滙申請，使用調賬功能操作

<img src="/assets/UBCobIH49oMrZHxT7q9cg2jvnxe.png" src-width="2599" src-height="1104" align="center"/>

<img src="/assets/MSqubmODyoVgWIxQKrqcSlJqnig.png" src-width="2237" src-height="1374" align="center"/>

(ii). 在操作欄點擊「複核」通過或駁回申請

<img src="/assets/D1W9bkBYgoONZvxyZEGcTCNen7f.png" src-width="2236" src-height="1034" align="center"/>

<img src="/assets/UDn6bYa0Ho1yNqxG7hPcLkHTnmc.png" src-width="2228" src-height="1367" align="center"/>

## 2.2B 問：Manual current / Manual account 有什麼區別？有什樣的影響？

<b>答：</b>結單上的滙率（見 2.2B 圖一）及 手工換滙的系統配置匯率（見 2.2B 圖二）會跟隨即期匯率（Manual_current）。Manual_current 的滙率會一直根據上次修改的記錄顯示，直至手動再更新。

會計與換匯、資產相關的報表，如 FRR006、FDR001、SDR003 的滙率類型（見 2.2B 圖三），可選帳面匯率通常用於計算資產，帳務才會涉及到帳面匯率（Manual_account）。

<img src="/assets/C1GabusCEojk4zx7ayVctC9knoe.png" src-width="1268" src-height="194" align="center"/>

<img src="/assets/PLKybW3K0oF9ruxOQIncWNRcndc.png" src-width="2510" src-height="768" align="center"/>

<img src="/assets/WQpSbYbOWoicPbxj8aJcjdnDnVd.png" src-width="2042" src-height="382" align="center"/>

## 2.2C 問：客户提交換滙申請為何不成功？

<b>答：</b>換滙池需要有足夠的額度才能作換滙。

設置換滙池的步驟見以下：

(i). 在「業務參數設置 &gt; 滙兌 ＞ 換滙池額度配置」頁面點擊「新建」

<img src="/assets/TVtNbgv4toAidqx4W6HcBjAUnwO.png" src-width="2856" src-height="1555" align="center"/>

(ii). 在編輯頁面：

<img src="/assets/Bp6WbBfD0ovZybxIdUjcEVCqnCe.png" src-width="2096" src-height="1354" align="center"/>

## 2.2D 問：人工換滙能使用自己的滙率嗎？

<b>答：</b>可以在「款頁管理 ＞ 換滙」頁面點擊「手工換滙」選自定義滙率輸入。

<img src="/assets/RKf7bF5xLoxK7mxgjznc6hxLnrf.png" src-width="2500" src-height="986" align="center"/>

## 2.2E 問：如何設置每筆換滙都需要人工審核？

<b>答：</b>在「業務參數設置 &gt; 滙兌 &gt; 換滙策略」點擊「審批起點」設置審核起始金額，如：0.01。 

<img src="/assets/KiGEbMDB1oCjT2xyBg6cWi2LnJb.png" src-width="2712" src-height="1394" align="center"/>

<img src="/assets/WRCbbyrbZol2bHxJU4Kcgj0tnih.png" src-width="2346" src-height="940" align="center"/>

