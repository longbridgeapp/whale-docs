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
追收保證金（margin call）時會有電郵及 App 推送通知（見 17F 圖三）。


<img src="/assets/CTpjbvcxoooJzyxuvbccsz5Snqd.png" src-width="686" src-height="654" align="center"/>

<em>（17F 圖一）</em>

<img src="/assets/ANAPbna8JopRAmxFynbc3VIpn0c.png" src-width="1724" src-height="306" align="center"/>

<em>（17F 圖二）</em>

<img src="/assets/H8ETb7QFBoE8HxxJMWkck5Qunxf.png" src-width="770" src-height="1290" align="center"/>

<em>（17F 圖三)</em>

## 17G. 問：系統什麼時候將打靶的熊證進行清算和移除

答：新建公司行動，根據有沒有剩餘價值選 TM 或者 DS，然後選「登記日」，並輸入上手提供的登記日，上手移除時，系統便會同步操作。

<img src="/assets/Hc6DbfNSOobPN3xT68zc3Fetnfe.png" src-width="1540" src-height="814" align="center"/>

<img src="/assets/K4oCbl55gozMALxs4RMcL0L2ncb.png" src-width="904" src-height="1126" align="center"/>

 

