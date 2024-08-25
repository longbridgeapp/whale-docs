---
title: 9. 公募／私募基金問題
slug: JDFXw8SxUi52hmkc9COczn0Jnah
sidebar_position: 8
---


# 9. 公募／私募基金問題

## 9A 問：為什麼後台下基金訂單不能撤單？

<b>答：</b>下單後可以馬上撤單。如訂單狀況為“已日切”過了截止時間就不能作撤單。

<img src="/assets/IEwrbveUGo53AcxD47tcWQtlndh.png" src-width="2848" src-height="1634" align="center"/>

<img src="/assets/SPr5bz4teoDas7xZsJRcheNrnTe.png" src-width="1352" src-height="1580" align="center"/>

## 9B 問：手工調賬操作基金進出，會有什麼限制？

<b>答：</b>基金手工調賬，客戶可在 APP 作贖回；在後台也可以操作認購／贖回訂單。

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

<em>9F 圖一</em>

<img src="/assets/CiitbN2CNoRlFAxUM9XcHrltnab.png" src-width="756" src-height="1469" align="center"/>

<em>9F 圖二</em>

## 9G 問：如何更新基金的價格？

<b>答：</b>在「基金管理 &gt;  公募基金／私募基金 &gt; 淨值表」頁面內作更新價格。

## 9H 問：<b>PI 認證如何影響到認購公募／私募基金？</b>

<b>答：</b>公募基金：沒有作 PI 限制，會以風險測評問卷限制認購基金。

      私募基金：PI 認證後先可以認購；

      前台 WTT 下單會提醒，客戶不是 PI，但仍可為客戶下單；

      後台 WBO 沒有校驗，可以為客戶下單；

      App 的未作 PI 認購不能認購。          

## 9I 問：如何在 App 操作基金撤單？

<b>答：</b>在 App 的「資產 - 基金 - 交易紀錄 - 選擇訂單 - 撤單」（見下圖）

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

<em>9J 圖一</em>

<img src="/assets/MqZdbvUTJoP5iixFXubcMB87nNh.png" src-width="2170" src-height="1042" align="center"/>

<em>9J 圖二</em>

## 9K 問：補回之前的基金淨值，結單上會更新嗎？

<b>答：</b>結單的基金淨值生成是以自然日取值，即使修改歷史基金淨值也不會更新到。清算徹銷重新生成的結單對過往記錄不影響，仍然是取值該自然日前的基金淨值。

> 例子說明：現在為 2 月 28 日，而基金淨值的記錄截取至 1 月 31 日。之後在 2 月 28 日更新之前的歷史基金淨值，重新生成的結單也是取值 1 月 31 日。修改歷史基金淨值重跑日終生成結單，也不會更新。

## 9L 問：私募基金如何在 App 上展示？

<b>答：</b>在「基金管理&gt;私募基金&gt;App 端列表」點擊「新建」把需要的私募基金加上。

<img src="/assets/NOesbvXQkoNcMQx3XvFc4Zq7n4d.png" src-width="2682" src-height="724" align="center"/>

## 9M 問：「App 展示管理」中基金主題的「排序權重」和「權重排序」是什麼？

答：「排序權重」是管理基金主題的排序，數值越大，排在越前面；「權重排序」同一個基金主題下基金的排序，數值越小，排在越前面。

<img src="/assets/TPc0bfTdkoXKr4xe6slc8EmcnWh.png" src-width="2718" src-height="1496" align="center"/>

## 9N 問：如何重新提交風險測評問卷？

答：可在後台或 App 修改。

1.後台在「KYC ＞風險測評管理」點擊「更新評分」和「更新文件」來修改風險測評等級。

<img src="/assets/QKEdbcSmCoNNDgxn0i7c9oB2nkH.png" src-width="2692" src-height="1118" align="center"/>

2.App 在「市場＞基金」點擊「您的風險水平」，然後點擊「重測」來修改風險測評。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[48%]" width-ratio="48">
<img src="/assets/NTAdb8QqgoQ0V0xEKGzczeljnbb.png" src-width="752" src-height="1530" align="center"/>
</div>
<div class="w-[51%]" width-ratio="51">
<img src="/assets/DymnblcAJoZkW0x04X5cX1i2nYe.png" src-width="784" src-height="1500" align="center"/>
</div>
</div>

## 9O 問：餘額通觸發自動贖回規則是什麼？能用作抵扣認購其他基金、申購 IPO?

答：1.基金是每個交易日都會產生申贖渠道單，但是交收（回填）依賴基金公司實際返回申購確認份額，贖回確認金額的時間，基金那邊設定了 T+幾只是展示用的；客戶購買了股票，T+2 需要交收股票，買完股票後現金可提會變成負數，此時會立刻觸發餘額通自動贖回，T+1 基金公司會打款到賬，當天要人工在 WBO 完成清算交收，這樣客戶帳戶上就有錢作 T+2 的股票交收了。

2.理論上不能買基金，因為購買基金當天就要客戶扣款，然後把錢打給基金公司，等不到餘額通贖回。IPO 使用餘額通有時間限制，如果用戶認購 IPO 時間晚於認購截止日的前一個交易日上午 9:00，因為餘額通贖回金額到帳時間晚於認購截止日，就不能用餘額通直接打新，用作抵扣美股港股則沒問題。

