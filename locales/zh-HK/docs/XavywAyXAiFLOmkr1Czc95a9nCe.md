---
title: 17. 前台 WTT 問題
slug: XavywAyXAiFLOmkr1Czc95a9nCe
sidebar_position: 16
---


# 17. 前台 WTT 問題

## 17A. 問：淨資產比率是如何計算？

<b>答：</b>淨資產比率＝股權資產／持倉總市值。股權資產 ＝ 總現金＋持倉總市值。

> 持倉總市值包含股票及期權的市值。

<img src="/assets/QWWcbMFrAozoU3x19iMcEUHEnFc.png" src-width="2600" src-height="766" align="center"/>




## 17B. 問：下單後如何查到需要收取客户多少費用？

<b>答：</b>實際的費用需要完成清算後查看報表 SDR018 - Bargain Detail Report-HK。
預估的費用可以在前台下單組件右下方的「金額詳情」功能查詢到。

<img src="/assets/N5YDbyGdvoRn1nxA4aWcoIujntd.png" src-width="2242" src-height="1122" align="center"/>

## 17C 問：前台如何看到聯名戶信息中主次持有人的名稱？

<b>答：</b>在「客户信息」組件中點擊右上方「...」的設置，打開顯示聯名户信息的按鈕。

<img src="/assets/TfO6btRGAo9TF9x9EeacQcumnrf.png" src-width="2610" src-height="611" align="center"/>

<img src="/assets/WdH1bZSsgorcbMx3fwHcKKz7n7f.png" src-width="2116" src-height="800" align="center"/>

## 17D 問：如何限制客户交易虛擬資產或限制交易股票？

<b>答：</b>前台在「交易查詢 &gt; 證券限制」點擊右上方「新增」，把股票添加至黑名單禁止客户交易，能批量“股票導入”作限制。如黑名單沒有添加客户，默認為全部客户不能交易。

> 如個別客户能作交易可以再新建白名單，添加關聯客户。
以批量導入模版的股票代碼，需輸入：3099.hk

<img src="/assets/Wwqxb3g1Uo2XCBx6GsIc9Z7Yn2c.png" src-width="2606" src-height="1526" align="center"/>

## 17E 問：前台行情選了 40 檔買賣經紀，是如何計算 40 檔？

<b>答：</b>經紀行買賣檔包含買／賣方向前 40 個經紀行 ID 的清單： 

- 當一檔價格下有超過 40 個經紀行，則頁面顯示前 40 個經紀行。
- 當一檔價格下不足 40 個經紀行，則：40 = 經紀行數量 + 有經紀行的價格個數 + 無經紀行的價格個數*2。 

> (注＊在交易所的規則中，無經紀行的價格會佔據兩行位置：一行是告知偏離價格的距離、一行是告知此價格下沒有經紀商。)

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[65%]" width-ratio="65">
<img src="/assets/LkFZbhPLmoPRKZxOPchc08OBnIb.png" src-width="680" src-height="483" align="center"/>
</div>
<div class="w-[34%]" width-ratio="34">
<img src="/assets/Ap8qbioG6oleQaxs6cGcAKIcnbb.png" src-width="969" src-height="1340" align="center"/>
</div>
</div>

## 17F. 問：強制平倉後，會有什麼方式通知到客户？

<b>答：</b>App 會有推送通知（見 17F 圖一）<b>，</b>在結單上也有強制平倉標示（見 17F 圖二）。
追收保證金（margin call）也有電郵及 App 推送通知（見 17F 圖三）。


<img src="/assets/CTpjbvcxoooJzyxuvbccsz5Snqd.png" src-width="686" src-height="654" align="center"/>

<em>（17F 圖一）</em>

<img src="/assets/ANAPbna8JopRAmxFynbc3VIpn0c.png" src-width="1724" src-height="306" align="center"/>

<em>（17F 圖二）</em>

<img src="/assets/H8ETb7QFBoE8HxxJMWkck5Qunxf.png" src-width="770" src-height="1290" align="center"/>

<em>（17F 圖三)</em>

## 
## 17G. 問：什麼是「重置當前佈局」功能？

<b>答：</b>「重置當前佈局」能將佈局回復到初始狀態，只有系統基礎頁面（如：個股、行情、交易頁面）有此功能，自定義頁面沒有。

<img src="/assets/JOlyb9tXGoSdUSxILIRcK3gknNF.png" src-width="2042" src-height="1240" align="center"/>

<img src="/assets/CW7VbO3zbot2ZBxa3KPcivATn8e.png" src-width="2864" src-height="1790" align="center"/>

## 17H. 問：WTT 的“證券限制”中，「關聯地區」是根據什麼區分客戶？

<b>答：</b>會以客戶填寫的居住國家作區分；如沒有，以證件簽發地區分；如果也沒有，會以國籍區分。

<img src="/assets/SY0wbZDlropmGkxO9IjcUyAqnnb.png" src-width="2866" src-height="1332" align="center"/>

## 17I 問：交易訂單被拒絕原因為「Order Price Far Away From Reference Price」是什麼？

<b>答：</b> 下單被拒原因為下單價格距離現價太遠，買盤輸入價格不能高於最佳沽出價 10 個價位；賣盤輸入價格不能低於最佳買入價 10 個價位。

## 17J 問：WTT「保存所有佈局」功能是否須要逐個版面保存？

答：右上方組件工具箱「布局管理&gt;保存所有佈局」可以將整個 WTT 佈局保存，不用逐個版面保存。

<img src="/assets/N4AzbcB0UoVgYzx0p9zcCcMKnDg.png" src-width="1316" src-height="896" align="center"/>

## 17K 問：WTT 如何進行碎股交易？

答：可以在「交易頁面」下碎股單（見 17K 圖一）和「碎股撮合」（見 17K 圖二、圖三）進行碎股交易。

> 碎股成交量比正股低，有機會需要掛單數天才有成交。

<img src="/assets/KmYbbtHxnoRdN6xc9X7cOmEZnxb.png" src-width="2872" src-height="1792" align="center"/>

<em>17K 圖一</em>

<img src="/assets/IKyFbV4vUolE8exNCQ9czBp8nFb.png" src-width="2878" src-height="1740" align="center"/>

<em>17K 圖二</em>

<img src="/assets/F50abR5v9oOb6FxZR75caGt6nAC.png" src-width="2862" src-height="1790" align="center"/>

<em>17K 圖三</em>

## 17L 問：前台下單的價格限制是什麼？

<b>答：</b>如買入訂單價格低於當前價格 24 個檔位會存放在系統中，到價再放出；

高於對手價格 9 檔不會存到系統，直接送出交易所，但會被交易所的價格限制下可能會被拒絕。

