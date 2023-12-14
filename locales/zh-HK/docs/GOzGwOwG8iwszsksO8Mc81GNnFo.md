---
title: 用戶分群
slug: xxx
sidebar_position: 2
---


# 用戶分群

## 適用場景

介绍本文檔的應用場景，可以給哪類群體提供什麼操作，解決什麼訴求

## 前置條件

xxxxx

## 使用说明

#### 怎樣創建用戶分羣？

投放系統支持通過 2 種方式創建用戶分羣，分別是規則創建和導入創建，您可以根據自己的需求選擇

<img src="/assets/OR5abkZr7ozOK6xvdPcceJBonYd.png" src-width="582" src-height="366"/>

#### 規則創建用戶分羣

基於用戶屬性和用戶行爲，設置規則創建分羣，您可以根據自己的需求選擇：

1. 僅使用用戶屬性，2。僅使用用戶行爲，3。同時使用用戶屬性和用戶行爲

**結果更新說明：**已經創建並保存成功的分羣，在每次被請求時，均會使用分羣規則去重新計算，從而獲取最新的數據結果

<img src="/assets/OK9tb2ay4ox1sVxhgy2cPMHmnIe.png" src-width="3068" src-height="1704" align="center"/>

#### 導入創建用戶分羣

通過導入指定 id 的名單來創建分羣，系統會將導入的 id 進行匹配，匹配成功的 id 則保存到分羣的結果中，導入 id 需爲用戶的唯一標識：member_id

<div class="grid gap-3 grid-cols-2">
<div>
<img src="/assets/A1xAb3WjPoDb7PxeOm3cYnFdnXb.png" src-width="1542" src-height="1546"/>
</div>
<div>
<img src="/assets/KJjjbSKjPoMPcoxkE9xc2hoonsc.png" src-width="1536" src-height="1684" align="center"/>
</div>
</div>

#### 管理用戶分羣

可以在用戶分羣列表中觀察到已創建的全部分羣信息，並進行編輯、下載、刪除等管理操作。

用戶分羣列表支持以下查詢：

- 支持根據分羣的名稱、創建方式、創建人、更新時間進行篩選

用戶分羣列表支持以下操作：

- 分羣詳情查看：查看分羣的具體配置規則
- 分羣編輯：編輯分羣的條件，名稱等信息
- 分羣下載：下載分羣結果中所包含的 member_id 的列表文件
- 分羣刪除：刪除分羣數據

