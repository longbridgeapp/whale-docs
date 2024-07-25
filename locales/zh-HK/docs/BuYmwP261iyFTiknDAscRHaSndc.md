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

## 16H 問：如何更新 APP 內的 "幫助中心"的分類查找的內容？

<img src="/assets/XU6ZbZ7kDo4nydx7SZEcA5Hhnvb.png" src-width="618" src-height="1366" align="center"/>

<b>答：</b>在「幫助中心＞文章」點擊「新建文章」添加場景問題，在文章底部勾選 "作為常見問題"。(見 16H 圖一、圖二)
之後在「文章分類」點擊「創建分類」。（見 16H 圖三) 
"slug" 可以自定義一個英文，如：港股交易規則值可以是【hk_trade_rule】之類（見 16H 圖四)

> 「slug」用以快速識別該分類，可設置英文字和符號。

<img src="/assets/HAZbb50yMoqsGExIXamcpBkwnAc.png" src-width="2710" src-height="740" align="center"/>

<em>16H 圖一</em>

<img src="/assets/OzHbbdIiXoNpAJxGpNWcROAhnpe.png" src-width="2416" src-height="1408" align="center"/>

<em>16H 圖二</em>

<img src="/assets/QCB7bTiwpoHieqx1GfWcQwsEn4f.png" src-width="2708" src-height="662" align="center"/>

<em>16H 圖三</em>

<img src="/assets/Lsb0bGYm2oWND6x278lcKUCynZc.png" src-width="2700" src-height="786" align="center"/>

<em>16H 圖四</em>

## 16I 問：為什麼內地客戶使用 ios 不能用以下連結下載 LongPortApp？（https://longportapp.cn/en/download）

答：根據中國內地合規要求已下架。安卓客戶可以到官網的連結下載安裝包。IOS 客戶需要把 App Store 切換成香港區，就可以下載。

## 16J 問：客戶如何在 App 自行完成基金資產風險評估？

答：在 App 的「市場&gt;基金」頁面點擊「您的風險水平」可完成基金資產風險評估。

<img src="/assets/PbQZbawv7oR886xkR9QcO2wunBg.png" src-width="714" src-height="1426" align="center"/>

## 16K 問：Web Trade 和 APP 能否同時使用？

答：Web Trade 和 APP 可以同時使用。

## 16L 問：如何禁止客戶在 APP 自動換匯？

答：有以下兩個方法：

方法一、在「業務參數設置&gt;匯兌&gt;換匯策略」點擊停用換匯策略。

<img src="/assets/Q4GsbSj7dolAYvxeNCmchn4NnEh.png" src-width="2866" src-height="1616" align="center"/>

方法二、在「業務參數設置＞匯兌＞換匯策略」點擊「審批起點」，將「起始金額」設置為$0.01，所有換匯都需要審批。在審批時拒絕客户換滙

<img src="/assets/SdfrbSvGaoVGSwxHS3Ycw2lhnye.png" src-width="2850" src-height="1388" align="center"/>

<img src="/assets/KZzqb4kMLoznqCxfTsWcogCHnth.png" src-width="2824" src-height="1364" align="center"/>

## 16M 問：客戶如何在 APP 修改登錄電郵？

答：修改登錄電郵步驟如下：

在 App「我的」-「設置」-「帳號與安全」-「郵箱」-「修改郵箱」，按「下一步」收取驗證碼以修改電郵。

> 收取驗證碼可選用手機號／原電郵收取確認

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[31%]" width-ratio="31">
<img src="/assets/S8OAbmcSzoxP5kxHLg6cgfFYnFh.png" src-width="534" src-height="1146" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/FRYQbj4rjosSQMxQmIOc9fn0njd.png" src-width="760" src-height="1528" align="center"/>
</div>
<div class="w-[34%]" width-ratio="34">
<img src="/assets/XyfObmInLoI5lAxkpiScBli8nEs.png" src-width="768" src-height="1528" align="center"/>
</div>
</div>

 

