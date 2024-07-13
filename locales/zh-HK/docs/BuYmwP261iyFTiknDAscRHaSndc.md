---
title: 16. App 操作問題
slug: BuYmwP261iyFTiknDAscRHaSndc
sidebar_position: 15
---


# 16. App 操作問題

## 16A. 問：App 持倉佔比是如何計算？為什麼可以超出 100％？

<b>答：</b>持倉佔比計算公式為：持倉總值／總資產，因客户作融資買賣，持倉總市值有 32497 計算下來：

賬户總持倉占比：32497／660 x 100% = 4923.78%   

＃2502：市值約 30360／660 ＝4600%
＃6911：市值約 2137／660 ＝ 323.78% 
<img src="/assets/CF2Jb0wfDocCdkxP5q7cIGotn2b.png" src-width="652" src-height="1134" align="center"/>
## 16B. 問：在後台已設置多家基金公司，為什麼 App「市埸 &gt; 基金」頁面只顯示到 3 隻基金？
<b>答：</b>後台更新了基金公司資料，在 App 沒那麼及時展示到，需要約 1 小時的緩存，刷新頁面後會看到。如設置的基金公司沒有基金，App 不會顯示出來。

## 16C. 問：新股上市的盈餘數據是如何計算？

<img src="/assets/RhmZbOdCboBpIUxrQH6ct16Pn2d.png" src-width="1305" src-height="884" align="center"/>

<b>答：</b>浮動盈虧：是暗盤買入的成本價對比現價計算；

當日盈虧：是發行價對比現價計算。

以上圖為例子：＃茶百道的發行價為 $17.5，成本價是$15.1，現價是$12.36
浮動盈虧：（12.36 - 17.5）X 200（一手）= -1,028
當日盈虧：（12.36 - 15.1）X 200（一手） = -548

## 16D 問：客户主子賬户在 App 如何操作？

<b>答：</b>客户如有主子賬户，使用同一個登記電話登入到 App，登錄後可以操作到所有主子賬户作買賣。
資金調撥可以使用「資金劃轉」功能：「賬户間資金劃轉」由主賬户把資金調到第二個主賬户或「主子賬户資金劃轉」把資金調至其屬下的子賬户。
股票調撥可以使用「股票劃轉」功能：由主賬户把持倉調到其屬下的子賬户。


> “主子帳戶”和“股票劃轉”功能只有在客户帳戶開了子帳戶的情況下才會展示，否則是看不到的，因為這兩個功能只是針對主子帳戶之間的功能。 
“資金劃轉”是可以看的，因為它支持主主帳戶之間的劃轉。

<div class="flex gap-3 columns-5" column-size="5">
<div class="w-[20%]" width-ratio="20">
<img src="/assets/Y6uQbkVuBotBlCxFa6Qc3Vy3njd.png" src-width="634" src-height="1334" align="center"/>
</div>
<div class="w-[20%]" width-ratio="20">
<img src="/assets/HIlabLo25oqyVTxe5ESceSWYn0g.png" src-width="642" src-height="1344" align="center"/>
</div>
<div class="w-[20%]" width-ratio="20">
<img src="/assets/Skj6bmdW4oClJnxOWJrcHqVJnaf.png" src-width="642" src-height="1338" align="center"/>
</div>
<div class="w-[18%]" width-ratio="18">
<img src="/assets/Qnz0bRSQFoMA1ZxkEMPcStC9nXc.png" src-width="590" src-height="1324" align="center"/>
</div>
<div class="w-[20%]" width-ratio="20">
<img src="/assets/RBPAbX4i4oI2aTxrXa2cEEzCnXg.png" src-width="638" src-height="1330" align="center"/>
</div>
</div>

## 16E 問：BMP 行情是什麼？

答：港股基礎報價 (BMP)：

1. 自選僅支持顯示 20 隻股票的手動刷新實時行情，超過的部分會顯示延時 15 分鍾行情。（自選股欄最近選擇的 20 隻股票展示實時行情，行情頁面顯示的是延遲行情）

2. 個股頁支持手動刷新實時報價。

## 16F 問：客戶有兩個賬戶，App 為什麼看不見「股票劃轉」功能？

答：“主子帳戶”和“股票劃轉”功能只有在客户帳戶開了子帳戶的情況下才會展示，否則是看不到的。
“資金劃轉”支持到主主帳戶之間的劃轉，在 App 可以查看到。

<img src="/assets/WJsibqUIoo8EPox4skwcXKVqnSd.png" src-width="716" src-height="1382" align="center"/>

## 16G 問：APP「盈虧分析」的「盈虧明細」在什麼時間更新前一天的數據？

<b>答：</b>在大約早上 10:30 更新前一天的數據。

<img src="/assets/MfKubNAyRosAPIxDwBIcnKyvnVg.png" src-width="734" src-height="1464" align="center"/>

## 16H 問：如何更新 APP 內的幫助中心？

答：在後台「幫助中心」的「文章」按「新建文章」。新增文章分類可以在後台「幫助中心」的「文章分類」按「創建分類」，「slug」則用以快速識別該分類，可設置英文字和符號。

<img src="/assets/EoMSbYNRvoLiz3x4u26cNyTun3d.png" src-width="2820" src-height="1144" align="center"/>

<img src="/assets/Ltd1bZa1xoDPLZxbNeccVT2Un0i.png" src-width="2816" src-height="1160" align="center"/>

<img src="/assets/D1JZbllmHo65qXxkLSxcAmu1nWf.png" src-width="2860" src-height="1184" align="center"/>

