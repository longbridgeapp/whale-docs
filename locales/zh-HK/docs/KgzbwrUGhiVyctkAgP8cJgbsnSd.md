---
title: 5. 清算問題
slug: KgzbwrUGhiVyctkAgP8cJgbsnSd
sidebar_position: 4
---


# 5. 清算問題

## 5A 問：美股文件如何處理對賬？ 

<b>答：</b>美股是隔夜市场，交易日會在下一天結束，需要美股上手第二天早上提供文件後導入對賬。

系統持倉對賬邏輯是對上一日的已交收持倉（持倉對帳對的是 T-1），需要導入美股上手文件，以完成美股清算。

在「清算管理 &gt; 清算檢查 &gt; 持倉對賬」中按「重新對賬」選擇對應的執行日期及賬務日期以刷新數據，再導出報表 SDR025 核對。

<img src="/assets/TdQdb9nPwoHsHTxHz99cK2kDnPg.png" src-width="2398" src-height="1188" align="center"/>

## 5B 問：對賬日期如何選擇？

<b>答：</b>常規租戶是下一天上午對上一天的賬，系統是按對賬任務發起的日期去默認展示，見下例說明。

<img src="/assets/DhP0bVTi3oFEVKxww5McS1WxnZ2.png" src-width="1466" src-height="972" align="center"/>

## 5C 問：為什麼 4 月 30 日港股清算後，系統賬務日是 5 月 1 日，不是 5 月 2 日？
（以 5 月 1 日為例子）

<b>答：</b>5 月 1 日港股為假期，但美股為交易日，需要空跑港股清算，反之美股假期情況也一樣。

## 5D 問：為什麼操作提前交收沒反應？

<b>答：</b>提前交收需要完成日終後操作，如下日為假期操作會有報錯提醒：市埸日歷不存在

<img src="/assets/OCwMb4iu2obRmkxrH91clc5znAh.png" src-width="2504" src-height="1006" align="center"/>

## 5E 問：半日市清算需要什麼操作／注意？

<b>答：</b>最早當天 2 點在「清算管理 &gt; 日終任務」點擊「提前日切」可提早進行清算 或 等到系統截數時間（如：4 點半）後操作。

<img src="/assets/VEfEba9SOoicbVxhOkDcndXXnsh.png" src-width="2183" src-height="384" align="center"/>

## 5F 問：清算能重跑昨天的數據？

<b>答：</b>在「清算管理 &gt; 清算撤銷」頁面點擊「新增」，不能跳過賬務日，需一天一天撤回。（見 5F 圖一）


<img src="/assets/Ddk9bk6NtoQs2KxjD2BceB28nHT.png" src-width="2390" src-height="1420" align="center"/>

<em>5F 圖一</em>

<em>如不用重新計算利息／交收數據，資產類回撤可選不操作</em>

## 5G 問：日終 "清算前準備" 有報錯提醒如何處理？

<img src="/assets/Z7mMbG9dSoszmUxjA3OclaNWnTg.png" src-width="2220" src-height="380" align="center"/>

<b>答：</b>彈出提醒信息檢查後沒問題，作「手動審核」通過。

<img src="/assets/Fra8bsjWooTZKbxZK91cyGXonNf.png" src-width="2110" src-height="172" align="center"/>

<img src="/assets/I2kmbzGhyonmbjxdaPRcDwtxnGd.png" src-width="2040" src-height="162" align="center"/>

<img src="/assets/XHNgbw7Uzob2kfx6q8ucB6zEn8c.png" src-width="2752" src-height="1354" align="center"/>

<em>5G 圖一</em>

<img src="/assets/TLEvbxnWgo95A3xUoV1cFZb9n2d.png" src-width="2656" src-height="294" align="center"/>

<em>5G 圖二</em>

## 5H 問：清算前準備出現「前台流水全部納入清算」的提醒，如何處理？

<img src="/assets/HlkebwYzvo6jBKx3jigcmlgmnue.png" src-width="1373" src-height="1124"/>

<b>答：</b>檢查流水是否在系統清算時間後操作。在「清算管理＞流水管理」頁面選持倉／資金流水點擊「編輯日期」，改回當天賬務日期。完成日終後，當天結單會顯示到該流水。

> 如不用在當天結單顯示流水，可保持原來的賬務日，不作修改，點擊通過繼續日終。

<img src="/assets/GnVhbmJxvojdtGxHOSHcYt2Ungc.png" src-width="2386" src-height="828" align="center"/>

## 5I 問：清算中檢查報錯，如何處理？

<img src="/assets/OkdpbHc7loYMgKxT1KvczFEnnMe.png" src-width="2644" src-height="1112" align="center"/>

<b>答：</b>確認情況是否同股票同客户持倉在不同托管商上。

在「清算管理 ＞ 清算檢查 ＞ 檢查結果」頁面是否出現“同客户、同標的跨子倉”出現檢查失敗，因同客户及同股票在不同上手的托管商會有提醒報錯（見 5I 圖一）。

- 方法一：確認股票放在兩個不同上手的倉位，可點擊「工單詳情」手動通過，回到「清算管理&gt;日終任務」頁面繼續完成日終。如持倉保持在不同上手，日後的清算中檢查會一直有報錯提醒。 
- 方法二：可在「清算管理 &gt; 倉位管理 &gt; 倉位查詢」操作内部轉倉，把股票放到同一上手托管商倉位（見 5I 圖二）。之後回到日終任務，在清算中檢查點擊「重新執行」完成日終。

<img src="/assets/ROHFb11cQoAZAoxzl5XcJKlGnBh.png" src-width="2512" src-height="814" align="center"/>

<em>5I 圖一</em>

<img src="/assets/RnJKbjNkRoBsiExr54DcEjHnn6f.png" src-width="2454" src-height="1109" align="center"/>

<em>5I 圖二</em>

## 5J 問：持倉不對賬，倉位數量有差異，如何處理？


<b>答：</b>在「清算管理 &gt; 倉位管理 &gt; 倉位查詢」頁面搜索相應的客户，從需要轉出的倉位點擊「內部轉倉」（見 5J 圖一）。
轉出的數量需要等於 street + nominee + own，沒有數量的保持為 0（見 5J 圖二）。

> 持倉對帳對的是 T-1。如昨天（20/5）日終後的內部轉倉要明天（22/5）的持倉對帳才能反映出來

<img src="/assets/SNDKbtLQcoDcJaxkExJc0NoHn2d.png" src-width="2500" src-height="1136" align="center"/>

<em>5J 圖一</em>

<img src="/assets/Me8ObHY4Uo29xJxLnRNcBJYZn4b.png" src-width="1188" src-height="805" align="center"/>

<em>5J 圖二</em>

## 5K 問：颱風天操作如何處理？

<b>答：</b>一般 ccass 會發通知券商延後錢或貨


(i). 在「清算管理 &gt; 颱風天處理」頁面操作

<img src="/assets/GQgsbyPSZosFBixXyUyc3NzlnyH.png" src-width="2840" src-height="1410" align="center"/>

(ii). 選擇「市場」及 根據 CCASS 通知選擇「錢貨同時延後」或「錢延後」

<img src="/assets/DHsUbiwpbogybHxtfuXcA6eAnve.png" src-width="2756" src-height="1478" align="center"/>

## 5L 問：清算檢查的「IBOND 交易檢查」是否須作處理？

<b>答：</b>可以人手檢查通過提醒，關閉檢查的配置在「業務參數設置 ＞日終設置＞清算前準備＞IBOND 交易檢查」處理。

<img src="/assets/HnqFbzfbUoQYImxEUoZc078Jn3d.png" src-width="2858" src-height="1610" align="center"/>

<img src="/assets/VHQwbgUqaoYjbjxAVaycoesXnig.png" src-width="2314" src-height="1342" align="center"/>

## 5M 問：日終時數據同步出現「執行失敗！市埸表配置錯誤」如何處理？

<b>答：</b>報錯會提醒缺失那個市埸，
(i). 添加市埸：「業務參數設置&gt;市埸管理&gt;市埸規則」新增相關市場配置。（見 5M 圖一、圖二）

(ii). 添加幣種：「款項管理&gt;滙率&gt;參考滙率」的新增該市場的貨幣。（見 5M 圖三、圖四）

(iii). 日終設置加回市埸：「業務參數設置&gt;日終設置&gt;市埸交收」點擊「編輯」加上市埸。（見 5M 圖五、圖六）

<img src="/assets/NRfDbUGOpojqOZxhq3Kc9CRenHh.png" src-width="2852" src-height="1606" align="center"/>

<em>5M 圖一</em>

<img src="/assets/X6E8bVJ1noyVr7xwGK4ceWGnnIb.png" src-width="2448" src-height="1276" align="center"/>

<em>5M 圖二</em>

<img src="/assets/DXZsbLSnZoc2bbxgmKacWsfpn5c.png" src-width="2334" src-height="1078" align="center"/>

<em>5M 圖三</em>

<img src="/assets/HqWGbeiohoXUrixrzkmcJ6ganFc.png" src-width="1926" src-height="1298" align="center"/>

<em>5M 圖四</em>

<img src="/assets/IWvLb01NKoLqoPxsTxRcKinbnoc.png" src-width="2740" src-height="910" align="center"/>

<em>5M 圖五</em>

<img src="/assets/TqDXbjSHVogAWnxXukScAijEnwe.png" src-width="2476" src-height="866" align="center"/>

<em>5M 圖六</em>

