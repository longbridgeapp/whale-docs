---
title: 10. 新股認購問題
slug: JLIUwnaXviuhGKk7rzPcXB8XnWg
sidebar_position: 9
---


# 10. 新股認購問題

## 10A. 問：為什麼申購新股要分不同渠道？

<b>答：</b>分不同渠道更容易進行 IPO 認購訂單的融資管理及統計，例如，分別設置如下渠道：
1. 自有資金渠道
2. A 上手融資渠道
3. B 上手融資渠道

在訂單的匯總中，通過不同渠道匯總認購金額，融資使用情況，便於系統自動化統計不同渠道的訂單、融資情況。

<img src="/assets/QG00bYmqeoEL90x66C5cx0c3nWb.png" src-width="3612" src-height="592" align="center"/>

## 10B. 問：是否支持階梯式認購收費？

<b>答：</b>現在不支持按照不同的認購股數進行階梯收費。

## 10C. 問：對接了 FINI 平台的 API，如何操作中籤？

<b>答：</b>若券商對接了 FINI 使用 API 做自動化 IPO，直接在中籤時，選擇：自動獲取 FINI 中籤結果<b>，</b>再點擊下一步則可以預覽中籤結果，無需上傳文件。

## 10D. 問：能否支持到國際配售？

<b>答：</b>新股的國際配售可以在後台操作，但不支持上市公司的配售。

在「新股認購 &gt; 港股國配」頁面配置流程、扣款、中籤跟新股 IPO 一致（見 10D 圖一、圖二）。
上手的中籤文件需要用通用模版導入系統（見 10D 圖三）。但是如果過了認購的時間就要用到手工調賬處理。

<img src="/assets/N0uYbOezFo61ZVx78UPc2wzin2b.png" src-width="2506" src-height="854" align="center"/>

<em>10D 圖一</em>

<img src="/assets/VLP2bUK8ooUSJvxC5VZcGGvpnwg.png" src-width="2498" src-height="928" align="center"/>

<em>10D 圖二</em>

<img src="/assets/Afl9b7VsnobzEjxIPt7cDGwMnib.png" src-width="2508" src-height="1428" align="center"/>

<em>10D 圖三</em>

## 10E. 問：扣款訂單中選擇的財務日期，會有如何影響？

<b>答：</b>這裡的財務日期指這個扣款發生的行為記錄。例如：5 月 10 日賬户 A 扣了 100，財務日期選了 5 月 11 日，結單會在 5 月 11 日顯示扣款。

<img src="/assets/P1V7bp5AlopBimxOnakcsM8zn3e.png" src-width="2680" src-height="902" align="center"/>

## 10F. 問：新股上市後撤回，重新招股的如何作認購設置？

<b>答：</b>在「新股認購 &gt; 全部」搜索重新招股的新股代號（見 10F 圖一）點擊「詳情」，重新設置認購開始＆結束時間、費率、渠道等資料，選回「是」可認購。（見 10F 圖二）

<img src="/assets/J8NWb5c5GoULAdxs9WFcim2HnPc.png" src-width="2554" src-height="662" align="center"/>

<em>10F 圖一</em>

<img src="/assets/V8klbbqj7oMVKQxtutac62Uqnqb.png" src-width="2528" src-height="1552" align="center"/>

<em>10F 圖二</em>

## 10G. 問：為什麼找不到債券 #4701 作新股認購 ?

<b>答：</b>這個債券標的是有的，但是不支援認購，因不是指定證券經紀，所以新股認購沒顯示。

## 10H. 問：API 接了 FINI，如何取消新股認購訂單？

<b>答：</b>在「新股認購 &gt; 認購記錄」頁面可以操作撤單（見 10H 圖一）。如訂單狀態去到 "已扣款" 就不能作撤單或拒單，需要強制撤單要登錄到 FINI 平台處理，但已過截止時間，FINI 也不能作撤單了。

<img src="/assets/B0DsbzhdooDmtrx8IkgcliJcnJg.png" src-width="2716" src-height="902" align="center"/>

<em>10H 圖一</em>

## 10I. 問：IPO 扣款訂單的賬務日期會否影響計息？

<b>答：</b>IPO 扣款訂單的賬務日期用以記錄扣款發生，跟計息天數沒有關係。選了相關財務日會在結單上顯示扣款記錄。

<img src="/assets/JuPUbtOT3o8hUxxsiJRch6aGngc.png" src-width="2680" src-height="902" align="center"/>

## 10J 問：客戶戶口結餘為 0，為什麼申請 0 成本認購新股失敗？

<b>答：</b>0 成本認購新股時有手續費要扣除，戶口結餘不能是 0。客戶要存入足夠手續費的資金或將 0 成本認購的手續費設為 0 才可以申請。

## 10K 問：交易額度能否用作新股認購？

答：交易額度不能用作現金或融資新股認購，新股認購需要有足夠資金。

