---
title: 頁面管理
slug: xxx
sidebar_position: 1
---


# 頁面管理

## 適用場景

適用於運營、投放人員直接無需開發進行 H5 頁面搭建

## 前置條件

購買了 OPA 系統，且申請相關菜單權限方可使用

## 操作說明

菜單入口：活動系統 &gt; 標準活動管理

本作業可以管理維護透過 PageHub 制作出來的頁面

<img src="/assets/QGuJbBjWJorHPNx24wmcASPbn6c.png" src-width="3354" src-height="1454" align="center"/>

### 基礎操作

在 Pagehub 查詢管理頁面列表，提供【鏈接複製】的功能操作，可以點選 Copy 圖示

<img src="/assets/ElZ9bbs4KoASAFxzfHbcuI82npb.png" src-width="3306" src-height="918" align="center"/>

在 PageHub 查詢管理頁面列表，提供【二維碼】的預覽功能操作

<img src="/assets/DTt2bvpfmoUMvNxHq2ccUPMdnVb.png" src-width="3286" src-height="1002" align="center"/>

紀錄右側操作區的可以操作： 【編輯】/【複製】/【刪除】

頁面列表字段/功能說明：

<table>
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr>
<td><p>列表字段</p></td><td><p>字段說明</p></td></tr>
<tr>
<td><p>序號</p></td><td><p>頁面序號</p></td></tr>
<tr>
<td><p>標題</p></td><td><p>頁面標題，當配置好自定義頁面後點擊打開頭部標題欄展示的名字</p></td></tr>
<tr>
<td><p>發佈狀態</p></td><td><ul>
<li>未發佈：該狀態下頁面為草稿狀態，需要點擊發佈才會生效</li>
<li>已發佈：頁面點擊發佈按鈕並發佈成功後則為該狀態，該狀態頁面直接生效</li>
<li>發佈失敗：當前頁面點擊發佈按鈕但是由於種種原因失敗</li>
</ul></td></tr>
<tr>
<td><p>頁面地址</p></td><td><p>展示鏈接以及二維碼兩種鏈接形態，可複製當前鏈接直接打開預覽，也可掃描二維碼</p></td></tr>
<tr>
<td><p>創建人</p></td><td><p>創建該頁面的操作人名稱</p></td></tr>
<tr>
<td><p>最後發佈時間</p></td><td><p>最新一次發佈更新的時間</p></td></tr>
<tr>
<td><p>操作</p></td><td><ul>
<li>編輯：點擊打開編輯當前頁面</li>
<li>複製：點擊複製當前頁面內容創建並打開新頁面</li>
<li>刪除：刪除當前頁面（謹慎使用）</li>
</ul></td></tr>
</tbody>
</table>

### 頁面搭建

點擊右上角【新建頁面】後打開如下頁面，佈局如圖：

<img src="/assets/Zh1IbgDnNoTWGvxPVvHcHKMmnkd.png" src-width="1921" src-height="989" align="center"/>

**組件管理/組件庫：**

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/UPgQbHr6ooNDh6xqDH0cTKlMnDb.png" src-width="664" src-height="754" align="center"/>

<p>展示當前頁面中已經配置的組件列表，點擊對應組件名稱可進行編輯配置</p>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/F4HkbavmTold0hx5eAzcBJIwng4.png" src-width="690" src-height="1268" align="center"/>

<p>所有可配置的組件類型，點擊/拖拽對應組件類型會自動添加至預覽去頁面中</p>
</div>
</div>

**預覽區操作功能說明：**

<img src="/assets/YphHbwclvoWZlAx1VHjc8W2Nnye.png" src-width="2406" src-height="1832" align="center"/>

**多語言切換功能說明：**

<img src="/assets/NFkubXQRMoAilOxCz5ScozPPnHd.png" src-width="800" src-height="356"/>

**配置區域功能說明：**

<img src="/assets/TkVAbY38uoyCQRxoVB6cXwVEnhb.png" src-width="696" src-height="632"/>

- 頁面配置-當前頁面主要參數配置

1. 多語言設置

可配置當前頁面需要支持的語种與頁面標題

1. 適用區域設置

可配置能打開當前頁面的 IP 區域有哪些。分為不限制、僅支持區域、不支持區域三種類型可選。

不限制：則表示任何地區 IP 均可訪問該頁面

僅支持區域：僅限制所配置的地區 IP 可訪問該頁面

不支持區域：僅限制所配置的地區 IP 不可訪問該頁面

1. 活動配置

可配置當前頁面是否需要登錄後才可訪問

不需要登錄：則用戶不需要登錄賬號即可訪問頁面

通用登錄頁：則用戶需要在通用登錄頁面中進行登錄後才可訪問頁面

1. UI 配置

頁面的背景顏色配置

1. 鏈接參數配置

鏈接渠道號配置，若為了統計數據需要區分渠道來源的話可以配置專屬渠道號。否則可以不填。

1. 分享配置

頁面分享功能的配置

- 鏈接分享模式：即點擊分享時直接複製鏈接或者當前鏈接形式直接分享

可配置分享鏈接時自帶的分享標題以及分享描述。

分享鏈接可單獨配置，不配置則默認分享當前頁面的鏈接，若配置後則分享時將分享配置之後的頁面鏈接。

分享縮略圖即當分享鏈接至微信或者其他需要縮略圖展示的平台時，可展示當前配置的縮略圖

- 面對面分享模式：即點擊分享時直接彈出自帶二維碼的圖片，可截圖分享或者當面掃碼打開對應頁面

二維碼彈窗背景圖片配置

### 組件說明

更多組件相關信息，詳見《組件說明》

[組件說明](./D3MZwurWOiWBsHkeLhVc8tR1nbf) 

