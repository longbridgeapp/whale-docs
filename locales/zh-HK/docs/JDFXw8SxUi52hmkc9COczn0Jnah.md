---
title: 9. 公募／私募基金問題
slug: JDFXw8SxUi52hmkc9COczn0Jnah
sidebar_position: 8
---


# 9. 公募／私募基金問題

## 9A 問：為什麼後台下基金訂單不能撤單？

<b>答：</b>下單後可以馬上撤單。如點擊「獲取訂單」表示日切了，日切了過了截止時間就不能作撤單。

<img src="/assets/IEwrbveUGo53AcxD47tcWQtlndh.png" src-width="2848" src-height="1634" align="center"/>

<img src="/assets/SPr5bz4teoDas7xZsJRcheNrnTe.png" src-width="1352" src-height="1580" align="center"/>

## 9B 問：手工調賬操作基金進出，會有什麼限制？

<b>答：</b>公募基金手工調賬，客戶可在 APP 作贖回；

私募基金調賬後，不能在 APP 贖回，需在後台／前台 wtt 落贖回訂單。

## 9C 問：什麼是 獲取訂單時間 和 自動回填時間？

<b>答：</b>獲取訂單時間就是日切時間；自動回填時間只對系統接了上手 API 的才有作用。接了的，上手會在自動回填時間返回回填數值；沒有接的，就需要在後台手動輸入數據回填。

## 9D 問：自動回填的時間如何輸入？

<b>答：自動回填是針對有用 API 的場景</b>。不走 API 的，自動回填時間對租戶不生效，可以跟獲取訂單時間一樣。

<img src="/assets/ZXIDb0EeyodSJLx1F8kc7c1unhd.png" src-width="2502" src-height="596" align="center"/>

## 9E 問：公募基金 及 私募基金 如何操作回填？

<b>答：</b>確認申購份額／贖回金額需根據上手給的結單或交易確認資料填寫，如沒有的數值可輸入 0。

<img src="/assets/SL0abxvkGodnFRxwswDc2khSnGg.png" src-width="2164" src-height="1198" align="center"/>

## 9F 問：為什麼已上架的私募基金沒有歷史走勢和單位淨值？

<b>答：</b>私募基金没有自動更新機制，需在「基金管理 &gt; 私募基金 &gt; 淨值表」頁面手動更新單位淨值後（見 9F 圖一），在 App 的歷史記錄可查看（見 9F 圖二）。

<img src="/assets/IaX0bfJBNoFOpDx251mcLltcnDf.png" src-width="2512" src-height="734" align="center"/>

9F 圖一

<img src="/assets/CiitbN2CNoRlFAxUM9XcHrltnab.png" src-width="756" src-height="1469" align="center"/>

9F 圖二

## 9G 問：如何更新基金的價格？

<b>答：</b>在「基金管理 &gt;  公募基金／私募基金 &gt; 淨值表」頁面內作更新價格。

## 9H 問：<b>PI 認證如何影響到認購公募／私募基金？</b>

<b>答：</b>公募基金：沒有作 PI 限制，會以風險測評問卷限制認購基金。

      私募基金：PI 認證後先可以認購；

      前台 WTT 下單會提醒，客戶不是 PI，但仍可為客戶下單；

      後台 WBO 沒有校驗，可以為客戶下單；

      App 的未作 PI 認購不能認購。          

## 9I 問：如何在 app 操作基金撤單？

<b>答：</b>在 APP 的「資產 - 基金 - 交易紀錄 - 選擇訂單 - 撤單」（見下圖）

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[34%]" width-ratio="34">
<img src="/assets/GacPbwO4VooajnxcTJFcr5Glnjg.png" src-width="526" src-height="1114" align="center"/>

</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/PLSwbWloCotwYRxj91pc43R9ndb.png" src-width="619" src-height="1350"/>
</div>
<div class="w-[32%]" width-ratio="32">
<img src="/assets/LEUObiKvqoL7aMxTZ4jcAPvVnsb.png" src-width="639" src-height="1405"/>
</div>
</div>

## 9J 問：接了 API 上架的基金，系統沒有自動進行日切，能如何處理？ 

<img src="/assets/C03Ub2wUIoVDu1xnBI3cg9Q8nrb.png" src-width="2510" src-height="932" align="center"/>

<b>答：</b>系統會在每天的 8:00-22:00，每隔 5 分鐘檢查是否到達基金日切時間。請修改日切時間至 8:00-22:00 之間的時間段。（見 9J 圖一、圖二）

> 自動回填的檢測時間也是相同的時間段（8:00 - 22:00）。

<img src="/assets/CGLnby2T8opjzqxl6Fnck8EhnMh.png" src-width="2502" src-height="692" align="center"/>

9J 圖一

<img src="/assets/MqZdbvUTJoP5iixFXubcMB87nNh.png" src-width="2170" src-height="1042" align="center"/>

9J 圖二

## 9K 問：補回之前的基金淨值，結單上會更新嗎？

<b>答：</b>結單的基金淨值生成是以自然日取值，即使修改歷史基金淨值也不會更新到。清算徹銷重新生成的結單對過往記錄不影響，仍然是取值該自然日前的基金淨值。

> 例子說明：現在為 2 月 28 日，而基金淨值的記錄截取至 1 月 31 日。之後在 2 月 28 日更新之前的歷史基金淨值，重新生成的結單也是取值 1 月 31 日。修改歷史基金淨值重跑日終生成結單，也不會更新。

